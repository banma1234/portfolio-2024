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
    "slide5",
    {
      id: "slide5",
      top: 1100,
      bottom: 2400,
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
          bottom: 2400,
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
          bottom: 1700,
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
          top: 1800,
          bottom: 2400,
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
      top: 2400,
      bottom: 4800,
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
          bottom: 4800,
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
          bottom: 2700,
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
          top: 4200,
          bottom: 4800,
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
      top: 5000,
      bottom: 7400,
      topStyle: {
        opacity: 0,
        translateY: -40,
      },
      bottomStyle: {
        opacity: 0,
        translateY: 40,
      },
      animations: [
        {
          enabled: false,
          top: 5000,
          bottom: 7400,
          easing: midSlow,
          styles: [
            {
              name: "translateY",
              topValue: 40,
              bottomValue: -40,
            },
          ],
        },
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
          ],
        },
        {
          enabled: false,
          top: 6600,
          bottom: 7400,
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
      top: 7500,
      bottom: 9400,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 7500,
          bottom: 9400,
          easing: midSlow,
          styles: [
            {
              name: "translateY",
              topValue: 40,
              bottomValue: -40,
            },
          ],
        },
        {
          enabled: false,
          top: 7500,
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
          bottom: 9400,
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
      top: 9500,
      bottom: 11000,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 9500,
          bottom: 11000,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        // {
        //   enabled: false,
        //   top: 9500,
        //   bottom: 10100,
        //   easing: easeIn,
        //   styles: [
        //     {
        //       name: "opacity",
        //       topValue: 1,
        //       bottomValue: 0,
        //     },
        //   ],
        // },
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
    "canvas2",
    {
      id: "canvas2",
      top: 1100,
      bottom: 2400,
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
          bottom: 2400,
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
          bottom: 1700,
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
          top: 1800,
          bottom: 2400,
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
  // [
  //   "moving-background",
  //   {
  //     id: "moving-background",
  //     top: 5000,
  //     bottom: 6400,
  //     topStyle: {
  //       opacity: 0,
  //       translateY: 300,
  //     },
  //     bottomStyle: {
  //       opacity: 0,
  //       translateY: 0,
  //     },
  //     animations: [
  //       {
  //         enabled: false,
  //         top: 5000,
  //         bottom: 5800,
  //         easing: ease,
  //         styles: [
  //           {
  //             name: "opacity",
  //             topValue: 0,
  //             bottomValue: 1,
  //           },
  //           {
  //             name: "translateY",
  //             topValue: 200,
  //             bottomValue: 0,
  //           },
  //         ],
  //       },
  //       {
  //         enabled: false,
  //         top: 5800,
  //         bottom: 6400,
  //         easing: easeIn,
  //         styles: [
  //           {
  //             name: "opacity",
  //             topValue: 1,
  //             bottomValue: 0,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ],
  [
    "card_1",
    {
      id: "card_1",
      top: 2200,
      bottom: 3500,
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
          top: 2200,
          bottom: 2900,
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
          top: 2900,
          bottom: 3500,
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
              bottomValue: -100,
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
      top: 2200,
      bottom: 3500,
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
          top: 2200,
          bottom: 2900,
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
          top: 2900,
          bottom: 3500,
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
              bottomValue: -100,
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
      top: 3300,
      bottom: 4700,
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
          top: 3300,
          bottom: 4000,
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
          top: 4000,
          bottom: 4700,
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
              bottomValue: -100,
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
      top: 3300,
      bottom: 4700,
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
          top: 3300,
          bottom: 4000,
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
          top: 4000,
          bottom: 4700,
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
              bottomValue: -100,
            },
          ],
        },
      ],
    },
  ],
  [
    "opensource_1",
    {
      id: "opensource_1",
      top: 4500,
      bottom: 6000,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 4500,
          bottom: 5100,
          easing: ease,
          styles: [
            {
              name: "translateY",
              topValue: 120,
              bottomValue: 0,
            },
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        {
          enabled: false,
          top: 5600,
          bottom: 6000,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
            {
              name: "translateX",
              topValue: 0,
              bottomValue: -600,
            },
          ],
        },
      ],
    },
  ],
  [
    "opensource_2",
    {
      id: "opensource_2",
      top: 5500,
      bottom: 7200,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 5500,
          bottom: 5900,
          easing: ease,
          styles: [
            {
              name: "translateX",
              topValue: 600,
              bottomValue: 0,
            },
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        {
          enabled: false,
          top: 6600,
          bottom: 7200,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
            {
              name: "translateX",
              topValue: 0,
              bottomValue: -600,
            },
          ],
        },
      ],
    },
  ],
  [
    "post-container",
    {
      id: "post-container",
      top: 7300,
      bottom: 9400,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 7300,
          bottom: 9400,
          easing: midSlow,
          styles: [
            {
              name: "translateX",
              topValue: 400,
              bottomValue: -400,
            },
          ],
        },
        {
          enabled: false,
          top: 7200,
          bottom: 8000,
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
          top: 8300,
          bottom: 9400,
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
