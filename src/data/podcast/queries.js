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

export const Podcast_Intro_Query = `
    podcastIntro: podcastIntroComponent {
        content
        buttonText
        buttonLink
        points {
            title
            content
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
    }
`;
