export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1.0,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1.0,
      },
    },
  };
}

export function slideInFromTop(delay: number) {
  return {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1.5,
      },
    },
  };
}

export function slideInFromBottom(delay: number) {
  return {
    hidden: { y: 100 },
    visible: {
      y: 0,
      transition: {
        delay: delay,
        duration: 1.5,
      },
    },
  };
}

export function fadeIn(delay: number) {
  return {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: 1.5,
      },
    },
  };
}

export function fadeOut(delay: number) {
  return {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
      transition: {
        delay: delay,
        duration: 1.5,
      },
    },
  };
}

export function fadeInHome(delay: number) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1.5,
      },
    },
  };
}
