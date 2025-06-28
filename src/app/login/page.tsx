'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      router.push('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-6 lg:p-10 w-full max-w-lg border border-blue-100">
          <div className="text-center mb-8 lg:mb-10">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg">
              <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Welcome Back</h1>
            <p className="text-gray-600 mt-2 lg:mt-3 text-base lg:text-lg">Sign in to continue to your dashboard</p>
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
            
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">Password</label>
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 lg:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 transition-all"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 lg:py-4 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Sign In
            </button>
          </form>
          
          <div className="text-center mt-4 lg:mt-6">
            <p className="text-gray-600 text-sm lg:text-base">
              Don't have an account?{' '}
              <Link href="/register" className="text-purple-600 hover:text-purple-700 font-semibold">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Vector Image */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8">
        <div className="text-center">
          <svg className="w-96 h-96 mx-auto" viewBox="0 0 400 400" fill="none">
            {/* Office Building */}
            <rect x="50" y="150" width="300" height="200" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2"/>
            <rect x="70" y="170" width="40" height="30" fill="#3B82F6"/>
            <rect x="130" y="170" width="40" height="30" fill="#3B82F6"/>
            <rect x="190" y="170" width="40" height="30" fill="#3B82F6"/>
            <rect x="250" y="170" width="40" height="30" fill="#3B82F6"/>
            <rect x="310" y="170" width="40" height="30" fill="#3B82F6"/>
            
            {/* Person */}
            <circle cx="200" cy="120" r="20" fill="#F59E0B"/>
            <rect x="185" y="140" width="30" height="40" fill="#3B82F6" rx="5"/>
            <rect x="180" y="180" width="10" height="25" fill="#1F2937"/>
            <rect x="210" y="180" width="10" height="25" fill="#1F2937"/>
            <rect x="170" y="150" width="15" height="20" fill="#F59E0B"/>
            <rect x="215" y="150" width="15" height="20" fill="#F59E0B"/>
            
            {/* Laptop */}
            <rect x="160" y="200" width="80" height="50" fill="#374151" rx="5"/>
            <rect x="165" y="205" width="70" height="40" fill="#60A5FA"/>
            
            {/* Charts/Graphs */}
            <rect x="280" y="220" width="60" height="40" fill="#FFFFFF" stroke="#9CA3AF"/>
            <rect x="285" y="240" width="8" height="15" fill="#10B981"/>
            <rect x="295" y="235" width="8" height="20" fill="#3B82F6"/>
            <rect x="305" y="230" width="8" height="25" fill="#8B5CF6"/>
            <rect x="315" y="225" width="8" height="30" fill="#F59E0B"/>
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mt-6">Manage Your Business</h2>
          <p className="text-gray-600 mt-2">Streamline operations with our comprehensive management system</p>
        </div>
      </div>
    </div>
  );
}