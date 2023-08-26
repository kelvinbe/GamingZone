import React from "react";
import MoneyCard from "./MoneyCard";

const Data = [{ name: 'ps5', amount: '30,000'}, { name: 'xbox', amount: '20,000'}, { name: 'psp', amount: '10,000'}, { name: 'pc', amount: '50,000'}];

const MoneyMade = () => {
  return (
    <div style={{height: 200}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {Data.map((game) => {
          return <MoneyCard amount={game.amount} name={game.name} />;
        })}
      </div>
    </div>
  );
};

export default MoneyMade;
