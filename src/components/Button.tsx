// function Button({ label }: { label: string }): JSX.Element {
//   return (
//     <button
//       type="button"
//       className="text-xl bg-DarkGray text-White rounded-full py-4 hover:bg-LRB transition-all duration-500 tablet:py-3"
//     >
//       {label}
//     </button>
//   );
// }

// export default Button;

import { FC } from "react";

const Button: FC<{ label: string }> = ({ label }) => {
  // This component renders a button.
  // It takes one prop: label.
  // The label prop is a string that represents the button text.
  return (
    <button
      type="button"
      className={`text-xl bg-DarkGray text-White rounded-full py-4 hover:bg-LRB transition-all duration-500 md:py-3`}
    >
      {label}
    </button>
  );
};

export default Button;
