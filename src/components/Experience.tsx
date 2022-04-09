import React, { FC, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Icon} from "@material-ui/core";
import { findByLabelText } from "@testing-library/dom";
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      textTransform: "uppercase",
      textAlign: "center",
      alignItems: "center",
      fontWeight: "bold",
    },
    text: {
      textAlign: "justify",
      display: "flex",
      flexDirection: "row",
      width: "90%",
      alignSelf: "right",
      fontSize: "145%"
    },
    textp: {
      textAlign: "justify",
      display: "flex",
      flexDirection: "row",
      width: "90%",
      alignSelf: "right",
      fontSize: "145%"
    },
    wallimage:{
      width: "80%",
    },
    hr:{
      marginTop: 20,
      marginBottom: 20,
      width: "40%"
    },
    icon: {
      marginRight: 5,
    },
    splitDiv: {
      //width:"50%",
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "center",
      justifyContent: "center",
    },
    item: {
      flexBasis: "100%",
      alignSelf: "center",
    },
    competence: {
      alignSelf: "center"
    }
  })
);

const Experience: FC<{ title: string, text : string, logo: string, competences: string[]}> = ({ title , text, logo, competences}): ReactElement => {
  const classes = useStyles()
  return (
    <>
    <Typography variant="h5" className={classes.title} color="secondary">
      {title} 
    </Typography>
    <div className={classes.splitDiv}>
      <div className={classes.item}>
      <Typography variant="body1" paragraph className={classes.textp}>
        {text}
      </Typography>
    </div>
      <div className={classes.competence}>
      
    <Typography variant="h6" className={classes.text} color="secondary">
      Prix (TTC) :
    </Typography>
    {competences.map((value, key) => {
          return (
            <Typography variant="body1" paragraph className={classes.text} color="secondary">
            <CodeIcon className={classes.icon}/> {value}
            </Typography>
          )
          }
      )}
      </div>
      
    </div>
    <div className={classes.splitDiv}>
    <img
                src={logo}
                className={classes.wallimage}
                alt=""/>
    </div>
    
    <hr className={classes.hr}>
    </hr>
    </>
  )
}

export default Experience;
