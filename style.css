* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    min-height: 100vh;
    width: 100vw;
    background: #0f051d;
    font-family: 'Permanent Marker', cursive, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    position: relative;
    padding: 20px;
}

/* Chaotic Floating Background Items */
.bg-item {
    position: absolute;
    font-size: 4rem;
    z-index: 1;
    animation: chaoticFloat 6s ease-in-out infinite alternate;
    user-select: none;
    pointer-events: none;
    filter: drop-shadow(0 0 10px rgba(255,255,255,0.3));
}

.e-1 { top: 5%; left: 5%; animation-duration: 5s; transform: rotate(-15deg); }
.e-2 { top: 10%; right: 8%; animation-duration: 7s; transform: rotate(20deg); }
.e-3 { top: 70%T; left: 8%; animation-duration: 4.5s; transform: rotate(10deg); }
.e-4 { top: 75%; right: 10%; animation-duration: 6s; transform: rotate(-25deg); }
.e-5 { top: 40%; left: 2%; animation-duration: 3.5s; transform: scale(1.2); }
.e-6 { top: 45%; right: 3%; animation-duration: 5.5s; transform: rotate(12deg); }
.e-7 { top: 25%T; left: 15%; animation-duration: 8s; font-size: 5rem; }
.e-8 { top: 85%; left: 45%; animation-duration: 4s; transform: rotate(-10deg); }

@keyframes chaoticFloat {
    0% { transform: translateY(0px) rotate(0deg) scale(1); }
    100% { transform: translateY(-30px) rotate(20deg) scale(1.15); }
}

/* Full Screen Open Layout (No Central Box) */
.screen-wrapper {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

/* Extraordinary Gigantic Title with Animation */
.gigantic-title {
    font-family: 'Bungee', cursive;
    font-size: clamp(3rem, 7vw, 5.5rem);
    color: #ff0055;
    text-shadow: 4px 4px 0px #00ffff, 8px 8px 0px #ffea00, 12px 12px 0px #ff00ff;
    letter-spacing: 3px;
    margin-bottom: 10px;
    animation: titleBounce 2s ease-in-out infinite alternate;
}

.malayalam-script {
    color: #00ffff;
    text-shadow: 4px 4px 0px #ff0055, 8px 8px 0px #ffea00;
}

@keyframes titleBounce {
    0% { transform: translateY(0) scale(1); }
    100% { transform: translateY(-8px) scale(1.02); }
}

.epic-tagline {
    font-family: 'Luckiest Guy', cursive;
    font-size: clamp(1.1rem, 2.5vw, 1.6rem);
    color: #ffea00;
    text-shadow: 2px 2px 0px #000;
    margin-bottom: 40px;
    letter-spacing: 1px;
}

/* Seamless Inputs Layout */
.inputs-flex-container {
    width: 100%;
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

.input-box-wrapper {
    flex: 1;
    min-width: 280px;
    text-align: left;
}

.input-box-wrapper label {
    display: block;
    font-family: 'Bungee', cursive;
    font-size: 0.85rem;
    color: #00ffff;
    margin-bottom: 10px;
    letter-spacing: 1px;
    text-shadow: 1px 1px 0px #000;
}

/* Wild Fun Input Box Design */
.input-box-wrapper input {
    width: 100%;
    padding: 20px 25px;
    font-size: 1.3rem;
    font-family: 'Luckiest Guy', cursive;
    background: rgba(255, 255, 255, 0.95);
    border: 4px dashed #ff00ff;
    border-radius: 50px;
    color: #2b0b3d;
    outline: none;
    box-shadow: 0 8px 25px rgba(255, 0, 255, 0.3);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.input-box-wrapper input::placeholder {
    color: #aaa;
    font-family: 'Permanent Marker', cursive;
    font-size: 1rem;
}

.input-box-wrapper input:focus {
    transform: scale(1.04) rotate(-1deg);
    border-color: #00ffff;
    background: #ffffff;
    box-shadow: 0 0 30px #00ffff, inset 0 0 10px rgba(0,255,255,0.5);
}

/* Ultra Impressive Animated Button */
#calc-btn {
    width: 100%;
    max-width: 500px;
    background: linear-gradient(45deg, #ff0055, #ffea00, #00ffff, #ff00ff);
    background-size: 300% 300%;
    animation: buttonRainbow 4s linear infinite;
    border: 5px solid #ffffff;
    color: #0f051d;
    font-family: 'Bungee', cursive;
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    padding: 22px 30px;
    border-radius: 60px;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(255, 0, 85, 0.5);
    transition: all 0.2s ease-in-out;
    text-shadow: 1px 1px 0px rgba(255,255,255,0.8);
    margin-top: 10px;
}

@keyframes buttonRainbow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

#calc-btn:hover {
    transform: translateY(-6px) scale(1.05);
    box-shadow: 0 15px 40px #00ffff;
}

#calc-btn:active {
    transform: translateY(2px) scale(0.98);
}

/* Hidden Utility */
.hidden {
    display: none;
}

/* Loader and Results */
#loading {
    margin-top: 35px;
    font-family: 'Luckiest Guy', cursive;
    font-size: 1.5rem;
    color: #ffea00;
    text-shadow: 2px 2px 0px #000;
    animation: pulseLoader 0.8s infinite alternate;
}

@keyframes pulseLoader {
    0% { opacity: 0.5; transform: scale(0.95); }
    100% { opacity: 1; transform: scale(1.05); }
}

#result-box {
    margin-top: 40px;
    width: 100%;
    background: rgba(15, 5, 29, 0.9);
    border: 5px solid #00ffff;
    border-radius: 35px;
    padding: 30px;
    box-shadow: 0 15px 50px rgba(0, 255, 255, 0.4);
    animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes popIn {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
}

.result-heading {
    font-family: 'Bungee', cursive;
    font-size: 1.6rem;
    color: #ff0055;
    margin-bottom: 15px;
    text-shadow: 2px 2px 0px #ffea00;
}

#result-text {
    font-family: 'Permanent Marker', cursive;
    font-size: 1.4rem;
    color: #ffffff;
    line-height: 1.6;
    letter-spacing: 1px;
}