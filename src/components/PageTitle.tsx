import React, { FC, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textTransform: "uppercase",
      textAlign: "center"
    },
  })
);



const CardMenu: FC<{ title: String}> = ({ title}): ReactElement => {
  const classes = useStyles();
  return (
    <>
    <Typography variant="h5" className={classes.title} color="textSecondary">
      {title}
    </Typography>
    </>
  );
};

export default CardMenu;
