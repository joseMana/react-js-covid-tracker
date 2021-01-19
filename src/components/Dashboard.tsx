import React, { Fragment, useState, useEffect } from 'react';
import CovidSummary from '../models/CovidSummary';
import CountryTable from '../components/CountryTableComponent';
import { getSummaryPerCountry } from '../services/covidService';
import { Grid } from '@material-ui/core';
import CountryComputation from '../components/CountryComputationComponent';

function Dashboard() {
  const [summary, setSummary] = useState<CovidSummary | null>(null);

  useEffect(() => {
    async function getInfo() {
      const summary = await getSummaryPerCountry();
      return summary;
    }

    getInfo().then((info) => {
      console.log(info);
      setSummary(info);
    })

  }, []);

  if (summary) {
    return (
      <Fragment>
        <section className="container">
          <div className="counter-form">
            <CountryComputation />
          </div>
          <br></br>
          <div className="countries">
            <Grid container spacing={1}>
              <Grid>
                <CountryTable
                  countries={summary.countries} />
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
