const insuranceData = [
  {
    id: 1,
    title: "Auto Insurance",
    color: "#ffdfd2",
    image: require("./../assets/car-image.png"),
    description:
      "Prepare for your family's future in the case of an unexpected tragedy. Insurance helps you.",
    subPart : [
      {
        title: "Commercial Vehicle",
        subPart : [
          {
            title: "Truck",
            url: "truck",
            image: require("./../assets/truck.png"),
            description:
              "Auto insurance is designed to protect yourself and others agains many various risks",
          },
          {
            title: "Bus & Van",
            url: "bus_van",
            image: require("./../assets/Bus.png"),
            description:
              "Prepare for your family's future in the case of an unexpected tragedy. Insurance helps you.",
          },
          {
            title: "Car",
            url: "car",
            image: require("./../assets/private.png"),
            description:
              "Insurance plans that cover trip cancellation, travel medicines and many more from your loss.",
          },
        ],
        url: "commercial",
        image: require("./../assets/commercial.png"),
        description:
          "Auto insurance is designed to protect yourself and others against many various risks.",
      },
      {
        title: "Private Vehicle",
        url: "private",
        image: require("./../assets/private.png"),
        description:
          "Auto insurance is designed to protect yourself and others against many various risks.",
      },
      {
        title: "Three Wheeler",
        url: "three-wheeler",
        image: require("./../assets/threeWheel.png"),
        description:
          "Auto insurance is designed to protect yourself and others against many various risks.",
      },
      {
        title: "Two Wheeler",
        url: "two-wheeler",
        image: require("./../assets/twowheeler.png"),
        description:
          "Auto insurance is designed to protect yourself and others against many various risks.",
      },
    ]
    
  },
  {
    id: 2,
    title: "Life Insurance",
    color: "#d4e5fb",
    image: require("./../assets/life.png"),
    description:
      "Prepare for your family's future in the case of an unexpected tragedy. Insurance helps you.",
      subPart: [
        {
          title: "Permanent Life",
          url: "permanent",
          image: require("./../assets/permanent-life.png"),
          description:
            "Prepare for your family's future in the case of an unexpected tragedy. Insurance Helps you.",
        },
        {
          title: "Term Life",
          url: "term",
          image: require("./../assets/team-life.png"),
          description:
            "Prepare for your family's future in the case of an unexpected tragedy. Insurance Helps you.",
        },
        {
          title: "Group Life",
          url: "group",
          image: require("./../assets/Group-life.png"),
          description:
            "Prepare for your family's future in the case of an unexpected tragedy. Insurance Helps you.",
        },
      ]
    },
  {
    id: 3,
    title: "Travel Insurance",
    color: "#fdedc9",
    image: require("./../assets/driver.png"),
    description:
      "Insurance plans that cover trip cancellation, travel medicines and many more from your loss.",
      subPart :  [{
        title: "Single Trip",
        url: "single-trip",
        image: require("./../assets/single-trip.png"),
        description:
          "Insurance that plans cover trip cancellation, travel medical and many more from your loss.",
      },
      {
        title: "Multi Trip",
        url: "multi-trip",
        image: require("./../assets/multi-trip.png"),
        description:
          "Insurance that plans cover trip cancellation, travel medical and many more from your loss.",
      }],
    },
  {
    id: 4,
    title: "Health Insurance",
    color: "#ffdaed",
    image: require("./../assets/health.png"),
    description:
      "Health is the most important thing that we should protect. Health insurance will take care.",
      subPart :
      [
        {
          title: "PPO",
          url: "PPO",
          image: require("./../assets/ppo.png"),
          description:
            "PPO insurance is designed to protect yourself and others agains many various risks",
        },
        {
          title: "HMO",
          url: "HMO",
          image: require("./../assets/hmo.png"),
          description:
            "HMO for your family's future in the case of an unexpected tragedy. Insurance helps you.",
        },
        {
          title: "Point Of Service",
          url: "point-of-service",
          image: require("./../assets/point-of-service.png"),
          description:
            "Point-of-service life Insurance plans that cover trip cancellation, travel medicines and many more from your loss.",
        },
        {
          title: "Health Saving",
          url: "health-saving",
          image: require("./../assets/health-saving.png"),
          description:
            "Point-of-service life Insurance plans that cover trip cancellation, travel medicines and many more from your loss.",
        },
      ]
     
    },
];
export default  insuranceData;