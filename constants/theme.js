import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const colors = {
    accent: '#f77c45',
    primary: '#e4f5ea',
    secondary: '#40987f',
    tertiary: '#7fc0a8',
    black: '#000000',
    white: '#FFFFFF',
    white2: 'rgba(255,255,255,0.5)',
    gray: '#9DA3B4',
    gray2: '#C5CCD6',
    gray3: 'rgba(197, 204, 214, 0.4)',
    red: '#FF0000',
    lightGrey: '#f5f5f5',
    lightPink: '#ffecf2',
    redPink: '#f7536e',
    pastelPink: '#ffd1dc',
    lightLilac: '#ffefef',
    cream: '#fdfff5',
    brown: '#8d5845',
    yellow: '#face1b',
    darkGrey: '#7fc0a8',
    newPurple :'#C7B8F5'
  };
  
  const sizes = {
    // global sizes
    base: 16,
    font: 14,
    radius: 6,
    padding: 25,
  
    // font sizes
    h1: 26,
    h2: 20,
    h3: 18,
    title: 18,
    header: 16,
    body: 14,
    caption: 12
  };
  
  const fonts = {
    h1: {
      fontSize: sizes.h1
    },
    h2: {
      fontSize: sizes.h2
    },
    h3: {
      fontSize: sizes.h3
    },
    header: {
      fontSize: sizes.header
    },
    title: {
      fontSize: sizes.title
    },
    body: {
      fontSize: sizes.body
    },
    caption: {
      fontSize: sizes.caption
    }
  };
  export const COLORS = {
    accent: '#FF7363',
    purple: '#817DC0',
  
    black: '#171717',
    white: '#FFFFFF',
    background: '#252C4A',
    newPurple :'#C7B8F5'
  };
  
  export const SIZES = {
    base: 10,
    width,
    height,
  };
  export { colors, sizes, fonts };