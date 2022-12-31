import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { newYear23 } from "../messages";
import classes from "../styles/Home.module.css";

export default function Home() {
  const { query } = useRouter();
  const [message, setMessage] = useState("");

  useEffect(() => {
    let name = query?.name || "";
    let wish = newYear23(name);
    setMessage(wish);
  }, [query]);

  return (
    <div className={classes.root}>
      <div className={classes.messageBox}>{message}</div>
    </div>
  );
}
