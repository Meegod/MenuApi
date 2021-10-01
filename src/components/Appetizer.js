import React from 'react';
import Table from './Table';
import './Table.css';
function Appetizer({ appetizers }) {
  console.log('i am the', appetizers);
  let FilteredData = [];

  const RealAppe = appetizers.forEach(function (item) {
    if (item.type == 'appetizer') {
      FilteredData.push(item);
    }
    console.log(FilteredData);
  });

  return (
    <div className="container col-6 d-flex justify-content-center text-center pt-2 mt-20 align-items-center">
      <h1 className="appetizerh1 lead">Appetizer</h1>

      <table className="table-style" id="customers">
        <thead>
          <tr>
            <th className="text-center">Dish</th>
            <th className="text-center">Description</th>
            <th className="text-center">Price</th>
          </tr>
        </thead>
        <tbody className="tbosy">
          {FilteredData.map((appe) => (
            <tr>
              <td className="spc-td">{appe.dish}</td>
              <td className="spc-td">{appe.description}</td>
              <td className="spc-td">{`$${appe.price}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Appetizer;
