import { motion } from 'framer-motion'

const BuildWithAISection = () => {
  return (
    <section
      id="sessions"
      className="fullpage-section section-block"
      aria-labelledby="ag-build-with-ai-heading"
    >
      <div className="site-shell flex w-full flex-col justify-center">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            id="ag-build-with-ai-heading"
            className="copy-headline break-keep text-left font-normal"
          >
            <strong className="font-bold">Build with AI 2026</strong>은
            <br />
            구글 개발자 그룹(GDG)이 주도하여
            <br />
            세계적으로 개최하는 AI 행사 시리즈입니다.
          </h2>
          <p className="copy-body break-keep text-left">
            GDG on Campus Konkuk은 GDG의 캠퍼스 버전 커뮤니티로서
            <br />
            개발 전공 여부와 관계없이 누구나 AI를 이용하여 프로그래밍 하는법을 소개하는 데 초점을 맞추고 있습니다.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default BuildWithAISection
