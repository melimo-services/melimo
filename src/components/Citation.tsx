import React, { FC, ReactElement } from "react";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    hr:{
        marginTop: 20,
        marginBottom: 20,
        width: "40%"
      },
  }),
);

const Citation: FC<{ title: string , text : string, authors: string, year : string, editor: string}> = ({ title , text, authors, year, editor}): ReactElement => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
              <Typography color="primary">{title},</Typography> <Typography>{authors}, {year}, {editor}</Typography>
               </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
           {text}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    <hr className={classes.hr}>
    </hr>
    </>
    );
};

export default Citation;
