declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(
      target: string | string[] | HTMLElement | HTMLElement[],
      config?: any
    );
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    constructor(config?: any);
    paused(value?: boolean): boolean | this;
    static create(config?: any): ScrollSmoother;
  }
}
