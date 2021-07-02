import { GraphQLClient } from "graphql-request";
const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/ckpy57uxvcs5q01xxfq290ng0/master"
);

export async function getSection(mySlug, myLang) {
  const { section } = await graphcms.request(
    `
    query getSection($slug: String!, $lang:[Locale!]!){
      section(where: {slug: $slug}, locales: $lang) {
        title
        subtitle
        description
        slug
      }
    }
    `,
    {
      slug: mySlug,
      lang: myLang,
    }
  );
  return section;
}

export async function getServices(myLang) {
  const { services } = await graphcms.request(
    `
    query getServices($lang:[Locale!]!){
        services(locales: $lang) {
          icon {
            url
          }
          name
          description
        }
      }
      `,
    {
      lang: myLang,
    }
  );
  return services;
}

export async function getTechnologies(myLang) {
  const { technologies } = await graphcms.request(
    `
    query getTechnologies($lang:[Locale!]!){
        technologies(locales: $lang) {
          name
          img {
            url
          }
        }
      }      
      `,
    {
      lang: myLang,
    }
  );
  return technologies;
}

export async function getWorkflow(myLang) {
  const { workflows } = await graphcms.request(
    `
    query getWorkflow($lang:[Locale!]!){
        workflows(locales: $lang) {
          name
          icon {
            url
          }
          description
        }
      }      
      `,
    {
      lang: myLang,
    }
  );
  return workflows;
}

export async function getValues(myLang) {
  const { values } = await graphcms.request(
    `
    query getValues($lang:[Locale!]!){
        values(locales: $lang) {
          name
          icon {
            url
          }
          description
        }
      }      
      `,
    {
      lang: myLang,
    }
  );
  return values;
}

export async function getTeam(myLang) {
  const { teamMembers } = await graphcms.request(
    `
    query getTeam($lang:[Locale!]!){
        teamMembers(locales: $lang) {
          name
          img {
            url
          }
          role
        }
      }     
      `,
    {
      lang: myLang,
    }
  );
  return teamMembers;
}
