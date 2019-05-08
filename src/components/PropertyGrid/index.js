import React from 'react'
import PropertyRow from '../PropertyRow'
import './styles.scss'

const PropertyGrid = ({properties}) =>
    <div>
        <table id="propertyGrid" className="blueTable">
            <thead>
            <tr>
                <th>Photo</th>
                <th>List Price</th>
                <th>Year Built</th>
                <th>Monthly Rent</th>
                <th>Gross Yield %</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            {properties.map(property => {
                    return (
                        <PropertyRow key={property.id} property={property}/>
                    )
                }
            )}
            </tbody>
        </table>
        ;
    </div>;

export default PropertyGrid
