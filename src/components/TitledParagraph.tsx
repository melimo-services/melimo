import React, { FC, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textTransform: "uppercase",
      textAlign: "center",
      fontWeight: "bold",
      fontSize :"165%"

    },
    text: {
      marginTop : "0.5%",
      marginLeft : "5%",
      textAlign: "justify",
      width: "85%",
      fontSize: "160%",
      fontWeight: "bold",
    },
    hr:{
      marginTop: 20,
      marginBottom: 20,
      width: "40%"
    }
  })
);

const TitledParagraph: FC<{ title: string , text1 : string, text2? : string, text3? : string, page?: string, lien?: string}> = ({ title , text1, text2, text3, page, lien}): ReactElement => {
  const classes = useStyles();
  return (
    <>
    <Typography variant="h5" className={classes.title} color="primary">
      {title}
    </Typography>
    
    <Typography variant="body1" paragraph className={classes.text}>
      {text1}
      <br>
      </br>
      <br></br>
      {text2}
      <br></br>
      <br></br>
      {text3}
      <a href={lien}>{page}</a>
    </Typography>
    <hr className={classes.hr}>
    </hr>
    </>
  );
};

export default TitledParagraph;
