/**
 * Ahmad Alimin Portfolio - Tailwind Configuration
 */
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "background": "#f7f9fb",
                "surface-container": "#e8eff3",
                "primary-fixed": "#d8e3fb",
                "primary": "#545f73",
                "surface-variant": "#d9e4ea",
                "on-surface-variant": "#566166",
                "on-primary": "#f6f7ff",
                "outline-variant": "#a9b4b9",
                "surface-tint": "#545f73",
                "on-surface": "#2a3439",
                "surface-container-lowest": "#ffffff",
                "surface-container-low": "#f0f4f7",
                "primary-dim": "#354053",
                "secondary-dim": "#4a5568",
                "on-secondary-fixed": "#cbd5e0",
            },
            fontFamily: {
                "headline": ["Manrope", "sans-serif"],
                "body": ["Inter", "sans-serif"],
            }
        },
    },
}
