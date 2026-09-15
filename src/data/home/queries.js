export const Hero_Query = `
    hero: heroComponent {
        heroTitle
        heroContent
        heroButtonText
        heroButtonLink {
            edges {
                node {
                    uri
                }
            }
        }
        heroImage {
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

export const Intro_Query = `
    intro: introComponent {
        smallTitle
        title
        subTitle
        content
        buttonText
    }
`;

export const Choose_Query = `
    choose: chooseComponent {
        topTitle
        title
        intro
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
        circleImage  {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        points {
            title
            content
        }
    }
`;

export const Stats_Query = `
    stats: statsComponent {
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
        stats {
            stat
        }
    }
`;

export const Support_Query = `
    support: supportComponent {
        title
        supportPoints {
            title
            intro
            content
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
        }
    }
`;

export const Podcast_Query = `
    podcast: podcastComponent {
        topTitle
        title
        content
        buttonText
        buttonLink {
            edges {
                node {
                    uri
                }
            }
        }

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
