import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: "10px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const SuspectList = ({ suspects, title }) => {
  const classes = useStyles();
  if (suspects === undefined) {
    return <div />;
  }else{
    //console.log(suspects);
  }
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{title}</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <List className={classes.root}>
            {suspects.map(passageiro => {
              //Estudar erro de key duplicada.
              return Object.keys(passageiro).map((p, i) => {
                console.log(i)
                if(passageiro[p].length < 2){
                  return <div></div>
                }

                return(
                  <div>
                      <ListItem key={passageiro[p][0].passanger_name} alignItems="flex-start">
                        <ListItemText
                          primary={
                            "Ticket ida: " +
                            passageiro[p][0].id +
                            " Ticket volta: " +
                            passageiro[p][1].id
                          }
                          secondary={
                            <React.Fragment>
                              {"Passageiro: "}
                              <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                              >
                                {passageiro[p][0].passanger_name}
                              </Typography>
  
                              {" — Viagem de "}
  
                              <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                              >
                                {passageiro[p][0].flight_destino}
                              </Typography>
  
                              {" para "}
  
                              <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                              >
                                {passageiro[p][1].flight_destino}
                              </Typography>
                              
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </div>
                )
              });
            })}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default SuspectList;
