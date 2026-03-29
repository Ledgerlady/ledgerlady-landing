import About from '@/components/landing/About'
import Ecosystems from '@/components/landing/Ecosystems'
import Footer from '@/components/landing/Footer'
import MarketingSection from '@/components/landing/MarketingSection'
import Navbar from '@/components/landing/Navbar'
import Team from '@/components/landing/Team'
import Testimonials from '@/components/landing/Testimonials'
import React from 'react'

const AboutPage = () => {
  return (
    <section>
        <Navbar />
        <About />
        <Ecosystems />
        <Team />
        <Testimonials />
        <MarketingSection />
        <Footer />
    </section>
  )
}

export default AboutPage
