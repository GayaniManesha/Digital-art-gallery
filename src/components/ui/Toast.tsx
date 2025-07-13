import React, { useEffect, useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, XIcon, AlertCircleIcon } from 'lucide-react';
export type ToastType = 'success' | 'error' | 'info';
type ToastProps = {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
};
export const Toast = ({
  message,
  type,
  onClose,
  duration = 5000
}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);
  const icons = {
    success: <CheckCircleIcon className="text-green-400" size={20} />,
    error: <AlertCircleIcon className="text-red-400" size={20} />,
    info: <AlertCircleIcon className="text-blue-400" size={20} />
  };
  const bgColors = {
    success: 'bg-green-900/20 border-green-500/30',
    error: 'bg-red-900/20 border-red-500/30',
    info: 'bg-blue-900/20 border-blue-500/30'
  };
  return <motion.div initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: -20
  }} className={`fixed top-20 right-4 z-50 p-4 rounded-lg border backdrop-blur-lg shadow-lg max-w-xs ${bgColors[type]}`}>
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">{icons[type]}</div>
        <p className="text-white flex-grow">{message}</p>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Close notification">
          <XIcon size={16} />
        </button>
      </div>
    </motion.div>;
};
type ToastMessage = {
  id: string;
  message: string;
  type: ToastType;
};
type ToastContextType = {
  showToast: (message: string, type: ToastType) => void;
};
const ToastContext = createContext<ToastContextType | undefined>(undefined);
export const ToastProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const showToast = (message: string, type: ToastType) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, {
      id,
      message,
      type
    }]);
  };
  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };
  return <ToastContext.Provider value={{
    showToast
  }}>
      {children}
      <AnimatePresence>
        {toasts.map((toast, index) => <Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} duration={5000} />)}
      </AnimatePresence>
    </ToastContext.Provider>;
};
export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};