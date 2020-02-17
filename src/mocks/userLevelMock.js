export default url => {
  if (url === '/userLevel') {
    return Promise.resolve({
      levelText: 'Baby Shark',
      msg: 'ainda possui premiações para serem liberadas.',
      level: 33
    });
  }
};
