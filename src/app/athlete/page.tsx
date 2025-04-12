import fs from "fs";
import path from "path";
import AthleteCard from "@/app/utils/athlete-card";

interface Athlete {
  name: string;
  fullname: string;
  imageUrl: string;
}

const AthletePage = async () => {
  const filePath = path.join(process.cwd(), "athlete.json");
  const data = fs.readFileSync(filePath, "utf-8");
  const athletes: Athlete[] = JSON.parse(data);

  return (
    <div className="max-w-mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Daftar Atlet</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
        {athletes.map((athlete, index) => (
          <AthleteCard
            key={index}
            name={athlete.name}
            imageUrl={athlete.imageUrl} 
            fullname={athlete.fullname}          />
        ))}
      </div>
    </div>
  );
};

export default AthletePage;
