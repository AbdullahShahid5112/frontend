export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "Nerea helped me through one of the most difficult periods of my life. Her compassionate approach and professional expertise made all the difference in my recovery.",
      treatment: "Anxiety & Depression Treatment"
    },
    {
      name: "Michael R.",
      text: "The corporate workshop Nerea conducted for our team was transformative. Our workplace communication and overall well-being improved significantly.",
      treatment: "Corporate Workshop"
    },
    {
      name: "Emma L.",
      text: "As a parent, I was worried about my teenager's behavior. Nerea's guidance helped our entire family develop better communication and understanding.",
      treatment: "Family Therapy"
    }
  ]

  return (
    <section className="py-20 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-700 mb-6">What My Clients Say</h2>
          <p className="text-xl text-stone-600">
            Real experiences from people who have found healing and growth through our work together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="mb-6">
                <svg className="w-8 h-8 text-rose-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <p className="text-stone-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-medium text-stone-700">{testimonial.name}</div>
                <div className="text-sm text-stone-500">{testimonial.treatment}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-green-200 hover:bg-green-300 text-stone-700 px-8 py-3 rounded-xl transition-colors duration-300">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}