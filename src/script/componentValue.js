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
      bottom: 3500,
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
          bottom: 3500,
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
          top: 3000,
          bottom: 3500,
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
      top: 3600,
      bottom: 4900,
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
          top: 3600,
          bottom: 4900,
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
          top: 3600,
          bottom: 4200,
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
          top: 4300,
          bottom: 4900,
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
      top: 5000,
      bottom: 6300,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 5000,
          bottom: 6300,
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
          top: 5000,
          bottom: 5600,
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
          top: 5700,
          bottom: 6300,
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
      top: 6400,
      bottom: 7700,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 6400,
          bottom: 7700,
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
          top: 6400,
          bottom: 7000,
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
          top: 7100,
          bottom: 7700,
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
      top: 7800,
      bottom: 9100,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 7800,
          bottom: 8400,
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
          top: 8500,
          bottom: 9100,
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
const components = new Map([
  [
    "canvas",
    {
      id: "canvas",
      top: 0,
      bottom: 1300,
      topStyle: {
        opacity: 0,
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
  [
    "card_1",
    {
      id: "card_1",
      top: 800,
      bottom: 2200,
      topStyle: {
        opacity: 0,
        translateX: -400,
      },
      bottomStyle: {
        opacity: 0,
        translateX: 0,
      },
      animations: [
        {
          enabled: false,
          top: 800,
          bottom: 1600,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
            {
              name: "translateX",
              topValue: -200,
              bottomValue: 0,
            },
          ],
        },
        {
          enabled: false,
          top: 1600,
          bottom: 2200,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
            {
              name: "translateY",
              topValue: 0,
              bottomValue: -80,
            },
          ],
        },
      ],
    },
  ],
  [
    "card_2",
    {
      id: "card_2",
      top: 800,
      bottom: 2200,
      topStyle: {
        opacity: 0,
        translateX: 400,
      },
      bottomStyle: {
        opacity: 0,
        translateX: 0,
      },
      animations: [
        {
          enabled: false,
          top: 800,
          bottom: 1600,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
            {
              name: "translateX",
              topValue: 200,
              bottomValue: 0,
            },
          ],
        },
        {
          enabled: false,
          top: 1600,
          bottom: 2200,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
            {
              name: "translateY",
              topValue: 0,
              bottomValue: -80,
            },
          ],
        },
      ],
    },
  ],
  [
    "card_3",
    {
      id: "card_3",
      top: 2000,
      bottom: 3400,
      topStyle: {
        opacity: 0,
        translateX: -400,
      },
      bottomStyle: {
        opacity: 0,
        translateX: 0,
      },
      animations: [
        {
          enabled: false,
          top: 2000,
          bottom: 3400,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
            {
              name: "translateX",
              topValue: -200,
              bottomValue: 0,
            },
          ],
        },
        {
          enabled: false,
          top: 2800,
          bottom: 3400,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
            {
              name: "translateY",
              topValue: 0,
              bottomValue: -80,
            },
          ],
        },
      ],
    },
  ],
  [
    "card_4",
    {
      id: "card_4",
      top: 2000,
      bottom: 3400,
      topStyle: {
        opacity: 0,
        translateX: 400,
      },
      bottomStyle: {
        opacity: 0,
        translateX: 0,
      },
      animations: [
        {
          enabled: false,
          top: 2000,
          bottom: 3400,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
            {
              name: "translateX",
              topValue: 200,
              bottomValue: 0,
            },
          ],
        },
        {
          enabled: false,
          top: 2800,
          bottom: 3400,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
            {
              name: "translateY",
              topValue: 0,
              bottomValue: -80,
            },
          ],
        },
      ],
    },
  ],
]);

const def = new Map([...slide, ...components]);

export default def;
