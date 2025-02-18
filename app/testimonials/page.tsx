import Image from 'next/image'
import backgroundImage from '../../public/images/gallery/5.jpg'
import testimonialData from '../../data/testimonials.json'
import Testimonial from "../../components/Testimonial";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Testimonials - Eaze Tours: Best Travel Agency India',
  description: 'Read authentic reviews from satisfied travelers who shared their memorable experiences with Eaze Tours, highlighting quality service and unforgettable trips.',
};
export default function Testimonials() {
    const testimonials = testimonialData
    return (
      <div>
          <div className="hero min-h-screen">
                <Image 
                    className="z-0"
                    src={backgroundImage}
                    fill
                    style={{
                        objectFit: "cover",
                        objectPosition: "66% 50%",
                    }}
                    alt="BackgroundImage"
                    >
                </Image>
                <div className="hero-content absolute left-0">
                    <div className="text-left text-5xl mt-40 text-secondary">
                        <div className='backdrop-opacity-25 backdrop-blur-sm bg-white/30 p-4 rounded-full'>
                            <h1 className="mr-10">We let our customers<br/>talk for us.</h1>
                        </div>
                        
                    </div>
                </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-1 place-items-center">
                {testimonials.map(testimonial => (
                    <div key={testimonial.Id}>
                        <Testimonial testimonial={testimonial}></Testimonial>
                    </div>
                ))}
            </div>
      </div>
    )
  }
