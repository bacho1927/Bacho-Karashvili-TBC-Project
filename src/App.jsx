import Courses from "./components/Courses"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="min-w-[700px]">
      <Navbar />
      <Main />
      <Courses />
    </div>
  )
}

export default App
