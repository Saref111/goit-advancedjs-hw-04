let callbacks = [];
export const enableLoadingOnScroll = cb => {
  const callback = e => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      cb(e);
    }
  };
  callbacks.push(callback);
  window.addEventListener('scroll', callback);
};

export const disableLoadingOnScroll = () => {
  callbacks.forEach(cb => {
    window.removeEventListener('scroll', cb);
  });
  callbacks = [];
};
