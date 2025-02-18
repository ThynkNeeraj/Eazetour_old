module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    plugins: [require('daisyui')],
    daisyui: {
      themes: [
        {
          midnight: {
            "primary": "#0D2000",
            "secondary": "#ffffff",
            "accent": "#37cdbe",
            "neutral": "#3d4451",
          },
        },
      ],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '196': '48rem',
        '256': '64rem',
      }
    },
  };
  