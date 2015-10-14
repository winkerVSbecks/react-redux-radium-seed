import Radium from 'radium';
import colors from 'colors.css';

/**
 * Typography
 */
export const h1 = { fontSize: '2rem' };
export const h2 = { fontSize: '1.5rem' };
export const h3 = { fontSize: '1.25rem' };
export const h4 = { fontSize: '1rem' };
export const h5 = { fontSize: '0.875rem' };
export const h6 = { fontSize: '0.75rem' };

/**
 * Responsive Utils
 */
export const smColRight = {
  float: 'right',
  boxSizing: 'border-box'
};

/**
 * Header
 */
export const header = {
  color: colors.white,
  backgroundColor: colors.gray,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg)'
};

/**
 * Navbar
 */
export const nav = {
  color: colors.white
};

/**
 * Navbar Links Wrapper
 */
export const linksWrapper = {
  float: 'left',
  boxSizing: 'border-box'
};

/**
 * Button
 */
export const btn = {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'bold',
  textDecoration: 'none',
  cursor: 'pointer',
  display: 'inline-block',
  lineHeight: '1.125rem',
  padding: '1rem',
  margin: '0',
  height: 'auto',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  verticalAlign: 'middle',
  WebkitAppearance: 'none',
  color: 'inherit',
  backgroundColor: 'transparent',

 ':hover': {
    textDecoration: 'none'
  },

  ':focus': {
    outline: 'none',
    borderColor: 'rgba(0,0,0,.125)',
    boxShadow: '0 0 0 3px rgba(0,0,0,.25)'
  }
};

/**
 * Primary Button
 */
export const btnPrimary = {
  color: colors.white,
  backgroundColor: colors.blue,
  borderRadius: '3px',
  marginBottom: '4rem',
  padding: '0.5rem 1rem',

  ':hover': {
    boxShadow: 'inset 0 0 0 20rem rgba(0,0,0,.0625)'
  },

  ':active': {
    boxShadow: `inset 0 0 0 20rem rgba(0,0,0,.125),
      inset 0 3px 4px 0 rgba(0,0,0,.25),
      0 0 1px rgba(0,0,0,.125)`
  }

};

/**
 * Body Container
 */
export const body = {
  textAlign: 'center',
  padding: '1rem 4rem'
};

/**
 * Heading
 */
export const heading = {
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontWeight: 'normal',
  marginBottom: 0,
  marginTop: '4rem'
};
