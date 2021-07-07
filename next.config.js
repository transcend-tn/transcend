const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        NEXT_PUBLIC_GA_ID: "G-VD2DVVLG9V",
      },
    };
  }

  return {
    env: {
      NEXT_PUBLIC_GA_ID: "G-VD2DVVLG9V",
    },
  };
};
