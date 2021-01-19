import Country from "../models/Country"
import { TableRow, TableCell } from "@material-ui/core";
import React from "react";

type Props = {
    country: Country,
}

const CountryEntry: React.FC<Props> = (props) => {
    const { country } = props;

    return <TableRow key={country.countryCode}>
        <TableCell align="center">
            <button>
                Select
            </button>
        </TableCell>
        <TableCell>{country.name}</TableCell>
        <TableCell align="right">{country.stats.newConfirmed}</TableCell>
        <TableCell align="right">{country.stats.totalConfirmed}</TableCell>
        <TableCell align="right">{country.stats.newDeaths}</TableCell>
        <TableCell align="right">{country.stats.totalDeaths}</TableCell>
        <TableCell align="right">{country.stats.newRecovered}</TableCell>
        <TableCell align="right">{country.stats.totalRecovered}</TableCell>
    </TableRow>
}

export default CountryEntry;