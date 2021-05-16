import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AllCountriesList from './AllCountriesList';
import LineChart from '../Components/Charts/LineChart';
import BarChart from '../Components/Charts/BarChart';
import PieChart from '../Components/Charts/pieChart';
import GlobalMap from '../Components/Map/GlobalMap';
import MainStats from './WWStats';
// import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SectionContainer = () => {
  return (
    <Container className='MidSection' fluid>
       <Row>
        <Col xs='12' sm='12' md='12' lg='12' xl='12'>
          <MainStats/>
        </Col>
      </Row> 
      <Row className='rowPadding'>
        <Col xs='12' sm='12' md='12' lg='8' xl='8' className='noPadding'>
          <p className='mapHeader'>
            <i className='fas fa-globe-africa'></i>COVID-19 Pandemic Map
          </p>
          <div className='GlobalMap'>
            <GlobalMap />
          </div>
        </Col>
        <Col xs='12' sm='12' md='12' lg='4' xl='4' className='noPadding'>
          <p className='countriesListHeader'>
            <i className='far fa-flag'></i>Country Breakdown
          </p>
          <div className='countriesListContainer'>
            <AllCountriesList />
          </div>
        </Col>
      </Row>
      <Row className='rowPadding'>
          <p className='chartsTitle'>
            <i className='fas fa-chart-pie'></i>COVID-19 Pandemic Charts
          </p>
        <Col xs='12' sm='12' md='4' lg='4' xl='4' className='noPadding'>
          <div className='charts'>
            <LineChart />
          </div>
        </Col>
        <Col xs='12' sm='12' md='4' lg='4' xl='4' className='noPadding'>
          <div className='charts'>
            <BarChart />
          </div>
        </Col>
        <Col xs='12' sm='12' md='4' lg='4' xl='4' className='noPadding'>
          <div className='charts'>
            <PieChart />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionContainer;
