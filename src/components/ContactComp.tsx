import React, { FC, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Icon } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import GoogleMapReact from 'google-map-react';



const LocationPin: FC<{ text : string }> = ({ text }): ReactElement => {
  const classes = useStyles();
  return (
    <>
  <div className="pin">
   <Icon component={LocationOnIcon} />
    <p className="pin-text">{text}</p>
  </div>
  </>
 );
};


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      textTransform: "uppercase",
      textAlign: "center",
      alignItems: "center"
    },
    text: {
      textAlign: "justify",
      display: "flex",
      flexDirection: "row",
    },
    textp: {
      textAlign: "justify",
      display: "flex",
      flexDirection: "row",
      width: "80%",
      alignSelf: "right"
    },
    wallimage:{
      width: "50em",
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
      flexBasis: "90%",
      alignSelf: "center",
      marginTop: "1em"
    },
    competence: {
      alignSelf: "center"
    }
  })
);

const ContactComp: FC<{ agence: string , adresse : string, telephonne : string }> = ({ agence , adresse, telephonne}): ReactElement => {
  const classes = useStyles();
  return (
    <>
    <Typography variant="h5" className={classes.title} color="secondary">
        {agence} 
    </Typography>
    <div className={classes.splitDiv}>
    <div className={classes.item}>
    <Typography variant="body1" paragraph className={classes.textp}>
    <Icon component={LocationOnIcon} />
    {adresse}
    </Typography>
    </div>

    <div className={classes.item}>
    <Typography variant="body1" paragraph className={classes.textp}>
    <Icon component={PhoneInTalkIcon} />
      {telephonne}
    </Typography>
    </div>
    
    </div>
    
    <hr className={classes.hr}>
    </hr>
    </>
  );
};

export default ContactComp;
