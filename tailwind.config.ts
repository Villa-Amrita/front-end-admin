import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import chroma from "chroma-js";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: "#00B2B9",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unnecessary-type-assertion
        "primary-dark": chroma("#00B2B9").darken().hex() as string,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unnecessary-type-assertion
        "primary-light": chroma("#00B2B9").brighten().hex() as string,
        secondary: "#E3E0D9",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unnecessary-type-assertion
        "secondary-dark": chroma("#E3E0D9").darken().hex() as string,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unnecessary-type-assertion
        "secondary-light": chroma("#E3E0D9").brighten().hex() as string,
      },
    },
  },
  plugins: [],
} satisfies Config;
