import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingOptions = ({ pricingPromise }) => {
    // React 19 use() hook দিয়ে ডাটা লোড করা হচ্ছে
    const pricingData = use(pricingPromise);

    return (
        <section className="bg-slate-50 py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* ১. হেডার সেকশন (Standard and Centered) */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
                        Get our <span className="text-amber-500">Membership</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-amber-400 mx-auto rounded-full"></div>
                    <p className="text-slate-500 max-w-xl mx-auto text-lg font-medium">
                        আপনার লক্ষ্য অর্জনের জন্য সঠিক প্ল্যানটি বেছে নিন। আমরা দিচ্ছি সেরা ট্রেইনার এবং আধুনিক সব সুবিধা।
                    </p>
                </div>

                {/* ২. কার্ড গ্রিড লেআউট (Standard Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
                    {
                        pricingData.map(pricing => (
                            <PricingCard 
                                key={pricing.id}
                                pricing={pricing} 
                            />
                        ))
                    }
                </div>

                {/* ৩. ছোট ফুটার নোট (Optional but looks professional) */}
                <p className="text-center mt-16 text-slate-400 text-sm">
                    * সকল প্যাকেজের সাথে থাকছে ফ্রি জিম কনসালটেশন। কোনো প্রশ্ন থাকলে <span className="text-amber-500 cursor-pointer underline">আমাদের জানান</span>।
                </p>

            </div>
        </section>
    );
};

export default PricingOptions;