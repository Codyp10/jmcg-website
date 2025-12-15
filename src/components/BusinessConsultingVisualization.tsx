import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, TrendingUp, Zap } from 'lucide-react';

export function BusinessConsultingVisualization() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [currentCheckIndex, setCurrentCheckIndex] = useState(-1);
  const [showActions, setShowActions] = useState(false);

  const scenarios = [
    {
      company: 'Summit Fitness Center',
      industry: 'Fitness & Wellness',
      checks: [
        { area: 'Sales Process', status: 'warning', issue: 'No follow-up system for leads' },
        { area: 'Marketing Strategy', status: 'error', issue: 'Spending on ads with no tracking' },
        { area: 'Customer Retention', status: 'error', issue: '68% churn rate after 3 months' },
        { area: 'Team Training', status: 'warning', issue: 'Inconsistent service quality' },
        { area: 'Financial Systems', status: 'success', issue: 'Solid bookkeeping in place' },
        { area: 'Operations', status: 'warning', issue: 'Manual scheduling causing conflicts' }
      ],
      priority: 'Fix customer retention & tracking before spending more on ads'
    },
    {
      company: 'TechFlow Solutions',
      industry: 'Software Services',
      checks: [
        { area: 'Sales Process', status: 'success', issue: 'Strong pipeline management' },
        { area: 'Marketing Strategy', status: 'warning', issue: 'Limited content strategy' },
        { area: 'Customer Retention', status: 'success', issue: '92% client satisfaction' },
        { area: 'Team Training', status: 'error', issue: 'High turnover in support team' },
        { area: 'Financial Systems', status: 'warning', issue: 'Cash flow forecasting needed' },
        { area: 'Operations', status: 'error', issue: 'Delivery timelines consistently missed' }
      ],
      priority: 'Improve operations & team stability before scaling'
    },
    {
      company: 'Bella Vista Restaurant',
      industry: 'Food & Hospitality',
      checks: [
        { area: 'Sales Process', status: 'error', issue: 'No reservation system optimization' },
        { area: 'Marketing Strategy', status: 'success', issue: 'Strong social media presence' },
        { area: 'Customer Retention', status: 'warning', issue: 'Limited loyalty program' },
        { area: 'Team Training', status: 'success', issue: 'Well-trained staff' },
        { area: 'Financial Systems', status: 'error', issue: 'Food costs eating into margins' },
        { area: 'Operations', status: 'warning', issue: 'Kitchen efficiency needs improvement' }
      ],
      priority: 'Optimize food costs & reservation system for profitability'
    }
  ];

  const current = scenarios[currentScenario];

  useEffect(() => {
    // Reset
    setCurrentCheckIndex(-1);
    setShowActions(false);

    // Start checking items one by one
    const checkTimer = setInterval(() => {
      setCurrentCheckIndex(prev => {
        if (prev < current.checks.length - 1) {
          return prev + 1;
        }
        clearInterval(checkTimer);
        // Show priority actions after all checks
        setTimeout(() => setShowActions(true), 500);
        return prev;
      });
    }, 800);

    // Rotate to next scenario
    const scenarioTimer = setTimeout(() => {
      setCurrentScenario(prev => (prev + 1) % scenarios.length);
    }, 12000);

    return () => {
      clearInterval(checkTimer);
      clearTimeout(scenarioTimer);
    };
  }, [currentScenario]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle2 className="text-green-400" size={20} />;
      case 'warning':
        return <AlertTriangle className="text-yellow-400" size={20} />;
      case 'error':
        return <XCircle className="text-red-400" size={20} />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'border-green-400/30 bg-green-400/5';
      case 'warning':
        return 'border-yellow-400/30 bg-yellow-400/5';
      case 'error':
        return 'border-red-400/30 bg-red-400/5';
      default:
        return 'border-gray-700';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl h-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <div className="mb-3">
          <h3 className="text-white text-base md:text-lg mb-1">Business Health Audit</h3>
          <p className="text-sm text-gray-400">{current.company}</p>
        </div>
        <div className="text-xs text-gray-400 bg-gray-800 rounded-lg px-3 py-2 border border-gray-700">
          {current.industry}
        </div>
      </div>

      {/* Audit Checklist */}
      <div className="flex-1 space-y-2 md:space-y-3 overflow-y-auto mb-4 md:mb-6">
        {current.checks.map((check, index) => (
          <motion.div
            key={`${currentScenario}-${index}`}
            initial={{ opacity: 0, x: -20 }}
            animate={
              index <= currentCheckIndex
                ? { opacity: 1, x: 0 }
                : { opacity: 0.3, x: -20 }
            }
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`border rounded-lg p-3 md:p-4 transition-all ${
              index <= currentCheckIndex
                ? getStatusColor(check.status)
                : 'border-gray-700 bg-gray-800/30'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                {index <= currentCheckIndex ? (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    {getStatusIcon(check.status)}
                  </motion.div>
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-gray-600" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm md:text-base mb-1">
                  {check.area}
                </div>
                {index <= currentCheckIndex && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ delay: 0.2 }}
                    className="text-xs md:text-sm text-gray-400"
                  >
                    {check.issue}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Priority Action */}
      <AnimatePresence>
        {showActions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-[#EFA82F] to-[#d89527] rounded-xl p-4 md:p-5"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <Zap className="text-white" size={20} />
              </div>
              <div>
                <div className="text-white text-sm mb-1.5">Priority Action</div>
                <p className="text-xs md:text-sm text-gray-900">
                  {current.priority}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Note */}
      <motion.div
        className="mt-4 pt-4 border-t border-gray-700 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-xs text-gray-400">
          We analyze <span className="text-[#EFA82F]">every aspect</span> of your business
        </p>
      </motion.div>
    </div>
  );
}
