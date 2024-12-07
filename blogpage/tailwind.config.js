module.exports = {
  // ... other config ...
  extend: {
    animation: {
      fadeIn: 'fadeIn 1s ease-in',
      slideUp: 'slideUp 0.8s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      slideUp: {
        '0%': { transform: 'translateY(100px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
    },
  },
} 