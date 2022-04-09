import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";


// define css-in-js
const useStyles = makeStyles({
  video: {
    overflow: "hidden",
    paddingBottom: "55%",
    position: "relative",
    height: 0,
    marginBottom: 25,
  },
});

export function YoutubeEmbed (properties: YoutubeEmbed.Properties): ReactElement {
  const classes = useStyles()
  return(
    <>
    <div className={classes.video}>
    <iframe
      width="853"
      height="480"
      src={`https://${properties.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      />
      </div>
    </>
  )
}

// 
export namespace YoutubeEmbed {
  export type Properties = { 
    embedId: string,

  }
}


export default YoutubeEmbed;
