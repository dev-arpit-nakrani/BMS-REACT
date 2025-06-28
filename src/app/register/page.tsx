'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Register() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Send OTP logic here
      console.log('Sending OTP to:', email);
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Get Started</h1>
            <p className="text-gray-600 mt-2 lg:mt-3 text-base lg:text-lg">Enter your email to receive OTP</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">Email Address</label>
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 lg:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 lg:py-4 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Send OTP
            </button>
          </form>
          
          <div className="text-center mt-4 lg:mt-6">
            <p className="text-gray-600 text-sm lg:text-base">
              Already have an account?{' '}
              <Link href="/login" className="text-purple-600 hover:text-purple-700 font-semibold">
                Sign in here
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