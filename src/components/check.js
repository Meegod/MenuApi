import React from 'react';
import Table from './Table';
function Appetizer({ appetizers }) {
  console.log('i am the', appetizers);
  return (
    <div className="">
      <table className="table">
        <thead>
          <tr>
            <th>Dish</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
      </table>

      {appetizers.map((book, index) => (
        <div key={index} className="card">
          
          {book.type == 'appetizer' && <td>{book.description}</td>}
        </div>
      ))}
    </div>
  );
}
export default Appetizer;
