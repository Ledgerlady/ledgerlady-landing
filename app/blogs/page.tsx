import Blogs from '@/components/landing/Blogs'
import Footer from '@/components/landing/Footer'
import MarketingSection from '@/components/landing/MarketingSection'
import Navbar from '@/components/landing/Navbar'
import React from 'react'

const BlogsPage = () => {
  return (
    <section>
        <Navbar />
        <Blogs />
        <MarketingSection />
        <Footer />
    </section>
  )
}

export default BlogsPage
