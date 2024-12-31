import React from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import photo1 from "../assets/photo1.jpg";

const Birthday = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-400 via-blue-500 to-purple-600 text-white relative">
      {/* Confetti Effect */}
      <Confetti width={window.innerWidth} height={window.innerHeight} />

      {/* Main Content */}
      <motion.div
        className="flex flex-col items-center justify-center h-full text-center space-y-8 px-4 md:space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Floating Balloons Section */}
        <motion.div
          className="absolute top-0 w-full flex justify-between px-6 md:px-10"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="text-4xl md:text-6xl">🎈</div>
          <div className="text-4xl md:text-6xl">🎉</div>
          <div className="text-4xl md:text-6xl">🎁</div>
        </motion.div>

        {/* Main Title Section */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-yellow-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Happy Birthday, <span className="text-yellow-500">Ahmad Bhai!</span>
        </motion.h1>

        {/* Subtitle Section */}
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto px-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Another year older, but still the same amazing person I know and love. Wishing you the best on your special day. Let's make it one to remember!
        </motion.p>

        {/* Interactive Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-yellow-500 text-gray-800 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300"
        >
          Let's Celebrate!
        </motion.button>

        {/* Birthday Wishes Section */}
        <motion.div
          className="space-y-6 pt-12 md:pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <motion.p
            className="text-lg md:text-xl font-light max-w-2xl mx-auto text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            May this year bring you all the joy and success you deserve. You are such an important person in my life, and I'm lucky to have you as my brother. Here's to many more amazing years ahead!
          </motion.p>

          <motion.p
            className="text-lg md:text-xl font-light max-w-2xl mx-auto text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            "A brother is a friend given by nature." — Jean Baptiste Legouvé
          </motion.p>

          <motion.p
            className="text-lg md:text-xl font-light max-w-2xl mx-auto text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            💫 May Allah bless you with good health, success, and happiness in this world and the hereafter. May He grant you a long and prosperous life. Ameen!
          </motion.p>

          <motion.p
            className="text-lg md:text-xl font-light max-w-2xl mx-auto text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
          >
            ✨ "اللهم اجعلها سنة خير وبركة، وبارك له في عمره، ووفقه لكل ما يحب ويرضى" 
            — May Allah make this year full of blessings, grant him success in everything, and bless him with His mercy. Ameen!
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-6 border-white mb-8 mt-16 md:mt-24"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          <img
            src={photo1}
            alt="Brother"
            className="w-full h-2/1 object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center py-4 bg-gray-900">
        <p className="text-white text-sm md:text-base">
          Made with ❤️ by [Hamid Ali]
        </p>
      </footer>
    </div>
  );
};

export default Birthday;
