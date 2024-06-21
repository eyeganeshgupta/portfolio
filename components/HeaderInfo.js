const HeaderInfo = ({ Icon, info }) => {
  return (
    <div className="flex items-center space-x-2">
      {Icon}
      <span className="capitalize text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-400">
        {info}
      </span>
    </div>
  );
};

export default HeaderInfo;
