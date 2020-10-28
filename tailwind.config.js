module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      scale : {
        '58': '.58',
        '62':'.62'
      },
      spacing: {
        '21':'5.3rem',
        '22':'5.5rem',
        '23':'5.8rem',
        '26':'6.3rem',
        '27':'7rem',
      }
    },
  },
  variants: {
    borderRadius: ['responsive', 'hover','focus'],
    borderStyle: ['responsive','hover','focus'],
    borderWidth: ['responsive', 'hover','focus'],
    outline: ['responsive', 'focus', 'hover'],
    
  },
  plugins: [],
}
