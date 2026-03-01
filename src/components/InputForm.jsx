import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InputForm = ({ onStart }) => {
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [meridiem, setMeridiem] = useState('AM');
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [isTimeUnknown, setIsTimeUnknown] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && year && month && day) {
            const timeStr = isTimeUnknown ? 'Unknown' : `${meridiem} ${hour}:${minute}`;
            const dob = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
            onStart({ name, dob, time: timeStr });
        }
    };

    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const hours = Array.from({ length: 12 }, (_, i) => i.toString().padStart(2, '0'));
    const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

    // Generate random sparkles for consistency
    const sparkles = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 4
    }));

    const selectStyle = {
        width: '100%',
        padding: 'clamp(8px, 2vh, 18px) clamp(5px, 2vw, 10px)',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(212, 175, 55, 0.2)',
        color: '#fff',
        borderRadius: '12px',
        outline: 'none',
        cursor: 'pointer',
        fontSize: 'clamp(0.85rem, 3.5vw, 0.95rem)',
        fontFamily: '"Noto Serif KR", serif'
    };

    return (
        <motion.div
            className="input-page flex-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{
                minHeight: '100vh',
                height: '100svh',
                width: '100%',
                padding: 'clamp(15px, 3vh, 40px) 20px',
                position: 'relative',
                overflowY: 'auto',
                background: 'radial-gradient(circle at center, #1a0f00 0%, #050505 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {/* Background Image with Blended Edges */}
            <div className="bg-mask-edge" style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'url("/input_bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.4,
                zIndex: 0,
                filter: 'sepia(0.3) contrast(1.1)'
            }} />

            {/* Floating Sparkles */}
            {sparkles.map((s, i) => (
                <motion.div
                    key={s.id}
                    className="sparkle"
                    animate={{
                        opacity: [0, 0.6, 0],
                        scale: [0, 1, 0]
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
                        background: i % 2 === 0 ? '#d4af37' : '#fff',
                        zIndex: 1
                    }}
                />
            ))}

            <motion.div
                className="input-card glass-panel"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.2 }}
                style={{
                    width: '100%',
                    maxWidth: '550px',
                    padding: 'clamp(20px, 4vh, 60px) clamp(15px, 4vw, 45px)',
                    borderRadius: '24px',
                    position: 'relative',
                    zIndex: 2,
                    border: '2px solid rgba(212, 175, 55, 0.4)',
                    boxShadow: '0 40px 100px rgba(0,0,0,0.9)',
                    margin: 'auto'
                }}
            >
                {/* Subtle Glow behind the card */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '120%',
                    height: '120%',
                    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                    zIndex: -1,
                    pointerEvents: 'none'
                }} />

                <div style={{ textAlign: 'center', marginBottom: 'clamp(15px, 3vh, 50px)' }}>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        style={{ marginBottom: 'clamp(10px, 2vh, 25px)' }}
                    >
                        <svg width="70" height="70" viewBox="0 0 100 100">
                            <defs>
                                <filter id="icon-glow">
                                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <circle cx="50" cy="50" r="46" stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.4" />

                            {/* Stylized Bagua/Oriental Symbol */}
                            <motion.path
                                d="M50 25 L50 75 M25 50 L75 50"
                                stroke="#d4af37"
                                strokeWidth="0.8"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1 }}
                            />
                            <motion.path
                                d="M35 35 L65 65 M35 65 L65 35"
                                stroke="#00a86b"
                                strokeWidth="1.5"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                filter="url(#icon-glow)"
                            />
                            <rect x="30" y="30" width="40" height="40" stroke="#d4af37" strokeWidth="0.5" fill="none" transform="rotate(45 50 50)" />
                        </svg>
                    </motion.div>
                    <h1 className="calligraphy" style={{
                        fontSize: 'clamp(2.5rem, 8vw, 3.2rem)',
                        letterSpacing: '0.1em',
                        color: '#d4af37',
                        marginBottom: '5px',
                        textShadow: '0 0 25px rgba(212, 175, 55, 0.4)'
                    }}>K-SAJU</h1>
                    <p style={{
                        color: '#d4af37',
                        fontSize: 'clamp(0.7rem, 2.5vw, 0.9rem)',
                        letterSpacing: '0.5em',
                        textTransform: 'uppercase',
                        opacity: 0.5,
                        fontFamily: '"Cinzel", serif'
                    }}>
                        Archive of Destiny
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: 'clamp(10px, 2.5vh, 35px)' }}>
                        <label style={{
                            display: 'block',
                            color: 'var(--gold)',
                            marginBottom: '10px',
                            fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontFamily: '"Cinzel", serif'
                        }}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Type your name..."
                            required
                            style={{
                                width: '100%',
                                padding: 'clamp(10px, 2vh, 18px) clamp(15px, 4vw, 25px)',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(212, 175, 55, 0.2)',
                                borderRadius: '12px',
                                color: '#fff',
                                fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                                fontFamily: '"Noto Serif KR", serif',
                                textAlign: 'center'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: 'clamp(10px, 2.5vh, 35px)' }}>
                        <label style={{
                            display: 'block',
                            color: 'var(--gold)',
                            marginBottom: '10px',
                            fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontFamily: '"Cinzel", serif'
                        }}>
                            Birth Date
                        </label>
                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: 'clamp(8px, 2vw, 15px)' }}>
                            <select
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                style={selectStyle}
                                required
                            >
                                <option value="" style={{ background: '#1a1a1a' }}>Year</option>
                                {years.map(y => <option key={y} value={y} style={{ background: '#1a1a1a' }}>{y}</option>)}
                            </select>
                            <select
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                style={selectStyle}
                                required
                            >
                                <option value="" style={{ background: '#1a1a1a' }}>Month</option>
                                {months.map(m => <option key={m} value={m} style={{ background: '#1a1a1a' }}>{m}</option>)}
                            </select>
                            <select
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                                style={selectStyle}
                                required
                            >
                                <option value="" style={{ background: '#1a1a1a' }}>Day</option>
                                {days.map(d => <option key={d} value={d} style={{ background: '#1a1a1a' }}>{d}</option>)}
                            </select>
                        </div>
                    </div>

                    <div style={{ marginBottom: 'clamp(15px, 3.5vh, 50px)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <label style={{
                                color: 'var(--gold)',
                                fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                fontFamily: '"Cinzel", serif'
                            }}>
                                Birth Time
                            </label>
                            <label style={{ color: 'rgba(212,175,55,0.6)', fontSize: 'clamp(0.65rem, 2.5vw, 0.75rem)', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                <input
                                    type="checkbox"
                                    checked={isTimeUnknown}
                                    onChange={(e) => setIsTimeUnknown(e.target.checked)}
                                    style={{ marginRight: '8px', accentColor: 'var(--gold)' }}
                                />
                                Unknown
                            </label>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr',
                            gap: '10px',
                            opacity: isTimeUnknown ? 0.3 : 1,
                            pointerEvents: isTimeUnknown ? 'none' : 'auto',
                            transition: 'opacity 0.3s'
                        }}>
                            <select
                                value={meridiem}
                                onChange={(e) => setMeridiem(e.target.value)}
                                style={selectStyle}
                            >
                                <option value="AM" style={{ background: '#1a1a1a' }}>AM</option>
                                <option value="PM" style={{ background: '#1a1a1a' }}>PM</option>
                            </select>
                            <select
                                value={hour}
                                onChange={(e) => setHour(e.target.value)}
                                style={selectStyle}
                            >
                                {hours.map(h => <option key={h} value={h} style={{ background: '#1a1a1a' }}>{h} 시</option>)}
                            </select>
                            <select
                                value={minute}
                                onChange={(e) => setMinute(e.target.value)}
                                style={selectStyle}
                            >
                                {minutes.map(m => <option key={m} value={m} style={{ background: '#1a1a1a' }}>{m} 분</option>)}
                            </select>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)' }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        style={{
                            width: '100%',
                            padding: 'clamp(12px, 2.5vh, 22px)',
                            background: 'linear-gradient(135deg, #d4af37 0%, #b08d26 100%)',
                            color: '#1a0f00',
                            border: 'none',
                            borderRadius: '12px',
                            fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                            fontWeight: 'bold',
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            transition: 'var(--transition)',
                            fontFamily: '"Cinzel", serif'
                        }}
                    >
                        Reveal My Destiny
                    </motion.button>
                </form>
            </motion.div>
        </motion.div >
    );
};

export default InputForm;
