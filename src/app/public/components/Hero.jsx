const TalentFlowHero = () => {
  // Statistics data for easy maintenance
  const stats = [
    { label: 'Active Learners', value: '50+' },
    { label: 'Disciplines', value: '6' },
    { label: 'Courses Available', value: '8' },
    { label: 'User Roles', value: '3' },
    { label: 'Certificate on Completion', value: '100%' },
  ];

  return (
    <section id="home" className="min-h-screen w-full mx-auto px-6 py-20 bg-white text-[#0D1442]">
      {/* --- Main Hero Content --- */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Column: Text & CTAs */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Learn. <span className="text-orange-500">Build.</span><br />
            Get Certified.
          </h1>
          <p className="text-gray-600 text-lg max-w-md leading-relaxed">
            TalentFlow is your all-in-one learning platform. Access courses, 
            track progress, collaborate with teammates, and earn certificates — all in one place.
          </p>
          
          <div className="flex items-center gap-4 pt-4">
            <button className="bg-[#0D1442] text-white px-5 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2">
              Get Started <span>→</span>
            </button>
            <button className="border-2 border-gray-300 text-[#0D1442] px-5 py-2 rounded-md font-semibold hover:bg-gray-50 transition-all flex items-center gap-2">
              <span className="text-xs">▶</span> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Column: Featured Image */}
        <div className="flex-1 w-full">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img src="/hero.jpg" alt="Person studying with laptop and notebook" className="w-full h-[389px] object-cover"/>
          </div>
        </div>
      </div>

      {/* --- Stats Bar Section --- */}
      <div className="w-full mt-12 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-row items-center justify-between flex-nowrap overflow-x-auto lg:overflow-visible">

          {/* Left Side: Brand Text */}
          <div className="whitespace-nowrap mr-8">
            <p className="text-sm font-medium">Trusted by Trueminds Innovations</p>
          </div>

          {/* Right Side: Stats Container */}
          <div className="flex items-center">
            {stats.map((stat, index) => (
              <div key={index} className={`flex flex-col items-center px-6 text-center ${index !== 0 ? 'border-l border-gray-200' : ''
              }`}>
                <span className="text-2xl font-bold text-[#0D1442] leading-none">
                  {stat.value}
                </span>
                <span className="text-[12px] text-[#000045] font-medium tracking-widest mt-2 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentFlowHero;