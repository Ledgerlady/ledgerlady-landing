import type { StaticImageData } from "next/image";

import {
  AfricanLady,
  CloseUpLady,
  ConfidentLady,
  MarketingImg,
  PositiveLady,
} from "@/constants/img";

type ImageLike = StaticImageData | string;

export type ProgramContent = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: ImageLike;
  detailIntro: string;
  stats?: string[];
  outcomes: string[];
  galleryTitle?: string;
  galleryDescription?: string;
  gallery?: {
    src: ImageLike;
    alt: string;
    caption?: string;
  }[];
  sections: {
    title: string;
    paragraphs: string[];
  }[];
};

export type BlogContent = {
  slug: string;
  title: string;
  category: string;
  description: string;
  publishedAt: string;
  authorName: string;
  authorRole: string;
  image: ImageLike;
  sections: {
    title: string;
    paragraphs: string[];
  }[];
};

export type GalleryImage = {
  src: ImageLike;
  alt: string;
  title: string;
  description: string;
};

export const ecosystems = [
  {
    name: "Solana",
    logo: "/images/ecosystems/solanaLogo.svg",
  },
  {
    name: "Base",
    logo: "/images/ecosystems/Base_lockup_2color.svg",
  },
  {
    name: "Arbitrum",
    logo: "/images/ecosystems/arbitrum-arb-logo.svg",
  },
  {
    name: "TON",
    logo: "/images/ecosystems/ton_logo.svg",
  },
  {
    name: "Lisk",
    logo: "/images/ecosystems/lisk-lsk-logo.svg",
  },
];

export const communityPartners: { name: string; logo?: string }[] = [
  {
    name: "Web3Clubs",
    logo: "/images/communities/web3clubslogo.jpg",
  },
  {
    name: "Base East Africa",
    logo: "/images/communities/baseeastafrica.jpeg",
  },
  {
    name: "Chasing Mavericks",
    logo: "/images/communities/chasing-mavericks.png",
  },
];

export const linktreeUrl = "https://linktr.ee/Ledgerlady";
export const contactEmail = "ledgerlady.empower@gmail.com";

export const programs: ProgramContent[] = [
  {
    slug: "solidity-cohort",
    title: "Solidity Cohort",
    eyebrow: "Early 2025",
    description:
      "An early 2025 cohort focused on smart contract development, technical foundations, and building with more confidence.",
    image: "/images/programs/solidity-cohort-2025/solidity_cohort_poster.jpeg",
    detailIntro:
      "Cohort 7 (Solidity) has wrapped. The program was designed to help members move beyond curiosity and into actual smart contract thinking, while creating enough structure, mentorship, and repetition for builders to keep going after the cohort ended.",
    stats: [
      "36 builders completed the program",
      "250+ smart contracts deployed on ETH & Lisk",
      "90 days of learning and building",
      "25 capstone projects under development",
      "200+ hours of training, mentorship, and support",
      "20 IRL bootcamps",
    ],
    outcomes: [
      "Smart contract fundamentals with clearer technical context",
      "A stronger grasp of how builders move from theory to implementation",
      "A cohort-based learning experience with accountability and support",
    ],
    galleryTitle: "Moments from the cohort",
    galleryDescription:
      "A visual archive of the Solidity Cohort, including the poster, graduation moments, and the energy around the program.",
    gallery: [
      {
        src: "/images/programs/solidity-cohort-2025/solidity_cohort_poster.jpeg",
        alt: "Solidity cohort poster",
        caption: "Cohort 7 poster",
      },
      {
        src: "/images/programs/solidity-cohort-2025/soliditycohortmoment.jpeg",
        alt: "Solidity cohort moment",
        caption: "A moment from the Solidity cohort",
      },
      {
        src: "/images/programs/solidity-cohort-2025/graduationphoto1.jpeg",
        alt: "Solidity cohort graduation photo",
        caption: "Graduation photo 1",
      },
      {
        src: "/images/programs/solidity-cohort-2025/graduationphoto2.jpeg",
        alt: "Solidity cohort graduation group photo",
        caption: "Graduation photo 2",
      },
    ],
    sections: [
      {
        title: "What the cohort focused on",
        paragraphs: [
          "Members spent time learning the language of Solidity, thinking through core blockchain primitives, and understanding how smart contracts behave in practice.",
          "The goal was not just to introduce syntax. It was to help participants build the judgment and repetition needed to keep going after the cohort ended.",
        ],
      },
      {
        title: "Why it matters",
        paragraphs: [
          "Ledger Lady is increasingly interested in depth, not just first exposure. The cohort reflects that shift. It gave members structure, momentum, and a clearer path into serious building.",
        ],
      },
    ],
  },
  {
    slug: "proof-of-wednesdays",
    title: "Proof of Wednesdays",
    eyebrow: "ZK Series",
    description:
      "A ZK-focused series in collaboration with Web3Clubs, combining technical sessions with resources that make difficult topics more approachable.",
    image: "/images/programs/proof-of-wednesdays/poster-01.jpeg",
    detailIntro:
      "Proof of Wednesdays is Ledger Lady's ongoing ZK collaboration with Web3Clubs. It creates room for more deliberate conversations around zero-knowledge systems, how they work, and why they matter.",
    outcomes: [
      "A more accessible entry into ZK without flattening the ideas",
      "Shared resources that members can revisit after each session",
      "A recurring technical rhythm that deepens over time",
    ],
    galleryTitle: "Inside the series",
    galleryDescription:
      "Posters, session moments, and visual snapshots from Proof of Wednesdays and the learning rhythm it created.",
    gallery: [
      {
        src: "/images/programs/proof-of-wednesdays/poster-01.jpeg",
        alt: "Proof of Wednesdays poster",
        caption: "Series poster",
      },
      {
        src: "/images/programs/proof-of-wednesdays/poster-02.jpeg",
        alt: "Proof of Wednesdays poster variation",
        caption: "Poster variation",
      },
      {
        src: "/images/programs/proof-of-wednesdays/poster-03.jpeg",
        alt: "Proof of Wednesdays session poster",
        caption: "Session poster",
      },
      {
        src: "/images/programs/proof-of-wednesdays/proofofwednesdayinsession.jpeg",
        alt: "Proof of Wednesdays in-session image",
        caption: "Proof of Wednesdays in session",
      },
    ],
    sections: [
      {
        title: "A better way to learn difficult topics",
        paragraphs: [
          "ZK can feel abstract and intimidating when the conversation is rushed or over-simplified. This series makes room for clarity, repetition, and technical curiosity.",
          "The sessions are designed to meet people seriously. They are not watered down, and they are not built around hype.",
        ],
      },
      {
        title: "Why the collaboration works",
        paragraphs: [
          "Working with Web3Clubs expands the exchange of ideas while keeping the learning grounded. It also shows how community collaborations can create better technical culture.",
        ],
      },
    ],
  },
  {
    slug: "workshop-archive",
    title: "Workshop Archive",
    eyebrow: "2 Years of Activity",
    description:
      "A growing body of sessions, materials, and learning moments from the past two years of community building.",
    image: "/images/programs/workshop-archive/baseworkshopnov302024.jpeg",
    detailIntro:
      "Ledger Lady has hosted workshops, technical sessions, meetups, and community moments over the last two years. The archive is where that body of work starts to become visible.",
    outcomes: [
      "A clearer record of the community's technical growth",
      "A foundation for documenting future resources more intentionally",
      "A way to show the consistency behind the work",
    ],
    galleryTitle: "Moments from workshops and meetups",
    galleryDescription:
      "A collage from sessions, meetups, and community moments across the workshops Ledger Lady has hosted over the last two years.",
    gallery: [
      {
        src: "/images/programs/workshop-archive/arbitrum_nairobi_summit.jpeg",
        alt: "Arbitrum Nairobi Summit",
        caption: "Arbitrum Nairobi Summit",
      },
      {
        src: "/images/programs/workshop-archive/arbitrum_workshop_feb20_2024.jpeg",
        alt: "Arbitrum workshop in February 2024",
        caption: "Arbitrum Workshop · February 20, 2024",
      },
      {
        src: "/images/programs/workshop-archive/baseworkshopnov302024.jpeg",
        alt: "Base workshop in November 2024",
        caption: "Base Workshop · November 30, 2024",
      },
      {
        src: "/images/programs/workshop-archive/baseworkshop2nov302024.jpeg",
        alt: "Base workshop community session",
        caption: "Base Workshop Community Session",
      },
      {
        src: "/images/programs/workshop-archive/firstbasemeetupinnbo.jpeg",
        alt: "First Base meetup in Nairobi",
        caption: "First Base Meetup in Nairobi",
      },
      {
        src: "/images/programs/workshop-archive/solana_meetup_june15_2024.jpeg",
        alt: "Solana meetup in June 2024",
        caption: "Solana Meetup · June 15, 2024",
      },
      {
        src: "/images/programs/workshop-archive/solana_meetup_september_2024_blinksandactions.jpeg",
        alt: "Solana meetup on blinks and actions",
        caption: "Solana Meetup · Blinks and Actions",
      },
      {
        src: "/images/programs/workshop-archive/ton_meetup_september8_2024.jpeg",
        alt: "TON meetup in September 2024",
        caption: "TON Meetup · September 8, 2024",
      },
      {
        src: "/images/programs/workshop-archive/tonworkshopdec172024.jpeg",
        alt: "TON workshop in December 2024",
        caption: "TON Workshop · December 17, 2024",
      },
      {
        src: "/images/programs/workshop-archive/proofofwednesdayinsession.jpeg",
        alt: "Proof of Wednesdays in session",
        caption: "Proof of Wednesdays in Session",
      },
    ],
    sections: [
      {
        title: "What the archive captures",
        paragraphs: [
          "The archive is not only about preserving photos or event titles. It is about documenting the rhythm of a community that has been learning, gathering, and building in public.",
          "As Ledger Lady grows, this archive becomes part of how the community tells the truth about its work and its momentum.",
        ],
      },
    ],
  },
];

