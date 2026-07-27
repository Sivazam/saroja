/**
 * Saroja Polasapalli — Official Portfolio
 * All content extracted via OCR/VLM from:
 *   - Saroja_.pdf (candidate profile document)
 *   - POWER POINT PRESENTATION 2019 ELECTIONS.pptx (34 slides)
 *   - Reference design screenshots provided by the client
 *
 * Image filenames reference /public/images/gallery/imageN.jpeg (extracted from the PPTX media).
 */

export type JourneyItem = {
  year: string;
  title: string;
  description: string;
  image: string;
  tag: string;
};

export type StatItem = {
  id: string;
  icon: string; // lucide icon name
  stat: string;
  label: string;
  description: string;
};

export type AchievementItem = {
  title: string;
  description: string;
  icon: string;
};

export type GalleryItem = {
  src: string;
  caption: string;
  category: string;
};

export type NavLink = { label: string; href: string };

export const profile = {
  name: "Saroja",
  surname: "Polasapalli",
  fullName: "Saroja Polasapalli",
  tagline: "MAYOR · LEADER · REFORMER",
  electionYear: 2019,
  party: "YSRCP",
  previousParty: "JSP",
  constituency: "Kakinada Rural",
  state: "Andhra Pradesh",

  hero: {
    badge: "OFFICIAL PORTFOLIO",
    headlineLine1: "Saroja",
    headlineLine2: "Polasapalli",
    intro:
      "India's 4th & AP's Youngest Mayor — a journey of courage, conviction, and service to the people of Andhra Pradesh.",
    roles: ["Engineer turned Politician", "Social & Digital Media Influencer", "Motivational Speaker"],
    portrait: "/images/gallery/image2.jpeg",
    established: "2005",
    term: "2005–2010",
    termLabel: "FULL TERM",
    primaryCta: "Explore Her Journey",
    secondaryCta: "Get In Touch",
    stats: [
      { id: "mayor", stat: "4th", label: "YOUNGEST MAYOR IN INDIA" },
      { id: "dev", stat: "₹400Cr+", label: "DEVELOPMENT BROUGHT TO KAKINADA" },
      { id: "term", stat: "5 Yrs", label: "FULL TERM AS MAYOR" },
    ],
  },

  about: {
    index: "01",
    label: "ABOUT",
    headingLine1: "A leader forged by",
    headingLine2: "purpose",
    image: "/images/gallery/image5.jpeg",
    badge: "M.SC., COMPUTERS",
    paragraphs: [
      "Born on the 15th of March, 1981 in Amalapuram, Andhra Pradesh, Saroja Polasapalli made history in 2005 when she was elected the First Mayor of the Kakinada Municipal Corporation — becoming, at just 24 years of age, the 4th youngest Mayor in India and the youngest in Andhra Pradesh. An M.Sc. in Computers from Andhra University, she is an engineer turned politician, a social and digital media influencer, and a motivational speaker.",
      "During her full five-year term (2005–2010), served under the esteemed leadership of then Chief Minister Dr. Y. S. Rajasekhar Reddy garu, she steered more than ₹400 crores of development investment into Kakinada — completing her tenure with a clean, corruption-free track record that remains her defining credential.",
      "Today she advocates tirelessly for Backward Classes, women, and the underserved through the Polasapalli Foundation, and presently serves actively in the YSR Congress Party, carrying forward a movement built on service, integrity, and reform.",
    ],
    quickFacts: [
      { label: "Born", value: "15 March 1981, Amalapuram" },
      { label: "Education", value: "M.Sc. Computers, Andhra University" },
      { label: "Caste", value: "Settibalija (BC-B)" },
      { label: "Spouse", value: "P. Cherian Srinivasa Rao" },
      { label: "Father", value: "Mushini Jagan Mohan (Late), Ex. Munsif Magistrate" },
      { label: "Residence", value: "Sri Saroja Nivas, Vakalapudi, Kakinada Rural" },
    ],
  },

  journey: [
    {
      year: "2005",
      title: "First Mayor of Kakinada",
      description:
        "Elected as the First Mayor of the Kakinada Municipal Corporation at just 24 — the 4th youngest Mayor in India and the youngest in Andhra Pradesh. A historic mandate that began a five-year term of transformation.",
      image: "/images/gallery/image8.jpeg",
      tag: "Election",
    },
    {
      year: "2005–2010",
      title: "A Full Term Under YSR",
      description:
        "Served a complete five-year mayoral term under the esteemed leadership of then Chief Minister Dr. Y. S. Rajasekhar Reddy garu, steering over ₹400 crores of development into Kakinada with a clean, corruption-free record.",
      image: "/images/gallery/image5.jpeg",
      tag: "Governance",
    },
    {
      year: "2006",
      title: "Clean & Green Award",
      description:
        "Kakinada was recognised with the Clean & Green award under her stewardship — a milestone in the city's push towards sustainable, livable urban spaces.",
      image: "/images/gallery/image6.jpeg",
      tag: "Recognition",
    },
    {
      year: "2007",
      title: "IHSDP Housing Scheme",
      description:
        "Delivered a Power Point Presentation on the IHSDP Central Govt. Scheme (Integrated Housing & Slum Development) at the Marri Chenna Reddy Institute in Hyderabad — bringing centrally-funded housing to Kakinada's poor.",
      image: "/images/gallery/image11.jpeg",
      tag: "Policy",
    },
    {
      year: "2008",
      title: "Fisherman Development Society",
      description:
        "Took up the problems and solutions of the Fisherman community — the major community in Kakinada Urban — with Central Urban Development Minister Kumari Selja, advancing a dedicated development project.",
      image: "/images/gallery/image9.jpeg",
      tag: "Community",
    },
    {
      year: "2009",
      title: "Pukka Houses for the Poor",
      description:
        "Led a huge campaign in the 2009 Kakinada Assembly Elections and inaugurated Single Bed Room flats — delivering pukka houses to families that had never owned a home.",
      image: "/images/gallery/image15.jpeg",
      tag: "Welfare",
    },
    {
      year: "2009",
      title: "Redcross Bhavan with Governor N.D. Tiwari",
      description:
        "Inaugurated the Redcross Bhavan alongside former Governor Shri N. D. Tiwari, and personally inspected engineering works in low-lying areas to resolve long-standing civic problems.",
      image: "/images/gallery/image19.jpeg",
      tag: "Civic Works",
    },
    {
      year: "2010",
      title: "Gandhi Bhavan, Hyderabad",
      description:
        "Addressed party workers and leadership at Gandhi Bhavan, Hyderabad — articulating a vision for urban governance and grassroots organisation.",
      image: "/images/gallery/image23.jpeg",
      tag: "Leadership",
    },
    {
      year: "2013",
      title: "Samaikya Andhra Movement",
      description:
        "Stood shoulder to shoulder with Shri Chiranjeevi and later former Chief Minister Shri Nallari Kiran Kumar Reddy garu in the Samaikyandhra Movement — fighting to keep Andhra Pradesh united.",
      image: "/images/gallery/image20.jpeg",
      tag: "Movement",
    },
    {
      year: "2013",
      title: "Mayor's Conference, New Delhi",
      description:
        "Represented Kakinada at the Mayor's conference in New Delhi with former Central Minister Shri Jaipal Reddy, and presided over a Mayor's conference in Hyderabad with a former Chief Minister.",
      image: "/images/gallery/image7.jpeg",
      tag: "Representation",
    },
    {
      year: "2014",
      title: "Lok Sabha Candidacy",
      description:
        "Contested the Narsapuram Lok Sabha seat in the 2014 General Elections — taking her message of reform and service to a national platform.",
      image: "/images/gallery/image38.jpeg",
      tag: "Election",
    },
    {
      year: "2014–2023",
      title: "BC Welfare & JSP Leadership",
      description:
        "Served as State Mahila President of the BC Praja Samkshema Sangham. Joined the Jana Sena Party as State General Secretary and was MLA aspirant for Kakinada Rural, championing Backward Class and women's welfare.",
      image: "/images/gallery/image34.jpeg",
      tag: "Advocacy",
    },
    {
      year: "2024",
      title: "Joining YSRCP",
      description:
        "Joined the YSR Congress Party before the 2024 General Elections and presently serves actively — continuing the movement for service, integrity, and reform across Andhra Pradesh.",
      image: "/images/gallery/image37.jpeg",
      tag: "Present",
    },
  ] as JourneyItem[],

  impact: {
    index: "03",
    label: "IMPACT IN NUMBERS",
    headingLine1: "A record that",
    headingLine2: "speaks",
    subheading:
      "Measurable change, delivered with integrity — the numbers behind a career of service.",
    trustBadge: "Clean, corruption-free track record · Verified public service",
    stats: [
      {
        id: "1",
        icon: "Crown",
        stat: "4th",
        label: "YOUNGEST MAYOR IN INDIA",
        description: "A historic milestone at just 24 years old",
      },
      {
        id: "2",
        icon: "TrendingUp",
        stat: "₹400Cr+",
        label: "DEVELOPMENT INVESTMENT",
        description: "Steered into Kakinada during her mayoral term",
      },
      {
        id: "3",
        icon: "ShieldCheck",
        stat: "5 Yrs",
        label: "FULL TERM AS MAYOR",
        description: "Completed with a clean, corruption-free record",
      },
      {
        id: "4",
        icon: "HeartHandshake",
        stat: "100+",
        label: "COMMUNITY INITIATIVES",
        description: "Health camps, relief drives, and welfare programs",
      },
    ] as StatItem[],
  },

  foundation: {
    index: "04",
    label: "POLASAPALLI FOUNDATION",
    headingLine1: "Service is not a duty.",
    headingLine2: "It is a privilege.",
    paragraphs: [
      "Established with a fierce determination to serve the people, the Polasapalli Foundation carries forward a mission of compassion in action — guided by its Founder President, Sri Polasapalli Cherian Srinivasa Rao.",
      "From donating Water Treatment Plants and Oxygen Cylinders to distributing groceries and conducting Health Camps in rural areas, the Foundation reaches those that institutions often miss — bringing dignity, care, and relief to the underserved.",
    ],
    founder: "Sri Polasapalli Cherian Srinivasa Rao",
    founderRole: "Founder President",
    cards: [
      {
        image: "/images/gallery/image16.jpeg",
        title: "MARCHING WITH WOMEN",
      },
      {
        image: "/images/gallery/image18.jpeg",
        title: "WITH THE PEOPLE",
      },
      {
        image: "/images/gallery/image19.jpeg",
        title: "COMMUNITY EVENTS",
      },
    ],
    initiatives: [
      { icon: "Droplets", title: "Water Treatment Plants", desc: "Donated to communities in need of clean water." },
      { icon: "Wind", title: "Oxygen Cylinders", desc: "Mobilised during the pandemic for the critically ill." },
      { icon: "ShoppingBasket", title: "Grocery Drives", desc: "Essential supplies distributed to hundreds of families." },
      { icon: "Stethoscope", title: "Rural Health Camps", desc: "Free medical camps and medication for the poor." },
    ],
  },

  voices: {
    index: "05",
    label: "VOICES",
    headingLine1: "In her own",
    headingLine2: "words",
    subheading: "Convictions that have guided every decision, every reform, every term of service.",
    quotes: [
      {
        text: "Service is not a duty. It is a privilege — and the people of Kakinada have honoured me with that privilege.",
        context: "On her mayoral legacy",
      },
      {
        text: "I was elected at 24, the youngest in Andhra Pradesh. That trust is not a title to hold — it is a debt to repay, every single day.",
        context: "On becoming India's 4th youngest Mayor",
      },
      {
        text: "₹400 crores of development, a full five-year term, and a clean record. That is the only answer I have ever owed the public.",
        context: "On her corruption-free tenure",
      },
      {
        text: "When a backward-class daughter becomes a Mayor, it is not one woman's victory — it is a door opened for a generation.",
        context: "On representation & BC welfare",
      },
    ],
  },

  events: {
    index: "06",
    label: "EVENTS & PRESS",
    headingLine1: "A record in the",
    headingLine2: "public eye",
    subheading:
      "From civic conclaves to prime-time debates — a chronicle of coverage that spans two decades of public life.",
    clippings: [
      { src: "/images/gallery/image3.jpeg", caption: "The Youngest Mayor in India" },
      { src: "/images/gallery/image12.jpeg", caption: "Civic Chiefs' Conclave" },
      { src: "/images/gallery/image13.jpeg", caption: "Community Outreach Program" },
      { src: "/images/gallery/image14.jpeg", caption: "Street Cleaning Drive" },
      { src: "/images/gallery/image21.jpeg", caption: "Public Service Coverage" },
      { src: "/images/gallery/image22.jpeg", caption: "Political Activities" },
      { src: "/images/gallery/image25.jpeg", caption: "Group Photo at Event" },
      { src: "/images/gallery/image26.jpeg", caption: "At the Conference" },
      { src: "/images/gallery/image27.jpeg", caption: "Addressing a Public Gathering" },
      { src: "/images/gallery/image28.jpeg", caption: "Formal Committee Meeting" },
      { src: "/images/gallery/image29.jpeg", caption: "Speaking at a Function" },
      { src: "/images/gallery/image30.jpeg", caption: "Roundtable Discussion" },
      { src: "/images/gallery/image31.jpeg", caption: "Interacting with the Crowd" },
      { src: "/images/gallery/image32.jpeg", caption: "Awards Distribution" },
    ],
  },

  gallery: {
    index: "07",
    label: "GALLERY",
    headingLine1: "Moments of",
    headingLine2: "service",
    subheading: "Two decades of walking with the people — in rallies, in halls of power, and in the villages of Andhra Pradesh.",
    items: [
      { src: "/images/gallery/image5.jpeg", caption: "Civic Chiefs' Conclave", category: "Governance" },
      { src: "/images/gallery/image6.jpeg", caption: "AP Legislative Assembly", category: "Governance" },
      { src: "/images/gallery/image7.jpeg", caption: "Addressing the Public", category: "Public Address" },
      { src: "/images/gallery/image8.jpeg", caption: "Receiving an Award", category: "Recognition" },
      { src: "/images/gallery/image9.jpeg", caption: "At the Podium", category: "Public Address" },
      { src: "/images/gallery/image15.jpeg", caption: "Inauguration Ceremony", category: "Civic Works" },
      { src: "/images/gallery/image16.jpeg", caption: "Marching with Women", category: "Movement" },
      { src: "/images/gallery/image17.jpeg", caption: "Rajiv Gandhi Memorial Meeting", category: "Movement" },
      { src: "/images/gallery/image18.jpeg", caption: "Rural Visit", category: "Community" },
      { src: "/images/gallery/image19.jpeg", caption: "Lighting the Lamp", category: "Ceremony" },
      { src: "/images/gallery/image33.jpeg", caption: "With Supporters", category: "Community" },
      { src: "/images/gallery/image34.jpeg", caption: "Among the Crowd", category: "Community" },
    ] as GalleryItem[],
  },

  connect: {
    index: "08",
    label: "CONNECT",
    headingLine1: "Let's build the",
    headingLine2: "future together",
    subheading:
      "Reach out to join the movement, invite Saroja to an event, or learn more about the work in Kakinada Rural.",
    address: ["Sri Saroja Nivas, Vakalapudi", "Kakinada Rural – 533005", "Andhra Pradesh, India"],
    phones: ["+91 95050 65555", "+91 95050 11115"],
    email: "sarojamayor@gmail.com",
    party: "YSR Congress Party (YSRCP)",
    constituency: "Kakinada Rural, Andhra Pradesh",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Journey", href: "#journey" },
    { label: "Impact", href: "#impact" },
    { label: "Foundation", href: "#foundation" },
    { label: "Voices", href: "#voices" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Connect", href: "#connect" },
  ] as NavLink[],
};

export type Profile = typeof profile;
