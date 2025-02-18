"use client";  // Mark this file as a client-side component

import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      window.location.href = "/dashboard"; // Redirect to dashboard on success
    } else {
      const data = await res.json();
      setError(data.message || "Invalid credentials");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-96 border border-white/10">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-indigo-600 py-3 rounded-lg font-semibold hover:bg-white/90 transition duration-200 ease-in-out"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-white/80">
          Don't have an account?{" "}
          <a href="/signup" className="text-white font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;