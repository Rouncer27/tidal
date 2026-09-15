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
