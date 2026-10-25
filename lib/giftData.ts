export interface GiftData {
  senderName: string;
  receiverName: string;
  envelopeImage: string;
  cardMessage: string;
  birthdayImage: string;
  birthdayTitle: string;
  birthdayText: string;
  balloonImage: string;
  birthdayWishesTitle: string;
  birthdayWishesMessage: string;
  thingsWeWannaDo: string[];
  loveLetterTitle?: string;
  loveLetterSubtitle?: string;
  loveLetterParagraphs?: string[];
  musicCoverImage: string;
  musicUrl: string;
  songTitle: string;
}

const defaultThings: string[] = [
  "Get engaged & build a beautiful life together 💍",
  "Sit on the beach in winter and hug each other tightly 🌊",
  "Travel together to all our dream destinations ✈️",
  "Walk in the rain holding hands and never let go 🌧️",
  "Grow old together, loving you more every single day 🤍",
];

export const defaultLoveLetterParagraphs: string[] = [
  "Loving you feels like finding a home in a world where my soul has always been searching. You’ve become a part of me in ways even time could never explain. There’s something about you that makes my heart feel understood without saying a word.",
  "I love you beyond the moments we share, beyond the words I say, and beyond what this world could ever define as love. If my soul could choose one place to belong for eternity, it would be beside yours.",
  "And if life gave me a thousand different paths, I would still search for you in every single one, because some hearts are not meant to be temporary; they are meant to find each other and stay.",
  "You are, and will always be, my favorite part of existence.",
  "Always yours, Amr. 🤍🫀",
];

const hebaGift: GiftData = {
  senderName: "Amr 🫀",
  receiverName: "Heba 💗",
  envelopeImage: "/images/envelope-placeholder.png",
  cardMessage: "Heba, you’re a piece of my soul that words can never describe, and a place in my heart that time could never erase. 🫀💗 ✨",
  birthdayImage: "/images/kid-placeholder.jpg",
  birthdayTitle: "To my favorite person,",
  birthdayText:
    "Our first movie together... I fell so deeply in love with the most handsome and precious man in my life. 🤍",
  balloonImage: "/images/cat.png",
  birthdayWishesTitle: "",
  birthdayWishesMessage:
    "to my favorite person and best future Dr! You make my whole world brighter with your laughter, warmth, and handsome smile. I’m so lucky to have you, and I can't wait to be by your side forever. Wishing you endless happiness, peace, and love. ",
  thingsWeWannaDo: defaultThings,
  loveLetterTitle: "The little things I love about you",
  loveLetterSubtitle: "To My Heba, With All My Love <3",
  loveLetterParagraphs: defaultLoveLetterParagraphs,
  musicCoverImage: "/images/song-cover.jpg",
  musicUrl: "/music/our-song.mp3",
  songTitle: "Our Special Track",
};

const giftData: Record<string, GiftData> = {
  heba: hebaGift,
  amr: hebaGift,
  amir: hebaGift,
  aya: {
    ...hebaGift,
    senderName: "Aya",
    cardMessage: "Check out these awesome surprises for YOU!",
  },
};

export default giftData;