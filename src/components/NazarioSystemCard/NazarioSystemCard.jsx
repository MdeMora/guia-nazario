import PropTypes from "prop-types";

const NazarioSystemCard = ({ position, title, description }) => {
  return (
    <div className="rounded-lg border bg-[#A51212] p-4 font-sans text-white">
      <div className="font-bold">
        <p className="text-xl">
          <span className="text-[#D8B37C] text-4xl mr-2">{position}</span>
          {title}
        </p>
      </div>
      <p className="leading-5 mt-2 ">{description}</p>
    </div>
  );
};

NazarioSystemCard.propTypes = {
  position: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default NazarioSystemCard;
