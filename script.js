// Replace this with your actual Gemini API Key from Google AI Studio


async function calculateFilling() {
    const container = document.getElementById('container-obj').value;
    const filler = document.getElementById('filler-obj').value;
    const resultBox = document.getElementById('result-box');
    const resultText = document.getElementById('result-text');
    const loading = document.getElementById('loading');

    if (!container || !filler) {
        alert("Please enter both fields! ശാസ്ത്രം requires data!");
        return;
    }

    // Show loading, hide previous result
    loading.classList.remove('hidden');
    resultBox.classList.add('hidden');

    const prompt = `Act as a highly eccentric, funny, and slightly mad scientist. The user wants to know exactly how many ${filler} can fit inside a ${container}. Give a completely absurd but extremely confident mathematical answer. Mention the exact ridiculous number, and give a funny 2-sentence explanation of the physics or logistics behind it. Keep it under 60 words.`;

    const url = '/api/fetch-data';

    try {
        const response = await fetch(url, {
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
    }
}