import Typography from "typography"
import Lincoln from "typography-theme-lincoln"

Lincoln.overrideStyles = () => ({
  a: {
    textDecoration: "none",
    transition: "all 0.22s ease-in",
    color: "#5d8aa8",
  },
  "a:hover": {
    // -moz-transition: all 0.22s ease-in;
    // -o-transition: all 0.22s ease-in;
    // -webkit-transition: all 0.22s ease-in;
    transition: "all 0.22s ease-in",
    color: "#2e4757",
  },
})

const typography = new Typography(Lincoln)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
