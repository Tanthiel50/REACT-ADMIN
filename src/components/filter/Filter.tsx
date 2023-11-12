import React from 'react';
import './filter.scss';
import { useFilter } from './FilterContent';

const cities = [
    {département: 44, ville: "Nantes", arrondissement: "Nantes Nord"},
    {département: 44, ville: "Nantes", arrondissement: "Nantes Sud"},
    {département: 44, ville: "Nantes", arrondissement: "Île de Nantes"},
];

// Pick the unic values from an array
const Filter = () => {
    const { departement, ville, arrondissement, setDepartement, setVille, setArrondissement } = useFilter();

    const uniqueDepartements = [...new Set(cities.map(city => city.département))];
    const uniqueVilles = [...new Set(cities.map(city => city.ville))];
    const uniqueArrondissements = [...new Set(cities.map(city => city.arrondissement))];

    return (
        <div className='filters'>
            <select className='filter' value={departement} onChange={e => setDepartement(e.target.value)}>
                {uniqueDepartements.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select className='filter' value={ville} onChange={e => setVille(e.target.value)}>
                {uniqueVilles.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
            <select className='filter' value={arrondissement} onChange={e => setArrondissement(e.target.value)}>
                {uniqueArrondissements.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
        </div>
    );
};

export default Filter;
