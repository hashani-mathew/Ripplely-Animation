import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.27/build/backgrounds/liquid1.min.js';

        const IMAGE = './src/images/background.jpg';

        const canvas = document.getElementById('water');

        try {
            const liquidApp = LiquidBackground(canvas);
            liquidApp.loadImage(IMAGE);
            liquidApp.liquidPlane.material.metalness = 0.75;
            liquidApp.liquidPlane.material.roughness = 0.25;
            liquidApp.liquidPlane.uniforms.displacementScale.value = 5;
            liquidApp.setRain(false); 
        } catch (err) {

        }
