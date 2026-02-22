import React from 'react'
import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function WhatsAppFloat() {
  const phoneNumber = '94771234567'
  const message = "Hi, I'm interested in your collection."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-whatsapp text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-500 transition-colors group"
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 1,
        duration: 0.5,
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <span className="font-medium hidden md:block">Chat to Order</span>
      <MessageCircle className="w-6 h-6" />

      {/* Pulse effect */}
      <span className="absolute -inset-1 rounded-full bg-whatsapp opacity-30 animate-ping group-hover:opacity-0"></span>
    </motion.a>
  )
}
