export const calculateNumerology = (name) => {
    const table = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 8, g: 3, h: 5, i: 1,
        j: 1, k: 2, l: 3, m: 4, n: 5, o: 7, p: 8, q: 1, r: 2,
        s: 3, t: 4, u: 6, v: 6, w: 6, x: 5, y: 1, z: 7
    };

    const nameValue = name.toLowerCase().replace(/[^a-z]/g, '');
    let sum = 0;
    for (let char of nameValue) {
        sum += table[char] || 0;
    }

    const reduceNumber = (num) => {
        if (num <= 9 || num === 11 || num === 22 || num === 33) return num;
        const newNum = String(num).split('').reduce((acc, curr) => acc + parseInt(curr), 0);
        return reduceNumber(newNum);
    };

    const finalNumber = reduceNumber(sum);

    const energies = {
        1: "The Leader - Independent and pioneering energy.",
        2: "The Diplomat - Harmonious and cooperative energy.",
        3: "The Creator - Expressive and imaginative energy.",
        4: "The Builder - Practical and grounded energy.",
        5: "The Adventurer - Freedom-loving and dynamic energy.",
        6: "The Nurturer - Responsible and caring energy.",
        7: "The Seeker - Analytical and spiritual energy.",
        8: "The Achiever - Authoritative and material energy.",
        9: "The Philanthropist - Compassionate and universal energy.",
        11: "The Visionary - Intuitive and enlightening energy.",
        22: "The Master Architect - Great practical potential energy.",
        33: "The Master Teacher - Altruistic and service energy."
    };

    return {
        number: finalNumber,
        energy: energies[finalNumber] || "A unique cosmic vibration."
    };
};
