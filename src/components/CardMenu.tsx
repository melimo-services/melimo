import React, {ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { NavLink, useLocation } from "react-router-dom";

// models
import RouteItem from "../model/RouteItem.model";
import { routes } from "../config";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 25,
    flexWrap: "wrap"
  },
  media: {
    height: 140,
    width: 280,
    flexGrow: 2,
    flexShrink : 1,
  },
  button:{
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
    
  }
});

export type Prop = [any, any, any ]




export function CardItem (properties: CardItem.Properties): ReactElement {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <NavLink
        to={`${properties.route.path}`}
        style={{ textDecoration: "none", color: "inherit" }}
        key={`${properties.route.key}`}
      >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={properties.title}
          height="140"
          image={properties.image}
          title={properties.title}
        />
        <CardContent className={classes.media}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.button}>
          {properties.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.button}>
          {properties.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={classes.button}>
          Voir plus
        </Button>
      </CardActions>
      </NavLink>
    </Card>
  )
}

export namespace CardItem {
  export type Properties = { 
    title: string ,
    image : string,
    route: RouteItem,
    text: string}
}


export function CardMenu (properties: CardMenu.Properties): ReactElement {
  const classes = useStyles()
  return(
    <>
      {properties.cards_prop.map((value, key) => {
          return (
            <CardItem title={value[0]} image={value[1]} text={value[2]} route={routes[properties.route_key[key]]}/>
            // <p>value {key} = {value[0]} value 1 = {value[1]} value 2 = {value[2]}</p>
          )
          }
      )}
    </>
  )
}

export namespace CardMenu {
  export type Properties = { 
    cards_prop: Prop[],
    route_key: number[],
  }
}




export default CardMenu
