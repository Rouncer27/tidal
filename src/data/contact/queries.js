export const Contact_Hero_Query = `
    contactHero: contactHeroComponent {
        title
        image {
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
`;
