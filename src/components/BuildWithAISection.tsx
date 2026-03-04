import { motion } from 'framer-motion'

const BuildWithAISection = () => {
  return (
    <section
      id="sessions"
      className="fullpage-section section-block"
      aria-labelledby="ag-build-with-ai-heading"
    >
      <div className="site-shell-wide flex w-full flex-col justify-center">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            id="ag-build-with-ai-heading"
            className="copy-headline break-keep text-left"
          >
            <b>Build with AI 2026</b>은
            <br />
            구글 개발자 그룹(GDG)이 주도하여
            <br />
            세계적으로 개최하는 AI 행사 시리즈입니다.
          </h2>
          <p className="copy-body break-keep text-left">
            GDG on Campus Konkuk은
            <br />
            GDG의 캠퍼스 버전 커뮤니티로서
            <br />
            누구나 쉽게 바이브코딩을 할 수 있도록 도와주려고 합니다.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default BuildWithAISection
