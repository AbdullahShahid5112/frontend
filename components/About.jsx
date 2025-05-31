import Image from "next/image";

export default function About() {
  return (
   <section className="bg-[#ede8e5] py-20 px-4 relative overflow-hidden">
      {/* Top organic shapes */}
      <div className="absolute top-0 right-0 w-96 h-48 overflow-hidden">
        <svg viewBox="0 0 400 200" className="w-full h-full">
          <ellipse cx="320" cy="60" rx="80" ry="40" fill="#B8C5A6" opacity="0.8" />
          <circle cx="380" cy="20" r="35" fill="#F4C2A1" opacity="0.9" />
        </svg>
      </div>

      {/* Bottom left organic shape */}
      <div className="absolute bottom-0 left-0 w-64 h-64 overflow-hidden">
        <svg viewBox="0 0 256 256" className="w-full h-full">
          <path
            d="M50 180 C100 160, 150 180, 170 220 C190 260, 150 280, 100 270 C50 260, 20 240, 10 200 C0 160, 20 200, 50 180 Z"
            fill="#B8C5A6"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Bottom right accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden">
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <circle cx="100" cy="100" r="28" fill="#E6B85C" opacity="0.8" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Text */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-700 mb-4">
            You deserve to feel like you're
          </h2>
          <p className="text-4xl md:text-5xl font-script text-stone-600 italic">
            thriving, not just surviving.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <div className="relative">
            {/* Background organic shape for image */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 overflow-hidden">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <ellipse cx="100" cy="150" rx="70" ry="50" fill="#B8C5A6" opacity="0.6" />
              </svg>
            </div>
            
            <div className="bg-stone-300 rounded-lg overflow-hidden aspect-[4/5] relative z-10">
              <Image 
                src="/Second-section/Drimg.jpg" 
                alt="Professional headshot"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="text-stone-500 text-sm uppercase tracking-wider mb-4">
              On the outside, you're doing fine
            </div>
            
            <h3 className="text-2xl font-light text-stone-700 mb-6">
              Perhaps better than fine; perhaps life looks like you always hoped it would.
            </h3>

            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                But inside, the picture is different. Daily life extends you feeling 
                overwhelmed and untested. Your achievements don't feel like 
                successes. Past experiences make you feel stuck and anxious. You feel 
                unable to be your authentic self, so you mask who you really are–the 
                things that matter most.
              </p>

              <p>
                Maybe you've tried to understand yourself, using evidence-based 
                clinical psychology approaches. I will help you shift from feeling buried 
                out to feeling hopeful.
              </p>

              <p>
                So that you enter each day with more gratitude, positivity and purpose. 
                So that you see each day with more self-compassion, meaning and 
                mindfulness. So that you face hard days with more resilience, calm 
                and control.
              </p>

              <p>
                I will help you stop surviving and start thriving. So that you don't just 
                live, but you live well.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="bg-[#d1a19d] hover:bg-[#d1a19d] text-white px-8 py-3 rounded-lg text-sm font-medium transition-colors duration-300 uppercase tracking-wider">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}