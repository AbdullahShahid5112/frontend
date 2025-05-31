import React from 'react';
import Image from 'next/image';

const Working = () => {
  return (
    <section className="bg-[#f2dccc] py-20 px-4 relative overflow-hidden">
      {/* Decorative organic shapes on the right */}
      <div className="absolute top-0 right-0 w-64 h-full overflow-hidden">
        <svg viewBox="0 0 256 800" className="w-full h-full">
          {/* Golden curved shape */}
          <path
            d="M200 0 C230 50, 250 100, 240 150 C230 200, 200 250, 180 300 C160 350, 170 400, 190 450 C210 500, 230 550, 220 600 C210 650, 190 700, 200 750 L256 750 L256 0 Z"
            fill="#D4A574"
            opacity="0.8"
          />
          {/* Brown accent shape */}
          <path
            d="M180 100 C200 120, 210 150, 200 180 C190 210, 170 240, 160 270 C150 300, 160 330, 180 360 C200 390, 220 420, 210 450 L256 450 L256 100 Z"
            fill="#8B6F47"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-700">
            Working together
          </h2>
        </div>

        {/* Three Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Card */}
          <div className=" rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/Third-section/About.jpg"
                alt="About - Two people in conversation"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col items-center justify-center">
              <h3 className="text-xl font-light text-stone-700 mb-3">About</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6 text-center ">
                I'm a Clinical Psychologist with extensive 
                enthusiasm and client-centred. Find out what 
                I'm all about.
              </p>
              <button className="bg-[#aa7d56] hover:bg-[#aa7d56] text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-300 uppercase tracking-wider">
                Meet Me
              </button>
            </div>
          </div>

          {/* Services Card */}
          <div className=" rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/Third-section/Service.jpg"
                alt="Services - Therapy session setup"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col items-center justify-center">
              <h3 className="text-xl font-light text-stone-700 mb-3 ">Services</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6 text-center">
                I provide individual therapy & counselling, 
                consultation for therapists, and employees 
                wellbeing support.
              </p>
              <button className="bg-[#aa7d56] hover:bg-[#aa7d56] text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-300 uppercase tracking-wider">
                Explore Services
              </button>
            </div>
          </div>

          {/* FAQs Card */}
          <div className=" rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/Third-section/Faq.jpg"
                alt="FAQs - Person reading or writing"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col items-center justify-center">
              <h3 className="text-xl font-light text-stone-700 mb-3 ">FAQs</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6 text-center">
                Learn more about what to expect from 
                therapy, working with me and how to get 
                started you will be satisfied.
              </p>
              <button className="bg-[#aa7d56] hover:bg-[#aa7d56] text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-300 uppercase tracking-wider">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;