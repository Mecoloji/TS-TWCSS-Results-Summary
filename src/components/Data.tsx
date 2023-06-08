import ReactionIcon from "../assets/images/icon-reaction.svg";
import MemoryIcon from "../assets/images/icon-memory.svg";
import VerbalIcon from "../assets/images/icon-verbal.svg";
import VisualIcon from "../assets/images/icon-visual.svg";

export const data: Array<{
  category: string;
  score: number;
  icon: string;
  id: number;
}> = [
  {
    category: "Reaction",
    score: 80,
    icon: ReactionIcon,
    id: 1,
  },
  {
    category: "Memory",
    score: 92,
    icon: MemoryIcon,
    id: 2,
  },
  {
    category: "Verbal",
    score: 61,
    icon: VerbalIcon,
    id: 3,
  },
  {
    category: "Visual",
    score: 72,
    icon: VisualIcon,
    id: 4,
  },
];
