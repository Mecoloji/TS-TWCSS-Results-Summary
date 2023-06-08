import { FC } from "react";

const Category: FC<{
  category: string;
  score: number;
  icon: string;
}> = ({ category, score, icon }) => {
  // This component renders a category.
  // It takes three props: category, score, and icon.
  // The category prop is a string that represents the category name.
  // The score prop is a number that represents the user's score for the category.
  // The icon prop is a string that represents the URL of the category icon.
  return (
    <div
      className={`
        first-of-type:bg-Red/10 first-of-type:text-Red
        even:bg-Orange/10 even:text-Orange
        [&:nth-child(3)]:bg-Green/10 odd:text-Green
        last-of-type:bg-Blue/10 last-of-type:text-Blue
        flex justify-between p-4 rounded-xl`}
    >
      <div className="flex gap-2">
        <img src={icon} alt="" />
        <p className="font-bold">{category}</p>
      </div>
      <p className="font-bold text-DarkGray">
        {score} <span className="text-DarkGray/50">/100</span>
      </p>
    </div>
  );
};

export default Category;
