import React from 'react'
import { Route } from "react-router-dom";

import StudyAustralia from '../pages/countries/StudyAustralia';
import StudyCanada from '../pages/countries/StudyCanada';
import StudyFrance from '../pages/countries/StudyFrance';
import StudyUK from '../pages/countries/StudyUK';
import StudyUsa from '../pages/countries/StudyUsa';
import StudyIreland from '../pages/countries/StudyIreland';
import StudyGermany from '../pages/countries/StudyGermany';
import StudyDubai from '../pages/countries/StudyDubai';

import StudyNewzealand from '../pages/countries/StudyNewzealand';

// Just export an array of Route elements
const countryRoutes = [
    <Route path='/study-australia' element={<StudyAustralia />} key="australia" />,
    <Route path='/study-canada' element={<StudyCanada />} key="canada" />,
    <Route path='/study-france' element={<StudyFrance />} key="france" />,
    <Route path='/study-ireland' element={<StudyIreland />} key="ireland" />,
    <Route path='/study-uk' element={<StudyUK />} key="uk" />,
    <Route path='/study-usa' element={<StudyUsa />} key="usa" />,
    <Route path='/study-germany' element={<StudyGermany />} key="germany" />,
    <Route path='/study-newzealand' element={<StudyNewzealand />} key="newzealand" />,
    <Route path='/study-dubai' element={<StudyDubai />} key="dubai" />
];

export default countryRoutes;

