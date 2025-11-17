import { Globe, Shield, Rocket, Wrench } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'High-performance websites with SEO, analytics, and CMS integration.'
  },
  {
    icon: Shield,
    title: 'Managed Hosting',
    desc: 'Secure, scalable hosting with daily backups and 99.9% uptime.'
  },
  {
    icon: Rocket,
    title: 'Performance & SEO',
    desc: 'Speed optimization, Core Web Vitals, and on-page SEO best practices.'
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    desc: 'Monthly updates, security patches, monitoring, and priority support.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">What We Do</h2>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">Practical, business-first solutions delivered by a Kathmandu-based team.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow bg-slate-50">
              <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
