import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { MousePointerClick, TrendingUp, DollarSign } from 'lucide-react';

export function GooglePPCVisualization() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [spend, setSpend] = useState(0);
  const [conversions, setConversions] = useState(0);
  const [activeAd, setActiveAd] = useState<number | null>(null);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);

  // 3 different company scenarios
  const scenarios = [
    {
      query: 'best HVAC company near me',
      yourAd: {
        title: 'Superior Comfort HVAC - Phoenix',
        url: 'www.superiorcomforthvac.com',
        description: '24/7 Emergency HVAC Service. Licensed & Insured. Same-Day Repairs. Free Estimates. Over 20 Years Experience.',
        cpc: 8.50
      },
      competitorAds: [
        {
          title: 'Phoenix Air & Heat Pros',
          url: 'www.phoenixairpros.com',
          description: 'Fast HVAC Service. Residential & Commercial. Call Now for Free Quote.',
          cpc: 7.25
        },
        {
          title: 'Desert Climate Control',
          url: 'www.desertclimate.com',
          description: 'AC Repair & Installation. Expert Technicians. Serving Phoenix Metro Area.',
          cpc: 6.90
        }
      ]
    },
    {
      query: 'emergency plumber near me',
      yourAd: {
        title: 'Rapid Response Plumbing - 24/7 Service',
        url: 'www.rapidresponseplumbing.com',
        description: 'Licensed Plumbers. Same-Day Service. No Overtime Charges. Water Heaters, Drain Cleaning & More.',
        cpc: 15.25
      },
      competitorAds: [
        {
          title: 'ProFlow Plumbing Services',
          url: 'www.proflowplumbing.com',
          description: 'Expert Plumbers. Emergency Service Available. Free Estimates on All Jobs.',
          cpc: 13.50
        },
        {
          title: 'All Hours Plumbing',
          url: 'www.allhoursplumbing.com',
          description: 'Fast & Reliable Plumbing. Residential & Commercial. Call Now.',
          cpc: 12.25
        }
      ]
    },
    {
      query: 'personal injury lawyer near me',
      yourAd: {
        title: 'Thompson Law Firm - Free Consultation',
        url: 'www.thompsonlawfirm.com',
        description: 'No Fee Unless We Win. 25+ Years Experience. Maximum Compensation. Call 24/7 for Free Case Review.',
        cpc: 95.00
      },
      competitorAds: [
        {
          title: 'Injury Justice Attorneys',
          url: 'www.injuryjustice.com',
          description: 'Experienced Personal Injury Lawyers. Free Consultation. We Fight For You.',
          cpc: 87.50
        },
        {
          title: 'Legal Rights Advocates',
          url: 'www.legalrightsadvocates.com',
          description: 'Personal Injury Specialists. Proven Results. No Win, No Fee.',
          cpc: 79.25
        }
      ]
    }
  ];

  const currentScenario = scenarios[currentScenarioIndex];
  const fullQuery = currentScenario.query;
  
  // Combine ads for display - your ad always first
  const ads = [
    { ...currentScenario.yourAd, isYours: true },
    ...currentScenario.competitorAds.map(ad => ({ ...ad, isYours: false }))
  ];

  useEffect(() => {
    // Reset everything
    setSearchQuery('');
    setShowResults(false);
    setClicks(0);
    setSpend(0);
    setConversions(0);
    setActiveAd(null);

    // Type out search query
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= fullQuery.length) {
        setSearchQuery(fullQuery.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        // Show results after typing completes
        setTimeout(() => setShowResults(true), 300);
      }
    }, 50);

    // Simulate clicks on ads
    const clickInterval = setInterval(() => {
      if (charIndex > fullQuery.length) {
        const randomAdIndex = Math.floor(Math.random() * ads.length);
        const randomAd = ads[randomAdIndex];
        
        setActiveAd(randomAdIndex);
        
        // Only charge for YOUR ad clicks (index 0)
        if (randomAd.isYours) {
          setClicks(prev => prev + 1);
          setSpend(prev => prev + randomAd.cpc);
          
          // Random chance of conversion (30%)
          if (Math.random() > 0.7) {
            setConversions(prev => prev + 1);
          }
        }

        setTimeout(() => setActiveAd(null), 400);
      }
    }, 1800);

    // Move to next scenario after cycle
    const scenarioTimeout = setTimeout(() => {
      setCurrentScenarioIndex((prev) => (prev + 1) % scenarios.length);
    }, 14000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(clickInterval);
      clearTimeout(scenarioTimeout);
    };
  }, [currentScenarioIndex]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl md:rounded-2xl shadow-2xl overflow-hidden h-full flex flex-col">
      {/* Google Search Bar */}
      <div className="bg-gray-800 p-4 md:p-6 border-b border-gray-700">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
          <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 272 92" fill="none">
            <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
            <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
            <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
            <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
            <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
            <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"/>
          </svg>
        </div>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            readOnly
            className="w-full px-4 py-2 md:py-3 bg-gray-700 border border-gray-600 rounded-full text-sm md:text-base focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
            placeholder="Search Google"
          />
          <motion.div
            className="absolute right-3 top-1/2 -translate-y-1/2 w-1 h-5 bg-blue-500"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>
      </div>

      {/* Search Results */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-900">
        {showResults && (
          <div className="space-y-4 md:space-y-6">
            {/* Stats Bar */}
            <div className="text-xs md:text-sm text-gray-400 pb-3 border-b border-gray-700">
              About 1,240,000 results (0.42 seconds)
            </div>

            {/* Sponsored Ads */}
            {ads.map((ad, index) => (
              <motion.div
                key={`${currentScenarioIndex}-${index}`}
                className={`relative transition-all duration-300 ${
                  activeAd === index ? 'scale-[0.98]' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Click Effect */}
                {activeAd === index && (
                  <>
                    <motion.div
                      className={`absolute inset-0 rounded-lg -z-10 ${
                        ad.isYours ? 'bg-[#EFA82F]/20' : 'bg-gray-700/30'
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.8, 0] }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute -right-2 -top-2"
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0 }}
                    >
                      <MousePointerClick className="text-blue-400" size={20} />
                    </motion.div>
                    {/* Cost indicator - ONLY shows for YOUR ad */}
                    {ad.isYours && (
                      <motion.div
                        className="absolute -right-2 top-8 bg-red-500 text-white text-xs px-2 py-1 rounded-md shadow-lg"
                        initial={{ scale: 0, y: -10 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0 }}
                      >
                        -${ad.cpc.toFixed(2)}
                      </motion.div>
                    )}
                  </>
                )}

                <div className={`group cursor-pointer rounded-lg p-3 ${
                  ad.isYours ? 'bg-gradient-to-r from-[#EFA82F]/10 to-transparent border border-[#EFA82F]/30' : ''
                }`}>
                  {/* Ad Badge and Label */}
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs px-1.5 py-0.5 border border-gray-500 rounded text-gray-300">
                      Ad
                    </span>
                    {ad.isYours && (
                      <span className="text-xs px-2 py-0.5 bg-[#EFA82F] text-gray-900 rounded">
                        YOUR AD
                      </span>
                    )}
                    <span className="text-xs md:text-sm text-gray-400">{ad.url}</span>
                  </div>
                  
                  {/* Ad Title */}
                  <h3 className={`text-lg md:text-xl group-hover:underline mb-1 ${
                    ad.isYours ? 'text-[#EFA82F]' : 'text-blue-400'
                  }`}>
                    {ad.title}
                  </h3>
                  
                  {/* Ad Description */}
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                    {ad.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Explanation text */}
            <div className="text-xs text-gray-500 italic text-center pt-2">
              You only pay when someone clicks YOUR ad
            </div>
          </div>
        )}
      </div>

      {/* Metrics Dashboard */}
      <motion.div
        className="bg-gradient-to-r from-[#EFA82F] to-[#d89527] text-white p-3 md:p-4"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
          <div>
            <div className="flex items-center justify-center gap-1 mb-1">
              <MousePointerClick size={14} className="md:w-4 md:h-4" />
              <div className="text-xs text-gray-900 opacity-80">Your Clicks</div>
            </div>
            <motion.div
              className="text-xl md:text-2xl text-gray-900"
              key={clicks}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {clicks}
            </motion.div>
          </div>
          
          <div>
            <div className="flex items-center justify-center gap-1 mb-1">
              <DollarSign size={14} className="md:w-4 md:h-4" />
              <div className="text-xs text-gray-900 opacity-80">Your Spend</div>
            </div>
            <motion.div
              className="text-xl md:text-2xl text-gray-900"
              key={spend}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              ${spend.toFixed(2)}
            </motion.div>
          </div>
          
          <div>
            <div className="flex items-center justify-center gap-1 mb-1">
              <TrendingUp size={14} className="md:w-4 md:h-4" />
              <div className="text-xs text-gray-900 opacity-80">Your Leads</div>
            </div>
            <motion.div
              className="text-xl md:text-2xl text-gray-900"
              key={conversions}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {conversions}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}