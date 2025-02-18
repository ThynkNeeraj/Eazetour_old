import PackagesList from "../../../components/Packages";
import PackageDetail from '../../../components/PackageDetail';
import { notFound } from 'next/navigation';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Holiday Tour Packages in India - Eaze Tours',
  description: 'Explore luxury holiday packages in India with Eaze Tours. From India tour packages from Delhi to the best tours to India from the USA, plan your trip today!',
};

type Params = {
  params: Promise<{
    slug: string[];
  }>;
};


export default async function Packages (props: Params) {
  const param = await props.params;
  const slug = param.slug;
  if(!slug) {
    return (
      <div>
          <div className="mt-16">
            <PackagesList />
          </div>
      </div>
    )
  }
  else if(slug.length == 1) {
    const packageId = parseInt(slug[0])
    if(packageId < 36 && packageId > 0 && !isNaN(packageId)) {
      return (
        <div>
          <div className="mt-16">
            <PackageDetail packageId={packageId} />
          </div>
        </div>
      )
    }
  }
  return (
    notFound()
  )
}
