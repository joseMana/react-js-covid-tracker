import React, { Fragment, useState, useEffect } from 'react';
import CovidSummary from '../models/CovidSummary';
import CountryTable from '../components/CountryTableComponent';
import { getSummaryPerCountry } from '../services/covidService';
import { Grid } from '@material-ui/core';
import CountryComputation from '../components/CountryComputationComponent';
import Country from '../models/Country';

let selectedCountries: Country[] = [];

function Dashboard() {
  const [summary, setSummary] = useState<CovidSummary | null>(null);
  useEffect(() => {
    async function getInfo() {
      const summary = await getSummaryPerCountry();
      return summary;
    }
    getInfo().then((info) => {
      setSummary(info);
    })
  });

  const [newSelectedCountryList, setNewSelectedCountryList] = useState<Country[]>(selectedCountries);
  function OnCountrySelect(country: Country) {
    selectedCountries.push(country);
    setNewSelectedCountryList(selectedCountries)

    console.log(newSelectedCountryList);
  }

  if (summary) {
    return (
      <Fragment>
        <section className="container">
          <div className="counter-form">
            <CountryComputation countries={newSelectedCountryList} />
          </div>
          <br></br>
          <div className="countries">
            <Grid container spacing={1}>
              <Grid>
                <CountryTable
                  countries={summary.countries}
                  onCountrySelect={OnCountrySelect} />
              </Grid>
            </Grid>
          </div>
        </section>
      </Fragment>
    );
  }
  else {
    return <Fragment>Loading...</Fragment>
  }

}

export default Dashboard;
