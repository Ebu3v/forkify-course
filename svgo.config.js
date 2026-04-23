module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // keep the identifiers your <use> tags depend on
          cleanupIDs: false,
          // keep viewBox so sizing works
          removeViewBox: false,
        },
      },
    },
    // (Optional) Prefix ids instead of removing them
    // 'prefixIds',
  ],
};
