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

    // Dynamic Emoji Customization for the Animation
    const itemAnimator = document.getElementById('item-animator');
    const targetEmoji = document.getElementById('target-emoji');
    const loadingText = document.getElementById('loading-text');

    itemAnimator.innerText = getFunnyEmoji(filler);
    targetEmoji.innerText = getFunnyEmoji(container);
    loadingText.innerText = `🌀 Stuffing ${filler} into ${container}...`;

    // Show loading animation stage, hide previous results
    loading.classList.remove('hidden');
    resultBox.classList.add('hidden');
    calcBtn.disabled = true;

    const prompt = `Act as a highly eccentric, funny, and slightly mad scientist. The user wants to know exactly how many ${filler} can fit inside a ${container}. Give a wildly creative, mathematically absurd, and humorous scientific breakdown with funny units of measurement. Keep it punchy and entertaining.`;

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

// Helper function to pick a fitting fun emoji based on text
function getFunnyEmoji(text) {
    const t = text.toLowerCase();
    if (t.includes('car') || t.includes('maruti') || t.includes('vehicle')) return '🚗';
    if (t.includes('elephant')) return '🐘';
    if (t.includes('samosa') || t.includes('food') || t.includes('snack')) return '🥟';
    if (t.includes('room') || t.includes('house') || t.includes('bedroom')) return '🏠';
    if (t.includes('moon') || t.includes('space') || t.includes('planet')) return '🌕';
    if (t.includes('ocean') || t.includes('water') || t.includes('sea')) return '🌊';
    if (t.includes('coconut')) return '🥥';
    return '📦'; // Default fallback emoji
}