import BreadCrump from "@/components/BreadCrump";
import RestaurantCard from "@/components/RestaurantCard";
import { DATABASE } from "@/src/data/data";
import React from "react";

interface Props {
  params: Promise<{ categoryId: string }>;
}

const CategoryPage = async ({ params }: Props) => {
  const { categoryId } = await params;
  const category = DATABASE.cats.find((cat) => cat.id === +categoryId)
    ?.title as string;
  const restaurants = DATABASE.restaurants.filter((rest) =>
    rest.catId.includes(+categoryId)
  );
  const hasEmpty = restaurants.length === 0;

  return (
    <div className="flex flex-wrap w-full justify-center p-1 md:p-4">
      <div className="my-16 py-5 flex flex-wrap w-full max-w-7xl">
        <BreadCrump title={category} />
        {hasEmpty ? (
          <p>{"در این دسته‌بندی رستوران وجود ندارد :("}</p>
        ) : (
          restaurants.map((restaurant) => (
            <div key={restaurant.id} className="w-full md:w-1/4 p-2">
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
