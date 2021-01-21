import { parse } from "path";
import React, { useState } from "react";
import Country from "../models/Country";

type Props = {
    countries: Country[];
};

const CountryComputation = (props: Props) => {
    let TotalConfirmed: number = 0;
    let TotalConfirmed_Average: number = 0;
    let TotalDeaths: number = 0;
    let TotalDeaths_Average: number = 0;
    let TotalRecovered: number = 0;
    let TotalRecovered_Average: number = 0;
    props.countries.forEach(country => {
        TotalConfirmed += country.stats.totalConfirmed + country.stats.newConfirmed;
        TotalDeaths += country.stats.totalDeaths + country.stats.newDeaths;
        TotalRecovered += country.stats.totalRecovered + country.stats.newRecovered
    });

    function GetAverageCase(totalNumber: number) {
        if(isNaN(totalNumber/props.countries.length))
            return 0;
        else if(totalNumber / props.countries.length === totalNumber)
            return parseInt(totalNumber.toFixed());
        else
            return parseInt((totalNumber / props.countries.length).toFixed()); ;
    }
    TotalConfirmed_Average = GetAverageCase(TotalConfirmed);
    TotalDeaths_Average = GetAverageCase(TotalDeaths);
    TotalRecovered_Average = GetAverageCase(TotalRecovered);

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