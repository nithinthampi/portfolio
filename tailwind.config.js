module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0b1026',
        aurora: '#6366f1',
        mint: '#34d399',
        amber: '#fcd34d'
      },
      boxShadow: {
        glow: '0 0 45px -15px rgba(99,102,241,0.45)'
      },
      backgroundImage: {
        'aurora-gradient': 'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.35), transparent 55%), radial-gradient(circle at 80% 10%, rgba(16,185,129,0.25), transparent 50%), radial-gradient(circle at 50% 80%, rgba(251,191,36,0.25), transparent 55%)'
      }
    }
  },
  plugins: []
};
