# Project Backup: GraphQL Integration

This file contains the essential code for integrating with the WordPress headless CMS.

---

## 1. GraphQL Endpoint and Client

File: `src/lib/graphql.js`

```javascript
import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://cms.acmemarketing.us/graphql';

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    // You can add authentication headers here if your GraphQL endpoint requires them
    // For now, we'll assume it's public or handled by other means
  },
});

export { gql };
```

---

## 2. Queries for Post Pages

### All Posts (for the blog index page)

File: `src/pages/posts/index.astro`

```graphql
const GET_POSTS = gql`
  query GetPosts {
    posts(first: 100, where: { tagSlugIn: ["healthcareactivist", "all"] }) {
      nodes {
        title
        uri
        content
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
      }
    }
  }
`;
```

### Static Paths (for generating individual post pages)

File: `src/pages/posts/[...slug].astro`

```graphql
const GET_FILTERED_POST_URIS = gql`
  query GetFilteredPostUris {
    posts(where: { tagSlugIn: ["healthcareactivist", "all"] }) {
      nodes {
        uri
      }
    }
  }
`;
```

### Single Post (for individual post pages)

File: `src/pages/posts/[...slug].astro`

```graphql
const GET_SINGLE_POST = gql`
  query GetSinglePost($uri: String!) {
    postBy(uri: $uri) {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
    }
  }
`;