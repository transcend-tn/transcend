import { GraphQLClient } from "graphql-request";
const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/ckpy57uxvcs5q01xxfq290ng0/master"
);

export async function getSection() {
  const { section } = await graphcms.request(
    `
    {
      section(where: {title: "Transcend"}) {
        title
        subtitle
        description
      }
    }
    `
  );
  return section;
}

export async function getServices() {
    const { services } = await graphcms.request(
      `
      {
        services {
          icon {
            url
          }
          name
          description
        }
      }
      `
    );
    return services;
  }