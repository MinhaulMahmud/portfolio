import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageSquare, User, Send, CheckCircle, AlertCircle, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const formattedMessage = `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
    `;

    const templateParams = {
      to_email: 'minhaz.oj@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      message: formattedMessage,
    };

    emailjs
      .send('service_54hvz0k', 'template_rco139h', templateParams, 'LjDN-YveDAHiRRp4q')
      .then(
        () => {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setStatus('idle'), 4000);
        },
        () => {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 4000);
        }
      );
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'minhaz.oj@gmail.com', href: 'mailto:minhaz.oj@gmail.com' },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+8801991247546', href: 'tel:+8801991247546' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Chattogram, Bangladesh', href: undefined },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/MinhaulMahmud', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/minhazul-mahmud/', label: 'LinkedIn' },
  ];

  const inputClasses = "w-full pl-11 pr-4 py-3.5 bg-surface-light/50 border border-white/[0.06] rounded-xl text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-accent/30 focus:bg-surface-light/80 transition-all duration-300";

  return (
    <section ref={ref} id="contact" className="py-32 relative">
      <div className="section-divider mb-32" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="section-label">
            <MessageSquare className="w-3.5 h-3.5" />
            Contact
          </div>
          <h2 className="section-heading mb-6">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-gray-300 hover:text-accent transition-colors duration-300">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-300">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-6 border-t border-white/[0.04]">
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-medium">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-xl border border-white/[0.06] bg-surface-light/30 flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent/20 hover:bg-accent/5 transition-all duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-600 group-focus-within:text-accent transition-colors duration-300">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className={inputClasses}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-600 group-focus-within:text-accent transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className={inputClasses}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute top-3.5 left-4 pointer-events-none text-gray-600 group-focus-within:text-accent transition-colors duration-300">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <textarea
                  id="contact-message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className={`${inputClasses} resize-none`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 rounded-xl text-[#050816] font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #64ffda, #34d399)' }}
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#050816]/30 border-t-[#050816] rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-emerald-400 text-sm p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-red-400 text-sm p-3 rounded-lg bg-red-500/10 border border-red-500/20"
                  >
                    <AlertCircle className="w-4 h-4" />
                    Failed to send. Please try again or email me directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-28 pt-8 border-t border-white/[0.04]"
        >
          <p className="text-gray-600 text-sm font-mono">
            Designed & Built by Minhazul Mahmud · © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;