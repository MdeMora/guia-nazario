import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const BarCard = ({ bar }) => {
  console.log(bar);
  return (
    <Link href={`/${bar.slug}`} passHref>
      <div className="cursor-pointer">
        <div className="w-auto h-52 relative">
          <Image
            src={bar.image.url}
            width={bar.image.width}
            height={bar.image.height}
            className="rounded"
            alt="image of the bar"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
        <div>
          {bar.name} {bar.ronaldos}/5
        </div>
      </div>
    </Link>
  );
};

BarCard.propTypes = {
  bar: PropTypes.object.isRequired,
};

export default BarCard;
