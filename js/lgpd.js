// Sistema LGPD - Banner de Cookies
class LGPDManager {
    constructor() {
        this.cookieConsent = this.getCookieConsent();
        this.init();
    }

    init() {
        if (!this.cookieConsent) {
            this.showBanner();
        }
    }

    showBanner() {
        const banner = document.createElement('div');
        banner.id = 'lgpd-banner';
        banner.innerHTML = `
            <div class="lgpd-content">
                <div class="lgpd-text">
                    <h3>🍪 Política de Cookies</h3>
                    <p>Utilizamos cookies essenciais para melhorar sua experiência em nosso site. 
                    Ao continuar navegando, você concorda com nossa 
                    <a href="politica-privacidade.html" target="_blank">Política de Privacidade</a>.</p>
                </div>
                <div class="lgpd-buttons">
                    <button id="lgpd-accept" class="lgpd-btn accept">Aceitar</button>
                    <button id="lgpd-reject" class="lgpd-btn reject">Recusar</button>
                </div>
            </div>
        `;

        // Adiciona estilos CSS
        const style = document.createElement('style');
        style.textContent = `
            #lgpd-banner {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.95);
                color: white;
                z-index: 10000;
                padding: 15px;
                box-shadow: 0 -2px 10px rgba(0,0,0,0.3);
            }
            .lgpd-content {
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
            }
            .lgpd-text h3 {
                margin: 0 0 5px 0;
                color: #4CAF50;
                font-size: 16px;
            }
            .lgpd-text p {
                margin: 0;
                font-size: 14px;
                line-height: 1.4;
            }
            .lgpd-text a {
                color: #4CAF50;
                text-decoration: underline;
            }
            .lgpd-buttons {
                display: flex;
                gap: 10px;
                flex-shrink: 0;
            }
            .lgpd-btn {
                padding: 8px 16px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 500;
                transition: all 0.3s ease;
            }
            .lgpd-btn.accept {
                background: #4CAF50;
                color: white;
            }
            .lgpd-btn.accept:hover {
                background: #45a049;
            }
            .lgpd-btn.reject {
                background: transparent;
                color: #ccc;
                border: 1px solid #ccc;
            }
            .lgpd-btn.reject:hover {
                background: #333;
                color: white;
            }
            @media (max-width: 768px) {
                .lgpd-content {
                    flex-direction: column;
                    text-align: center;
                }
                .lgpd-buttons {
                    width: 100%;
                    justify-content: center;
                }
                .lgpd-text h3 {
                    font-size: 14px;
                }
                .lgpd-text p {
                    font-size: 12px;
                }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(banner);

        // Event listeners
        document.getElementById('lgpd-accept').addEventListener('click', () => {
            this.acceptCookies();
        });

        document.getElementById('lgpd-reject').addEventListener('click', () => {
            this.rejectCookies();
        });
    }

    acceptCookies() {
        this.setCookieConsent('accepted');
        this.hideBanner();
        this.showSuccessMessage('Cookies aceitos com sucesso!');
    }

    rejectCookies() {
        this.setCookieConsent('rejected');
        this.hideBanner();
        this.showSuccessMessage('Cookies recusados. Algumas funcionalidades podem não funcionar.');
    }

    hideBanner() {
        const banner = document.getElementById('lgpd-banner');
        if (banner) {
            banner.style.animation = 'slideDown 0.5s ease-out';
            setTimeout(() => {
                banner.remove();
            }, 500);
        }
    }

    showSuccessMessage(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 12px 20px;
            border-radius: 5px;
            z-index: 10001;
            animation: slideIn 0.3s ease-out;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    setCookieConsent(status) {
        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 1); // Expira em 1 ano
        document.cookie = `lgpd_consent=${status}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
        this.cookieConsent = status;
    }

    getCookieConsent() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'lgpd_consent') {
                return value;
            }
        }
        return null;
    }

    // Método para verificar se o usuário aceitou os cookies
    hasAcceptedCookies() {
        return this.cookieConsent === 'accepted';
    }
}

// Adiciona animações CSS
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    @keyframes slideDown {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(100%); opacity: 0; }
    }
`;
document.head.appendChild(animationStyle);

// Inicializa o sistema LGPD quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    window.lgpdManager = new LGPDManager();
}); 