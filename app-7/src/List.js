import React, {Component} from 'react';
import Todo from './Todo.js';

export default function Todo( props ){
    let list= props.tasks.map((element, index) => {
        return(
            <Todo Key={index} task={element}/>
        )
    })

    return(
        <div>
            {List}
            </div>
    )

}

export default Todo;