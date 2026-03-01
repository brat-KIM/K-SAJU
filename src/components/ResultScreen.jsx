import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, ChevronDown, ChevronUp } from 'lucide-react';

const ResultScreen = ({ results, userData }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    const categories = [
        { id: 'overall', title: 'Overall Reading', content: results.advice.overall },
        { id: 'wealth', title: 'Wealth Fortune', content: results.advice.wealth },
        { id: 'love', title: 'Love & Harmony', content: results.advice.love },
        { id: 'today', title: 'Daily Guidance (Must Do)', content: results.advice.action },
        { id: 'energy', title: 'Energy Alignment & Flow', content: results.advice.energyDirection },
        { id: 'boost', title: 'How to Boost Your Energy', content: results.advice.energyBoost },
        { id: 'future', title: 'Future Preparations', content: results.advice.nextSteps }
    ];

    const toggleCategory = (id) => {
        setActiveCategory(activeCategory === id ? null : id);
    };

    const shareResults = () => {
        const text = `Check out my K-SAJU & Numerology reading! 🌟\nEnergy Number: ${results.numerology.number}\n\nRead more at K-SAJU HUNTERS`;
        if (navigator.share) {
            navigator.share({
                title: 'K-SAJU Reading',
                text: text,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(text);
            alert('Results copied to clipboard!');
        }
    };

    const getElementColor = (element) => {
        const colors = {
            'Wood': '#00a86b',
            'Fire': '#ff4d4d',
            'Earth': '#d4af37',
            'Metal': '#ffffff',
            'Water': '#4d79ff'
        };
        return colors[element] || '#ccc';
    };

    return (
        <motion.div
            className="result-screen result-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ padding: 'clamp(40px, 8vw, 80px) 20px', minHeight: '100vh', position: 'relative' }}
        >
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <header style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 80px)' }}>
                    <h2 style={{ color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '0.4em', textTransform: 'uppercase', opacity: 0.8 }}>Archive of Destiny</h2>
                    <h1 className="calligraphy" style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        marginTop: '5px',
                        color: '#fff',
                        textShadow: '0 0 40px rgba(255,255,255,0.1)'
                    }}>{userData.name}</h1>
                </header>

                {/* Saju Pillars Table */}
                <section style={{ marginBottom: 'clamp(50px, 10vw, 80px)' }}>
                    <h3 style={{
                        color: 'var(--gold)',
                        fontSize: '0.75rem',
                        marginBottom: '20px',
                        letterSpacing: '0.3em',
                        textAlign: 'center',
                        fontFamily: '"Cinzel", serif'
                    }}>EIGHT PILLARS OF DESTINY</h3>
                    <div className="saju-table" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 'clamp(8px, 2vw, 15px)',
                        background: 'rgba(10, 8, 5, 0.75)',
                        padding: 'clamp(20px, 5vw, 40px) clamp(10px, 3vw, 20px)',
                        borderRadius: '20px',
                        border: '1px solid rgba(212, 175, 55, 0.25)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                    }}>
                        {results.saju.pillars.map((pillar, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.65rem', color: 'rgba(212, 175, 55, 0.6)', marginBottom: '10px', letterSpacing: '0.1em' }}>{results.saju.tenGods[i]}</div>
                                <div style={{
                                    fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
                                    fontWeight: 'bold',
                                    color: getElementColor(results.saju.elements[i]),
                                    lineHeight: '1.2',
                                    fontFamily: '"Noto Serif KR", serif'
                                }}>
                                    <span className="oriental-glow">{pillar[0]}</span>
                                    <div style={{ fontSize: '0.8rem', marginTop: '5px', opacity: 0.8 }}>{pillar[1]}</div>
                                </div>
                                <div style={{
                                    fontSize: '0.75rem',
                                    marginTop: '8px',
                                    color: getElementColor(results.saju.elements[i]),
                                    opacity: 0.9,
                                    fontWeight: 'bold',
                                    fontFamily: '"Cinzel", serif'
                                }}>
                                    {results.saju.elements[i]}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Numerology Section with Energy Charge Animation */}
                <section style={{ marginBottom: 'clamp(60px, 12vw, 100px)', textAlign: 'center' }}>
                    <motion.div
                        className="energy-charge"
                        whileHover={{ scale: 1.05 }}
                        style={{
                            display: 'inline-flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 'clamp(25px, 6vw, 40px)',
                            border: '2px solid rgba(0, 168, 107, 0.4)',
                            borderRadius: '50%',
                            width: 'clamp(200px, 35vw, 280px)',
                            height: 'clamp(200px, 35vw, 280px)',
                            position: 'relative',
                            background: 'radial-gradient(circle, rgba(0, 168, 107, 0.2) 0%, rgba(5, 5, 5, 0.95) 85%)',
                            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.9)',
                            cursor: 'help'
                        }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--jade)', marginBottom: '5px', letterSpacing: '0.4em', fontWeight: 'bold', fontFamily: '"Cinzel", serif' }}>ENERGY</div>
                        <div style={{
                            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                            color: '#fff',
                            fontWeight: 'bold',
                            lineHeight: '1',
                            textShadow: '0 0 40px rgba(255,255,255,0.4)',
                            fontFamily: '"Cinzel", serif'
                        }}>{results.numerology.number}</div>
                        <div style={{
                            fontSize: '0.8rem',
                            color: 'var(--jade)',
                            marginTop: '5px',
                            maxWidth: '180px',
                            lineHeight: '1.4',
                            fontFamily: '"Noto Serif KR", serif'
                        }}>{results.numerology.energy}</div>
                    </motion.div>
                    <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'rgba(212, 175, 55, 0.4)', fontStyle: 'italic' }}>
                        * Hover to charge your cosmic energy
                    </p>
                </section>

                {/* Interactive Scrolls */}
                <section style={{ marginBottom: '80px' }}>
                    {categories.map((cat) => (
                        <ScrollItem key={cat.id} title={cat.title} content={cat.content} />
                    ))}
                </section>

                {/* Share Button */}
                <div style={{ textAlign: 'center', paddingBottom: '40px' }}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={shareResults}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '15px 40px',
                            background: '#d4af37',
                            color: '#000',
                            fontWeight: 'bold',
                            borderRadius: '30px',
                            fontSize: '1rem'
                        }}
                    >
                        <Share2 size={20} />
                        SHARE MY FORTUNE
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

const ScrollItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ marginBottom: '50px', position: 'relative' }}>
            {/* Premium Glassmorphism Oriental Handle (Header) */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    height: '90px',
                    background: 'linear-gradient(135deg, rgba(42, 27, 18, 0.95), rgba(15, 10, 5, 0.98))',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    borderRadius: '8px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.8), inset 0 0 30px rgba(212, 175, 55, 0.15)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'var(--gold)',
                    fontSize: '1.5rem',
                    letterSpacing: '0.3em',
                    fontWeight: 'bold',
                    zIndex: 10,
                    position: 'relative',
                    border: '1.5px solid rgba(212, 175, 55, 0.4)',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    fontFamily: '"Cinzel", serif'
                }}
                whileHover={{
                    backgroundColor: 'rgba(56, 38, 25, 1)',
                    border: '1.5px solid rgba(212, 175, 55, 0.6)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.9), 0 0 20px rgba(212, 175, 55, 0.2)'
                }}
                whileTap={{ scale: 0.98 }}
            >
                {/* Decorative End Caps and Texture */}
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("https://www.transparenttextures.com/patterns/oriental-tiles.png")', opacity: 0.05 }} />
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '15px', background: 'linear-gradient(90deg, #d4af37 0%, transparent 100%)', opacity: 0.4 }} />
                <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '15px', background: 'linear-gradient(-90deg, #d4af37 0%, transparent 100%)', opacity: 0.4 }} />

                <span className="calligraphy" style={{
                    fontSize: '2rem',
                    textShadow: '0 4px 15px rgba(0,0,0,0.8)',
                    position: 'relative',
                    zIndex: 2,
                    padding: '0 40px',
                    letterSpacing: '0'
                }}>{title}</span>

                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    style={{ position: 'absolute', right: '30px', zIndex: 2 }}
                >
                    <ChevronDown size={32} color="var(--gold)" />
                </motion.div>
            </motion.button>

            {/* Elegant Silk Cord */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 1.2, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '-30px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '45px',
                            height: '90px',
                            border: '4px solid #d4af37',
                            borderBottom: 'none',
                            borderRadius: '25px 25px 0 0',
                            zIndex: 5,
                            pointerEvents: 'none',
                            opacity: 0.5,
                            transformOrigin: 'top'
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Scroll Content (The Paper) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                        style={{
                            overflow: 'hidden',
                            margin: '0 8px',
                            background: '#fcf3e3',
                            backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")',
                            boxShadow: 'inset 0 0 80px rgba(0,0,0,0.1), 0 30px 70px rgba(0,0,0,0.6)',
                            marginTop: '-10px',
                            paddingTop: '20px',
                            zIndex: 1,
                            position: 'relative',
                            borderLeft: '2px solid rgba(61, 43, 31, 0.15)',
                            borderRight: '2px solid rgba(61, 43, 31, 0.15)'
                        }}
                    >
                        <div style={{
                            padding: '60px 50px',
                            color: '#1a0f00',
                            fontSize: '1.2rem',
                            lineHeight: '2.5',
                            textAlign: 'justify',
                            fontFamily: '"Noto Serif KR", serif',
                            whiteSpace: 'pre-wrap',
                            letterSpacing: '0.02em',
                            fontWeight: '400',
                            position: 'relative',
                            zIndex: 2
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '15rem',
                                color: 'rgba(212, 175, 55, 0.03)',
                                zIndex: -1,
                                width: '100%',
                                textAlign: 'center',
                                pointerEvents: 'none'
                            }} className="calligraphy">命</div>
                            {content}
                        </div>

                        {/* Refined Bottom Handle Finishing */}
                        <div style={{
                            height: '60px',
                            background: 'linear-gradient(180deg, #3d2b1f 0%, #1a0f00 100%)',
                            borderRadius: '0 0 12px 12px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            borderTop: '2px solid rgba(212, 175, 55, 0.3)',
                            boxShadow: '0 -15px 30px rgba(0,0,0,0.3)'
                        }}>
                            <div style={{
                                width: '85%',
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)'
                            }} />
                            {/* Decorative End Caps (Circular) */}
                            <div style={{ position: 'absolute', left: '-10px', width: '25px', height: '50px', background: '#3d2b1f', borderRadius: '12px', border: '2px solid #d4af37', boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)' }} />
                            <div style={{ position: 'absolute', right: '-10px', width: '25px', height: '50px', background: '#3d2b1f', borderRadius: '12px', border: '2px solid #d4af37', boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)' }} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ResultScreen;
