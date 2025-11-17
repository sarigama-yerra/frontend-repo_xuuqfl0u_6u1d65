import { useState } from 'react'
import { Menu, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center font-bold">FB</div>
            <span className="font-extrabold text-slate-800 text-lg">Flames Digital IT</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#plans" className="hover:text-blue-600 transition-colors">Plans</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+9779800000000" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <Phone size={18} /> +977 980-0000000
            </a>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            <a href="#services" className="block py-2">Services</a>
            <a href="#plans" className="block py-2">Plans</a>
            <a href="#contact" className="block py-2">Contact</a>
            <a href="mailto:hello@flamesdigital.com.np" className="block py-2 flex items-center gap-2 text-blue-600"><Mail size={18}/> hello@flamesdigital.com.np</a>
          </div>
        </div>
      )}
    </header>
  )
}
