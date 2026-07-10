import satori from "satori";
import loadGoogleFonts from "../loadGoogleFont";
import { OG_THEME, truncateText } from "./theme";

export default async (post) => {
  const primaryTag = post.data.tags?.[0];
  const description = truncateText(post.data.description, 120);
  const fontText =
    post.data.title + post.data.author + description + (primaryTag ?? "") + "shaunhawk.com";

  return satori(
    {
      type: "div",
      props: {
        style: {
          background: OG_THEME.background,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                width: "12px",
                height: "100%",
                background: OG_THEME.accent,
              },
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flex: 1,
                padding: "56px 64px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      flex: 1,
                    },
                    children: [
                      primaryTag
                        ? {
                            type: "span",
                            props: {
                              style: {
                                alignSelf: "flex-start",
                                background: OG_THEME.accentMuted,
                                color: OG_THEME.accent,
                                fontSize: 22,
                                fontWeight: 600,
                                padding: "8px 16px",
                                borderRadius: "999px",
                              },
                              children: primaryTag,
                            },
                          }
                        : null,
                      {
                        type: "p",
                        props: {
                          style: {
                            fontSize: 64,
                            fontWeight: 700,
                            color: OG_THEME.foreground,
                            lineHeight: 1.1,
                            margin: 0,
                            maxHeight: "280px",
                            overflow: "hidden",
                          },
                          children: post.data.title,
                        },
                      },
                      description
                        ? {
                            type: "p",
                            props: {
                              style: {
                                fontSize: 28,
                                color: OG_THEME.mutedText,
                                lineHeight: 1.4,
                                margin: 0,
                                maxHeight: "120px",
                                overflow: "hidden",
                              },
                              children: description,
                            },
                          }
                        : null,
                    ].filter(Boolean),
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      borderTop: `2px solid ${OG_THEME.border}`,
                      paddingTop: "24px",
                      fontSize: 26,
                      color: OG_THEME.mutedText,
                    },
                    children: [
                      {
                        type: "span",
                        props: {
                          style: { fontWeight: 600, color: OG_THEME.foreground },
                          children: `by ${post.data.author}`,
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: { fontWeight: 700, color: OG_THEME.accent },
                          children: "shaunhawk.com",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(fontText),
    }
  );
};
