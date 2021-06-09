import React from "react";

import { List, ListItemText, Typography } from "@material-ui/core";

const Report = ({ correctAnswersCount, wrongAnswersCount }) => {
  return (
    <>
      <List>
        <ListItemText>
          <Typography variant="overline">
            Você teve um total de {correctAnswersCount} acertos.
          </Typography>
        </ListItemText>
        <ListItemText>
          <Typography variant="overline">
            Você teve um total de {wrongAnswersCount} erros.
          </Typography>
        </ListItemText>
      </List>
    </>
  );
};

export default Report;
