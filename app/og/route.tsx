import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { logoDataUri } from "../components/logo-data";

export const runtime = "edge";

const fontUrl = "https://fonts.cdnfonts.com/s/14188/HelveticaNeue-Roman.woff";

export async function GET(req: NextRequest) {
  const [fontData, { searchParams }] = await Promise.all([
    fetch(fontUrl).then((res) => res.arrayBuffer()),
    Promise.resolve(req.nextUrl),
  ]);

  const title = searchParams.get("title") || "Carl Fairclough";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FEFDF9",
        fontFamily: "Helvetica Neue",
        position: "relative",
      }}
    >
      {/* Border */}
      <div
        style={{
          position: "absolute",
          border: "1.5px solid #1e40af",
          display: "flex",
        }}
      />

      {/* Top: site name */}
      <div
        style={{
          inset: "16px",
          fontSize: 48,
          lineHeight: 1.1,
          color: "#1e40af",
          letterSpacing: "-0.02em",
          borderBottom: "2px solid #1e40af",
          padding: "8px 16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>Carl Fairclough</div>
        <div>Writing</div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 96,
            color: "#1e40af",
            lineHeight: 1.1,
            maxWidth: "1000px",
            letterSpacing: "-0.02em",
            marginTop: "auto",

            padding: "16px",
          }}
        >
          {title}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img
          src={logoDataUri}
          width={1600}
          height={400}
          alt=""
          style={{ fill: "#1e40af" }}
        /> */}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Helvetica Neue",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
