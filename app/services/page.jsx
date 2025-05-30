import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Nerea Psychology</title>
        <meta name="description" content="Detailed information about our psychological services including online therapy, corporate workshops, and business psychology." />
      </Head>
      
      <Header />
      <main className="min-h-screen bg-stone-50">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-stone-100 to-stone-200">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-stone-700 mb-6">Our Services</h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Comprehensive psychological support tailored to your needs
            </p>
          </div>
        </section>

        {/* Online Therapy */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-light text-stone-700 mb-6">Online Therapy</h2>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Experience professional psychological support from the comfort of your own space. 
                  Our online therapy sessions provide the same quality care as in-person meetings, 
                  with added convenience and accessibility.
                </p>
                
                <h3 className="text-xl font-medium text-stone-700 mb-4">Areas of Expertise:</h3>
                <ul className="space-y-3 text-stone-600 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Adults:</strong> Anxiety, depression, stress management, relationship issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Children & Adolescents:</strong> Behavioral issues, academic stress, social difficulties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Neuropsychology:</strong> Cognitive assessment and rehabilitation</span>
                  </li>
                </ul>
                
                <button className="bg-rose-200 hover:bg-rose-300 text-stone-700 px-8 py-3 rounded-xl transition-colors duration-300">
                  Schedule Consultation
                </button>
              </div>
              <div className="bg-stone-200 rounded-2xl h-80 flex items-center justify-center">
                <span className="text-stone-500">Online Therapy Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Workshops */}
        <section className="py-16 px-4 bg-stone-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="bg-stone-200 rounded-2xl h-80 flex items-center justify-center md:order-1">
                <span className="text-stone-500">Workshop Image</span>
              </div>
              <div className="md:order-2">
                <h2 className="text-3xl font-light text-stone-700 mb-6">Corporate Workshops</h2>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Enhance your team's well-being and productivity with our specialized corporate workshops. 
                  We offer tailored programs designed to address workplace challenges and promote 
                  mental health in professional environments.
                </p>
                
                <h3 className="text-xl font-medium text-stone-700 mb-4">Workshop Types:</h3>
                <ul className="space-y-3 text-stone-600 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Stress Management & Burnout Prevention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Team Communication & Conflict Resolution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Leadership Development & Emotional Intelligence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Work-Life Balance Strategies</span>
                  </li>
                </ul>
                
                <button className="bg-green-200 hover:bg-green-300 text-stone-700 px-8 py-3 rounded-xl transition-colors duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Business Psychology */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-light text-stone-700 mb-6">Business Psychology</h2>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Optimize your organization's human potential through evidence-based psychological principles. 
                  Our business psychology services help companies create healthier, more productive work environments.
                </p>
                
                <h3 className="text-xl font-medium text-stone-700 mb-4">What We Offer:</h3>
                <ul className="space-y-3 text-stone-600 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Organizational Assessment & Culture Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Employee Well-being Programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Performance Optimization Strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Change Management Support</span>
                  </li>
                </ul>
                
                <div className="bg-stone-100 p-6 rounded-xl mb-8">
                  <h4 className="font-medium text-stone-700 mb-3">Benefits for Your Organization:</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Improved employee satisfaction, reduced turnover, enhanced productivity, 
                    better team dynamics, and a more positive workplace culture.
                  </p>
                </div>
                
                <button className="bg-amber-200 hover:bg-amber-300 text-stone-700 px-8 py-3 rounded-xl transition-colors duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-stone-200 rounded-2xl h-80 flex items-center justify-center">
                <span className="text-stone-500">Business Psychology Image</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}