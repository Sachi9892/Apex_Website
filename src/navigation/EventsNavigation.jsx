import React from 'react';
import { Route } from "react-router-dom";
import Edufair from "../pages/events/Edufair";
import OnSpotAssessment from "../pages/events/OnSpotAssessment";

const eventNavi = [
    <Route path='/edu-fair' element={<Edufair />} key="edu-fair" />,
    <Route path='/on-spot-assessment' element={<OnSpotAssessment />} key="on-spot-assessment" />
];

export default eventNavi;
