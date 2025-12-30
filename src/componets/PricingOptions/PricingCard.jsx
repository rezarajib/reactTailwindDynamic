import React from 'react';
import { Check, Zap, Rocket, Trophy, ArrowRight, Star } from 'lucide-react';

const PricingCard = ({ pricing }) => {
    const { name, price, duration, description, features, isPopular } = pricing;

    return (
        <div className={`group relative flex flex-col p-10 h-full rounded-[2.5rem] transition-all duration-700 bg-white 
            ${isPopular 
                ? 'border-[3px] border-amber-500 shadow-[0_20px_50px_rgba(245,158,11,0.2)] scale-105 z-10' 
                : 'border border-slate-100 shadow-xl hover:shadow-2xl hover:border-amber-200 hover:-translate-y-3'
            }`}
        >
            {/* ১. প্রিমিয়াম ব্যাজ - 'Best Value' */}
            {isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase shadow-lg flex items-center gap-2">
                    <Star size={14} className="fill-white" />
                    Most Popular
                </div>
            )}

            {/* ২. হেডার এবং আইকন সেকশন */}
            <div className="mb-8 text-center">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 mx-auto transition-transform duration-500 group-hover:rotate-[10deg]
                    ${isPopular 
                        ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-200' 
                        : 'bg-slate-50 text-slate-700'}`}
                >
                    {name === "Starter" && <Rocket size={35} strokeWidth={1.5} />}
                    {name === "Elite" && <Zap size={35} strokeWidth={1.5} />}
                    {name === "Legend" && <Trophy size={35} strokeWidth={1.5} />}
                </div>
                
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">
                    {name}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed px-4">
                    {description}
                </p>
            </div>

            {/* ৩. প্রাইস সেকশন (Bold & Modern) */}
            <div className="mb-10 py-6 border-y border-slate-50 text-center">
                <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-400 self-start mt-1 mr-1">৳</span>
                    <span className="text-6xl font-black text-slate-900 tracking-tighter">
                        {price}
                    </span>
                    <div className="text-left ml-2">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-none">BDT</p>
                        <p className="text-slate-500 text-sm font-semibold lowercase">/{duration}</p>
                    </div>
                </div>
            </div>

            {/* ৪. ফিচার লিস্ট (Custom Spacing & Icons) */}
            <div className="flex-grow space-y-5 mb-12">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 group/item">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors
                            ${isPopular ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-400 group-hover/item:text-green-500'}`}>
                            <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-slate-600 text-sm font-semibold tracking-tight transition-colors group-hover/item:text-slate-900">
                            {feature}
                        </span>
                    </div>
                ))}
            </div>

            {/* ৫. আলটিমেট কল টু অ্যাকশন বাটন */}
            <button className={`relative overflow-hidden w-full py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-widest transition-all duration-300 group/btn
                ${isPopular 
                    ? 'bg-slate-900 text-white hover:bg-black shadow-xl' 
                    : 'bg-slate-100 text-slate-800 hover:bg-amber-500 hover:text-white'}`}
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Journey
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-2" />
                </span>
                
                {/* বাটন অ্যানিমেশন এফেক্ট */}
                <div className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover/btn:w-full"></div>
            </button>

            {/* কার্ডের নিচে হালকা ডেকোরেশন */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
    );
};

export default PricingCard;