import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
    const [index, setIndex] = useState(0);
    const messages = [
        {
            main: "Consulting the Stars...",
            sub: "Aligning your earthly pillars with the celestial movements of the cosmos."
        },
        {
            main: "Deciphering Ancient Wisdom...",
            sub: "Merging Korean Saju traditions with the vibrational frequency of Western Numerology."
        },
        {
            main: "Mapping Your Destiny...",
            sub: "Synthesizing timeless insights to illuminate your unique path in this universe."
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            className="loading-screen flex-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, #1a0f00 0%, #050505 100%)',
                zIndex: 1000,
                flexDirection: 'column',
                padding: '20px',
                overflow: 'hidden'
            }}
        >
            {/* Pulsing Aura Overlay */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.05, 0.15, 0.05]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    zIndex: 0
                }}
            />

            <div style={{ position: 'relative', marginBottom: '80px', zIndex: 1 }}>
                {/* Symbol with Glow and Masking */}
                <div style={{
                    position: 'relative',
                    width: '280px',
                    height: '280px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'url("/loading_symbol.png")',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            filter: 'drop-shadow(0 0 30px rgba(212, 175, 55, 0.6))',
                            maskImage: 'radial-gradient(circle, black 50%, transparent 95%)',
                            WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 95%)'
                        }}
                    />

                    {/* Inner glowing core */}
                    <motion.div
                        animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.1, 0.8] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{
                            position: 'absolute',
                            width: '40px',
                            height: '40px',
                            background: '#fff',
                            borderRadius: '50%',
                            filter: 'blur(15px)',
                            boxShadow: '0 0 40px #d4af37'
                        }}
                    />
                </div>

                {/* Elegant Rotating Ornament */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        top: '-30px',
                        left: '-30px',
                        right: '-30px',
                        bottom: '-30px',
                        border: '1.5px solid rgba(212, 175, 55, 0.15)',
                        borderRadius: '50%',
                        boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.05)'
                    }}
                />
            </div>

            <div style={{ height: '120px', textAlign: 'center', maxWidth: '500px', zIndex: 10 }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h2 style={{
                            fontSize: '2rem',
                            color: '#fff',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            letterSpacing: '0.15em',
                            fontFamily: '"Cinzel", serif',
                            textShadow: '0 4px 20px rgba(212, 175, 55, 0.4)'
                        }}>
                            {messages[index].main}
                        </h2>
                        <p style={{
                            fontSize: '1rem',
                            color: 'var(--text-primary)',
                            lineHeight: '1.8',
                            opacity: 0.6,
                            letterSpacing: '0.05em',
                            fontWeight: '300',
                            fontFamily: '"Noto Serif KR", serif'
                        }}>
                            {messages[index].sub}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Premium Progress Indicator */}
            <div style={{
                width: '300px',
                height: '1px',
                background: 'rgba(255,255,255,0.05)',
                marginTop: '60px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <motion.div
                    animate={{ left: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "anticipate" }}
                    style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
                        position: 'absolute'
                    }}
                />
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
