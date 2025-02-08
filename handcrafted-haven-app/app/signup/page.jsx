"use client";  // Mark this file as a client-side component

import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError(""); // Clear any previous errors
    setSuccess(""); // Clear any previous success messages

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Account created successfully! Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/login"; // Redirect to login page after successful sign-up
        }, 2000); // Redirect after 2 seconds
      } else {
        setError(data.message || "Failed to create account. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-96 border border-white/10">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Sign Up</h2>
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}
        {success && <p className="text-green-400 text-center mb-4">{success}</p>}
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
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-white/80">
          Already have an account?{" "}
          <a href="/login" className="text-white font-semibold hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;