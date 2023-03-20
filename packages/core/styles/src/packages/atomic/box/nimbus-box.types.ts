import {
  Conditions,
  BorderStyle,
  Cursor,
  BoxSizing,
  Position,
  Overflow,
  Display,
  FlexWrap,
  JustifyContent,
  FlexDirection,
  AlignItems,
  AlignSelf,
  PointerEvents,
  TransitionTiming,
} from "../../../types";
import { boxSprinkle } from "./nimbus-box.css";

const { properties: propertiesBox } = boxSprinkle;

type BoxBorderColorProperties = keyof typeof propertiesBox.borderColor;
type BoxBackgroundColorProperties = keyof typeof propertiesBox.backgroundColor;
type BoxColorProperties = keyof typeof propertiesBox.color;
type BoxShadowProperties = keyof typeof propertiesBox.boxShadow;
type BoxSpaceProperties = keyof typeof propertiesBox.space;
type BoxMarginProperties = keyof typeof propertiesBox.margin;
type BoxGapProperties = keyof typeof propertiesBox.gap;
type BoxGridGapProperties = keyof typeof propertiesBox.gridGap;
type TransitionDurationProperties =
  keyof typeof propertiesBox.transitionDuration;

interface BoxConditions<T> extends Conditions<T> {
  focus?: T;
  focusWithin?: T;
  active?: T;
  hover?: T;
  disabled?: T;
}

export interface BoxSprinkle {
  width?: string | BoxConditions<string>;
  height?: string | BoxConditions<string>;
  maxWidth?: string | BoxConditions<string>;
  maxHeight?: string | BoxConditions<string>;
  minWidth?: string | BoxConditions<string>;
  minHeight?: string | BoxConditions<string>;
  bottom?: string | BoxConditions<string>;
  left?: string | BoxConditions<string>;
  right?: string | BoxConditions<string>;
  top?: string | BoxConditions<string>;
  flex?: string | BoxConditions<string>;
  flexShrink?: string | BoxConditions<string>;
  flexGrow?: string | BoxConditions<string>;
  order?: string | BoxConditions<string>;
  gridTemplateColumns?: string | BoxConditions<string>;
  gridTemplateAreas?: string | BoxConditions<string>;
  gridTemplateRows?: string | BoxConditions<string>;
  gridArea?: string | BoxConditions<string>;
  display?: Display | BoxConditions<Display>;
  flexWrap?: FlexWrap | BoxConditions<FlexWrap>;
  justifyContent?: JustifyContent | BoxConditions<JustifyContent>;
  flexDirection?: FlexDirection | BoxConditions<FlexDirection>;
  alignItems?: AlignItems | BoxConditions<AlignItems>;
  alignSelf?: AlignSelf | BoxConditions<AlignSelf>;
  gap?: BoxGapProperties | BoxConditions<BoxGapProperties>;
  gridGap?: BoxGridGapProperties | BoxConditions<BoxGridGapProperties>;
  pointerEvents?: PointerEvents | BoxConditions<PointerEvents>;
  position?: Position | BoxConditions<Position>;
  overflow?: Overflow | BoxConditions<Overflow>;
  overflowX?: Overflow | BoxConditions<Overflow>;
  overflowY?: Overflow | BoxConditions<Overflow>;
  cursor?: Cursor | BoxConditions<Cursor>;
  backgroundColor?:
    | BoxBackgroundColorProperties
    | BoxConditions<BoxBackgroundColorProperties>;
  color?: BoxColorProperties | BoxConditions<BoxColorProperties>;
  borderRadius?: string | BoxConditions<string>;
  borderWidth?: string | BoxConditions<string>;
  borderColor?:
    | BoxBorderColorProperties
    | BoxConditions<BoxBorderColorProperties>;
  borderStyle?: BorderStyle | BoxConditions<BorderStyle>;
  boxSizing?: BoxSizing | BoxConditions<BoxSizing>;
  boxShadow?: BoxShadowProperties | BoxConditions<BoxShadowProperties>;
  padding?: BoxSpaceProperties | BoxConditions<BoxSpaceProperties>;
  paddingTop?: BoxSpaceProperties | BoxConditions<BoxSpaceProperties>;
  paddingBottom?: BoxSpaceProperties | BoxConditions<BoxSpaceProperties>;
  paddingLeft?: BoxSpaceProperties | BoxConditions<BoxSpaceProperties>;
  paddingRight?: BoxSpaceProperties | BoxConditions<BoxSpaceProperties>;
  margin?: BoxMarginProperties | BoxConditions<BoxMarginProperties>;
  marginTop?: BoxMarginProperties | BoxConditions<BoxMarginProperties>;
  marginBottom?: BoxMarginProperties | BoxConditions<BoxMarginProperties>;
  marginLeft?: BoxMarginProperties | BoxConditions<BoxMarginProperties>;
  marginRight?: BoxMarginProperties | BoxConditions<BoxMarginProperties>;
  paddingX?: BoxSpaceProperties | BoxConditions<BoxSpaceProperties>;
  paddingY?: BoxSpaceProperties | BoxConditions<BoxSpaceProperties>;
  p?: BoxSpaceProperties | BoxConditions<BoxSpaceProperties>;
  pl?: BoxSpaceProperties | BoxConditions<BoxSpaceProperties>;
  pr?: BoxSpaceProperties | BoxConditions<BoxSpaceProperties>;
  pt?: BoxSpaceProperties | BoxConditions<BoxSpaceProperties>;
  pb?: BoxSpaceProperties | BoxConditions<BoxSpaceProperties>;
  px?: BoxSpaceProperties | BoxConditions<BoxSpaceProperties>;
  py?: BoxSpaceProperties | BoxConditions<BoxSpaceProperties>;
  marginX?: BoxMarginProperties | BoxConditions<BoxMarginProperties>;
  marginY?: BoxMarginProperties | BoxConditions<BoxMarginProperties>;
  m?: BoxMarginProperties | BoxConditions<BoxMarginProperties>;
  mr?: BoxMarginProperties | BoxConditions<BoxMarginProperties>;
  ml?: BoxMarginProperties | BoxConditions<BoxMarginProperties>;
  mt?: BoxMarginProperties | BoxConditions<BoxMarginProperties>;
  mb?: BoxMarginProperties | BoxConditions<BoxMarginProperties>;
  mx?: BoxMarginProperties | BoxConditions<BoxMarginProperties>;
  my?: BoxMarginProperties | BoxConditions<BoxMarginProperties>;
  transitionTimingFunction?: TransitionTiming | BoxConditions<TransitionTiming>;
  transitionProperty?: string | BoxConditions<string>;
  transitionDelay?: string | BoxConditions<string>;
  transitionDuration?:
    | TransitionDurationProperties
    | BoxConditions<TransitionDurationProperties>;
  zIndex?: number | BoxConditions<number>;
  backgroundImage?: string | BoxConditions<string>;
  backgroundPosition?: string | BoxConditions<string>;
  backgroundBlendMode?: string | BoxConditions<string>;
  backgroundRepeat?: string | BoxConditions<string>;
  backgroundSize?: string | BoxConditions<string>;
}