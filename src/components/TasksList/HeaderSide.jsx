const HeaderSide = ({ text, bg, tasksToMap }) => {
  return (
    <div>
      <div
        className={`${bg} text-center font-semibold p-3 rounded-sm text-white uppercase`}
      >
        {text}
        {tasksToMap}
      </div>
    </div>
  );
};

export default HeaderSide;
