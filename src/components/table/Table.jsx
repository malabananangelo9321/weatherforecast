import React from "react";
import "./css/table.css";
const renderEqualProps = (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};
const Table = (props) => {
  const { header, dataList } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            {header.map((val, index) => {
              return <th key={index}>{val.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataList.map((val, index) => {
            return (
              <tr key={index}>
                {header.map((valHeader, indexHead) => {
                  const value = val[valHeader.header];
                  return <td key={indexHead}>{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(Table, renderEqualProps);
