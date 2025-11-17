import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">Kathmandu, Nepal</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Digital IT Solutions for Modern Businesses
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            We craft fast, secure websites and reliable hosting tailored for startups, SMEs and NGOs in Nepal. From idea to launch — all in one place.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#plans" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              View Plans
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors">
              Get a Free Quote
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-blue-200 to-indigo-200 blur-3xl opacity-50 rounded-full" />
          <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop" alt="IT Solutions" className="relative rounded-xl shadow-xl border border-slate-200" />
        </div>
      </div>
    </section>
  )
}
