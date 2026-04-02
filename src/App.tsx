/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Truck, Monitor, Timer, ThumbsUp, ChevronUp, ChevronDown, Mail, Globe, Linkedin, Calendar, ArrowUpRight, Copy, ExternalLink, X, Check } from "lucide-react";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const TYPICAL_TEAM_DATA = [
  { name: "Senior", value: 50, color: "#FBF950" },
  { name: "Middle", value: 10, color: "#FF69B4" },
  { name: "Junior", value: 40, color: "#4ADE80" },
];

const WAMI_TEAM_DATA = [
  { name: "Senior", value: 99, color: "#FBF950" },
  { name: "Middle", value: 1, color: "#FF69B4" },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 16;
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const slideTitles = [
    "Introduction",
    "Who We Are",
    "Expertise",
    "Energy Intelligence",
    "Strategic Approach",
    "Business Impact",
    "The Resolution",
    "Scope of Work",
    "Technology Stack",
    "Predict+",
    "Solutions",
    "Predict+ Impact",
    "Predict+ Scope",
    "Predict+ Tech",
    "Proven Results",
    "Next Steps"
  ];

  const expertiseItems = [
    {
      title: "End-to-End Product Delivery",
      desc: "We build complex energy platforms from scratch leading the product from discovery to production"
    },
    {
      title: "Hardware + Software Integration",
      desc: "Scalable and reliable software tightly integrated with energy hardware (loggers, inverters, sensors)"
    },
    {
      title: "AI & Predictive Analytics",
      desc: "Energy forecasting, anomaly detection, and performance optimization using AI-driven models"
    },
    {
      title: "Cloud, Web & Mobile Solutions",
      desc: "Production-grade backends, data-heavy dashboards, and mobile apps for real-time operations"
    },
    {
      title: "DevOps, Scalability & Reliability",
      desc: "Cloud infrastructure, CI/CD, observability, and systems ready for growth"
    },
    {
      title: "Technical Consulting & Discovery",
      desc: "Architecture design, technical due diligence, feasibility studies, and MVP-to-enterprise transitions"
    }
  ];

  const strategicApproachItems = [
    {
      label: "Dedicated Team",
      content: "Assembled 8 experts focused on the Tigo EI ecosystem to ensure precision and rapid delivery."
    },
    {
      label: "System Stabilization",
      content: "Implemented a plan to reduce legacy code, leading to fewer crashes and a significant drop in support tickets."
    },
    {
      label: "Mobile & UX Overhaul",
      content: "Redesigned the mobile app architecture and user flow to simplify the hardware installation process."
    },
    {
      label: "Performance",
      content: "Optimized architecture for real-time data processing and seamless scalability with future hardware."
    }
  ];

  const [activeExpertise, setActiveExpertise] = useState(0);
  const [activeApproach, setActiveApproach] = useState(0);
  const [activeSolution, setActiveSolution] = useState(0);
  const [activeWhoWeAre, setActiveWhoWeAre] = useState(0);
  const [showMoreScope, setShowMoreScope] = useState(false);
  const [showMoreTech, setShowMoreTech] = useState(false);
  const [showMorePredictScope, setShowMorePredictScope] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const navItems = [
    { label: "Who we are", index: 1 },
    { label: "Expertise", index: 2 },
    { 
      label: "Energy Intelligence", 
      items: [
        { label: "Overview", index: 3 },
        { label: "Approach", index: 4 },
        { label: "Impact", index: 5 },
        { label: "Resolution", index: 6 },
        { label: "Scope", index: 7 },
        { label: "Tech Stack", index: 8 }
      ]
    },
    { 
      label: "Predict+", 
      items: [
        { label: "Overview", index: 9 },
        { label: "Solutions", index: 10 },
        { label: "Impact", index: 11 },
        { label: "Scope", index: 12 },
        { label: "Tech Stack", index: 13 }
      ]
    },
    { label: "Results", index: 14 },
    { label: "Contacts", index: 15 }
  ];

  const stats = [
    { value: "12", label1: "years", label2: "on the market" },
    { value: "55+", label1: "successfully", label2: "delivered projects" },
    { value: "8", label1: "years", label2: "in energy" },
    { value: "6", label1: "years average", label2: "developer's experience" }
  ];

  const solutions = [
    { 
      title: "Predict", 
      desc: "Provides the most accurate, scalable, robust forecast in the industry. Augments individual smart meter data with external sources to accurately forecast grid consumption." 
    },
    { 
      title: "Customer Insights", 
      desc: "Create data-driven sales offerings for customers based on customer-specific load analysis and forecasting." 
    },
    { 
      title: "Market Insights", 
      desc: "Improve energy trading decision-making with AI-generated market demand and renewable energy insights." 
    },
    { 
      title: "Profit Analysis", 
      desc: "Accurately calculate the predicted and actual revenues from end-customers and directly link it to billing systems via API." 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWhoWeAre((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSolution((prev) => (prev + 1) % solutions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [solutions.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveExpertise((prev) => (prev + 1) % expertiseItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [expertiseItems.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveApproach((prev) => (prev + 1) % strategicApproachItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [strategicApproachItems.length]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setCurrentSlide(index + 1);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      const headerHeight = 80; 
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-brand-yellow selection:text-black">
      {/* Top Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 h-20 flex items-center justify-between">
          {/* Wami Logo (Left) */}
          <button onClick={scrollToTop} className="hover:opacity-80 transition-opacity cursor-pointer">
            <img 
              src="/images/logo_wami.svg" 
              alt="Wami Software" 
              className="h-8 md:h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </button>

          {/* Navigation Items (Center) */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item, i) => {
              const isActive = item.items 
                ? item.items.some(sub => sub.index === currentSlide - 1)
                : item.index === currentSlide - 1;

              if (item.items) {
                return (
                  <div 
                    key={i} 
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className={`px-4 py-2 rounded-full text-base font-medium flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                      isActive ? "text-brand-yellow bg-white/5" : "text-white/60 hover:text-white"
                    }`}>
                      {item.label}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl"
                        >
                          {item.items.map((subItem, si) => (
                            <button
                              key={si}
                              onClick={() => {
                                scrollToSlide(subItem.index);
                                setActiveDropdown(null);
                              }}
                              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                                currentSlide === subItem.index + 1
                                  ? "bg-brand-yellow text-black"
                                  : "text-white/60 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={i}
                  onClick={() => scrollToSlide(item.index || 0)}
                  className={`px-4 py-2 rounded-full text-base font-medium transition-all duration-300 cursor-pointer ${
                    isActive ? "text-brand-yellow bg-white/5" : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Side: Tigo Logo & Mobile Menu */}
          <div className="flex items-center gap-6 lg:gap-10">
            <img 
              src="/images/logo_tigo.svg" 
              alt="Tigo" 
              className="h-4 md:h-5 w-auto hidden sm:block"
              referrerPolicy="no-referrer"
            />
            
            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-4">
               <span className="text-brand-yellow font-mono text-xl font-black">
                 {(currentSlide).toString().padStart(2, '0')}
               </span>
               <button 
                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                 className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
               >
                 <motion.span 
                   animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                   className="w-6 h-0.5 bg-white block" 
                 />
                 <motion.span 
                   animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                   className="w-6 h-0.5 bg-white block" 
                 />
                 <motion.span 
                   animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                   className="w-6 h-0.5 bg-white block" 
                 />
               </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm lg:hidden"
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-24 left-4 right-4 z-[100] lg:hidden bg-black border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto"
              >
                <div className="p-6 flex flex-col gap-2">
                  {navItems.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex flex-col"
                    >
                      {item.items ? (
                        <div className="flex flex-col">
                          <button 
                            onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                            className={`flex items-center justify-between w-full px-4 py-4 rounded-2xl text-xl font-bold transition-all cursor-pointer ${
                              currentSlide >= (item.items[0].index + 1) && currentSlide <= (item.items[item.items.length - 1].index + 1)
                                ? "text-brand-yellow" 
                                : "text-white/80"
                            }`}
                          >
                            {item.label}
                            <ChevronDown size={20} className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === item.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-white/5 rounded-2xl mt-1"
                              >
                                <div className="p-2 flex flex-col gap-1">
                                  {item.items.map((sub, si) => (
                                    <button
                                      key={si}
                                      onClick={() => {
                                        scrollToSlide(sub.index);
                                        setIsMobileMenuOpen(false);
                                      }}
                                      className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all cursor-pointer ${
                                        currentSlide === sub.index + 1 
                                          ? "bg-brand-yellow text-black" 
                                          : "text-white/60 hover:bg-white/5 hover:text-white"
                                      }`}
                                    >
                                      {sub.label}
                                    </button>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <button
                          onClick={() => scrollToSlide(item.index || 0)}
                          className={`text-left px-4 py-4 rounded-2xl text-xl font-bold transition-all cursor-pointer ${
                            currentSlide === (item.index || 0) + 1 
                              ? "text-brand-yellow" 
                              : "text-white/80 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {item.label}
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
                
                {/* Mobile Menu Footer */}
                <div className="p-4 bg-white/5 border-t border-white/10 flex items-center justify-between">
                  <img 
                    src="/images/logo_tigo.svg" 
                    alt="Tigo" 
                    className="h-4 w-auto opacity-50"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex gap-4">
                    <Linkedin size={18} className="text-white/40" />
                    <Globe size={18} className="text-white/40" />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Back to Top Button */}
      <AnimatePresence>
        {currentSlide > 1 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-12 right-8 z-50 w-12 h-12 rounded-full bg-brand-yellow text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform cursor-pointer"
            aria-label="Back to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Slide 1: Hero Section */}
      <section 
        ref={(el) => (sectionRefs.current[0] = el)}
        className="relative min-h-screen flex flex-col items-start lg:items-center justify-center px-4 lg:px-20 py-32 lg:py-48 text-left lg:text-center overflow-hidden"
      >
        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-7xl mx-auto z-10 lg:-mt-24 -mt-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.9] tracking-tighter">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-yellow inline-block"
            >
              THE AI-DRIVEN
            </motion.span>{" "}
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white inline-block"
            >
              ENERGY
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white inline-block"
            >
              REVOLUTION
            </motion.span>{" "}
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-brand-yellow inline-block"
            >
              BY WAMI
            </motion.span>
          </h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-xl md:text-3xl lg:text-4xl"
          >
            <span className="text-brand-yellow">WEB AND MOBILE</span>{" "}
            <span className="text-white">SOFTWARE DEVELOPMENT</span>
          </motion.h2>
        </motion.div>

        {/* Hero Image at Bottom with Smooth Scaling Animation */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] pointer-events-none z-0 flex flex-col items-center origin-bottom">
          <motion.img 
            src="/images/image_hero.svg" 
            alt="Hero Decoration" 
            animate={{ 
              scale: [1.2, 1.4, 1.2],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-auto object-cover relative z-10"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Slide 2: Who We Are */}
      <section 
        ref={(el) => (sectionRefs.current[1] = el)}
        className="relative min-h-screen bg-black flex flex-col justify-center px-4 lg:px-20 py-20 border-t border-white/10 overflow-hidden"
      >
        {/* Top Header Section */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4 overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-outline tracking-tighter leading-none uppercase"
          >
            WHO WE ARE
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="md:text-left max-w-md"
          >
            <p className="text-xl md:text-2xl text-white font-medium leading-tight">
              Focused on building long-term <br />
              <span className="text-brand-yellow italic">technology partnerships</span>
            </p>
          </motion.div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-brand-yellow/40 mb-12" />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              We Always Make <span className="text-brand-yellow">Innovation</span>
            </h3>
            
            {/* Double Spirograph Graphic - Desktop Only */}
            <div className="hidden lg:flex relative w-full aspect-square max-w-[420px] mx-auto lg:mx-0 items-center justify-center overflow-hidden">
              {/* Layer 1: Outer/Base rotation */}
              <motion.img 
                src="/images/image_section2.svg"
                alt="Spirograph Layer 1"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full opacity-80"
                referrerPolicy="no-referrer"
              />
              {/* Layer 2: Inner/Counter rotation for "double" effect */}
              <motion.img 
                src="/images/image_section2.svg"
                alt="Spirograph Layer 2"
                animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                transition={{ 
                  rotate: { duration: 45, repeat: Infinity, ease: "linear" },
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute w-[90%] h-[90%] opacity-60 mix-blend-screen"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-12">
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-lg">
              Wamisoftware has been operating since 2014, founded with the goal of building a team driven by responsibility, growth, and modern technologies — a true professional family.
            </p>

            {/* Stats Grid / Mobile Carousel */}
            <div className="relative">
              {/* Desktop Grid */}
              <div className="hidden sm:grid grid-cols-2 gap-y-10 gap-x-6">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-5xl font-black text-brand-yellow leading-none mb-1">{stat.value}</span>
                    <p className="text-xs md:text-sm uppercase tracking-widest leading-tight">
                      <span className="text-white">{stat.label1}</span> <br />
                      <span className="text-brand-yellow">{stat.label2}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile Carousel */}
              <div className="sm:hidden relative overflow-hidden">
                <div className="flex touch-pan-y">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeWhoWeAre}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(_, info) => {
                        const swipeThreshold = 50;
                        if (info.offset.x < -swipeThreshold) {
                          setActiveWhoWeAre((prev) => (prev + 1) % 2);
                        } else if (info.offset.x > swipeThreshold) {
                          setActiveWhoWeAre((prev) => (prev - 1 + 2) % 2);
                        }
                      }}
                      className="w-full grid grid-cols-2 gap-x-4 cursor-grab active:cursor-grabbing"
                    >
                      {stats.slice(activeWhoWeAre * 2, (activeWhoWeAre + 1) * 2).map((stat, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-4xl font-black text-brand-yellow leading-none mb-1">{stat.value}</span>
                          <p className="text-[10px] uppercase tracking-widest leading-tight">
                            <span className="text-white">{stat.label1}</span> <br />
                            <span className="text-brand-yellow">{stat.label2}</span>
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-start gap-2 mt-6">
                  {[0, 1].map((i) => (
                    <button
                      key={i}
                      onClick={() => setActiveWhoWeAre(i)}
                      className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
                        activeWhoWeAre === i ? "bg-brand-yellow w-6" : "bg-white/10 w-3"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Double Spirograph Graphic - Mobile Only (at the bottom) */}
        <div className="lg:hidden relative w-full aspect-square max-w-[300px] mx-auto mt-12 flex items-center justify-center overflow-hidden">
          {/* Layer 1: Outer/Base rotation */}
          <motion.img 
            src="/images/image_section2.svg"
            alt="Spirograph Layer 1"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full opacity-80"
            referrerPolicy="no-referrer"
          />
          {/* Layer 2: Inner/Counter rotation for "double" effect */}
          <motion.img 
            src="/images/image_section2.svg"
            alt="Spirograph Layer 2"
            animate={{ rotate: -360, scale: [1, 1.1, 1] }}
            transition={{ 
              rotate: { duration: 45, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute w-[90%] h-[90%] opacity-60 mix-blend-screen"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>

      {/* Slide 3: Expertise */}
      <section 
        ref={(el) => (sectionRefs.current[2] = el)}
        className="relative min-h-screen bg-black flex flex-col justify-center px-4 lg:px-20 py-20 border-t border-white/10"
      >
        {/* Top Header Section */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-6 relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-outline tracking-tighter leading-none uppercase">
            EXPERTISE
          </h2>
          <div className="md:text-left max-w-md">
            <p className="text-xl md:text-2xl text-white font-medium leading-tight">
              Optimizing energy systems with AI <br />
              <span className="text-brand-yellow italic">You Can Trust</span>
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-brand-yellow/40 mb-12 relative z-10" />

        {/* Expertise Grid / Mobile Carousel */}
        <div className="relative z-10">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="bg-white/5 p-3 md:p-8 rounded-2xl border border-white/10 hover:border-brand-yellow/30 transition-colors duration-300"
              >
                <h4 className="text-xl font-bold text-brand-yellow mb-4">
                  {item.title}
                </h4>
                <p className="text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative overflow-hidden">
            <div className="flex touch-pan-y">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExpertise}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x < -swipeThreshold) {
                      setActiveExpertise((prev) => (prev + 1) % expertiseItems.length);
                    } else if (info.offset.x > swipeThreshold) {
                      setActiveExpertise((prev) => (prev - 1 + expertiseItems.length) % expertiseItems.length);
                    }
                  }}
                  className="w-full bg-white/5 p-6 rounded-2xl border border-white/10 min-h-[200px] flex flex-col justify-center cursor-grab active:cursor-grabbing"
                >
                  <h4 className="text-xl font-bold text-brand-yellow mb-3">
                    {expertiseItems[activeExpertise].title}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {expertiseItems[activeExpertise].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {expertiseItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveExpertise(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    activeExpertise === i ? "bg-brand-yellow w-8" : "bg-white/10 w-4"
                  }`}
                  aria-label={`Go to expertise item ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
      <section 
        ref={(el) => (sectionRefs.current[3] = el)}
        className="relative min-h-screen bg-black flex flex-col justify-center px-4 lg:px-20 py-20 border-t border-white/10 overflow-hidden"
      >
        {/* Partner Logo - REMOVED, moved to Header */}

        {/* Background Decoration - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-1/2 max-w-[600px] pointer-events-none z-0">
          <img 
            src="/images/bg_section4.svg" 
            alt="Background Decoration" 
            className="w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Main Headline */}
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-brand-yellow tracking-tighter leading-[0.9] mb-8"
            >
              Energy <br /> Intelligence
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-white font-medium tracking-tight">
                Fast Data, Flexible Processes & Energy Efficiency
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-white tracking-tight">
                Integrates directly <span className="text-brand-yellow italic font-medium">with energy hardware</span>
              </p>
            </motion.div>
          </div>

          {/* Mission Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col gap-6 max-w-3xl"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
              <span className="text-brand-yellow">The</span> <span className="text-white">mission</span>
            </h3>
            <div className="p-0 md:p-0">
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-tight font-light tracking-tight text-left">
                To develop a SaaS platform for solar installers and operators, offering control over installation and management of photovoltaic systems, from modules to multi-site portfolios.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Slide 5: The Challenge & Strategic Approach */}
      <section 
        ref={(el) => (sectionRefs.current[4] = el)}
        className="relative min-h-screen bg-black flex flex-col justify-center px-4 lg:px-20 py-20 border-t border-white/10 overflow-hidden"
      >
        {/* Decorative Image 2 */}
        <motion.div
          animate={{ 
            x: [0, 15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] opacity-15 pointer-events-none z-0"
        >
          <img 
            src="/images/image2.svg" 
            alt="Decoration 2" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Top Section: The Challenge */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
            >
              <span className="text-white">The</span> <span className="text-brand-yellow">challenge</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-xl md:text-2xl text-white/90 leading-snug">
                We joined a project in progress that required seamless integration between software and solar hardware. <span className="text-brand-yellow">The main task was to stabilize the existing monitoring system, manage massive solar data, and ensure infrastructure reliability.</span>
              </p>
            </motion.div>
          </div>

          {/* Separator Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-[1px] bg-white/20 mb-16 origin-left"
          />

          {/* Bottom Section: Strategic Approach */}
          <div className="flex flex-col gap-12">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              <span className="text-brand-yellow">Strategic</span> <span className="text-white">approach</span>
            </motion.h3>

            {/* Approach Grid (Desktop) */}
            <div className="hidden md:grid grid-cols-2 gap-6">
              {strategicApproachItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 p-3 md:p-8 rounded-2xl border border-white/10"
                >
                  <p className="text-lg md:text-xl leading-relaxed">
                    <span className="text-brand-yellow font-bold">{item.label}:</span>{" "}
                    <span className="text-white/70">{item.content}</span>
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Approach Carousel (Mobile) */}
            <div className="md:hidden relative perspective-1000">
              <div className="relative h-[220px] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeApproach}
                    initial={{ opacity: 0, rotateY: 90, scale: 0.9 }}
                    animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                    exit={{ opacity: 0, rotateY: -90, scale: 0.9 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      const swipeThreshold = 50;
                      if (info.offset.x < -swipeThreshold) {
                        setActiveApproach((prev) => (prev + 1) % strategicApproachItems.length);
                      } else if (info.offset.x > swipeThreshold) {
                        setActiveApproach((prev) => (prev - 1 + strategicApproachItems.length) % strategicApproachItems.length);
                      }
                    }}
                    className="absolute inset-0 bg-white/5 p-3 md:p-8 rounded-2xl border border-white/10 flex flex-col justify-center cursor-grab active:cursor-grabbing backface-hidden"
                  >
                    <p className="text-lg leading-relaxed">
                      <span className="text-brand-yellow font-bold block mb-2">{strategicApproachItems[activeApproach].label}:</span>
                      <span className="text-white/70">{strategicApproachItems[activeApproach].content}</span>
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-3 mt-8">
                {strategicApproachItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveApproach(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                      activeApproach === i ? "bg-brand-yellow w-8" : "bg-white/10 w-4"
                    }`}
                    aria-label={`Go to approach item ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Slide 6: Business Impact */}
      <section 
        ref={(el) => (sectionRefs.current[5] = el)}
        className="relative min-h-screen bg-black flex flex-col justify-center px-4 lg:px-20 py-20 border-t border-white/10 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-16 md:gap-20">
          {/* Top Section: Headline & Subheading */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
            >
              <span className="text-white">Business</span> <span className="text-brand-yellow">impact</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-xl md:text-2xl text-white font-medium leading-tight">
                A stable, high-performance monitoring platform <br />
                <span className="text-brand-yellow italic">
                  that bridges the gap between solar hardware and data efficiency.
                </span>
              </p>
            </motion.div>
          </div>

          {/* Social/App Store Image - Clickable */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="relative inline-flex group">
              <img 
                src="/images/image_social.svg" 
                alt="App Store and Google Play" 
                className="h-8 md:h-12 w-auto opacity-90 transition-opacity group-hover:opacity-100"
                referrerPolicy="no-referrer"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              {/* Invisible overlay links */}
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute left-0 top-0 w-1/2 h-full cursor-pointer z-10"
                aria-label="Download on the App Store"
              />
              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute right-0 top-0 w-1/2 h-full cursor-pointer z-10"
                aria-label="Get it on Google Play"
              />
            </div>
          </motion.div>

          {/* Main Visual: Mockup */}
          <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center">
            <div className="relative w-full aspect-[21/9] md:aspect-[3/1]">
              <img 
                src="/images/mockup_slide6.svg" 
                alt="Tigo Energy Intelligence Dashboard Mockup" 
                className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                referrerPolicy="no-referrer"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
            
            {/* Animated Spirograph for Slide 6 */}
            <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-30 z-0 overflow-hidden">
              <motion.img 
                src="/images/image_slide6.svg"
                alt="Spirograph Slide 6 Layer 1"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full scale-125 translate-x-1/3"
                referrerPolicy="no-referrer"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <motion.img 
                src="/images/image_slide6.svg"
                alt="Spirograph Slide 6 Layer 2"
                animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                transition={{ 
                  rotate: { duration: 55, repeat: Infinity, ease: "linear" },
                  scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute w-[85%] h-[85%] top-[7.5%] left-[40%] opacity-60 mix-blend-screen"
                referrerPolicy="no-referrer"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
          </div>

          {/* Bottom Impact Summary Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/5 border border-white/10 p-4 md:p-12 rounded-3xl backdrop-blur-sm"
          >
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed text-center max-w-5xl mx-auto">
              <span className="text-brand-yellow font-bold">Tigo Energy Intelligence</span> is used by thousands of solar installers, asset managers, and building owners <span className="text-brand-yellow font-bold">in 100+ countries</span>. The all-in-one commissioning and monitoring platform <span className="text-brand-yellow font-bold">enables module and system-level visibility</span> along with a suite of multi-site management capabilities.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Slide 7: The Resolution */}
      <section 
        ref={(el) => (sectionRefs.current[6] = el)}
        className="relative min-h-screen bg-black flex flex-col justify-center px-4 lg:px-20 py-20 border-t border-white/10 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Top Section: The Resolution */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
            >
              <span className="text-white">The</span> <span className="text-brand-yellow">resolution</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-xl md:text-2xl text-white font-medium leading-tight">
                We helped improve the financial results <br />
                <span className="text-brand-yellow italic">
                  of Tigo's clients' businesses and projects.
                </span>
              </p>
            </motion.div>
          </div>

          {/* Separator Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-[1px] bg-white/20 mb-20 origin-left"
          />

          {/* Resolution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: (
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <img src="/images/truck.svg" alt="Truck Icon" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
                  </div>
                ),
                title: "Lower O&M",
                desc: "Avoid truck rolls with remote access to any connected component on any site from anywhere."
              },
              {
                icon: (
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <img src="/images/desctop.svg" alt="Desktop Icon" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
                  </div>
                ),
                title: "More production",
                desc: "Minimize lost production with automated monitoring of fleet health and performance."
              },
              {
                icon: (
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <img src="/images/time.svg" alt="Time Icon" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
                  </div>
                ),
                title: "Faster commissioning",
                desc: "Create a virtual layout in minutes with bulk scanning of Tigo TS4's and equipment auto-detection."
              },
              {
                icon: (
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <img src="/images/like.svg" alt="Like Icon" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
                  </div>
                ),
                title: "Happier customers",
                desc: "Get critical alerts from intelligent software working for you 24/7, not from customers."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="mb-2">
                    {item.icon}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-xl md:text-2xl font-medium text-brand-yellow tracking-tight font-sans">
                    {item.title}
                  </h4>
                  <p className="text-lg text-white/80 leading-snug font-light font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Slide 8: Scope of Work */}
      <section 
        ref={(el) => (sectionRefs.current[7] = el)}
        className="relative min-h-screen bg-black flex flex-col justify-center px-4 lg:px-20 py-20 border-t border-white/10 overflow-hidden"
      >
        {/* Decorative Image 3 */}
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            duration: 11, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] opacity-15 pointer-events-none z-0"
        >
          <img 
            src="/images/image3.svg" 
            alt="Decoration 3 Scope" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Top Section: Scope of Work */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none uppercase"
            >
              <span className="text-white">Scope</span> <span className="text-brand-yellow">of work</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-xl md:text-2xl text-white font-medium leading-tight">
                While working on the project, <br />
                <span className="text-brand-yellow italic">
                  we provided the following services
                </span>
              </p>
            </motion.div>
          </div>

          {/* Separator Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-[1px] bg-white/20 mb-16 origin-left"
          />

          {/* Services Grid with Collapsible for Mobile */}
          <div className="flex flex-col gap-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-0">
              {/* Combined list for easier slicing on mobile */}
              {[
                "Custom Web Development",
                "Custom Mobile Development",
                "AI & ML Software Development",
                "AI Consulting",
                "Team Extension",
                "Business Analysis",
                "Design Development",
                "DevOps",
                "Quality Assurance",
                "Software & Code Audit"
              ].map((service, index) => {
                const isHiddenOnMobile = index >= 6 && !showMoreScope;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: index < 5 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className={`py-6 border-b border-white/10 ${isHiddenOnMobile ? 'hidden md:block' : 'block'}`}
                  >
                    <span className="text-xl md:text-2xl text-white font-medium tracking-tight font-sans">
                      {service}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Show More Button for Mobile */}
            <div className="md:hidden flex justify-center mt-8">
              <button 
                onClick={() => setShowMoreScope(!showMoreScope)}
                className="flex items-center gap-2 text-brand-yellow font-bold uppercase tracking-widest text-sm cursor-pointer"
              >
                {showMoreScope ? "Show Less" : "Show More"}
                <ChevronDown className={`transition-transform duration-300 ${showMoreScope ? 'rotate-180' : ''}`} size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Slide 9: Technology Stack */}
      <section 
        ref={(el) => (sectionRefs.current[8] = el)}
        className="relative min-h-screen bg-black flex flex-col justify-center px-4 lg:px-20 py-20 border-t border-white/10 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Top Section: Technology Stack */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none uppercase"
            >
              <span className="text-white">Technology</span> <span className="text-brand-yellow">stack</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-xl md:text-2xl text-white font-medium leading-tight">
                We utilize a robust tech stack tailored <br />
                <span className="text-brand-yellow italic">
                  to deliver high-performance solutions:
                </span>
              </p>
            </motion.div>
          </div>

          {/* Separator Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-[1px] bg-white/20 mb-16 origin-left"
          />

          {/* Content Grid with Collapsible for Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Tech List */}
            <div className="flex flex-col">
              {[
                "Node.js backend",
                "Vue.js frontend",
                "Ionic Vue for mobile",
                "Python for AI",
                "Azure Devops for Devops",
                "Figma for design",
                "Gitlab for management"
              ].map((tech, index) => {
                const isHiddenOnMobile = index >= 6 && !showMoreTech;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`py-5 border-b border-white/10 ${isHiddenOnMobile ? 'hidden md:block' : 'block'}`}
                  >
                    <span className="text-xl md:text-2xl text-white font-medium tracking-tight font-sans">
                      {tech}
                    </span>
                  </motion.div>
                );
              })}

              {/* Show More Button for Mobile */}
              <div className="md:hidden flex justify-center mt-8">
                <button 
                  onClick={() => setShowMoreTech(!showMoreTech)}
                  className="flex items-center gap-2 text-brand-yellow font-bold uppercase tracking-widest text-sm cursor-pointer"
                >
                  {showMoreTech ? "Show Less" : "Show More"}
                  <ChevronDown className={`transition-transform duration-300 ${showMoreTech ? 'rotate-180' : ''}`} size={18} />
                </button>
              </div>
            </div>

            {/* Right: Mockup Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center"
            >
              <motion.img 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src="/images/image_slide9.svg" 
                alt="Technology Stack Mockup" 
                className="w-full max-w-[700px] h-auto drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Slide 10: Predict+ */}
      <section 
        ref={(el) => (sectionRefs.current[9] = el)}
        className="relative min-h-screen bg-black flex flex-col justify-center px-4 lg:px-20 py-20 border-t border-white/10 overflow-hidden"
      >
        {/* Partner Logo - REMOVED, moved to Header */}

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-brand-yellow tracking-tighter mb-6 leading-none uppercase">
              Predict+
            </h2>
                <div className="flex flex-col gap-2">
                  <p className="text-2xl md:text-3xl text-white font-medium tracking-tight">
                    Complex solar portfolio management platform
                  </p>
                  <p className="text-2xl md:text-3xl text-white font-medium tracking-tight">
                    Designed specifically <span className="text-brand-yellow italic">for government use</span>
                  </p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl font-light font-sans"
              >
                Predict+ uses AI and machine learning technology to automatically forecast electricity generation and consumption of individual endpoints or aggregated energy portfolios for utilities, IPP's and grid planners.
              </motion.p>
            </div>

            {/* Right: Mockup Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center"
            >
              <motion.img 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src="/images/image_slide10.svg" 
                alt="Predict+ Dashboard Mockup" 
                className="w-full max-w-[700px] h-auto drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Slide 11: The solutions */}
      <section 
        ref={(el) => (sectionRefs.current[10] = el)}
        className="relative min-h-screen bg-black flex flex-col justify-center px-4 lg:px-20 py-20 border-t border-white/10 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 flex flex-col lg:flex-row lg:items-baseline lg:gap-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none uppercase">
              <span className="text-white">The </span>
              <span className="text-brand-yellow">solutions</span>
            </h2>
            <p className="text-xl md:text-2xl text-white font-medium leading-tight">
              Multiple features to enhance <span className="text-brand-yellow italic">energy operations</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Mockup Image (Cols 1-5) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex justify-center lg:justify-start"
            >
              <motion.img 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src="/images/image_slide11.svg" 
                alt="The solutions Mockup" 
                className="w-full max-w-[550px] h-auto drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Right: 4 Text Blocks / Mobile Carousel (Cols 6-12) */}
            <div className="lg:col-span-7">
              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-2 gap-x-12 gap-y-10">
                {solutions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                    className="flex flex-col gap-3"
                  >
                    <h4 className="text-xl md:text-2xl font-bold text-brand-yellow">
                      {item.title}
                    </h4>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Carousel */}
              <div className="md:hidden relative">
                <div className="relative h-[280px] w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSolution}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(_, info) => {
                        const swipeThreshold = 50;
                        if (info.offset.x < -swipeThreshold) {
                          setActiveSolution((prev) => (prev + 1) % solutions.length);
                        } else if (info.offset.x > swipeThreshold) {
                          setActiveSolution((prev) => (prev - 1 + solutions.length) % solutions.length);
                        }
                      }}
                  className="absolute inset-0 bg-white/5 p-3 md:p-8 rounded-2xl border border-white/10 flex flex-col justify-center cursor-grab active:cursor-grabbing"
                    >
                      <h4 className="text-xl font-bold text-brand-yellow mb-3">
                        {solutions[activeSolution].title}
                      </h4>
                      <p className="text-white/70 text-base leading-relaxed">
                        {solutions[activeSolution].desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                  {solutions.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSolution(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                        activeSolution === i ? "bg-brand-yellow w-8" : "bg-white/10 w-4"
                      }`}
                      aria-label={`Go to solution item ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Spheres (Bottom Right) */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 pointer-events-none opacity-40">
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-brand-yellow/40 to-transparent blur-2xl" />
          <div className="absolute bottom-20 right-40 w-24 h-24 rounded-full bg-gradient-to-br from-brand-yellow/20 to-transparent blur-xl" />
        </div>
      </section>
      {/* Slide 12: Predict+ Business Impact */}
      <section 
        ref={(el) => (sectionRefs.current[11] = el)}
        className="relative min-h-screen bg-black flex flex-col justify-center px-4 lg:px-20 py-20 border-t border-white/10 overflow-hidden"
      >
        {/* Decorative Image 3 */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 8, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] opacity-20 pointer-events-none z-0"
        >
          <img 
            src="/images/image3.svg" 
            alt="Decoration 3" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-16">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none uppercase"
            >
              <span className="text-white">Predict+</span> <span className="text-brand-yellow">impact</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-xl md:text-2xl text-white font-medium leading-tight">
                Empowering grid operators with <br />
                <span className="text-brand-yellow italic">
                  unprecedented forecasting precision and control.
                </span>
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { title: "98.5%", label: "Forecast Accuracy", desc: "Industry-leading precision for grid demand prediction." },
              { title: "100+", label: "Countries", desc: "Global deployment supporting diverse energy markets." },
              { title: "24/7", label: "Real-time Monitoring", desc: "Automated insights working around the clock." }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 text-center"
              >
                <span className="text-4xl md:text-6xl font-black text-brand-yellow block mb-1 md:mb-2">{stat.title}</span>
                <span className="text-xl font-bold text-white block mb-1 md:mb-2">{stat.label}</span>
                <p className="text-white/60 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 13: Predict+ Scope of work */}
      <section 
        ref={(el) => (sectionRefs.current[12] = el)}
        className="relative min-h-screen bg-black flex flex-col justify-center px-4 lg:px-20 py-20 border-t border-white/10 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex flex-col lg:flex-row lg:items-baseline lg:gap-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none uppercase">
              <span className="text-white">Predict+ </span>
              <span className="text-brand-yellow">scope</span>
            </h2>
            <p className="text-xl md:text-2xl text-white font-medium leading-tight">
              Comprehensive development and <span className="text-brand-yellow italic">AI integration services</span>
            </p>
          </motion.div>

          {/* Separator Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="w-full h-[1px] bg-brand-yellow/40 mb-16 origin-left"
          />

          {/* Services Grid with Collapsible for Mobile */}
          <div className="flex flex-col gap-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-0">
              {/* Combined list for easier slicing on mobile */}
              {[
                "Custom Web Development",
                "Custom Mobile Development",
                "AI & ML Software Development",
                "AI Consulting",
                "Team Extension",
                "Business Analysis",
                "Design Development",
                "DevOps",
                "Quality Assurance",
                "Cloud Infrastructure"
              ].map((service, index) => {
                const isHiddenOnMobile = index >= 6 && !showMorePredictScope;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index < 5 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className={`py-6 border-b border-white/10 ${isHiddenOnMobile ? 'hidden md:block' : 'block'}`}
                  >
                    <span className="text-xl md:text-2xl text-white font-light">
                      {service}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Show More Button for Mobile */}
            <div className="md:hidden flex justify-center mt-8">
              <button 
                onClick={() => setShowMorePredictScope(!showMorePredictScope)}
                className="flex items-center gap-2 text-brand-yellow font-bold uppercase tracking-widest text-sm cursor-pointer"
              >
                {showMorePredictScope ? "Show Less" : "Show More"}
                <ChevronDown className={`transition-transform duration-300 ${showMorePredictScope ? 'rotate-180' : ''}`} size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 14: Technology Stack (Predict+) */}
      <section 
        ref={(el) => (sectionRefs.current[13] = el)}
        className="relative min-h-screen bg-black flex flex-col justify-center px-4 lg:px-20 py-20 border-t border-white/10 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Top Section: Technology Stack */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none uppercase"
            >
              <span className="text-white">Technology</span> <span className="text-brand-yellow">stack</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-xl md:text-2xl text-white font-medium leading-tight">
                We utilize a robust tech stack tailored <br />
                <span className="text-brand-yellow italic">
                  to deliver high-performance solutions:
                </span>
              </p>
            </motion.div>
          </div>

          {/* Separator Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-[1px] bg-white/20 mb-16 origin-left"
          />

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Tech List */}
            <div className="flex flex-col">
              {[
                "Java for backend",
                "React.js for frontend",
                "Azure Devops for devops",
                "Python for AI",
                "Figma for design",
                "Azure for management"
              ].map((tech, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="py-5 border-b border-white/10"
                >
                  <span className="text-xl md:text-2xl text-white font-medium tracking-tight font-sans">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Right: Mockup Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center"
            >
              <motion.img 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src="/images/image_slide13.svg" 
                alt="Predict+ Technology Stack Mockup" 
                className="w-full max-w-[700px] h-auto drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Slide 15: Proven Results */}
      <section 
        ref={(el) => (sectionRefs.current[14] = el)}
        className="relative min-h-screen bg-black flex flex-col justify-center px-4 lg:px-20 py-20 border-t border-white/10 overflow-hidden"
      >
        {/* Decorative Image 1 */}
        <motion.div
          animate={{ 
            x: [0, -20, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -bottom-20 -right-20 w-[400px] h-[400px] opacity-15 pointer-events-none z-0"
        >
          <img 
            src="/images/image1.svg" 
            alt="Decoration 1 Results" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-8 relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-outline tracking-tighter leading-none uppercase">
              PROVEN RESULTS
            </h2>
            <div className="md:text-left max-w-md">
              <p className="text-xl md:text-2xl text-white font-medium leading-tight">
                Results that speak for themselves.
              </p>
              <p className="text-xl md:text-2xl text-brand-yellow italic font-medium leading-tight">
                Just the facts.
              </p>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="w-full h-[1px] bg-white/20 mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1px_0.8fr] gap-12 items-start">
            {/* Left Column: Team Composition */}
            <div className="flex flex-col gap-12">
              <div className="flex items-start justify-between">
                <h3 className="text-4xl md:text-5xl font-bold">
                  <span className="text-brand-yellow">Team</span> <span className="text-white">composition</span>
                </h3>
                
                {/* Legend - Vertical as in mockup */}
                <div className="flex flex-col gap-3 mt-2">
                  {[
                    { name: "Senior", color: "#FBF950" },
                    { name: "Middle", color: "#FF69B4" },
                    { name: "Junior", color: "#4ADE80" }
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: item.color }} />
                      <span className="text-sm text-white font-medium uppercase tracking-widest">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-start gap-16">
                {/* Typical Teams Chart */}
                <div className="flex flex-col items-center gap-8">
                  <div className="w-[200px] h-[200px] relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={TYPICAL_TEAM_DATA}
                          innerRadius="60%"
                          outerRadius="85%"
                          paddingAngle={8}
                          dataKey="value"
                          stroke="none"
                          startAngle={90}
                          endAngle={450}
                          cornerRadius={4}
                        >
                          {TYPICAL_TEAM_DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    {/* Labels with lines (simulated with absolute positioning to match mockup) */}
                    <div className="absolute inset-0 pointer-events-none">
                      {/* 50% Label (Senior - Yellow) - Positioned on the left where the 50% segment is */}
                      <div className="absolute top-1/2 left-[-20%] -translate-y-1/2 flex items-center">
                        <span className="text-brand-yellow font-bold text-lg">50%</span>
                        <div className="w-6 h-[1px] bg-brand-yellow/50 ml-2" />
                      </div>
                      {/* 10% Label (Middle - Pink) - Positioned near the bottom-right segment */}
                      <div className="absolute bottom-[5%] right-[10%] flex items-center">
                        <div className="w-6 h-[1px] bg-[#FF69B4]/50 mr-2" />
                        <span className="text-[#FF69B4] font-bold text-lg">10%</span>
                      </div>
                      {/* 40% Label (Junior - Green) - Positioned near the top-right segment */}
                      <div className="absolute top-[15%] right-[-10%] flex items-center">
                        <div className="w-6 h-[1px] bg-[#4ADE80]/50 mr-2" />
                        <span className="text-[#4ADE80] font-bold text-lg">40%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-2xl font-bold">
                    <span className="text-white">Typical</span> <span className="text-brand-yellow">teams</span>
                  </p>
                </div>

                {/* WAMI Teams Chart */}
                <div className="flex flex-col items-center gap-8">
                  <div className="w-[200px] h-[200px] relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={WAMI_TEAM_DATA}
                          innerRadius="60%"
                          outerRadius="85%"
                          paddingAngle={8}
                          dataKey="value"
                          stroke="none"
                          startAngle={90}
                          endAngle={450}
                          cornerRadius={4}
                        >
                          {WAMI_TEAM_DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    {/* Labels for WAMI */}
                    <div className="absolute inset-0 pointer-events-none">
                      {/* 99% Label (Senior - Yellow) - Positioned on the left where the dominant 99% segment is */}
                      <div className="absolute top-1/2 left-[-20%] -translate-y-1/2 flex items-center">
                        <span className="text-brand-yellow font-bold text-lg">99%</span>
                        <div className="w-6 h-[1px] bg-brand-yellow/50 ml-2" />
                      </div>
                      {/* 1% Label (Middle - Pink) - Positioned near the top-right sliver */}
                      <div className="absolute top-[5%] right-[5%] flex items-center">
                        <div className="w-6 h-[1px] bg-[#FF69B4]/50 mr-2" />
                        <span className="text-[#FF69B4] font-bold text-lg">1%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-2xl font-bold">
                    <span className="text-brand-yellow">WAMI</span> <span className="text-white">teams</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-[1px] h-full bg-white/20 self-stretch" />

            {/* Right Column: Stats */}
            <div className="flex flex-col justify-center gap-24 lg:pl-12 relative">
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center w-fit mx-auto">
                <span className="text-5xl md:text-6xl font-black text-brand-yellow leading-none mb-4 whitespace-nowrap">98.5%</span>
                <p className="text-xl md:text-2xl text-white font-medium tracking-tight whitespace-nowrap">Forecasting accuracy</p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center w-fit mx-auto">
                <span className="text-5xl md:text-6xl font-black text-brand-yellow leading-none mb-4 whitespace-nowrap">1 000 000+</span>
                <p className="text-xl md:text-2xl text-white font-medium tracking-tight whitespace-nowrap">Data points processed daily</p>
              </div>

              {/* Decorative Glowing Swirl - REMOVED */}
            </div>
          </div>
        </div>
      </section>
      {/* Slide 16: Final Slide */}
      <section 
        ref={(el) => (sectionRefs.current[15] = el)}
        className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 lg:px-20 py-24 lg:py-32 border-t border-white/10 overflow-hidden text-center"
      >
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-12 lg:gap-20 w-full"
          >
            {/* Main Headline */}
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter uppercase text-center">
                <span className="text-brand-yellow">WE’RE</span> <span className="text-white">HAPPY</span>
              </h1>
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-xl md:text-3xl lg:text-4xl text-white text-center uppercase font-bold tracking-tight">
                  TO WALK YOU THROUGH
                </h2>
                <h2 className="text-xl md:text-3xl lg:text-4xl text-brand-yellow text-center uppercase font-bold tracking-tight">
                  THE DETAILS AND NEXT STEPS
                </h2>
              </div>
            </div>

            {/* Contact Links - Pill Style */}
            <div className="flex flex-wrap justify-center gap-3 w-full max-w-5xl">
            {[
                { 
                  label: "info@wamisoftware.com", 
                  onClick: () => setIsEmailModalOpen(true),
                  large: true 
                },
                { label: "YouTube", href: "#" },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/wamisoftware/posts/?feedView=all" },
                { label: "Facebook", href: "https://www.facebook.com/wamisoftware/" },
                { label: "Medium", href: "https://medium.com/@info.wamisoftware" },
                { label: "Instagram", href: "https://www.instagram.com/wamisoftware?igsh=cW50a3ZxbzdldXlz&utm_source=qr" },
                { label: "TikTok", href: "https://www.tiktok.com/@wamisoftware?_r=1&_t=ZS-94nCY0hmzDz" },
                { label: "Clutch", href: "https://clutch.co/profile/wamisoftware?_gl=1*1bla7gf*_gcl_au*MTE4NTE5Mzc0MS4xNzQ3MDQ1Nzk4*FPAU*MTcyMTEyMzIwMi4xNzQ3MDQ1Nzk4*_ga*MTgyOTk2OTQ3My4xNzQ3MDQ1Nzk4*_ga_D0WFGX8X3V*czE3NDcxNDMzMzAkbzYkZzEkdDE3NDcxNDQ2NjIkajYwJGwwJGgyMDIwNjY3NjQ0*_fplc*RFZOb2JjS1RzT1R4anpSTjdibU92SWw0WUNhVktLdGszSmRSVzVycUxlTlZseWtQbWFrdGpzOE5GelFyMnJ4TiUyQmRLdHElMkY3eUl4TlY1RW54ZlZVZTJMeDIzNmhCa3l3aG1QUlpZOCUyRjdFdGRoV2NqQnZ5aHRiUkxyc3BmT3dRJTNEJTNE" },
              ].map((contact, i) => {
                const Component = contact.onClick ? 'button' : 'a';
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                  >
                    <Component
                      href={contact.href}
                      onClick={contact.onClick}
                      target={contact.href ? "_blank" : undefined}
                      rel={contact.href ? "noopener noreferrer" : undefined}
                      className={`group flex items-center gap-3 px-6 py-4 rounded-2xl bg-black border border-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer ${
                        contact.large ? "md:px-10" : ""
                      }`}
                    >
                      <span className="text-white font-bold tracking-tight whitespace-nowrap">
                        {contact.label}
                      </span>
                      <ArrowUpRight size={18} className="text-white/40 group-hover:text-white transition-colors" />
                    </Component>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Hero Image at Bottom with Smooth Scaling Animation */}
        <div className="absolute bottom-[20%] left-0 right-0 w-full pointer-events-none z-0 flex flex-col items-center">
          <motion.img 
            src="/images/image_hero.svg" 
            alt="Hero Decoration" 
            animate={{ 
              scale: [1.15, 1.25, 1.15],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-auto object-cover relative z-10 scale-y-125"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
      {/* Email Selection Modal */}
      <AnimatePresence>
        {isEmailModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEmailModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#121212] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl"
            >
              <button 
                onClick={() => setIsEmailModalOpen(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-bold text-white tracking-tight">Send us an email</h3>
                  <p className="text-white/40 text-sm">Choose your preferred way to contact us</p>
                </div>

                <div className="flex flex-col gap-3">
                  {[
                    { 
                      label: "Open in Gmail", 
                      icon: <Globe size={20} />, 
                      href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@wamisoftware.com" 
                    },
                    { 
                      label: "Open in Outlook", 
                      icon: <Mail size={20} />, 
                      href: "https://outlook.office.com/mail/deeplink/compose?to=info@wamisoftware.com" 
                    },
                    { 
                      label: "Open in Default App", 
                      icon: <ExternalLink size={20} />, 
                      href: "mailto:info@wamisoftware.com" 
                    },
                    { 
                      label: isCopied ? "Email Copied!" : "Copy Email Address", 
                      icon: isCopied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />, 
                      action: () => {
                        navigator.clipboard.writeText("info@wamisoftware.com");
                        setIsCopied(true);
                        setTimeout(() => {
                          setIsCopied(false);
                          setIsEmailModalOpen(false);
                        }, 1500);
                      }
                    }
                  ].map((option, i) => (
                    option.href ? (
                      <a
                        key={i}
                        href={option.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsEmailModalOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                      >
                        <div className="text-white/60">{option.icon}</div>
                        <span className="text-white font-bold">{option.label}</span>
                      </a>
                    ) : (
                      <button
                        key={i}
                        onClick={option.action}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer w-full text-left"
                      >
                        <div className="text-white/60">{option.icon}</div>
                        <span className="text-white font-bold">{option.label}</span>
                      </button>
                    )
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
