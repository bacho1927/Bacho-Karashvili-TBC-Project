import Courses from "./components/Courses"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Slider from "./components/Slider"

function App() {
  return (
    <div className="min-w-[700px]">
      <Navbar />
      <Main />
      <Courses />
      <Slider />

    </div>
  )
}

export default App
