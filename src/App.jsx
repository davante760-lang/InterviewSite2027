import { useEffect } from 'react'
import StickyNav from './components/StickyNav'
import Hero from './components/Hero'
import NumbersBar from './components/NumbersBar'
import QuarterlyAttainment from './components/QuarterlyAttainment'
import WorkHistory from './components/WorkHistory'
import WhatImBuiltFor from './components/WhatImBuiltFor'
import WhyLimble from './components/WhyLimble'
import HowIWork from './components/HowIWork'
import MarqueeDeals from './components/MarqueeDeals'
import WhatYoullGet from './components/WhatYoullGet'
import AboutDave from './components/AboutDave'
import ResumeDownload from './components/ResumeDownload'
import Footer from './components/Footer'
import OdomStory from './components/OdomStory'
import { SectionDivider } from './components/AnimatedSection'

export default function App() {
  useEffect(() => {
    const section = document.getElementById(window.location.hash.slice(1))
    if (section) {
      window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - 96 })
    }
  }, [])

  if (/^\/deals\/odom(?:\/|\/index\.html)?$/.test(window.location.pathname)) {
    return <OdomStory />
  }

  return (
    <>
      <StickyNav />
      <Hero />
      <NumbersBar />
      <QuarterlyAttainment />
      <SectionDivider />
      <WorkHistory />
      <WhatImBuiltFor />
      <WhyLimble />
      <HowIWork />
      <MarqueeDeals />
      <WhatYoullGet />
      <AboutDave />
      <ResumeDownload />
      <Footer />
    </>
  )
}
