import React, { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// components
import TitleParagraph from "../components/TitledParagraph";
// constants
import { APP_TITLE, PAGE_TITLE_HOME } from "../utils/constants";
import Experience from "../components/Experience"


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

const menage_prix=["23.5€ de l'heure", "11.75€ après crédit d'impôts"]
const Menage_text="Profitez de nos services de ménage pour vous aider à garder votre maison propre ! Nous venons aux horraires qui vous conviennent le mieux. "

const jardinage_prix=["34€ de l'heure", "17€ après crédit d'impôts"]
const jardinage_text="Profitez de nos services de jardinage pour faire entretenir vos terrains ! Nous pouvons aussi evacuer les déchets verts. Les prix pour les déchets verts sont en fonction du volume et de la déchèterie la plus proche."

const garde_prix=["23.5€ de l'heure", "11.75€ après crédit d'impôts"]
const garde_text="Profitez de nos services de garde d'enfants pour sortir entre amis, nous les gardons chez vous en toute sécurité ! "

const aide_admin_prix=["24€ de l'heure", "12€ après crédit d'impôts"]
const aide_admin_text="Profitez de nos services d'aide administrative si avez besoin d'aide pour vos déclarations ! "

const livraison_prix=["21.5€ de l'heure", "10.75€ après crédit d'impôts"]
const livraison_text="Profitez de nos services de livraison de courses si vous n'avez plus le temps ou la force d'aller les récupéer. "

const bricolage_prix=["28€ de l'heure", "14€ après crédit d'impôts"]
const bricolage_text="Profitez de nos services de bricolage pour faire vos petites réparations !"

// const gouv_prix=["20€ de l'heure", "10€ après crédit d'impôts"]
// const gouv_text="Grâce au forfait Gouvernance, vous pouvez être serein! Nous nettoyons votre maison, et gardons vos enfants!! Ce forfait comprend donc les services ménagers, la garde d'enfant, ainsi que la préparation des repas. "

// const gouv_prix2=["18.75€ de l'heure", "9.375€ après crédit d'impôts"]
// const gouv_text2="Grâce au forfait Gouvernance, vous pouvez être serein! Nous nettoyons votre maison, et gardons vos enfants!! Ce forfait comprend donc les services ménagers, la garde d'enfant, ainsi que la préparation des repas. "


const Home: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_HOME} | {APP_TITLE}
        </title>
      </Helmet>
      <div>
        <TitleParagraph title="Fonctionnement et tarifs" text1="Vous nous contactez par téléphone ou mail ou venez nous voir sur place et nous discutons de vos besoins. Suite à cet entretien un responsable se déplace chez vous, afin d’évaluer vos besoins plus précisément et établir un devis gratuit." text2="Nous pouvons alors signer le contrat et vous recevez notre livret d’accueil. Nous venons ensuite vous présenter votre intervenant et un planning précis des tâches à effectuer est établi, c’est l’occasion d’expliquer à l’intervenant vos désires et votre manière de fonctionner, car c’est à lui de s’adapter à votre manière de faire." text3="Les interventions démarrent aux dates et heures que vous avez fixées, et vous bénéficiez de la garantie satisfait ou refait. Un cahier de liaison est mis en place. Dans les 24h suivant la première intervention un responsable vous contacte afin d’évaluer si tout est conforme à vos attentes. D’autres entretiens réguliers auront lieu.
        Vous recevez alors les factures payables par espèces, chèques, prélèvement ou cesu. En début d’année vous recevez un reçu fiscal pour les interventions effectuées vous permettant de bénéficiez de votre crédit d’impôt de 50%.  "/>
      </div>
      <div>
        <Experience title="Ménage" logo="/melimo/images/menage.jpg" text={Menage_text}  competences={menage_prix}/>
      </div>

      <div>
        <Experience title="Garde d'enfants à domicile" logo="/melimo/images/garde.jpg" text={garde_text}  competences={garde_prix}/>
      </div>

      <div>
        <Experience title="Jardinage" logo="/melimo/images/jardinage.jpg" text={aide_admin_text}  competences={jardinage_prix}/>
      </div>

      <div>
        <Experience title="Aide Administrative" logo="/melimo/images/administratif.jpg" text={jardinage_text}  competences={aide_admin_prix}/>
      </div>

      <div>
        <Experience title="Livraison de courses" logo="/melimo/images/cart.jpg" text={livraison_text}  competences={livraison_prix}/>
      </div>

      <div>
        <Experience title="Bricolage" logo="/melimo/images/gloves.jpg" text={bricolage_text}  competences={bricolage_prix}/>
      </div>

      {/* <div>
        <Experience title="Forfait gouvernance, demi journée (4h) " logo="/cv/melimo/images/famille.jpg" text={gouv_text}  competences={gouv_prix}/>
      </div>

      <div>
        <Experience title="Forfait gouvernance, journée complète (8h) " logo="/cv/melimo/images/famille.jpg" text={gouv_text2}  competences={gouv_prix2}/>
      </div> */}

      

    </>
  );
};

export default Home;