export const communityHighlights = [
  {
    title: "Ledger Lady 2.0 Launch",
    label: "March 2026",
    description:
      "A reintroduction of Ledger Lady as a more mature, technically ambitious community centered on depth, standards, and real work.",
    image: "/images/events/community-highlights/LedgerLady2.0 flyer.png",
    href: "/events",
  },
  {
    title: "Proof of Wednesdays",
    label: "Recurring Series",
    description:
      "A ZK learning series built with Web3Clubs, designed to make difficult concepts more understandable without losing rigor.",
    image: "/images/programs/proof-of-wednesdays/proofofwednesdayinsession.jpeg",
    href: "/events",
  },
  {
    title: "Solidity Cohort Graduation",
    label: "Community Milestone",
    description:
      "A cohort moment that reflected how far members had moved from early learning into stronger technical confidence.",
    image: "/images/programs/solidity-cohort-2025/graduation-4.jpeg",
    href: "/events",
  },
];

export const teamMembers = [
  {
    name: "Nelly Njeri",
    role: "Co-Founder",
    specialty: "ZK & Cryptography Engineer",
    image: "/images/team/nelly-njeri.jpeg",
  },
  {
    name: "Hilda Rita Mugasia",
    role: "Co-Founder",
    specialty: "Finance & Emerging Tech Lawyer",
    image: "/images/team/hilda-rita-mugasia.png",
  },
  {
    name: "Audrey Nzilani",
    role: "Team Member",
    specialty: "Hardware Engineer",
    image: "/images/team/audrey-nzilani.jpeg",
  },
  {
    name: "Loisa Wamaitha",
    role: "Team Member",
    specialty: "Blockchain Developer at Ledger Lady",
    image: "/images/team/loisa-rita.png",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/ledgerlady_ladies.jpeg",
    alt: "Ledger Lady community portrait",
    title: "Community Portraits",
    description:
      "A portrait-led moment that captures the warmth, confidence, and energy of the women shaping Ledger Lady.",
  },
  {
    src: "/images/gallery/ledgerladies2.jpeg",
    alt: "Ledger Ladies group moment",
    title: "Ledger Ladies Together",
    description:
      "A beautiful group moment from the community, centered on presence, connection, and shared ambition.",
  },
  {
    src: "/images/gallery/ledgerladyatethiopia.jpeg",
    alt: "Ledger Lady in Ethiopia",
    title: "Ledger Lady in Ethiopia",
    description:
      "A visual reminder that the community continues to grow through real-world gatherings and regional momentum.",
  },
  {
    src: "/images/gallery/ledgerladyatherdaobrunch.jpeg",
    alt: "Ledger Lady at HerDAO brunch",
    title: "HerDAO Brunch",
    description:
      "A soft, community-centered moment that shows the cultural and relational side of the ecosystem.",
  },
  {
    src: "/images/gallery/ledgerladyatherdaobrunch2.jpeg",
    alt: "Ledger Lady at HerDAO brunch second image",
    title: "Brunch Conversations",
    description:
      "An intimate image of women gathering, building relationships, and growing technical community in public.",
  },
  {
    src: "/images/gallery/ledgerladyatkbcc2025.jpeg",
    alt: "Ledger Lady at KBCC 2025",
    title: "KBCC 2025",
    description:
      "A stronger public-facing moment from the community’s presence in the broader blockchain ecosystem.",
  },
];

