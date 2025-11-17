const plans = [
  {
    name: 'Starter',
    price: 'NPR 9,999',
    tagline: 'Perfect for personal sites & portfolios',
    features: [
      'Up to 5 pages',
      'Mobile responsive design',
      'Basic SEO setup',
      '1 business email',
      'Shared hosting (1 year)'
    ]
  },
  {
    name: 'Business',
    price: 'NPR 24,999',
    tagline: 'Best for SMEs and NGOs',
    features: [
      'Up to 12 pages + blog',
      'Advanced SEO & analytics',
      'SSL + daily backups',
      '3 business emails',
      'Managed hosting (1 year)'
    ],
    highlighted: true
  },
  {
    name: 'Scale',
    price: 'NPR 59,999+',
    tagline: 'For growing brands and e‑commerce',
    features: [
      'Custom features & integrations',
      'Performance optimization',
      'Priority support',
      'Auto-scaling hosting',
      'Staging & CI/CD'
    ]
  }
]

export default function Plans() {
  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Simple, Transparent Pricing</h2>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">Pick a plan that fits your goals. All plans include hosting setup, core SEO, and launch support.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`p-6 rounded-xl border ${plan.highlighted ? 'border-blue-600 bg-white shadow-xl' : 'border-slate-200 bg-white'} relative`}>
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">Most Popular</span>
              )}
              <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              <p className="mt-1 text-slate-600">{plan.tagline}</p>
              <p className="mt-4 text-3xl font-extrabold text-slate-900">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center px-4 py-2 rounded-md ${plan.highlighted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-900 text-white hover:bg-slate-800'} transition-colors`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
