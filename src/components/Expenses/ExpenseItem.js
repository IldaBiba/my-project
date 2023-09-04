import React, { useState } from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../IU/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  //

  // the first element is the value itself and the second element is a function which will be used to update the value. 
  // useState always returns two elements which are the ones in the upper sentence.
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {

  // //   //the setTitle will be excecuted again ndryshe nga thjesht dhenia e barazimit ne variabel ku kodi ekzekutohej vtm nje here dhe 
  // //   //dhe ndryshimi i variablave nuk merrej parasysh. Also me setTitle u are telling the React that the function and component 
  // //   //should be re-evalueted.
  //   setTitle('Updated!');
     
  // //   //in the console do te jepen value qe kan qene dhe jo updated pasi setTitle will not change the value right away but instead 
  // //   //schedules this  state update.
  //   console.log(title);
  // }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
    
  );
}

export default ExpenseItem;
