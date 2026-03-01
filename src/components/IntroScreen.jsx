import React from 'react';
import { motion } from 'framer-motion';

const IntroScreen = () => {
    // Generate some random sparkles for the "fortuneteller's house" vibe
    const sparkles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4
    }));

    return (
        <motion.div
            className="intro-screen flex-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, #1a0f00 0%, #050505 100%)',
                zIndex: 1000,
                overflow: 'hidden'
            }}
        >
            {/* Layered Mystical Backgrounds */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/oriental-tiles.png")',
                opacity: 0.05,
                mixBlendMode: 'overlay'
            }} />

            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    inset: '-10%',
                    background: 'radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(0, 168, 107, 0.03) 0%, transparent 50%)',
                    filter: 'blur(30px)',
                    zIndex: 0
                }}
            />

            {/* Floating Sparkles */}
            {sparkles.map(s => (
                <motion.div
                    key={s.id}
                    className="sparkle"
                    animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.2, 0]
                    }}
                    transition={{
                        duration: s.duration,
                        repeat: Infinity,
                        delay: s.delay,
                        ease: "easeInOut"
                    }}
                    style={{
                        top: s.top,
                        left: s.left,
                        background: s.id % 2 === 0 ? '#d4af37' : '#fff'
                    }}
                />
            ))}

            <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                {/* Advanced Geometric Totem */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ duration: 2.5, ease: "circOut" }}
                    style={{ marginBottom: '40px', position: 'relative' }}
                >
                    <svg width="180" height="180" viewBox="0 0 100 100">
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        <motion.circle
                            cx="50" cy="50" r="48"
                            stroke="#d4af37"
                            strokeWidth="0.2"
                            fill="none"
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />

                        {/* Outer rotating ritual ring */}
                        <motion.path
                            d="M50 5 A45 45 0 0 1 95 50 A45 45 0 0 1 50 95 A45 45 0 0 1 5 50 A45 45 0 0 1 50 5"
                            stroke="rgba(212, 175, 55, 0.4)"
                            strokeWidth="0.5"
                            fill="none"
                            strokeDasharray="5, 10"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Core mystical geometry: Replace X with stylized Bagua/Lotus */}
                        <motion.circle
                            cx="50" cy="50" r="30"
                            stroke="#00a86b"
                            strokeWidth="1.5"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 3, ease: "easeInOut" }}
                            filter="url(#glow)"
                        />

                        {/* Stylized Hexagram/Bagua elements instead of X */}
                        <motion.path
                            d="M50 20 L65 35 M50 80 L35 65 M20 50 L35 35 M80 50 L65 65"
                            stroke="#d4af37"
                            strokeWidth="1"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 1, duration: 2 }}
                        />

                        {/* Traditional Oriental Decorative Squares (Interlocked) */}
                        <motion.rect
                            x="35" y="35" width="30" height="30"
                            stroke="#d4af37"
                            strokeWidth="0.5"
                            fill="none"
                            animate={{ rotate: 45 }}
                            transition={{ duration: 0 }}
                        />
                        <motion.rect
                            x="35" y="35" width="30" height="30"
                            stroke="#d4af37"
                            strokeWidth="0.5"
                            fill="none"
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0 }}
                        />

                        <circle cx="50" cy="50" r="3" fill="#fff" filter="url(#glow)">
                            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1.5 }}
                >
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: '300',
                        letterSpacing: '0.5em',
                        color: '#d4af37',
                        fontFamily: '"Cinzel", serif',
                        textShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
                        marginBottom: '10px'
                    }}>
                        K-SAJU
                    </h1>
                    <p style={{
                        fontSize: '0.8rem',
                        letterSpacing: '0.8em',
                        color: '#d4af37',
                        opacity: 0.6,
                        textTransform: 'uppercase',
                        marginLeft: '0.8em'
                    }}>
                        Hunters of Fate
                    </p>
                </motion.div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2.5, duration: 2 }}
                    style={{
                        height: '1px',
                        width: '200px',
                        background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent)',
                        margin: '30px auto'
                    }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1.5 }}
                    style={{
                        fontSize: '0.9rem',
                        color: '#f4e4bc',
                        fontStyle: 'italic',
                        letterSpacing: '0.15em',
                        opacity: 0.4
                    }}
                >
                    Stepping into the Archive of Destiny...
                </motion.p>
            </div>
        </motion.div>
    );
};

export default IntroScreen;
