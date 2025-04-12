import Image from "next/image";
import Link from "next/link";

interface AthleteCardProps {
    name: string;
    fullname: string;
    imageUrl: string;
}

const AthleteCard = ({ name, fullname, imageUrl}: AthleteCardProps) => {
  return (
    <Link href={`/athlete/${name}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div className="relative w-full h-96">
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">{fullname}</h3>
        </div>
      </div>
    </Link>
  );
};

export default AthleteCard;
