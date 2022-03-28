import { FC } from "react";

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }) => {
  return (
    <div className="w-full h-20 bg-red-900 text-white flex items-center justify-center">
      <div className="w-full p-3">
        <h1 className="text-2xl text-center font-extrabold font-serif">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Header;
