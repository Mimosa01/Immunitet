import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type Weights = { 
  logic: number; 
  emotion: number;
  conformity: number;
  authority: number 
}

export type Option = {
  id: number;
  text: string;
  weights: Weights;
}