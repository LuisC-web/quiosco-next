import Image from "next/image";

function Logo() {
  return (
    <div className="flex justify-center mt-5">
      <div className="size-30 relative">
        <Image fill alt="Logot tipo" src="/logo.svg"></Image>
      </div>
    </div>
  );
}

export default Logo;
