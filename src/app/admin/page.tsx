'use client';

import { useState } from 'react';

export default function AdminPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const stats = [
    { label: 'Total Users', value: '1,234', change: '+12%' },
    { label: 'Revenue', value: '$45,678', change: '+8%' },
    { label: 'Orders', value: '567', change: '+15%' },
    { label: 'Products', value: '89', change: '+3%' }
  ];

  const recentActivity = [
    { id: 1, action: 'New user registered', time: '2 min ago' },
    { id: 2, action: 'Order #1234 completed', time: '5 min ago' },
    { id: 3, action: 'Product updated', time: '10 min ago' },
    { id: 4, action: 'Payment received', time: '15 min ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4 flex items-center">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-4 p-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {sidebarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-white shadow-sm min-h-screen transition-all duration-300 overflow-hidden`}>
          <div className="p-4">
            <ul className="space-y-2">
              <li>
                <button className="w-full text-left px-4 py-2 rounded-lg bg-blue-100 text-blue-700 flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
                  </svg>
                  Dashboard
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
                  <div className="mt-2 flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    <span className="ml-2 text-sm font-medium text-green-600">{stat.change}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b">
                <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {recentActivity.map((activity) => (
                    <li key={activity.id} className="flex justify-between items-center">
                      <span className="text-gray-900">{activity.action}</span>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </div>
        </main>
      </div>
    </div>
  );
}