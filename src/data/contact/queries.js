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

export const Meet_Us_Query = `
    meetUs: meetUsComponent {
        topTitle
        title
        image  {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                 }
            }
        }
        linkBlocks {
            title
            content
            buttonText
            icon  {
                node {
                    sourceUrl
                    altText
                    mediaDetails {
                        width
                        height
                    }
                }
            }
        
        buttonLink {
            edges {
                node {
                    uri
                    }
                }
            }
        }
    }
`;
