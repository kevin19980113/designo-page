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
