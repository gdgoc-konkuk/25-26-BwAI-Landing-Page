import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      id="about"
      className="fullpage-section hero-section flex items-center"
      aria-labelledby="hero-heading"
    >
      <div className="site-shell fullpage-pane items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="hero-heading-wrap"
        >
          <div className="mb-8 flex items-center justify-center gap-2 sm:mb-10">
            <span className="text-base font-medium text-ink sm:text-lg">
              GDG on Campus Konkuk 주관
            </span>
          </div>

          <h1
            id="hero-heading"
            className="hero-gradient-text hero-title"
          >
            Build with AI 2026
          </h1>
          <p className="hero-meta">
            2026년 4월 7일 저녁 6시, 건국대학교
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="hero-media flex justify-center"
        >
          <picture className="block w-full">
            <source
              media="(max-width: 767px)"
              srcSet="/BWAI26-Web-Header-640x500-Editable.jpg"
            />
            <source
              media="(max-width: 1599px)"
              srcSet="/BWAI26-Web-Header-1440x500-Editable.jpg"
            />
            <img
              src="/BWAI26-Web-Header-2650x500-Editable.jpg"
              alt="Build with AI 2026 Web Header"
              width={2650}
              height={500}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="hero-image"
            />
          </picture>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