export const blogPosts: BlogContent[] = [
  {
    slug: "building-legal-literacy-for-web3",
    title: "Building Legal Literacy for Web3 Builders",
    category: "Legal",
    description:
      "Why better legal understanding helps builders make stronger decisions earlier in the process.",
    publishedAt: "March 2026",
    authorName: "Hilda Rita Mugasia",
    authorRole: "Co-Founder, Finance & Emerging Tech Lawyer",
    image: PositiveLady,
    sections: [
      {
        title: "Law as part of builder literacy",
        paragraphs: [
          "A lot of early builder education treats legal questions as something to think about later. In practice, the best teams build better when legal awareness shows up early.",
          "Understanding compliance, risk, and policy context does not make the work less creative. It makes the work more durable.",
        ],
      },
      {
        title: "Why communities should care",
        paragraphs: [
          "Communities like Ledger Lady are in a good position to normalize this kind of literacy. It helps members think more clearly about the systems they are participating in and the tradeoffs they are making.",
        ],
      },
    ],
  },
  {
    slug: "making-zk-less-mysterious",
    title: "Making ZK Less Mysterious",
    category: "Cryptography",
    description:
      "A reflection on why zero-knowledge concepts become more learnable when communities slow down and explain them well.",
    publishedAt: "March 2026",
    authorName: "Nelly Njeri",
    authorRole: "Co-Founder, ZK & Cryptography Engineer",
    image: ConfidentLady,
    sections: [
      {
        title: "Depth needs translation",
        paragraphs: [
          "ZK is often introduced through jargon, spectacle, or overly compressed explanations. That makes the field feel smaller and more closed than it needs to be.",
          "Good technical communities do something different. They create explanation layers that preserve rigor while still inviting people to stay with the idea long enough for it to open up.",
        ],
      },
      {
        title: "The role of technical culture",
        paragraphs: [
          "The right culture can make hard subjects feel possible. It does not remove difficulty, but it does replace intimidation with structure, curiosity, and repetition.",
        ],
      },
    ],
  },
  {
    slug: "why-hardware-belongs-in-the-room",
    title: "Why Hardware Belongs in the Room",
    category: "Hardware",
    description:
      "A case for expanding blockchain conversations beyond software and into the physical systems that support better technical thinking.",
    publishedAt: "March 2026",
    authorName: "Audrey Nzilani",
    authorRole: "Hardware Engineer",
    image: AfricanLady,
    sections: [
      {
        title: "Technical communities benefit from range",
        paragraphs: [
          "When communities treat blockchain as a purely software conversation, they miss useful ways of thinking about systems, constraints, and design.",
          "Hardware thinking brings discipline. It asks what is real, what is measurable, and what the system can actually handle.",
        ],
      },
      {
        title: "A wider frame produces stronger builders",
        paragraphs: [
          "Bringing hardware perspectives into the conversation helps members think more carefully about the broader technical environment in which blockchain tools exist.",
        ],
      },
    ],
  },
];

export const testimonials = [
  {
    body:
      "Ledger Lady gave me more than access. It gave me the structure to keep learning until things actually started to click.",
    name: "Amina K.",
    handle: "community member",
    role: "Builder",
    image: AfricanLady,
  },
  {
    body:
      "The sessions are thoughtful, technical, and welcoming without ever feeling watered down.",
    name: "Grace W.",
    handle: "workshop attendee",
    role: "Smart Contract Learner",
    image: PositiveLady,
  },
  {
    body:
      "It feels like a community that genuinely wants people to become excellent at what they do.",
    name: "Mercy N.",
    handle: "ecosystem collaborator",
    role: "Community Partner",
    image: ConfidentLady,
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ledgerlady",
  },
  {
    name: "X",
    href: "https://x.com/ledgerlady_",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ledgerlady_/",
  },
];
