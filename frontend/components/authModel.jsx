'use client';
import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AuthModal = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isLogin ? 'Login' : 'Signup'} data:`, formData);
    // Handle form submission here
  };
  
  const handleLogin = () => {
    router.push('/userInterface');
    
  }
  
  const handleRegister = () => {
    alert("Your account is registered");
    setIsLogin(true);
  }

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      style={{
        '--color-background': '#010101',
        '--color-secondary-background': '#FFFFFF1A',
        '--text': '#FFFFFF',
        '--button': '#D3B86A',
      }}
    >
      <div className="relative w-full max-w-md">
        {/* Modal Container */}
        <div className="bg-[#010101] border border-[#FFFFFF1A] rounded-2xl p-8 backdrop-blur-sm">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-[#FFFFFF1A] text-white p-2 rounded-lg hover:bg-white/20 transition-all duration-200 hover:scale-105"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-white mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-white/70 text-sm">
              {isLogin 
                ? 'Sign in to your account to continue' 
                : 'Join us today and get started'
              }
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields - Only for Signup */}
            {!isLogin && (
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full bg-[#FFFFFF1A] border border-white/10 rounded-lg py-3 px-10 text-white placeholder-white/50 focus:outline-none focus:border-[#D3B86A] focus:bg-white/5 transition-colors"
                  />
                </div>
                <div className="relative">
                  <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full bg-[#FFFFFF1A] border border-white/10 rounded-lg py-3 px-10 text-white placeholder-white/50 focus:outline-none focus:border-[#D3B86A] focus:bg-white/5 transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="relative">
              <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-[#FFFFFF1A] border border-white/10 rounded-lg py-3 px-10 text-white placeholder-white/50 focus:outline-none focus:border-[#D3B86A] focus:bg-white/5 transition-colors"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full bg-[#FFFFFF1A] border border-white/10 rounded-lg py-3 px-10 pr-10 text-white placeholder-white/50 focus:outline-none focus:border-[#D3B86A] focus:bg-white/5 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password - Only for Signup */}
            {!isLogin && (
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required={!isLogin}
                  className="w-full bg-[#FFFFFF1A] border border-white/10 rounded-lg py-3 px-10 text-white placeholder-white/50 focus:outline-none focus:border-[#D3B86A] focus:bg-white/5 transition-colors"
                />
              </div>
            )}

            {/* Forgot Password - Only for Login */}
            {isLogin && (
              <div className="text-right">
                <a href="#forgot" className="text-[#D3B86A] text-sm hover:text-[#e8d18e] transition-colors">
                  Forgot your password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#D3B86A] text-[#010101] py-3 rounded-lg font-semibold hover:bg-[#e8d18e] transform hover:-translate-y-0.5 transition-all duration-200"
              onClick={isLogin ? handleLogin : handleRegister}
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="px-4 text-white/50 text-sm">or</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          {/* Switch Mode */}
          <div className="text-center">
            <p className="text-white/70 text-sm">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={switchMode}
                className="text-[#D3B86A] font-semibold hover:text-[#e8d18e] underline transition-colors"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;