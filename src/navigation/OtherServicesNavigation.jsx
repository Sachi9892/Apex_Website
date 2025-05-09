import React from 'react';
import { Route } from "react-router-dom";
import Accomodation from '../pages/services/Accomodation';
import EducationLoan from '../pages/services/EducationLoan';
import Forex from "../pages/services/Forex";

const otherServicesNavi = [
    <Route path='/accommodation' element={<Accomodation />} key="accommodation" />,
    <Route path='/education-loan' element={<EducationLoan />} key="education-loan" />,
    <Route path='/forex' element={<Forex />} key="forex" />
];

export default otherServicesNavi;
