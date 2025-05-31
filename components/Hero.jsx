export default function Hero() {
  return (
    <section className="py-20 px-4 relative min-h-screen flex items-center">
      {/* Background image div */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Header/herobanner.jpg')" }}
      />
      
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
 
      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-3xl font-light text-white mb-6 leading-tight">
              HELPING TO HEAL THE 
              <span className="block text-gray-100">HURT THAT NO ONE SEES</span>
            </h1>
           
          </div>
          
        </div>
      </div>
    </section>
  )
}