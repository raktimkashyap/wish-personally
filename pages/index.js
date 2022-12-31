/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { newYear23 } from "../messages";
import { events } from "../messages/events";
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
    <div className={classes.root}>
      <img
        className={classes.wishBG}
        alt=""
        src="https://res.cloudinary.com/cloud-rkd/image/upload/v1672486628/wishes/Gold_And_Green_Modern_Happy_New_Year_Your_Story_nodwux.gif"
      />
      <div className={classes.messageBox}>
        <div className={classes.wish}>{events(name).newYear}</div>
        <div className={classes.message}>{message}</div>
      </div>
    </div>
  );
}
