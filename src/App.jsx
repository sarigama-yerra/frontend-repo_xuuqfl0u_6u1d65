import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Plans from './components/Plans'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Plans />
      <Contact />
      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Flames Digital IT — Kathmandu, Nepal. All rights reserved.
      </footer>
    </div>
  )
}

export default App
