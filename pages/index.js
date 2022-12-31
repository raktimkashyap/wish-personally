/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { newYear23 } from "../messages";
import { events } from "../messages/events";
import { newYearBG } from "../messages/images";
import classes from "../styles/Home.module.css";

export default function Home() {
  const { query } = useRouter();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let name = query?.to?.replace("_", " ") || "";
    setName(name);
    let wish = newYear23(name);
    setMessage(wish);
  }, [query]);

  return (
    <>
      <Head>
        <title>A message for you. {name}</title>
        <meta property="og:title" content={`A message for you. ${name}`} />
      </Head>
      <div className={classes.root}>
        <img
          className={classes.wishBG}
          alt=""
          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${newYearBG()}`}
        />
        <div className={classes.bottomScreen} />

        <div className={classes.messageBox}>
          <div className={classes.wish}>{events(name).newYear}</div>
          <div className={classes.message}>{message}</div>
        </div>
      </div>
    </>
  );
}
