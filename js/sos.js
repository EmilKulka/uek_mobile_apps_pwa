document.addEventListener('DOMContentLoaded', () => {
    const sosButton = document.getElementById('sos-button');

    if (sosButton && 'vibrate' in navigator) {
        sosButton.addEventListener('click', () => {
            const sosPattern = [
                200, 100, 200, 100, 200, 
                500, 100, 500, 100, 500, 
                200, 100, 200, 100, 200  
            ];
            navigator.vibrate(sosPattern);
        });
    }
  });