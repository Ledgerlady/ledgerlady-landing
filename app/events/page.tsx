import Events from '@/components/landing/Events'
import Footer from '@/components/landing/Footer'
import MarketingSection from '@/components/landing/MarketingSection'
import Navbar from '@/components/landing/Navbar'
import Testimonials from '@/components/landing/Testimonials'
import React from 'react'

const EventsPage = () => {
  return (
    <section>
        <Navbar />
        <Events />
        <Testimonials />
        <MarketingSection />
        <Footer />
    </section>
  )
}

export default EventsPage
