/// <reference types="vite/client" />

// Add CSS module type declarations
declare module "*.css" {
  const content: string;
  export default content;
}

// Add SVG module type declarations
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
