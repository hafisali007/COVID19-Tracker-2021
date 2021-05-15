import React from 'react';
import Child from './Status';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const MainStatus = ({
  AllCountriesData: { MainStatus, allCountriesloading },
  CurrentCountryData: { currentCountry }
}) => {
  const { cases, todayCases, deaths, todayDeaths, recovered, tests } =
  MainStatus || {};

  return (
    <div className='WWStats'>
      {MainStatus === null || allCountriesloading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : currentCountry === null || allCountriesloading ? (
        <Child
          cases={cases}
          todayCases={todayCases}
          deaths={deaths}
          todayDeaths={todayDeaths}
          recovered={recovered}
          tests={tests}
        />
      ) : (
        <Child
          country={currentCountry.country}
          flag={currentCountry.flag}
          cases={currentCountry.cases}
          todayCases={currentCountry.todayCases}
          deaths={currentCountry.deaths}
          todayDeaths={currentCountry.todayDeaths}
          recovered={currentCountry.recovered}
          tests={currentCountry.tests}
        />
      )}
    </div>
  );
};

MainStatus.prototype = {
  MainStatus: PropTypes.object,
  allCountriesloading: PropTypes.bool,
  currentCountry: PropTypes.object
};

const mapStateToProps = state => ({
  AllCountriesData: state.AllCountries,
  CurrentCountryData: state.CurrentCountryData
});

export default connect(mapStateToProps)(MainStatus);
