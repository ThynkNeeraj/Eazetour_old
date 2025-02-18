import Landing from '../components/Landing'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'India Best Tour Packages for USA Travelers - Eaze Tours',
  description: 'Explore incredible India with our trips to India packages. Eaze Tours offers the best India tours packages tailored for an unforgettable journey.',
};
export default function Home() {
  return (
      <Landing />
  )
}
