export default function Accreditations() {
  return (
    <section className="py-16 px-4 bg-stone-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-light text-stone-700 mb-8">Professional Credentials</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-2xl font-light text-stone-700 mb-2">PSY-2024-001</div>
            <p className="text-stone-600">Licensed Psychologist</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-2xl font-light text-stone-700 mb-2">Ph.D.</div>
            <p className="text-stone-600">Clinical Psychology</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-2xl font-light text-stone-700 mb-2">CBT Certified</div>
            <p className="text-stone-600">Cognitive Behavioral Therapy</p>
          </div>
        </div>
        <button className="bg-rose-200 hover:bg-rose-300 text-stone-700 px-8 py-3 rounded-xl transition-colors duration-300">
          Schedule a Consultation
        </button>
      </div>
    </section>
  )
}