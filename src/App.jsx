import Courses from "./components/Courses"
import FaqAccordion from "./components/FaqAccordion"
import Footer from "./components/Footer"
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
      <Footer />
    </div>
  )
}

export default App
