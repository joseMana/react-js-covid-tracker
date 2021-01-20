import Country from "../models/Country"
import { TableRow, TableCell } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { updateCommaList } from "typescript";
import { red } from "@material-ui/core/colors";

type Props = {
    country: Country,
}

const CountryEntry: React.FC<Props> = (props) => {
    const { country } = props;
    let btnClassName = 'btn btn-primary';
    let btnInnerText = 'Select';

    const [updatedText, setText] = useState(btnInnerText);
    const [updatedClassName, setClassName] = useState(btnClassName);
    function OnClickActionButton() {
        setText((updatedText === 'Select' ? 'Unselect' : 'Select'));
        setClassName((updatedText === 'Select' ? 'btn btn-danger' : 'btn btn-primary'));
        console.log(props.country.countryCode);
    }

    return <TableRow key={country.countryCode}>
        <TableCell align="center">
            <button className={updatedClassName} onClick={OnClickActionButton}>
                {updatedText}
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