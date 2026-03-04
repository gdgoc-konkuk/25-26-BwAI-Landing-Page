import { motion } from 'framer-motion'

const eventSchedule = [
  {
    start: '18:00',
    end: '18:30',
    content: '웰컴 체크인 & 행사 소개<br/>Gemini Credit 등록 + 환경 세팅',
  },
  {
    start: '18:30',
    end: '18:45',
    content: 'Gemini 3 웹앱 스피드 투어<br/>Canvas로 순식간에 웹페이지 만들어보기',
  },
  {
    start: '18:45',
    end: '19:30',
    content: '테크톡: 생각보다 단순한 AI의 실체 & 이제는 AI 활용이 필수인 이유',
  },
  {
    start: '19:30',
    end: '20:30',
    content: '핸즈온: Antigravity로 바이브코딩 해보기 & 사용팁 제공',
  },
]

const EventScheduleSection = () => {
  return (
    <section
      id="schedule"
      className="fullpage-section section-block schedule-section"
      aria-labelledby="event-schedule-heading"
    >
      <div className="site-shell flex w-full flex-col justify-center">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            id="event-schedule-heading"
            className="schedule-title"
          >
            Agenda
          </h2>

          <div className="schedule-board" role="list">
            {eventSchedule.map((session) => (
              <div
                key={`${session.start}-${session.end}-${session.content}`}
                className="schedule-row"
                role="listitem"
              >
                <p className="schedule-time">
                  {session.start} - {session.end}
                </p>
                <p className="schedule-content">
                  {session.content.replace(/<br\s*\/?>/gi, '\n')}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EventScheduleSection
