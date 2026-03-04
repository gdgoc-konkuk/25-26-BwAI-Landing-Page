import { useEffect, useState } from 'react'
import { Sparkles, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`site-nav ${scrolled ? 'site-nav-scrolled' : 'site-nav-top'}`}
    >
      <div className="site-shell site-nav-inner">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="site-brand"
        >
          <Sparkles className="size-[18px] text-brand" />
          <span>Build with AI</span>
          <span className="site-brand-badge">
            GDG on Campus Konkuk
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <button type="button" className="btn-primary btn-primary-accent nav-cta">
            참가 신청하기 <ChevronRight className="size-4" />
          </button>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar
