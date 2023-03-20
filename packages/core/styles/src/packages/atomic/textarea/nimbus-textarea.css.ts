import { style, styleVariants } from "@vanilla-extract/css";

import { varsThemeBase } from "../../../themes";

const base = style({
  fontFamily: varsThemeBase.fontFamily.centranube,
  fontSize: varsThemeBase.fontSize.body.base,
  lineHeight: varsThemeBase.lineWeight.body.caption,
  textAlign: "left",
  color: varsThemeBase.colors.neutral.textHigh,
  boxSizing: "border-box",
  borderRadius: varsThemeBase.sizes[2],
  margin: 0,
  paddingBottom: varsThemeBase.sizes[2],
  paddingLeft: varsThemeBase.sizes[2],
  paddingRight: varsThemeBase.spacing[2],
  paddingTop: varsThemeBase.sizes[2],
  width: "100%",
  appearance: "none",
  outline: "none",
  transition: `all ${varsThemeBase.motion.speed.fast} ease`,
  "::placeholder": {
    color: varsThemeBase.colors.neutral.textDisabled,
  },
  ":disabled": {
    border: `1px solid ${varsThemeBase.colors.neutral.interactive}`,
    backgroundColor: varsThemeBase.colors.neutral.surfaceDisabled,
    color: varsThemeBase.colors.neutral.textDisabled,
    cursor: "not-allowed",
  },
  ":focus-visible": {
    boxShadow: varsThemeBase.utils.focus,
  },
});

export const appearance = styleVariants({
  neutral: [
    base,
    {
      border: `1px solid ${varsThemeBase.colors.neutral.interactive}`,
      backgroundColor: varsThemeBase.colors.neutral.background,
      ":focus": {
        borderColor: varsThemeBase.colors.primary.interactivePressed,
      },
    },
  ],
  success: [
    base,
    {
      border: `1px solid ${varsThemeBase.colors.success.interactive}`,
      backgroundColor: varsThemeBase.colors.success.surface,
      ":focus": {
        borderColor: varsThemeBase.colors.success.interactivePressed,
      },
    },
  ],
  warning: [
    base,
    {
      border: `1px solid ${varsThemeBase.colors.warning.interactive}`,
      backgroundColor: varsThemeBase.colors.warning.surface,
      ":focus": {
        borderColor: varsThemeBase.colors.warning.interactivePressed,
      },
    },
  ],
  danger: [
    base,
    {
      border: `1px solid ${varsThemeBase.colors.danger.interactive}`,
      backgroundColor: varsThemeBase.colors.danger.surface,
      ":focus": {
        borderColor: varsThemeBase.colors.danger.interactivePressed,
      },
    },
  ],
});