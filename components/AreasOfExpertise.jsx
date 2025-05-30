export default function AreasOfExpertise() {
  const areas = [
    {
      title: "Anxiety & Stress Management",
      description: "Effective techniques for managing anxiety, panic disorders, and stress-related conditions."
    },
    {
      title: "Depression & Mood Disorders",
      description: "Comprehensive treatment for depression, bipolar disorder, and other mood-related challenges."
    },
    {
      title: "Relationship Counseling",
      description: "Support for couples and families to improve communication and strengthen relationships."
    },
    {
      title: "Trauma & PTSD",
      description: "Specialized care for trauma survivors using evidence-based therapeutic approaches."
    },
    {
      title: "Child & Adolescent Psychology",
      description: "Specialized support for children and teenagers facing developmental and behavioral challenges."
    },
    {
      title: "Neuropsychological Assessment",
      description: "Comprehensive cognitive evaluations and rehabilitation programs for neurological conditions."
    }
  ]

  return (
    <section id="expertise" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-700 mb-6">Areas of Expertise</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            I provide specialized care across a wide range of psychological conditions and life challenges, 
            using evidence-based approaches tailored to your unique needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {areas.map((area, index) => (
            <div key={index} className="bg-stone-50 p-8 rounded-2xl hover:bg-stone-100 transition-colors duration-300">
              <h3 className="text-xl font-medium text-stone-700 mb-4">{area.title}</h3>
              <p className="text-stone-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-stone-200 rounded-3xl h-64 flex items-center justify-center mb-8">
            <span className="text-stone-500">Areas of Expertise Image</span>
          </div>
          <div className="space-x-4">
            <button className="bg-green-200 hover:bg-green-300 text-stone-700 px-8 py-3 rounded-xl transition-colors duration-300">
              View All Services
            </button>
            <button className="bg-rose-200 hover:bg-rose-300 text-stone-700 px-8 py-3 rounded-xl transition-colors duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}