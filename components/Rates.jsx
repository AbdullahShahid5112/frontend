export default function Rates() {
  const packages = [
    {
      name: "Individual Session",
      price: "$120",
      duration: "50 minutes",
      features: [
        "One-on-one therapy session",
        "Personalized treatment plan",
        "Progress tracking",
        "Email support between sessions"
      ],
      popular: false
    },
    {
      name: "Therapy Package",
      price: "$450",
      duration: "4 sessions",
      features: [
        "Four 50-minute sessions",
        "Comprehensive assessment",
        "Customized treatment approach",
        "Priority scheduling",
        "Unlimited email support"
      ],
      popular: true
    },
    {
      name: "Corporate Workshop",
      price: "Custom",
      duration: "Half/Full day",
      features: [
        "Tailored workshop content",
        "Up to 50 participants",
        "Materials and resources included",
        "Follow-up consultation",
        "Certificate of completion"
      ],
      popular: false
    }
  ]

  return (
    <section id="rates" className="py-20 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-700 mb-6">Rates & Packages</h2>
          <p className="text-xl text-stone-600">
            Transparent pricing for quality psychological services. Investment in your mental health and well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 shadow-sm relative ${pkg.popular ? 'ring-2 ring-rose-200' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-rose-300 text-stone-700 px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium text-stone-700 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-light text-stone-700 mb-2">{pkg.price}</div>
                <div className="text-stone-500">{pkg.duration}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-stone-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-xl transition-colors duration-300 ${
                pkg.popular 
                  ? 'bg-rose-300 hover:bg-rose-400 text-stone-700' 
                  : 'bg-stone-200 hover:bg-stone-300 text-stone-700'
              }`}>
                {pkg.price === 'Custom' ? 'Request Quote' : 'Book Now'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-stone-600 mb-6">
            All sessions include a personalized approach tailored to your specific needs. 
            Insurance coverage and sliding scale options available.
          </p>
          <button className="bg-green-200 hover:bg-green-300 text-stone-700 px-8 py-3 rounded-xl transition-colors duration-300">
            Discuss Your Needs
          </button>
        </div>
      </div>
    </section>
  )
}