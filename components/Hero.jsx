export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-stone-100 via-rose-50 to-stone-200 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-light text-stone-700 mb-6 leading-tight">
              Your Journey to 
              <span className="block text-stone-600">Mental Wellness</span>
            </h1>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              Professional psychological support with a warm, personalized approach. 
              I'm here to help you navigate life's challenges and discover your inner strength.
            </p>
            <button className="bg-rose-300 hover:bg-rose-400 text-stone-700 px-8 py-4 rounded-xl text-lg font-medium transition-colors duration-300 shadow-sm">
              Start Your Journey
            </button>
          </div>
          <div className="bg-stone-300 rounded-3xl h-96 flex items-center justify-center">
            <span className="text-stone-500 text-lg">Professional Photo of Nerea</span>
          </div>
        </div>
      </div>
    </section>
  )
}
