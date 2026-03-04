import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BuildWithAISection from './components/BuildWithAISection'
import EventScheduleSection from './components/EventScheduleSection'

function App() {
  return (
    <div className="page-root">
      <Navbar />
      <Hero />
      <BuildWithAISection />
      <EventScheduleSection />
    </div>
  )
}

export default App
