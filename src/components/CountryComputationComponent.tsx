import React, { useState } from "react";
import Country from "../models/Country";

type Props = {
    countries: Country[];
};

const CountryComputation = (props: Props) => {
    let TotalConfirmed: number = 0;
    let TotalConfirmed_Average: number =  0.0;
    let TotalDeaths: number = 0;
    let TotalDeaths_Average: number = 0.0;
    let TotalRecovered: number = 0;
    let TotalRecovered_Average: number =  0.0;

    props.countries.forEach(country => {
        TotalConfirmed += country.stats.totalConfirmed + country.stats.newConfirmed;
        TotalDeaths += country.stats.totalDeaths + country.stats.newDeaths;
        TotalRecovered += country.stats.totalRecovered + country.stats.newRecovered
    });

    TotalConfirmed_Average = (TotalConfirmed / props.countries.length >= TotalConfirmed) ? 0 : TotalConfirmed/props.countries.length;
    TotalDeaths_Average = (TotalDeaths / props.countries.length >= TotalDeaths) ? 0 : TotalDeaths/props.countries.length;
    TotalRecovered_Average = (TotalRecovered / props.countries.length >= TotalRecovered) ? 0 : TotalRecovered/props.countries.length;

    return (
        <div className="counter-top bg-primary p-2 text-center">
            <h1>Total Confirmed:{TotalConfirmed}</h1>
            <p>Average:{TotalConfirmed_Average}</p>
            <h1>Total Deaths:{TotalDeaths}</h1>
            <p>Average:{TotalDeaths_Average}</p>
            <h1>Total Recovered:{TotalRecovered}</h1>
            <p>Average:{TotalRecovered_Average}</p>
            <br></br>
            <h2>Selected Countries:</h2>
            {props.countries.map((country: Country) => {
                return <p>{country.name}</p>
            })}
        </div>
    );
}

export default CountryComputation;