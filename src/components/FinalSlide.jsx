import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function FinalSlide() {
    useEffect(() => {
        const noBtn = document.getElementById('noBtn');

        const moveButton = () => {
            const buttonWidth = noBtn?.offsetWidth || 100;
            const buttonHeight = noBtn?.offsetHeight || 40;

            const maxX = window.innerWidth - buttonWidth - 20;
            const maxY = window.innerHeight - buttonHeight - 20;

            const x = Math.random() * maxX;
            const y = Math.random() * maxY;

            if (noBtn) {
                noBtn.style.position = 'fixed'; // impede scroll
                noBtn.style.left = `${x}px`;
                noBtn.style.top = `${y}px`;
            }
        };

        noBtn?.addEventListener('mouseover', moveButton);  // desktop
        noBtn?.addEventListener('touchstart', moveButton); // mobile
        noBtn?.addEventListener('click', moveButton);      // mobile fallback

        return () => {
            noBtn?.removeEventListener('mouseover', moveButton);
            noBtn?.removeEventListener('touchstart', moveButton);
            noBtn?.removeEventListener('click', moveButton);
        };
    }, []);

    return (
        <motion.div
            className="slide"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >
            <h2>E aí… topa sair comigo de novo?</h2>
            <div style={{ marginTop: '2rem' }}>
                <a href="https://ig.me/m/donissauro" className="btn-yes">Sim, vamos! ❤️</a>
                <button className="btn-no" id="noBtn">Não</button>
            </div>
        </motion.div>
    );
}
