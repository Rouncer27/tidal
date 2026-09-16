export const Podcast_Hero_Query = `
    podcastHero: podcastHeroComponent {
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
