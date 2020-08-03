import { StyleSheet } from 'aphrodite/no-important';

const ldsEllipsis1 = {
  '0%': {
    transform: 'scale(0)'
  },
  '100%': {
    transform: 'scale(1)'
  }
};
const ldsEllipsis3 = {
  '0%': {
    transform: 'scale(1)'
  },
  '100%': {
    transform: 'scale(0)'
  }
};
const ldsEllipsis2 = (size: number) => ({
  '0%': {
    transform: 'translate(0, 0)'
  },
  '100%': {
    transform: `translate(${size * 5}px, 0)`
  }
});

export const ldsEllipsis = (size: number) =>
  StyleSheet.create({
    _: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      minWidth: `calc(${size * 10}px + ${size}px)`,
      height: `${size * 2}px`
    }
  });

export const ellipsisChild = (size: number, color: string) =>
  StyleSheet.create({
    _: {
      position: 'absolute',
      left: '0',
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      background: color,
      ':nth-child(1)': {
        animationName: ldsEllipsis1,
        animationDuration: '0.6s',
        animationIterationCount: 'infinite'
      },
      ':nth-child(2)': {
        animationName: ldsEllipsis2(size),
        animationDuration: '0.6s',
        animationIterationCount: 'infinite'
      },
      ':nth-child(3)': {
        left: `${size * 5}px`,
        animationName: ldsEllipsis2(size),
        animationDuration: '0.6s',
        animationIterationCount: 'infinite'
      },
      ':nth-child(4)': {
        left: `${size * 10}px`,
        animationName: ldsEllipsis3,
        animationDuration: '0.6s',
        animationIterationCount: 'infinite'
      }
    }
  });

export const root = (styles: object) =>  StyleSheet.create({
  _: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    ...styles
  }
});
