import React from 'react'
import { Route } from "react-router-dom";
import DuoLingo from '../pages/smart-learning/DuoLingo';
import GMAT from '../pages/smart-learning/GMAT';
import GRE from '../pages/smart-learning/GRE';
import IELTS from '../pages/smart-learning/IELTS';
import PTE from '../pages/smart-learning/PTE';
import TOEFL from '../pages/smart-learning/TOEFL';
import SAT from '../pages/smart-learning/SAT';

// Just export an array of Route elements
const smartLearningRoute = [
    <Route path='/duolingo' element={<DuoLingo />} key="duolingo" />,
    <Route path='/gmat' element={<GMAT />} key="gmat" />,
    <Route path='/gre' element={<GRE />} key="gre" />,
    <Route path='/ielts' element={<IELTS />} key="ielts" />,
    <Route path='/pte' element={<PTE />} key="pte" />,
    <Route path='/toefl' element={<TOEFL />} key="toefl" />,
    <Route path='/sat' element={<SAT />} key="sat" />,
];


export default smartLearningRoute;
