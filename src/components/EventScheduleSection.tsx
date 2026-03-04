import { motion } from 'framer-motion'

const eventSchedule = [
  { start: '18:00', end: '18:30', content: '내용 1' },
  { start: '18:00', end: '18:45', content: '내용 2' },
  { start: '18:45', end: '19:30', content: '내용 3' },
  { start: '19:30', end: '20:30', content: '내용 4' },
]

const EventScheduleSection = () => {
  return (
    <section
      id="schedule"
      className="fullpage-section section-block schedule-section"
      aria-labelledby="event-schedule-heading"
    >
      <div className="site-shell">
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
                <p className="schedule-content">{session.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EventScheduleSection
