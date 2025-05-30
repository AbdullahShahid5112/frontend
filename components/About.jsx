export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-stone-200 rounded-3xl h-96 flex items-center justify-center">
            <span className="text-stone-500">Nerea in Professional Environment</span>
          </div>
          <div>
            <h2 className="text-4xl font-light text-stone-700 mb-6">About Me</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              I'm Nerea, a licensed psychologist dedicated to providing compassionate, 
              evidence-based mental health care. With years of experience in clinical practice, 
              I specialize in helping individuals, families, and organizations achieve better 
              psychological well-being.
            </p>
            <p className="text-stone-600 mb-6 leading-relaxed">
              My approach combines warmth and professionalism, creating a safe space where 
              healing can begin. I believe in the power of human connection and the resilience 
              that exists within each person.
            </p>
            <div className="bg-stone-50 p-6 rounded-xl mb-8">
              <h3 className="font-medium text-stone-700 mb-3">What sets me apart:</h3>
              <ul className="space-y-2 text-stone-600">
                <li>• Personalized treatment approaches tailored to your unique needs</li>
                <li>• Integration of traditional and innovative therapeutic techniques</li>
                <li>• Commitment to ongoing professional development and training</li>
                <li>• Collaborative approach that empowers you in your healing journey</li>
              </ul>
            </div>
            <button className="bg-green-200 hover:bg-green-300 text-stone-700 px-8 py-3 rounded-xl transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}