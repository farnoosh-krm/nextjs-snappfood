import BreadCrump from "@/components/BreadCrump";
import Menu from "@/components/Menu";
import { DATABASE } from "@/src/data/data";
import { convertToPersian } from "@/src/utils/convertToPersian";
import Image from "next/image";

interface Props {
  params: Promise<{ restaurantId: string }>;
}

const restaurantPage = async ({ params }: Props) => {
  const { restaurantId } = await params;
  const [restaurants] = DATABASE.restaurants.filter(
    (rest) => rest.id === +restaurantId
  );

  return (
    <div className="flex flex-wrap w-full justify-center p-1 md:p-4 bg-[#f8f8f9]">
      <div className="flex flex-wrap max-w-7xl w-full my-16">
        <BreadCrump title={restaurants.name} />

        <div className="flex flex-col md:flex-row p-4 w-full gap-4">
          <div className="flex items-center gap-4 w-full md:w-1/4">
            <div className="w-20 h-20 rounded-xl border-1 border-white">
              <Image
                src={restaurants.image}
                alt={restaurants.name}
                width={100}
                height={100}
                style={{ width: "100%", height: "100%", borderRadius: "12px" }}
              />
            </div>
            <div className="font-bold text-sm">{restaurants.name}</div>
          </div>

          <Menu restaurantId={restaurantId} />

          <div className="flex items-center w-full justify-center md:w-1/4 bg-white shadow-md rounded-xl px-2 py-4 hover:shadow-xl">
            <Image
              src={restaurants.delivery.icon}
              alt="delivery icon"
              width={16}
              height={16}
              className="ml-2"
            />
            {`${restaurants.delivery.type} `}
            {`${convertToPersian(restaurants.delivery.price)}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default restaurantPage;
