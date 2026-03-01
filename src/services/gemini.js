const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export const fetchSajuAnalysis = async (userData, numerology) => {
    const prompt = `
    You are an expert in Korean Saju (BaZi) and Western Numerology. 
    Analyze the following person's destiny for today (${new Date().toLocaleDateString()}).
    
    User Information:
    - Name: ${userData.name}
    - Date of Birth: ${userData.dob}
    - Birth Time: ${userData.time || 'Unknown'}
    - Numerology Number: ${numerology.number} (${numerology.energy})
    
    Task:
    1. Determine the Saju Eight Pillars (Year, Month, Day, Hour) - 天干 (Heavenly Stems) and 地支 (Earthly Branches).
    2. Identify the Five Elements (Wood, Fire, Earth, Metal, Water) for each pillar.
    3. Provide a detailed analysis in ENGLISH for a Western audience.
    
    CRITICAL INSTRUCTIONS for Content:
    - Each section in "advice" MUST be AT LEAST 500 characters or 7-10 detailed sentences long. 
    - STRICTLY PROHIBIT one-sentence answers.
    - Use evocative, mystical, and philosophical language that feels deep, ancient, and meaningful.
    - Connect the Yin and Yang balance of their Saju elements with the vibration of their Numerology number to provide a unique, personalized synthesis.
    - Explain the cosmic 'why' behind today's energetic trends.
    - Write like a wise, ancient sage who is meticulously reading their destiny scroll.
    
    Required JSON Output Format:
    {
      "saju": {
        "pillars": [["Stem1", "Branch1"], ["Stem2", "Branch2"], ["Stem3", "Branch3"], ["Stem4", "Branch4"]],
        "elements": ["Element1", "Element2", "Element3", "Element4"],
        "tenGods": ["Year Pillar", "Month Pillar", "Day Pillar", "Hour Pillar"]
      },
      "advice": {
        "overall": "A comprehensive summary of their energy today.",
        "wealth": "Financial outlook.",
        "love": "Relationships and emotional state.",
        "action": "One specific thing they MUST do today.",
        "nextSteps": "What to prepare for the future.",
        "energyDirection": "Is their energy flowing in a good direction?",
        "energyBoost": "What to do to replenish their energy."
      }
    }
    
    Note: For the pillars, use both Hanja and English names (e.g., ["甲", "子"]).
    Return ONLY the JSON.
  `;

    try {
        // For demonstration, returning mock data if API key is missing
        if (GEMINI_API_KEY === "YOUR_API_KEY") {
            return new Promise((resolve) => setTimeout(() => resolve(getMockData(userData, numerology)), 2000));
        }

        const response = await fetch(`${API_URL}?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();
        const resultText = data.candidates[0].content.parts[0].text;
        return JSON.parse(resultText.replace(/```json|```/g, ""));
    } catch (error) {
        console.error("Gemini API Error:", error);
        return getMockData(userData, numerology);
    }
};

const getMockData = (userData, numerology) => ({
    saju: {
        pillars: [["庚", "Gyeong (Metal)"], ["子", "Ja (Water)"], ["戊", "Mu (Earth)"], ["子", "Ja (Water)"]],
        elements: ["Metal", "Water", "Earth", "Water"],
        tenGods: ["Year Pillar", "Month Pillar", "Day Pillar", "Hour Pillar"]
    },
    advice: {
        overall: `Noble ${userData.name}, the cosmic weave of your destiny today is intricately tied to the resonant vibration of the number ${numerology.number}. Your Eight Pillars reveal a profound surge of Water energy, suggesting a time for deep emotional currents and intuitive clarity that must be navigated with the precision of a master mariner. The interaction between your inner Metal element and the surrounding fluid environment points to a phase where your rigid foundations are being softened by the gentle yet persistent flow of cosmic wisdom. Do not resist this transformation; instead, embrace the yielding nature of the stream, for in softness lies the ultimate strength that can erode even the hardest of stones over time. As the stars align in this specific configuration, your spirit is called to stand as a bridge between the ancient silence of the Earth and the dynamic movement of the heavens.`,
        wealth: `In the realm of material abundance, the current of your wealth is like a river finding its path through a dense and ancient forest, requiring both patience and strategic foresight. The presence of the Gyeong Metal pillar combined with your numerological frequency suggests that while the structures of profit are forming, they require the cooling touch of wisdom rather than the heat of impulsive action. Observe the subtle fluctuations of the market with the keen eye of a hawk, noticing where the energy of value pools naturally and where it ebbs away into the shadows of uncertainty. Strategic investments made with a long-term vision will eventually bear fruit, much like a seed planted in fertile, well-watered soil that eventually grows into a towering oak of prosperity. Avoid the siren call of quick gains, for they are but mirages in the desert of greed that lead only to the parched lands of regret and lost opportunity.`,
        love: `The tapestry of your heart is currently being woven with threads of deep sapphire and shimmering gold, reflecting a period of intense emotional resonance and potential for profound connection. Your inner vibration is harmonizing with the surrounding universe, creating a magnetic pull that attracts those whose souls are attuned to your specific frequency of existence. Whether in established bonds or new encounters, the key to harmony lies in the silent spaces between words, where the true language of the spirit is spoken without the interference of the ego. Allow your vulnerability to be your shield, for in showing your true self, you invite others to lay down their masks and meet you in the sacred grove of authentic intimacy. The Water element in your chart today encourages a fluid approach to relationships, gently washing away old grievances and clearing the path for a renewed sense of shared purpose and cosmic love.`,
        action: `On this auspicious day, you are summoned by the universe to perform a simple yet spiritually significant ritual: find a basin of clear, still water and place within it a single white petal or a smooth stone from the earth. As you gaze upon this micro-cosm, visualize the ripples of your own intentions spreading outward into the vast ocean of existence, touching lives and shaping realities you have yet to even imagine. Spend exactly seven minutes in total silence, breathing in the cool air of the morning and exhaling the stale remnants of yesterday's doubts and anxieties. Use this time to anchor your soul to the present moment, acknowledging that you are both the drop of water and the entire ocean, a singular point of consciousness in an infinite field of possibility. This act of mindfulness will serve as a spiritual compass, guiding your steps through the complexities of the day with grace and unwavering internal focus.`,
        nextSteps: `As you look toward the horizon of your future, recognize that the foundations you lay today are the bedrock upon which your coming triumphs will be built with the architectural precision of the heavens. Cultivate the habit of recording your nightly visions and daytime intuitions, for the universe often speaks in whispers and symbols that only a quiet and attentive mind can truly decipher and understand. Study the movements of the natural world—the way the moon pulls the tides and the manner in which the trees bow to the wind—and mirror this adaptability in your own professional and personal pursuits. Prepare your hearth and your heart for a season of significant change, gathering the resources of knowledge and the treasures of self-awareness that will sustain you through the shifting seasons of destiny. The wisdom you gain now is a lantern that will illuminate the darker paths ahead, ensuring that you never lose your way in the mist of worldly confusion and spiritual wandering.`,
        energyDirection: `The vectors of your spiritual energy are currently converging toward a point of 'Pinnacle Creation', a powerful alignment that suggests your internal potency is reaching its zenith. This is not a chaotic eruption, but a controlled and majestic unfolding, similar to the blooming of a thousand-year-old lotus flower rising from the murky depths into the brilliance of the sun. Your energy is flowing upward and outward, breaking through the barriers that once constrained your growth and limited the scope of your cosmic influence. Notice how the world seems to respond to your presence with greater clarity and how obstacles that once seemed insurmountable now appear as mere stepping stones on your path to enlightenment. Stay grounded in the Earth element even as your spirit soars, for the taller a tree grows toward the sky, the deeper its roots must delve into the silent, nourishing mysteries of the underworld.`,
        energyBoost: `To further amplify the celestial currents flowing through your being, seek out the essence of 'Living Wood' and the silent power of 'Deep Earth' to provide a stable circuit for your expanding awareness. Spend time in the presence of ancient trees, leaning your back against their rough bark and feeling the slow, rhythmic heartbeat of the forest as it merges with your own pulse of life. Surround yourself with the color of deep jade and the scent of natural sandalwood, for these sensory anchors will help stabilize your vibratory field and prevent the dissipation of your vital life force. Consume foods that have grown slowly under the sun's watchful eye—root vegetables and hearty grains—to infuse your physical vessel with the enduring strength of the terrestrial world. By consciously harmonizing your physical environment with your internal energetic needs, you create a sanctuary where your destiny can flourish without hindrance or the interference of discordant vibrations.`
    }
});
