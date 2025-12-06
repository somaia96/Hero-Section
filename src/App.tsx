import HeroSection from "./component/HeroSection"

const App = () => {
  return <div className="transition-all px-6 space-y-20 py-12 lg:px-16 lg:py-20 h-screen">
    <HeroSection />
    <div id="scroll" className="h-screen bg-blue-50 text-xl lg:text-4xl flex justify-center items-center text-light-blue-800 font-semibold">
      A Smooth Scroll
    </div>
  </div>

}

export default App