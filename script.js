async function calculateFilling() {
    const container = document.getElementById('container-obj').value.trim();
    const filler = document.getElementById('filler-obj').value.trim();
    const resultBox = document.getElementById('result-box');
    const resultText = document.getElementById('result-text');
    const loading = document.getElementById('loading');
    const calcBtn = document.getElementById('calc-btn');

    if (!container || !filler) {
        alert("Please enter both fields! ശാസ്ത്രം requires data!");
        return;
    }

    // Map any input automatically using an expanded smart dynamic mapper
    const targetContainer = document.getElementById('target-container');
    const walkingFiller = document.getElementById('walking-filler');
    const loadingText = document.getElementById('loading-text');

    targetContainer.innerText = getSmartEmoji(container);
    walkingFiller.innerText = getSmartEmoji(filler);
    loadingText.innerText = `🌀 Stuffing ${filler} into ${container}...`;

    // Show realistic animation stage, hide previous results
    loading.classList.remove('hidden');
    resultBox.classList.add('hidden');
    calcBtn.disabled = true;

    const prompt = `Act as a hyper-rational, hyper-logical physicist and data analyst. The user wants to know exactly how many ${filler} can fit inside a ${container}. Calculate this using rigorous, deadpan logic, precise estimation, and dry analytical breakdown. Keep it structured, factual, and intellectually sharp without being eccentric.`;

    try {
        const response = await fetch('/api/fetch-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();

        if (data.error) {
            console.error("Google API Error:", data.error.message);
            resultText.innerText = "API Error: " + data.error.message;
        } else {
            const funnyAnswer = data.candidates[0].content.parts[0].text;
            resultText.innerText = funnyAnswer;
        }

        loading.classList.add('hidden');
        resultBox.classList.remove('hidden');
    } catch (error) {
        console.error("Network or Code Error:", error);
        loading.classList.add('hidden');
        resultText.innerText = "Our scientific calculators exploded. Check the console.";
        resultBox.classList.remove('hidden');
    } finally {
        calcBtn.disabled = false;
    }
}

// Universal smart icon mapper to handle ANY input text dynamically
function getSmartEmoji(text) {
    const t = text.toLowerCase();
    
    // Vehicles & Space
    if (t.includes('car') || t.includes('maruti') || t.includes('vehicle')) return '🚗';
    if (t.includes('bus')) return '🚌';
    if (t.includes('train')) return '🚆';
    if (t.includes('plane') || t.includes('jet')) return '✈️';
    if (t.includes('rocket') || t.includes('spaceship')) return '🚀';
    if (t.includes('boat') || t.includes('ship')) return '🚢';
    if (t.includes('bike') || t.includes('cycle')) return '🚲';
    
    // Animals & Insects
    if (t.includes('elephant')) return '🐘';
    if (t.includes('spider')) return '🕷️';
    if (t.includes('snake')) return '🐍';
    if (t.includes('dog')) return '🐕';
    if (t.includes('cat')) return '🐈';
    if (t.includes('monkey') || t.includes('ape')) return '🐒';
    if (t.includes('lion') || t.includes('tiger')) return '🐅';
    if (t.includes('fish')) return '🐠';
    if (t.includes('bird')) return '🦅';
    if (t.includes('ant')) return '🐜';
    
    // Food & Snacks
    if (t.includes('samosa') || t.includes('dumpling') || t.includes('snack')) return '🥟';
    if (t.includes('coconut')) return '🥥';
    if (t.includes('pizza')) return '🍕';
    if (t.includes('burger')) return '🍔';
    if (t.includes('coffee') || t.includes('tea')) return '☕';
    if (t.includes('apple')) return '🍎';
    if (t.includes('banana')) return '🍌';
    if (t.includes('cake') || t.includes('sweet')) return '🎂';
    
    // Places & Nature
    if (t.includes('room') || t.includes('house') || t.includes('bedroom')) return '🏠';
    if (t.includes('moon') || t.includes('planet')) return '🌕';
    if (t.includes('sun')) return '☀️';
    if (t.includes('earth') || t.includes('world')) return '🌍';
    if (t.includes('ocean') || t.includes('sea') || t.includes('water')) return '🌊';
    if (t.includes('mountain') || t.includes('hill')) return '⛰️';
    if (t.includes('pool') || t.includes('bucket')) return '🪣';
    
    // Everyday Objects
    if (t.includes('phone') || t.includes('mobile')) return '📱';
    if (t.includes('laptop') || t.includes('computer')) return '💻';
    if (t.includes('book')) return '📖';
    if (t.includes('bag')) return '🎒';
    if (t.includes('box')) return '📦';
    if (t.includes('pen')) return '🖊️';

    // Fallback emoji if anything else is entered
    return '✨';
}