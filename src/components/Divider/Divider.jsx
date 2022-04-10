import PropTypes from "prop-types";

const Divier = ({ tailwindClasses }) => (
  <div
    className={
      tailwindClasses
        ? `border border-[#D31718] rounded-lg mt-1 mb-4 ${tailwindClasses}`
        : "border border-[#D31718] rounded-lg mt-1 mb-4"
    }
  />
);

Divier.propTypes = {
  tailwindClasses: PropTypes.string,
};

export default Divier;
