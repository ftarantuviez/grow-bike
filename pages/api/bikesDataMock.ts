const vintageBikes: Bike[] = [
  {
    id: "1",
    type: "vintage",
    image: "/images/bikes/vintage/1.png",
    description:
      "The ultimate vintage cruiser bike for the rider with an affinity for retro style. Our famous Ladies Classic is the perfect cruising companion, giving you the platform to explore your freedom the way you want to. Add an optional basket to finish off the vintage style, perfect for picnic trips at the weekend or carrying your shopping. Available in a range of beautiful colours to match your style.",
    title: "RETRO CRUSIER",
    color: "#d1e8e0",
  },
  {
    id: "2",
    type: "vintage",
    image: "/images/bikes/vintage/2.png",
    description:
      "Our popular vintage style bike without the vintage weight, the Ladies Classic Lite is the perfect retro cruising companion. Designed with careful component selection to give you everything a vintage cruiser should be, just a little lighter. Available in a sweet bag full of colours.",
    title: "LIGHT RIDING",
    color: "#3f3f3f",
  },
  {
    id: "3",
    type: "vintage",
    image: "/images/bikes/vintage/3.png",
    description:
      "The Queen of our vintage collection. The Ladies Deluxe Bike is everything you could want in a ladies vintage bike, designed with an upright riding position and ever-elegant frame-style for increased rider comfort. A premium riding experience for those who want it all.",
    title: "LUXE LIFE",
    color: "#545454",
  },
  {
    id: "4",
    type: "vintage",
    image: "/images/bikes/vintage/4.png",
    description:
      "The bridge between kids and adult bikes, our Girls Classic 24″ vintage bike is true to the spirit of vintage style, made accessible to suit teens, young ladies and women under 5′. Explore your freedom with a retro bike that matches your style.",
    title: "RETRO STYLE",
    color: "#ffb2e0",
  },
];

const normalBikes: Bike[] = [];

const bikes: Bike[] = [...vintageBikes, ...normalBikes];

export default bikes;
