import { motion } from 'framer-motion'

const eventSchedule = [
  { start: '18:00', end: '18:30', content: '행사 소개 및 Gemini Credit 등록' },
  { start: '18:00', end: '18:45', content: 'Gemini 3 웹앱 소개, Canvas 기능 소개' },
  { start: '18:45', end: '19:30', content: '테크톡 - 가벼운 AI 지식과 바이브 코딩 이야기' },
  { start: '19:30', end: '20:30', content: '핸즈온 - Antigravity 사용 방법과 바이브코딩 해보기 - 누구나 할 수 있는 웹개발' },
]

const EventScheduleSection = () => {
  return (
    <section
      id="schedule"
      className="fullpage-section section-block schedule-section"
      aria-labelledby="event-schedule-heading"
    >
      <div className="site-shell-wide flex w-full flex-col justify-center">
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
