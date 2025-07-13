import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, EyeIcon, EyeOffIcon, UserIcon, MailIcon, LockIcon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../ui/Toast';
type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialView?: 'login' | 'signup';
};
export const AuthModal = ({
  isOpen,
  onClose,
  initialView = 'login'
}: AuthModalProps) => {
  const [view, setView] = useState<'login' | 'signup'>(initialView);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Form states
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const {
    login,
    signup
  } = useAuth();
  const {
    showToast
  } = useToast();
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!loginForm.email || !loginForm.password) {
      showToast('Please fill in all fields', 'error');
      return;
    }
    try {
      setIsLoading(true);
      const success = await login(loginForm.email, loginForm.password);
      if (success) {
        showToast('Successfully logged in!', 'success');
        onClose();
      } else {
        showToast('Invalid email or password', 'error');
      }
    } catch (error) {
      showToast('An error occurred during login', 'error');
    } finally {
      setIsLoading(false);
    }
  };
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!signupForm.name || !signupForm.email || !signupForm.password) {
      showToast('Please fill in all required fields', 'error');
      return;
    }
    if (signupForm.password !== signupForm.confirmPassword) {
      showToast('Passwords do not match', 'error');
      return;
    }
    try {
      setIsLoading(true);
      const success = await signup(signupForm.name, signupForm.email, signupForm.password);
      if (success) {
        showToast('Account created successfully!', 'success');
        onClose();
      } else {
        showToast('Failed to create account', 'error');
      }
    } catch (error) {
      showToast('An error occurred during signup', 'error');
    } finally {
      setIsLoading(false);
    }
  };
  return <AnimatePresence>
      {isOpen && <>
          {/* Backdrop */}
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" onClick={onClose} />
          {/* Modal */}
          <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} exit={{
        opacity: 0,
        scale: 0.95
      }} className="fixed inset-0 flex items-center justify-center z-50 p-4" onClick={e => e.stopPropagation()}>
            <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-xl w-full max-w-md overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-800">
                <h2 className="text-2xl font-serif text-white">
                  {view === 'login' ? 'Welcome Back' : 'Create Account'}
                </h2>
                <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Close modal">
                  <XIcon size={24} />
                </button>
              </div>
              {/* Content */}
              <div className="p-6">
                {view === 'login' ? <form onSubmit={handleLoginSubmit}>
                    <div className="mb-4">
                      <label className="block text-gray-400 mb-2 text-sm">
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MailIcon size={18} className="text-gray-500" />
                        </div>
                        <input type="email" value={loginForm.email} onChange={e => setLoginForm({
                    ...loginForm,
                    email: e.target.value
                  })} className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 pl-10 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" placeholder="your.email@example.com" required />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-400 mb-2 text-sm">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <LockIcon size={18} className="text-gray-500" />
                        </div>
                        <input type={showPassword ? 'text' : 'password'} value={loginForm.password} onChange={e => setLoginForm({
                    ...loginForm,
                    password: e.target.value
                  })} className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 pl-10 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" placeholder="••••••••" required />
                        <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300" onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                        </button>
                      </div>
                    </div>
                    <button type="submit" disabled={isLoading} className="w-full bg-amber-400 text-black py-2 px-4 rounded-lg hover:bg-amber-500 transition-colors font-medium flex justify-center items-center">
                      {isLoading ? 'Logging in...' : 'Log In'}
                    </button>
                  </form> : <form onSubmit={handleSignupSubmit}>
                    <div className="mb-4">
                      <label className="block text-gray-400 mb-2 text-sm">
                        Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <UserIcon size={18} className="text-gray-500" />
                        </div>
                        <input type="text" value={signupForm.name} onChange={e => setSignupForm({
                    ...signupForm,
                    name: e.target.value
                  })} className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 pl-10 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" placeholder="Your name" required />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-400 mb-2 text-sm">
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MailIcon size={18} className="text-gray-500" />
                        </div>
                        <input type="email" value={signupForm.email} onChange={e => setSignupForm({
                    ...signupForm,
                    email: e.target.value
                  })} className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 pl-10 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" placeholder="your.email@example.com" required />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-400 mb-2 text-sm">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <LockIcon size={18} className="text-gray-500" />
                        </div>
                        <input type={showPassword ? 'text' : 'password'} value={signupForm.password} onChange={e => setSignupForm({
                    ...signupForm,
                    password: e.target.value
                  })} className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 pl-10 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" placeholder="••••••••" required />
                        <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300" onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                        </button>
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-400 mb-2 text-sm">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <LockIcon size={18} className="text-gray-500" />
                        </div>
                        <input type={showPassword ? 'text' : 'password'} value={signupForm.confirmPassword} onChange={e => setSignupForm({
                    ...signupForm,
                    confirmPassword: e.target.value
                  })} className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 pl-10 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" placeholder="••••••••" required />
                      </div>
                    </div>
                    <button type="submit" disabled={isLoading} className="w-full bg-amber-400 text-black py-2 px-4 rounded-lg hover:bg-amber-500 transition-colors font-medium flex justify-center items-center">
                      {isLoading ? 'Creating Account...' : 'Create Account'}
                    </button>
                  </form>}
              </div>
              {/* Footer */}
              <div className="p-6 bg-gray-800/50 text-center">
                {view === 'login' ? <p className="text-gray-400">
                    Don't have an account?{' '}
                    <button onClick={() => setView('signup')} className="text-amber-400 hover:underline focus:outline-none">
                      Sign up
                    </button>
                  </p> : <p className="text-gray-400">
                    Already have an account?{' '}
                    <button onClick={() => setView('login')} className="text-amber-400 hover:underline focus:outline-none">
                      Log in
                    </button>
                  </p>}
              </div>
            </div>
          </motion.div>
        </>}
    </AnimatePresence>;
};