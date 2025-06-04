import React, { useRef, useEffect } from 'react';
import styles from './MatrixBackground.module.css';

const MatrixBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        let animationFrameId: number;

        // Set canvas dimensions
        const resizeCanvas = (): void => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        // Initialize canvas size
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Matrix rain characters (only 0 and 1 for binary look)
        const chars: string[] = ['0', '1'];
        const fontSize: number = 14;
        const columns: number = Math.ceil(canvas.width / fontSize);

        // Control the speed of falling - lower values = slower speed
        const fallSpeed: number = 0.35;

        // Initialize drops at random positions
        const drops: number[] = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }

        // Drawing function
        const draw = (): void => {
            // Translucent black background to create fade effect
            context.fillStyle = 'rgba(0, 0, 0, 0.05)';
            context.fillRect(0, 0, canvas.width, canvas.height);

            // Green text
            context.fillStyle = '#404040';
            context.font = `${fontSize}px monospace`;

            // Draw characters
            for (let i = 0; i < drops.length; i++) {
                // Random character
                const text = chars[Math.floor(Math.random() * chars.length)];

                // x = i * fontSize, y = drops[i] * fontSize
                context.fillText(text, i * fontSize, drops[i] * fontSize);

                // Sending the drop back to the top randomly after it's crossed the screen
                // Adding randomness to the reset to make the drops scattered
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Increment y coordinate by the fallSpeed instead of 1
                drops[i] += fallSpeed;
            }

            animationFrameId = window.requestAnimationFrame(draw);
        };

        draw();

        // Cleanup
        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.matrixCanvas} />;
};

export default MatrixBackground;
