import React, { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// components
import TitleParagraph from "../components/TitledParagraph";
// constants
import { APP_TITLE, PAGE_TITLE_CONTACT } from "../utils/constants";
import ContactComp from "../components/ContactComp";


import { routes } from "../config";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    cards: {
      flex: 1,
      width: 800,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      marginInline : "auto"
    },
  })
);

const Valenciennes={agence:"Agence de Valencienes", add:"46 Av. de Saint-Amand, 59300 Valenciennes", tel:"03 27 35 83 88"}
const dordogne={agence:"Agence de Saint Vincet de Cosse", add:"Lieu dit Larrit, 24220 Saint Vincent de Cosse", tel:"06 82 57 55 84"}


const Contact: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_CONTACT} | {APP_TITLE}
        </title>
      </Helmet>
      <div>
        <TitleParagraph title="Contacts" text1="Vous trouverez ici divers moyens de nous contacter."/>
      </div>
      <ContactComp agence={Valenciennes.agence} adresse={Valenciennes.add} telephonne={Valenciennes.tel} />
      <ContactComp agence={dordogne.agence} adresse={dordogne.add} telephonne={dordogne.tel} />
    </>
  );
};

export default Contact;
