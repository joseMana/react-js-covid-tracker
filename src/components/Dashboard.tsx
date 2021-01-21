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
    GetInfo();
  });

  const [newSelectedCountryList, setNewSelectedCountryList] = useState<Country[]>(selectedCountries);
  function OnCountrySelect(country: Country) {
    GetInfo();
    selectedCountries.push(country);
    setNewSelectedCountryList(selectedCountries)

    console.log(newSelectedCountryList);
  }

  function OnCountryUnSelect(country: Country) {
    GetInfo();
    
      const countryIndex = selectedCountries.findIndex((r: Country) => r.countryCode === country.countryCode);
      selectedCountries.splice(countryIndex, 1);
      setNewSelectedCountryList(selectedCountries);
  }
  function GetInfo(){
    async function getInfo() {
      const summary = await getSummaryPerCountry();
      return summary;
    }
    getInfo().then((info) => {
      setSummary(info);
    })
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
                  onCountrySelect={OnCountrySelect} 
                  onCountryUnSelect={OnCountryUnSelect}
                  />
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
