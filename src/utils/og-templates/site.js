import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";
import { OG_THEME, truncateText } from "./theme";

export default async () => {
  const description = truncateText(SITE.desc, 160);
  const hostname = new URL(SITE.website).hostname;
  const fontText = SITE.title + description + hostname;

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
                      justifyContent: "center",
                      flex: 1,
                      gap: "24px",
                    },
                    children: [
                      {
                        type: "p",
                        props: {
                          style: {
                            fontSize: 72,
                            fontWeight: 700,
                            color: OG_THEME.foreground,
                            margin: 0,
                            lineHeight: 1.1,
                          },
                          children: SITE.title,
                        },
                      },
                      {
                        type: "p",
                        props: {
                          style: {
                            fontSize: 30,
                            color: OG_THEME.mutedText,
                            lineHeight: 1.4,
                            margin: 0,
                            maxHeight: "180px",
                            overflow: "hidden",
                          },
                          children: description,
                        },
                      },
                    ],
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      justifyContent: "flex-end",
                      borderTop: `2px solid ${OG_THEME.border}`,
                      paddingTop: "24px",
                      fontSize: 28,
                    },
                    children: {
                      type: "span",
                      props: {
                        style: { fontWeight: 700, color: OG_THEME.accent },
                        children: hostname,
                      },
                    },
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
