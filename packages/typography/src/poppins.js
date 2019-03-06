import React from 'react'
import Typography from './index'
import merge from 'lodash.merge'

const config = {
  fontFamily: '"Poppins", sans-serif',
  lineHeight: 1.625,
  px: [3, 4, 5],
  py: 4,
  a: {
    color: 'link',
  },
  h1: {
    fontSize: [5,6,7,8],
    fontWeight: 900,
    lineHeight: 1.2,
    letterSpacing: '-0.03em',
  },
  h2: {
    fontSize: [5, 6],
    fontWeight: 700,
    lineHeight: 1.2,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  h3: {
    fontSize: [5, 6],
    fontWeight: 900,
    lineHeight: 1.2,
    letterSpacing: '-0.03em',
  },
  p: {
    fontSize: [2, 3],
  },
  pre: {
    fontFamily: '"Roboto Mono", Menlo, monospace',
    p: 3,
    color: 'highlight',
    bg: 'muted',
  },
  code: {
    fontFamily: '"Roboto Mono", Menlo, monospace',
    fontSize: '87.5%',
  },
  samp: {
    fontFamily: '"Roboto Mono", Menlo, monospace',
    fontSize: '87.5%',
  },
  blockquote: {
    fontSize: [5, 6],
    fontWeight: 900,
    lineHeight: 1.2,
    m: 0,
    px: [4, 5],
    py: 4,
  },
  hr: {
    color: 'highlight',
    border: 0,
    borderBottom: '3px solid',
    my: 6,
  },
  css: {
    'blockquote p': {
      fontSize: 'inherit',
    }
  }
}

export const Poppins = props =>
  <Typography
    {...merge(config, props)}
  />

Poppins.defaultProps = {
  theme: {
    colors: {
      link: '#33e',
      highlight: '#50d',
      muted: '#fcf6ff',
    }
  }
}

export const googleFonts = [
  {
    name: 'Poppins',
    styles: [400, 700, 900],
  },
]

export default Poppins