import React from "react";
import MoneyCard from "./MoneyCard";
import useMediaQuery from '@mui/material/useMediaQuery';


const Data = [{ name: 'ps5', amount: '30,000'}, { name: 'xbox', amount: '20,000'}, { name: 'psp', amount: '10,000'}, { name: 'pc', amount: '50,000'}];

const MoneyMade = () => {
const matches = useMediaQuery('(max-width:480px)');

  return (
    <div style={{height: matches ? 600 : 200}}>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: matches ? 'column' : 'row', alignItems: 'center'}}>
        {Data.map((game) => {
          return <MoneyCard amount={game.amount} name={game.name} />;
        })}
      </div>
    </div>
  );
};

export default MoneyMade;
