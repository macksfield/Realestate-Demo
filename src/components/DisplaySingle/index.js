import React from 'react'
import './styles.css'

const DisplaySingle = ({properties}) =>
  <div className="row compare">
    <div className="col-12 mt-5 text-center">
      <table className="table">
        <thead className="thead-default">
          <tr>
            <th />
            {properties.map(property =>
              <th key={property.id}>
                {property.name}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="price">
            <th scope="row">Price</th>
            {properties.map(property =>
              <td key={property.id} className="text-center">{property.price}</td>
            )}
          </tr>
          <tr className="colors">
            <th scope="row">Colors</th>
            {properties.map(property =>
              <td key={property.id}>
                {property.colors.map((color, index) =>
                  <span key={index} className={"bg-" + color} />
                )}
              </td>
            )}
          </tr>
          <tr className="condition">
            <th scope="row">Condition</th>
            {properties.map(property =>
              <td key={property.id} className={property.condition === "Frozen" ? "bg-red" : "bg-green"}>
                {property.condition}
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  </div>;

export default DisplaySingle
