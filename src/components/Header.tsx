import { FC } from "react";

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }) => {
  return (
    <div className="w-full h-20 bg-red-900 text-white">
      <h1 className="text-2xl text-center font-extrabold font-serif pt-5">
        {title}
      </h1>
    </div>
  );
};

export default Header;
