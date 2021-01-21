import React from 'react';
import Country from '../models/Country';
import {Table, TableBody, TableCell, TableRow, TableHead, makeStyles, Paper} from '@material-ui/core/';
import CountryEntry from './CountryEntryComponent';

type Props = {
    countries: Country[];
    onCountrySelect: (id: Country) => void;
}

const useStyles = makeStyles({
    table: {
        maxHeight: "1000px"
    },
  });

const CountryTable: React.FC<Props> = (props) => {
    const classes = useStyles();
    
    return <Paper>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Action</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell align="center">New Confirmed</TableCell>
                        <TableCell align="center">Total Confirmed</TableCell>
                        <TableCell align="center">New Deaths</TableCell>
                        <TableCell align="center">Total Deaths</TableCell>
                        <TableCell align="center">New Recovered</TableCell>
                        <TableCell align="center">Total Recovered</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.countries.map((country : Country) => {
                        return <CountryEntry 
                                    country={country}
                                    key={country.countryCode} 
                                    onCountrySelect={props.onCountrySelect}/>
                    })}
                </TableBody>
            </Table>
        </Paper> 
}

export default CountryTable;