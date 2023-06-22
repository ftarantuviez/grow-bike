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

const normalBikes: Bike[] = [
  {
    id: "5",
    type: "normal",
    image: "/images/bikes/normal/1.png",
    description:
      "With relaxed geometry, wide range Shimano gearing, and 40c tyres, moving by bike has never been so easy. The Transit frame is made from lightweight hydroformed alloy delivering a nimble and accurate ride, making you feel at home instantly. Cables are routed internally to give a sleek look and improve protection, with the fork crown and headtube size matched to improve looks and reduce dirt ingress to the headset.",
    title: "GET MOVING",
    color: "#1e73be",
  },
  {
    id: "6",
    type: "normal",
    image: "/images/bikes/normal/2.png",
    description:
      "The Transit WSD frame is made from lightweight hydroformed alloy and has geometry designed with consideration of female frames, maximising comfort and performance. Cables are routed internally to give a sleek look and improve protection, with the fork crown and headtube size matched to improve looks and reduce dirt ingress to the headset.",
    title: "TRANSIT WSD BIKE MY23",
    color: "#cfe4fd",
  },
  {
    id: "7",
    type: "normal",
    image: "/images/bikes/normal/3.png",
    description:
      "Luggage and mudguards are easily fitted using the frames mounts making customization to your needs easy. And with a sturdy chain stay mounted kickstand loading and unloading is always easy. Pro disc models are equipped with Nutt hydraulic discs and upgraded wheelsets to really enhance the ride quality and control.",
    title: "TRANSIT PRO DISC BIKE MY23",
    color: "#919191",
  },
  {
    id: "8",
    type: "normal",
    image: "/images/bikes/normal/4.png",
    description:
      "Luggage and mudguards are easily fitted using the frames mounts making customization to your needs easy. And with a sturdy chain stay mounted kickstand loading and unloading is always easy. Pro disc models are equipped with Nutt hydraulic discs and upgraded wheelsets to really enhance the ride quality and control.",
    title: "TRANSIT PRO DISC WSD BIKE MY23",
    color: "#c0cac6",
  },
];

const electricBikes: Bike[] = [
  {
    id: "9",
    type: "electric",
    image: "/images/bikes/electric/1.png",
    description:
      "With relaxed geometry, wide range Shimano gearing, and 40c tyres, moving by bike has never been so easy. The Transit frame is made from lightweight hydroformed alloy delivering a nimble and accurate ride, making you feel at home instantly. Cables are routed internally to give a sleek look and improve protection, with the fork crown and headtube size matched to improve looks and reduce dirt ingress to the headset.",
    title: "QUEST 1.0 EBIKE MY23",
    color: "#2a2628",
  },
  {
    id: "10",
    type: "electric",
    image: "/images/bikes/electric/2.png",
    description:
      "With relaxed geometry, wide range Shimano gearing, and 40c tyres, moving by bike has never been so easy. The Transit frame is made from lightweight hydroformed alloy delivering a nimble and accurate ride, making you feel at home instantly. Cables are routed internally to give a sleek look and improve protection, with the fork crown and headtube size matched to improve looks and reduce dirt ingress to the headset.",
    title: "QUEST 2.0 EBIKE MY23",
    color: "#c0cac6",
  },
  {
    id: "11",
    type: "electric",
    image: "/images/bikes/electric/3.png",
    description:
      "With relaxed geometry, wide range Shimano gearing, and 40c tyres, moving by bike has never been so easy. The Transit frame is made from lightweight hydroformed alloy delivering a nimble and accurate ride, making you feel at home instantly. Cables are routed internally to give a sleek look and improve protection, with the fork crown and headtube size matched to improve looks and reduce dirt ingress to the headset.",
    title: "Blacktop 2.0 eBike MY23",
    color: "#697e91",
  },
  {
    id: "12",
    type: "electric",
    image: "/images/bikes/electric/4.png",
    description:
      "With relaxed geometry, wide range Shimano gearing, and 40c tyres, moving by bike has never been so easy. The Transit frame is made from lightweight hydroformed alloy delivering a nimble and accurate ride, making you feel at home instantly. Cables are routed internally to give a sleek look and improve protection, with the fork crown and headtube size matched to improve looks and reduce dirt ingress to the headset.",
    title: "Blacktop 2.0 Step Through eBike MY23",
    color: "#697e91",
  },
];

const bikes: Bike[] = [...vintageBikes, ...normalBikes, ...electricBikes];

export default bikes;
