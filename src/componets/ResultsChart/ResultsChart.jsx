import React from 'react';
import { 
    Line, 
    LineChart, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
} from 'recharts';

const ResultsChart = () => {
    // ১. র ডাটা (Raw Data)
    const rawData = [
        { "id": 1, "name": "Rahat", "physics": 82, "chemistry": 75, "math": 90 },
        { "id": 2, "name": "Abir", "physics": 90, "chemistry": 88, "math": 95 },
        { "id": 3, "name": "Sifat", "physics": 65, "chemistry": 70, "math": 82 },
        { "id": 4, "name": "Tanvir", "physics": 88, "chemistry": 82, "math": 85 },
        { "id": 5, "name": "Fahim", "physics": 95, "chemistry": 92, "math": 98 },
        { "id": 6, "name": "Sakib", "physics": 72, "chemistry": 85, "math": 70 },
        { "id": 7, "name": "Mehedi", "physics": 80, "chemistry": 78, "math": 88 },
        { "id": 8, "name": "Joy", "physics": 60, "chemistry": 65, "math": 75 },
        { "id": 9, "name": "Rayhan", "physics": 85, "chemistry": 80, "math": 84 },
        { "id": 10, "name": "Arif", "physics": 92, "chemistry": 89, "math": 91 }
    ];

    // ২. টোটাল নম্বর ক্যালকুলেশন এবং সর্টিং লজিক (First to Last)
    const sortedData = rawData
        .map(student => ({
            ...student,
            total: student.physics + student.chemistry + student.math // টোটাল যোগ করা হলো
        }))
        .sort((a, b) => b.total - a.total); // বড় থেকে ছোট সিরিয়াল করা হলো

    return (
        <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100">
            {/* হেডার অংশ */}
            <div className="mb-8 text-center md:text-left">
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                    Leaderboard <span className="text-amber-500">Analytics</span>
                </h2>
                <p className="text-slate-500 font-medium">১০ জন শিক্ষার্থীর মেধা তালিকা ও নম্বর বিশ্লেষণ</p>
                <div className="h-1.5 w-20 bg-amber-400 mt-3 rounded-full mx-auto md:mx-0"></div>
            </div>

            {/* ৩. চার্ট কন্টেইনার */}
            <div className="h-[500px] w-full mt-10">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sortedData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        
                        {/* X-Axis: স্টুডেন্টের নাম */}
                        <XAxis 
                            dataKey="name" 
                            tick={{fill: '#64748b', fontSize: 13, fontWeight: 700}} 
                            axisLine={false}
                            tickLine={false}
                            dy={15}
                        />
                        
                        {/* Y-Axis: নম্বর স্কেল */}
                        <YAxis 
                            tick={{fill: '#94a3b8', fontSize: 12}} 
                            axisLine={false}
                            tickLine={false}
                        />

                        {/* প্রিমিয়াম টুলটিপ */}
                        <Tooltip 
                            contentStyle={{ 
                                borderRadius: '20px', 
                                border: 'none', 
                                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                                padding: '15px' 
                            }}
                        />
                        
                        <Legend verticalAlign="top" align="right" height={50} iconType="circle" />

                        {/* ৪. বিষয়ভিত্তিক আলাদা কালার লাইন */}
                        
                        {/* Total Marks (Highlighting with Bold Black) */}
                        <Line 
                            type="stepAfter" 
                            dataKey="total" 
                            name="Total Marks"
                            stroke="#0f172a" 
                            strokeWidth={4} 
                            dot={{ r: 6, fill: '#0f172a', strokeWidth: 2, stroke: '#fff' }}
                        />

                        {/* Physics (Blue) */}
                        <Line 
                            type="monotone" 
                            dataKey="physics" 
                            name="Physics"
                            stroke="#3b82f6" 
                            strokeWidth={3} 
                            dot={{ r: 4 }}
                        />

                        {/* Chemistry (Green) */}
                        <Line 
                            type="monotone" 
                            dataKey="chemistry" 
                            name="Chemistry"
                            stroke="#10b981" 
                            strokeWidth={3} 
                            dot={{ r: 4 }}
                        />

                        {/* Math (Amber) */}
                        <Line 
                            type="monotone" 
                            dataKey="math" 
                            name="Math"
                            stroke="#f59e0b" 
                            strokeWidth={3} 
                            dot={{ r: 4 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* ৫. ছোট একটি ডিক্লারেশন বা তথ্য */}
            <div className="mt-8 text-center bg-slate-50 p-4 rounded-2xl">
                <p className="text-slate-600 text-sm font-semibold">
                    🏆 শীর্ষ স্থান দখলকারী শিক্ষার্থী: <span className="text-amber-600 font-bold">{sortedData[0].name}</span> ({sortedData[0].total} নম্বর)
                </p>
            </div>
        </div>
    );
};

export default ResultsChart;