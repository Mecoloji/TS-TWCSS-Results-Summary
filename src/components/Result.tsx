import Category from "./Category";
import Button from "./Button";
import { data } from "./Data";

interface CategoryData {
  category: string;
  score: number;
  icon: string;
  id: number;
}

const Result = () => {
  // Get the data from the `data` object.
  const categories = data.map((item) => ({
    // Copy the properties from the `item` object to the `category` object.
    ...item,
    //  Set the `key` property to the `id` property.
    key: item.id,
  }));

  return (
    <main className="w-full h-screen font-HankenG md:grid md:place-items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 md:shadow-2xl md:rounded-[30px] md:mx-5 md:overflow-hidden md:max-w-3xl">
        <div className="bg-gradient-to-t from-LRB to-LSB flex flex-col gap-5 justify-center items-center text-center py-7 px-10 md:rounded-[30px] rounded-b-[30px] md:gap-7 md:py-11 md:px-16">
          <p className="text-Lavender text-xl md:text-2xl">Your Result</p>
          <div className="bg-gradient-to-t from-PersianB to-VioletB p-10 rounded-full relative md:p-16">
            <p className="text-6xl font-bold text-White md:text-7xl">76</p>
            <p className="absolute text-Lavender/50 text-base right-12 md:right-20">
              of 100
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <p className="text-2xl text-White md:text-3xl">Great</p>
            <p className="text-Lavender/70 md: text-lg">
              You scored higher than 65% of the people who have taken these
              test.
            </p>
          </div>
        </div>
        <div className="py-6 px-10 flex flex-col gap-5 md:gap-8">
          <h1 className="text-lg font-extrabold text-DarkGray md:text-2xl">
            Summary
          </h1>
          <div className="flex flex-col gap-4 mb-2">
            {/* Render a list of categories. */}
            {categories.map((item: CategoryData) => (
              <Category {...item} key={item.id} />
            ))}
          </div>
          <Button label="Continue" />
        </div>
      </div>
    </main>
  );
};

export default Result;
