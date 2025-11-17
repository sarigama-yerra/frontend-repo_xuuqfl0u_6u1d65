import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Let’s talk about your project</h2>
            <p className="mt-2 text-slate-600">Tell us what you’re building and we’ll reply within one business day.</p>
            <div className="mt-6 space-y-3">
              <p className="flex items-center gap-3 text-slate-700"><Phone size={18}/> +977 980-0000000</p>
              <p className="flex items-center gap-3 text-slate-700"><Mail size={18}/> hello@flamesdigital.com.np</p>
              <p className="flex items-center gap-3 text-slate-700"><MapPin size={18}/> Kathmandu, Nepal</p>
            </div>
          </div>

          <form className="p-6 rounded-xl border border-slate-200 bg-slate-50 grid grid-cols-1 gap-4">
            <input className="px-4 py-3 rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Full name" />
            <input className="px-4 py-3 rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email" />
            <input className="px-4 py-3 rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Phone" />
            <textarea rows="4" className="px-4 py-3 rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Tell us about your project"></textarea>
            <button type="button" className="px-4 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">Send Message</button>
            <p className="text-xs text-slate-500">Submitting sends an email to our team. We’ll never share your details.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
