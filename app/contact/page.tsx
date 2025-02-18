import { Metadata } from 'next';

import ContactUs from '../../components/ContactUs';

export const metadata: Metadata = {
  title: 'Contact Eaze Tours for Your Travel Inquiries',
  description: 'Get in touch with Eaze Tours for personalized travel assistance. Our team is ready to help with bookings, inquiries, and more for your next trip. Call Now!',
};

export default function Contact() {
    return (<ContactUs />)
  }
