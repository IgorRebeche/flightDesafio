import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const ContainerBody = ({children}) => {
    return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper p={2}>{children}</Paper>
        </Grid>
    </Grid>)
}
export default ContainerBody;