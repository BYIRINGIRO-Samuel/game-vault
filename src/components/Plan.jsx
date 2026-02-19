import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Standard Plan',
    price: '$5.99',
    period: '/month',
    features: [
      'Access to all games',
      'Basic support',
      '1080p resolution',
      'Offline play available',
    ],
    btnColor: 'bg-gray-800 hover:bg-gray-700',
    textColor: 'text-blue-400',
  },
  {
    name: 'Premium Plan',
    price: '$14.99',
    period: '/month',
    features: [
      'Access to all games',
      'Priority support',
      '4K resolution',
      'Exclusive game releases',
      'Offline play available',
    ],
    btnColor: 'bg-indigo-600 hover:bg-indigo-500',
    textColor: 'text-indigo-400',
    glow: true,
  },
  {
    name: 'Ultimate Plan',
    price: '$29.99',
    period: '/month',
    features: [
      'Access to all games',
      '24/7 support',
      '4K/HDR resolution',
      'Exclusive game releases',
      'Offline play + Beta features',
    ],
    btnColor: 'bg-gray-800 hover:bg-gray-700',
    textColor: 'text-green-400',
  },
];

const Plan = () => {
  return (
    <div className="bg-black text-white px-4 py-16 flex flex-col justify-center items-center"><br />
      <div className="text-center">
        <h2 className="text-4xl font-extrabold">Choose your Game Plan</h2><br />
        <p className="text-gray-400">Enjoy unlimited gaming with the best plans. Choose or cancel anytime!</p><br />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 items-center max-w-8xl mx-auto h-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative w-full md:w-[300px] rounded-2xl px-6 py-10 shadow-lg border border-gray-700 ${
              plan.glow ? 'bg-gradient-to-b from-gray-900 to-black border-indigo-500 shadow-indigo-500/30' : 'bg-[#1a1a1a]'
            }`}
          >
            <div className="flex flex-col items-center w-[200px] h-[350px] justify-center">
              <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
              <p className={`text-3xl font-bold ${plan.textColor} text-center`}>
                {plan.price}
                <span className="text-sm text-gray-400">{plan.period}</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm text-center">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex justify-center items-center gap-2 text-gray-300">
                    <span className="text-orange-500 text-lg">•</span>
                    {feature}
                  </li>
                ))}
              </ul><br />
              <button
                className={`${plan.btnColor} w-35 h-9 font-semibold rounded-tl-2xl rounded-br-2xl text-white transition-all justify-center hover:-translate-y-1 duration-300 cursor-pointer`}
              >
                Subscribe Now
              </button><br />
              <p className="text-center text-xs text-gray-500 mt-2">Learn more about this plan</p>
            </div>
          </motion.div>
        ))}
      </div><br />
    </div>
  );
};

export default Plan;
