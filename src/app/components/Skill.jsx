import Image from 'next/image';

const Skill = ({ name, img }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-200">
      <div className="w-20 h-20 mb-2 relative">
        <Image
          src={img}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
};

export default Skill;
