'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function OTP() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const router = useRouter();

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.every(digit => digit !== '')) {
      router.push('/admin');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-6 lg:p-10 w-full max-w-lg border border-blue-100">
          <div className="text-center mb-8 lg:mb-10">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg">
              <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Verify OTP</h1>
            <p className="text-gray-600 mt-2 lg:mt-3 text-base lg:text-lg">Enter the OTP sent to your email</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">OTP Code</label>
              <div className="flex gap-2 justify-center">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-12 h-12 text-center border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg font-semibold transition-all"
                    maxLength={1}
                    required
                  />
                ))}
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 lg:py-4 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Verify OTP
            </button>
          </form>
          
          <div className="text-center mt-4 lg:mt-6">
            <p className="text-gray-600 text-sm lg:text-base">
              Didn't receive OTP?{' '}
              <Link href="/register" className="text-purple-600 hover:text-purple-700 font-semibold">
                Resend
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Vector Image */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8">
        <div className="text-center">
          <img 
            src="/modern-collaborative-space-creative-diverse-teams_1343342-785.avif" 
            alt="Modern Collaborative Workspace" 
            className="w-[650px] h-[550px] mx-auto object-contain rounded-2xl bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}