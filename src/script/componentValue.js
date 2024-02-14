import bezierEasing from "https://cdn.skypack.dev/bezier-easing@2.1.0";

const ease = bezierEasing(0.25, 0.1, 0.25, 1.0);
const easeIn = bezierEasing(0.38, 0.01, 0.78, 0.13);
const midSlow = bezierEasing(0, 0.7, 1, 0.3);

const slide = new Map([
  [
    "slide0",
    {
      id: "slide0",
      top: 0,
      bottom: 1100,
      topStyle: {
        opacity: 1,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 0,
          bottom: 1100,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    "slide1",
    {
      id: "slide1",
      top: 1100,
      bottom: 2500,
      topStyle: {
        opacity: 0,
        translateY: -60,
      },
      bottomStyle: {
        opacity: 0,
        translateY: 60,
      },
      animations: [
        {
          enabled: false,
          top: 1100,
          bottom: 2500,
          easing: midSlow,
          styles: [
            {
              name: "translateY",
              topValue: 60,
              bottomValue: -60,
            },
          ],
        },
        {
          enabled: false,
          top: 1100,
          bottom: 1400,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        {
          enabled: false,
          top: 2000,
          bottom: 2500,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    "slide2",
    {
      id: "slide2",
      top: 2400,
      bottom: 3700,
      topStyle: {
        opacity: 0,
        translateY: -60,
      },
      bottomStyle: {
        opacity: 0,
        translateY: 60,
      },
      animations: [
        {
          enabled: false,
          top: 2400,
          bottom: 3700,
          easing: midSlow,
          styles: [
            {
              name: "translateY",
              topValue: 60,
              bottomValue: -60,
            },
          ],
        },
        {
          enabled: false,
          top: 2400,
          bottom: 3000,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        {
          enabled: false,
          top: 3100,
          bottom: 3700,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    "slide3",
    {
      id: "slide3",
      top: 3800,
      bottom: 5100,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 3800,
          bottom: 5100,
          easing: midSlow,
          styles: [
            {
              name: "translateY",
              topValue: 60,
              bottomValue: -60,
            },
          ],
        },
        {
          enabled: false,
          top: 3800,
          bottom: 4400,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        {
          enabled: false,
          top: 4500,
          bottom: 5100,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    "slide4",
    {
      id: "slide4",
      top: 5200,
      bottom: 6500,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 5200,
          bottom: 6500,
          easing: midSlow,
          styles: [
            {
              name: "translateY",
              topValue: 60,
              bottomValue: -60,
            },
          ],
        },
        {
          enabled: false,
          top: 5200,
          bottom: 5800,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        {
          enabled: false,
          top: 5900,
          bottom: 6500,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    "slide5",
    {
      id: "slide5",
      top: 6600,
      bottom: 9000,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 6100,
          bottom: 7100,
          easing: midSlow,
          styles: [
            {
              name: "translateY",
              topValue: 60,
              bottomValue: -60,
            },
          ],
        },
        {
          enabled: false,
          top: 6100,
          bottom: 6700,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
      ],
    },
  ],
]);
const components = new Map([
  [
    "canvas",
    {
      id: "canvas",
      top: 0,
      bottom: 1300,
      topStyle: {
        opacity: 1,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 0,
          bottom: 1300,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    "moving-background",
    {
      id: "moving-background",
      top: 5000,
      bottom: 6400,
      topStyle: {
        opacity: 0,
        translateY: 300,
      },
      bottomStyle: {
        opacity: 0,
        translateY: 0,
      },
      animations: [
        {
          enabled: false,
          top: 5000,
          bottom: 5800,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
            {
              name: "translateY",
              topValue: 200,
              bottomValue: 0,
            },
          ],
        },
        {
          enabled: false,
          top: 5800,
          bottom: 6400,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
]);

const def = new Map([...slide, ...components]);

export default def;
