'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setLoggedIn(true);
    }
  };

  if (loggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">📊 Atlas Journal</h1>
            <p className="text-slate-400">Welcome, {email}!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
              <p className="text-slate-400 text-sm">Win Rate</p>
              <p className="text-3xl font-bold">65%</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
              <p className="text-slate-400 text-sm">Profit Factor</p>
              <p className="text-3xl font-bold">4.33</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
              <p className="text-slate-400 text-sm">Sharpe Ratio</p>
              <p className="text-3xl font-bold">1.45</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
              <p className="text-slate-400 text-sm">Total Trades</p>
              <p className="text-3xl font-bold">20</p>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 mb-8">
            <h2 className="text-xl font-bold mb-4">📈 Recent Trades</h2>
            <div className="space-y-2">
              <div className="flex justify-between p-3 bg-slate-800 rounded">
                <span>EURUSD - LONG</span>
                <span className="text-green-400">+$1,000</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-800 rounded">
                <span>GBPUSD - SHORT</span>
                <span className="text-red-400">-$250</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-800 rounded">
                <span>EURJPY - LONG</span>
                <span className="text-green-400">+$1,800</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setLoggedIn(false)}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
          <h1 className="text-3xl font-bold mb-2 text-center">📊 Atlas Journal</h1>
          <p className="text-slate-400 text-center mb-8">Trading Journal & Analytics</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded font-semibold text-white transition"
            >
              Login
            </button>
          </form>

          <p className="text-xs text-slate-400 mt-4 text-center">
            Demo mode - use any email to login
          </p>
        </div>
      </div>
    </div>
  );
}
