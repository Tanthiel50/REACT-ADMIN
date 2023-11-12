import React from 'react';
import './filter.scss';

const cities = [
    {département: 44, ville: "Nantes", arrondissement:"Nantes Nord"},
    {département: 44, ville: "Nantes", arrondissement:"Nantes Erdre"},
    {département: 44, ville: "Nantes", arrondissement:"Centre Ville"},
    {département: 44, ville: "Nantes", arrondissement:"Île de Nantes"},
]

const Filter = () => {
    // Extract unique values from an array
    const uniqueDepartements = [...new Set(cities.map(city => city.département))];
    const uniqueVilles = [...new Set(cities.map(city => city.ville))];
    const uniqueArrondissements = [...new Set(cities.map(city => city.arrondissement))];

    return (
        <div className='filters'>
            <select className='filter'>
                {uniqueDepartements.map(departement => <option key={departement}>{departement}</option>)}
            </select>
            <select className='filter'>
                {uniqueVilles.map(ville => <option key={ville}>{ville}</option>)}
            </select>
            <select className='filter'>
                {uniqueArrondissements.map(arrondissement => <option key={arrondissement}>{arrondissement}</option>)}
            </select>
        </div>
    );
};

export default Filter;
