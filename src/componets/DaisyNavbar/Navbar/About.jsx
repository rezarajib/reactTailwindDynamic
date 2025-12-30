import React from 'react';
import { Wrench, Users, ShieldCheck, Heart } from "lucide-react"; // আপনার প্রজেক্টের স্টাইলের সাথে মিল রেখে আইকন

const About = () => {
  // কিছু ডামি ডাটা যা আপনার কোম্পানি বা সার্ভিস সম্পর্কে বলবে
  const stats = [
    { id: 1, icon: <Users className="text-amber-500" />, label: "Happy Clients", value: "500+" },
    { id: 2, icon: <Wrench className="text-amber-500" />, label: "Projects Done", value: "1200+" },
    { id: 3, icon: <ShieldCheck className="text-amber-500" />, label: "Years Experience", value: "5+" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            About <span className="text-amber-500">Our Company</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আমরা মানসম্মত সেবা এবং গ্রাহকের সন্তুষ্টিতে বিশ্বাসী। আমাদের দক্ষ টিম সবসময় আপনার পাশে আছে।
          </p>
        </div>

        {/* Content Section: Image and Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" 
              alt="About Us" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Heart className="text-red-500" fill="red" /> Why Choose Us?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              আমাদের লক্ষ্য হলো প্রযুক্তিকে মানুষের কাছে সহজলভ্য করা। আমরা গত ৫ বছর ধরে সততার সাথে সেবা দিয়ে আসছি। বাগবাড়ি চৌবাড়ী এলাকার মানুষের দোয়া ও ভালোবাসাই আমাদের মূল চালিকাশক্তি।
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <span className="bg-amber-100 p-1 rounded-full text-amber-600">✓</span> 
                24/7 Professional Support
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <span className="bg-amber-100 p-1 rounded-full text-amber-600">✓</span> 
                Affordable Pricing Plans
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <span className="bg-amber-100 p-1 rounded-full text-amber-600">✓</span> 
                Skilled Expert Team
              </li>
            </ul>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white p-8 rounded-2xl shadow-md text-center border-b-4 border-amber-400 hover:shadow-2xl transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-50 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <h4 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h4>
              <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;