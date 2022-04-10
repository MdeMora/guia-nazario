import HomePage from "containers/HomePage";

import client from "apollo-client";
import { getBars } from "constants/queries";

export default HomePage;

export async function getStaticProps() {
  const { data } = await client.query({
    query: getBars,
  });

  return {
    props: {
      bars: data.bars,
      revalidate: 60,
    },
  };
}
