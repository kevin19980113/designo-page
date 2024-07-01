export const menuCategories = [
  {
    title: "OUR COMPANY",
    slug: "/about",
  },
  {
    title: "LOCATIONS",
    slug: "/locations",
  },
  {
    title: "CONTACT",
    slug: "/contact",
  },
] as const;

export const productCategories = [
  {
    title: "WEB DESIGN",
    slug: "/web-design",
  },
  {
    title: "APP DESIGN",
    slug: "/app-design",
  },
  {
    title: "GRAPHIC DESIGN",
    slug: "/graphic-design",
  },
] as const;

export const features = [
  {
    title: "PASSIONATE",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We mergeart, design, and technology into exciting new solutions.",
    illustration: "/assets/home/desktop/illustration-passionate.svg",
  },
  {
    title: "RESOURCEFUL",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    illustration: "/assets/home/desktop/illustration-resourceful.svg",
  },
  {
    title: "FRIENDLY",
    description:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    illustration: "/assets/home/desktop/illustration-friendly.svg",
  },
] as const;

export const categoryProductsData = [
  {
    slug: "web-design",
    title: "Web Design",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    products: [
      {
        name: "Express",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
        image: "/assets/web-design/desktop/image-express.jpg",
      },
      {
        name: "Transfer",
        description:
          "Site for low-cost money transfers and sending money within seconds",
        image: "/assets/web-design/desktop/image-transfer.jpg",
      },
      {
        name: "Photon",
        description:
          "A state-of-the-art music player with high-resolution audio and DSP effects",
        image: "/assets/web-design/desktop/image-photon.jpg",
      },
      {
        name: "Builder",
        description:
          "Connects users with local contractors based on their location",
        image: "/assets/web-design/desktop/image-builder.jpg",
      },
      {
        name: "Blogr",
        description:
          "Blogr is a platform for creating an online blog or publication",
        image: "/assets/web-design/desktop/image-blogr.jpg",
      },
      {
        name: "Camp",
        description:
          "Get expert training in coding, data, design, and digital marketing",
        image: "/assets/web-design/desktop/image-camp.jpg",
      },
    ],
  },
  {
    slug: "app-design",
    title: "App Design",
    description:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    products: [
      {
        name: "Airfilter",
        description:
          "Solving the problem of poor indoor air quality by filtering the air",
        image: "/assets/app-design/desktop/image-airfilter.jpg",
      },
      {
        name: "Eyecam",
        description:
          "Product that lets you edit your favorite photos and videos at any time",
        image: "/assets/app-design/desktop/image-eyecam.jpg",
      },
      {
        name: "Faceit",
        description:
          "Get to meet your favorite internet superstar with the faceit app",
        image: "/assets/app-design/desktop/image-faceit.jpg",
      },
      {
        name: "Todo",
        description:
          "A todo app that features cloud sync with light and dark mode",
        image: "/assets/app-design/desktop/image-loopstudios.jpg",
      },
      {
        name: "Loopstudios",
        description: "A VR experience app made for Loopstudios",
        image: "/assets/app-design/desktop/image-todo.jpg",
      },
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    description:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    products: [
      {
        name: "Tim Brown",
        description:
          "A book cover designed for Tim Brown’s new release, ‘Change’",
        image: "/assets/graphic-design/desktop/image-change.jpg",
      },
      {
        name: "Boxed water",
        description: " A simple packaging concept made for Boxed Water",
        image: "/assets/graphic-design/desktop/image-boxed-water.jpg",
      },
      {
        name: "Science!",
        description:
          "A poster made in collaboration with the Federal Art Project",
        image: "/assets/graphic-design/desktop/image-science.jpg",
      },
    ],
  },
];

export const about = [
  {
    title: "World-class talent",
    description: [
      "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
      "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
    ],
  },
  {
    title: "The real deal",
    description: [
      "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
      "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
    ],
  },
];

export const locations = [
  {
    name: "CANADA",
    image: "/assets/shared/desktop/illustration-canada.svg",
    office: [
      "Designo Central Office",
      "3886 Wellington Street Toronto",
      "Ontario M9C 3J5",
    ],
    contacts: ["P : +1 253-863-8967", "M : contact@designo.co"],
  },
  {
    name: "AUSTRALIA",
    image: "/assets/shared/desktop/illustration-australia.svg",
    office: ["Designo AU Office", "19 Balonne Street", "New South Wales 2443"],
    contacts: ["P : (02) 6720 9092", "M : contact@designo.au"],
  },
  {
    name: "UNITED KINGDOM",
    image: "/assets/shared/desktop/illustration-united-kingdom.svg",
    office: ["Designo UK Office", "13 Colorado Way", "Rhyd-y-fro SA8 9GA"],
    contacts: ["P : 078 3115 1400", "M : contact@designo.uk"],
  },
];
