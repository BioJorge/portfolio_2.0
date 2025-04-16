import Image from "next/image";
import myPhotograph from "../../../public/mePhotograph.jpg";

export const SpinningPhotograph = () => {
  return (
    <div className="relative w-[320px] h-[320px] flex items-center justify-center group">
      {/* Imagem do perfil */}
      <Image
        src={myPhotograph}
        className="rounded-full border-4 border-primary relative z-10 w-[300px] h-[300px]"
        alt="Picture of the author"
      />

      {/* Elemento de rotação */}
      <div
        className={`absolute top-0 left-0 w-full h-full rounded-full 
          border-t-4 border-b-4 border-transparent border-l-4 border-r-4 border-l-primary border-r-primary 
          animate-spin-slow group-hover:animate-spin-fast
          `}
      ></div>
    </div>
  );
};
