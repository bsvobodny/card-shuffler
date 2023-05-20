import bathtubImage from "./assets/bathtub.jpeg";
import classicGamesImage from "./assets/classicGames.jpeg";
import loveQuizImage from "./assets/loveQuiz.jpeg";
import massageImage from "./assets/massage.jpeg";
import noElecImage from "./assets/noElec.jpeg";
import videoGamesImage from "./assets/videogames.jpeg";

export type Activity = {
  id: string;
  title: string;
  imageUrl?: string;
  image?: string;
  description: string;
};
export const activities: Activity[] = [
  {
    id: "BATH",
    title: "Take a bubble bath.",
    image: bathtubImage,
    description:
      "Draw a warm bath and fill it with your favorite bubble bath, essential oils, or bath bombs. Make it even more romantic by surrounding your bathtub with candles and rose petals.",
  },
  {
    id: "VIDEO_GAMES",
    title: "Play video games.",
    image: videoGamesImage,
    description:
      "Are you or your partner a gamer? Pick up the controllers and try a game where you have to team up and work together to achieve a common goal—it can be a great way to improve communication with your significant other.",
  },
  {
    id: "UNGLUGGED",
    title: "Plan an unplugged evening.",
    image: noElecImage,
    description:
      "Say goodbye to your screens for the night and spend some time staring at each other instead! Who knows what kind of fun will unfold without any phones, TVs, or computers to dictate your plans.",
  },
  {
    id: "BOARD_GAMES",
    title: "Play a good old-fashioned game.",
    image: classicGamesImage,
    description:
      "Shake up your routine by playing a classic board game like Jenga, chess, or Scrabble. Or, try a game designed specifically for couples to help you reconnect and get know each other better.",
  },
  {
    id: "LOVE_LANGUAGE",
    title: "Learn your love languages.",
    image: loveQuizImage,
    description:
      "Take the [official quiz](https://www.5lovelanguages.com/) and find out each other's love languages, or the way you receive and express love in a relationship. This simple act can help ensure that you both feel loved and appreciated. Sounds like a pretty worthwhile way to spend an evening!",
  },
  {
    id: "MASSAGE",
    title: "Give One Another Massages",
    image: massageImage,
    description:
      "Really go all out setting the mood with massage oil, candles or dim lighting and some peaceful music to help you relax. And while you could definitely make your massages more on the sensual side, you could also just focus on treating your partner and helping them work out any sore muscles at the end of a hard week. It’s totally up to you.",
  },
];
