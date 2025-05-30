export default function FeaturedServices() {
  const services = [
    {
      title: "Online Therapy",
      description: "Professional psychological support from the comfort of your home. Convenient, confidential, and effective treatment for various mental health concerns.",
      color: "bg-rose-100",
      hoverColor: "hover:bg-rose-200",
      buttonColor: "bg-rose-200 hover:bg-rose-300"
    },
    {
      title: "Corporate Workshops",
      description: "Enhance workplace well-being with customized workshops focused on stress management, team building, and mental health awareness.",
      color: "bg-green-100",
      hoverColor: "hover:bg-green-200",
      buttonColor: "bg-green-200 hover:bg-green-300"
    },
    {
      title: "Business Psychology",
      description: "Optimize organizational performance through psychological insights, employee well-being programs, and culture development strategies.",
      color: "bg-amber-100",
      hoverColor: "hover:bg-amber-200",
      buttonColor: "bg-amber-200 hover:bg-amber-300"
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-700 mb-6">Featured Services</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Comprehensive psychological services designed to meet your individual and organizational needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`${service.color} ${service.hoverColor} p-8 rounded-2xl transition-colors duration-300`}>
              <div className="bg-stone-200 rounded-xl h-48 flex items-center justify-center mb-6">
                <span className="text-stone-500">{service.title} Image</span>
              </div>
              <h3 className="text-2xl font-medium text-stone-700 mb-4">{service.title}</h3>
              <p className="text-stone-600 mb-6 leading-relaxed">{service.description}</p>
              <button className={`${service.buttonColor} text-stone-700 px-6 py-3 rounded-xl transition-colors duration-300 w-full`}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
