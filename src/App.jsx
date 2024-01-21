import Courses from "./components/Courses"
import FaqAccordion from "./components/FaqAccordion"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import PartnerSlider from "./components/ParnetSlider"

function App() {
  return (
    <div className="min-w-[700px]">
      <Navbar />
      <Main />
      <Courses />
      <PartnerSlider />
      <FaqAccordion />
    </div>
  )
}

export default App
