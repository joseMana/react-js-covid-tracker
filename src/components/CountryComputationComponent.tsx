import React, { useState } from "react";
import Country from "../models/Country";

type Props = {
    countries: Country[];
};

const CountryComputation = (props: Props) => {
    return (
        <div className="counter-top bg-primary p-2 text-center">            
        <h1>Total Confirmed:</h1>
        <p>Average:</p>
        <h1>Total Deaths:</h1>
        <p>Average:</p>
        <h1>Total Recovered:</h1>
        <p>Average:</p>
        <br></br>
        <h2>Selected Countries:</h2>
        {props.countries.map((country : Country) => {
                        return <h1>{country.name}</h1>
                    })}
        </div>
    );
}

export default CountryComputation;