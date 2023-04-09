import React from "react";
import "./css/table.css";
const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{`Date (mm/dd/yyyy)`}</th>

            <th>{`Temp(F)`}</th>

            <th>{`Description`}</th>

            <th>{`Main`}</th>

            <th>{`Pressure`}</th>

            <th>{`Humidity`}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td> <td></td> <td></td> <td></td> <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
