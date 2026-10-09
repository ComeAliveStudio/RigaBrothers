export type PledgeTier = {
  id: string;
  amount: number;
  title: string;
  perks: string[];
  tagline: string;
  featured?: boolean;
};

// Transcribed from RigaBros_Perks_Crowdfunding.rtf
export const pledgeTiers: PledgeTier[] = [
  {
    id: "friend",
    amount: 10,
    title: "Friend of Riga Brothers",
    perks: [
      "Personal thank-you email from the filmmakers",
      "Exclusive Riga Brothers mobile wallpaper",
      "Campaign updates",
    ],
    tagline: "Help bring this story to life.",
  },
  {
    id: "digital-supporter",
    amount: 25,
    title: "Digital Supporter",
    perks: ["Everything above, plus:", "Early streaming access to Riga Brothers after its premiere"],
    tagline: "Be among the first viewers worldwide.",
  },
  {
    id: "digital-collector",
    amount: 50,
    title: "Digital Collector",
    perks: [
      "Everything above, plus:",
      "Exclusive digital photo book featuring archive images from 1991, 1992 and 2022",
      "Downloadable campaign poster",
    ],
    tagline: "A unique visual journey through 30 years of history.",
  },
  {
    id: "limited-poster",
    amount: 75,
    title: "Limited Poster Edition",
    perks: ["Everything above, plus:", "Numbered collector's poster (printed edition)"],
    tagline: "Own a piece of the project.",
  },
  {
    id: "soundtrack",
    amount: 100,
    title: "Soundtrack Edition",
    perks: [
      "Everything above, plus:",
      "Original Riga Brothers soundtrack (digital download)",
      "Special thanks on the project's website",
    ],
    tagline: "The music behind the journey.",
    featured: true,
  },
  {
    id: "tshirt",
    amount: 150,
    title: "Limited T-Shirt Edition",
    perks: ["Everything above, plus:", "Official Riga Brothers limited edition T-shirt"],
    tagline: "Wear the story.",
  },
  {
    id: "trilogy",
    amount: 250,
    title: "The Riga Brothers Trilogy",
    perks: [
      "Name in film credits",
      "Digital photo book",
      "Early access to Riga Brothers",
      "Access to Back to Alibek (1991)",
      "Access to Riga Brothers (1992)",
      "Access to Riga Brothers - 30 Years Later",
    ],
    tagline: "Experience the complete 30-year journey.",
  },
  {
    id: "photobook",
    amount: 500,
    title: "Collector's Photobook",
    perks: [
      "Everything above, plus:",
      "Signed limited-edition Riga Brothers photobook",
      "Exclusive behind-the-scenes archive package",
    ],
    tagline: "A collector's edition for documentary lovers.",
  },
  {
    id: "milan-premiere",
    amount: 750,
    title: "Milan Premiere Experience",
    perks: [
      "Everything above, plus:",
      "Invitation for two guests to the Milan premiere",
      "Meet & greet with the filmmakers",
      "Post-screening cocktail reception",
    ],
    tagline: "Celebrate the film with its creators.",
  },
  {
    id: "riga-premiere",
    amount: 1000,
    title: "Riga Premiere Experience",
    perks: [
      "Everything above, plus:",
      "Invitation for two guests to the Riga premiere",
      "Cocktail reception with filmmakers, Guncho and Sancho",
      "Signed collector poster",
      "Name featured prominently in the credits",
    ],
    tagline: "Join the story where it happened.",
  },
  {
    id: "associate-producer",
    amount: 2500,
    title: "Associate Producer",
    perks: [
      "Everything above, plus:",
      "Associate Producer credit",
      "Private online discussion with the filmmakers",
      "Signed photobook and poster",
      "VIP invitations to screenings",
    ],
    tagline: "Become part of the film's legacy.",
  },
  {
    id: "executive-supporter",
    amount: 5000,
    title: "Executive Supporter",
    perks: [
      "Everything above, plus:",
      "Executive Supporter credit",
      "Private screening (online or in person where feasible)",
      "Invitation to all official premiere events",
      "Personal acknowledgment in the film's end credits",
    ],
    tagline: "Help preserve an important chapter of European history.",
  },
];
