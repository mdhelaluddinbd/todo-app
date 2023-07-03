import React from 'react';
import TodoView from '../TodosView/TodoView';

const ToDos = (props) => {
   
   
    return (
        <div>
           
            {
                props.info.map((singleInfo,index) => {
                return (<TodoView key={index} singleInfo={singleInfo}></TodoView>)})
            }
        </div>
    );
};

export default ToDos;