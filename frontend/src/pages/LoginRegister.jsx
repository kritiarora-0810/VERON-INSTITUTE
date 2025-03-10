import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaUserGraduate } from 'react-icons/fa';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import logo from '../assets/jee_withoutbg.png'

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: ''
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    },
    exit: { opacity: 0, y: -20 }
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, isLogin) => {
    e.preventDefault();
    const formData = new FormData();
    const endpoint = isLogin 
      ? 'http://127.0.0.1:8000/user/user_login/'
      : 'http://127.0.0.1:8000/user/user_register/';

    if (isLogin) {
      formData.append('email', loginData.email);
      formData.append('password', loginData.password);
    } else {
      Object.entries(registerData).forEach(([key, value]) => {
        formData.append(key, value);
      });
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          localStorage.setItem('token', data.token);
          alert('Successfully logged in!');
        } else {
          alert('Registration successful!');
          setIsLogin(true);
        }
      } else {
        alert(data.error || 'Invalid credentials');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:block w-1/2 max-w-xl h-full flex items-center justify-center mr-8"
      >
        <img 
          src={logo}
          alt="Logo"
          className="w-full h-auto max-h-[600px] object-contain"
        />
      </motion.div>

      <motion.div className="w-full md:w-1/2 max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
              isLogin 
                ? 'bg-[#f97316] text-white shadow-md'
                : 'bg-gray-100 text-[#50483b] hover:bg-gray-200'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
              !isLogin 
                ? 'bg-[#f97316] text-white shadow-md'
                : 'bg-gray-100 text-[#50483b] hover:bg-gray-200'
            }`}
          >
            Register
          </button>
        </div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={isLogin ? 'login' : 'register'}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-6"
          >
            {!isLogin && (
              <>
                <motion.div variants={itemVariants} className="relative">
                  <FaUserGraduate className="absolute top-4 left-4 text-[#50483b] text-lg" />
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:border-[#f97316]"
                    value={registerData.first_name}
                    onChange={handleRegisterChange}
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <FaUserGraduate className="absolute top-4 left-4 text-[#50483b] text-lg" />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:border-[#f97316]"
                    value={registerData.last_name}
                    onChange={handleRegisterChange}
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <FaPhone className="absolute top-4 left-4 text-[#50483b] text-lg" />
                  <input
                    type="text"
                    name="phone_number"
                    placeholder="Phone Number"
                    className="w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:border-[#f97316]"
                    value={registerData.phone_number}
                    onChange={handleRegisterChange}
                  />
                </motion.div>
              </>
            )}

            <motion.div variants={itemVariants} className="relative">
              <FaEnvelope className="absolute top-4 left-4 text-[#50483b] text-lg" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:border-[#f97316]"
                value={isLogin ? loginData.email : registerData.email}
                onChange={isLogin ? handleLoginChange : handleRegisterChange}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <FaLock className="absolute top-4 left-4 text-[#50483b] text-lg" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:border-[#f97316]"
                value={isLogin ? loginData.password : registerData.password}
                onChange={isLogin ? handleLoginChange : handleRegisterChange}
              />
            </motion.div>

            {isLogin && (
              <motion.div variants={itemVariants} className="text-right -mt-4">
                <button
                  type="button"
                  className="text-sm text-[#f97316] hover:underline"
                >
                  Forgot Password?
                </button>
              </motion.div>
            )}

            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#f97316] text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-[#ea580c] transition-colors"
                onClick={(e) => handleSubmit(e, isLogin)}
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#50483b] font-medium hover:text-[#f97316] transition-colors"
              >
                {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
    <Footer />
    </>
  );
};

export default LoginRegister;