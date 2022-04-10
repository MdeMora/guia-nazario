import { gql } from "@apollo/client";

export const getBars = gql`
  query Bars {
    bars(locales: es, orderBy: ronaldos_DESC) {
      id
      createdAt
      favProducts
      image {
        url
        height
        width
      }
      location {
        latitude
        longitude
      }
      name
      publishedAt
      ronaldos
      slug
      review {
        html
      }
    }
  }
`;
