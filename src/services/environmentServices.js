export const getTheme = () => {
  // eslint-disable-next-line no-undef
  let theme = REACT_APP_THEME;

  //theme = 'premium-theme'
  //theme = 'retail-theme'

  return theme;
};

// eslint-disable-next-line no-undef
export const isDebugging = () => REACT_APP_DEBUG === 'true';
