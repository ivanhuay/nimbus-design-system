import { recipe } from "@vanilla-extract/recipes";

import { varsThemeBase } from "../../themes/base.css";

export const style = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    gap: varsThemeBase.spacing[1],

    lineHeight: varsThemeBase.lineWeight.body.caption,
    fontSize: varsThemeBase.fontSize.body.caption,
    fontFamily: varsThemeBase.fontFamily.centranube,

    color: varsThemeBase.colors.neutral.textLow,
  },
  variants: {
    hidden: {
      true: {
        border: "0",
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        width: "1px",
      },
    },
    defaultVariants: {
      hidden: "false",
    },
  },
});
