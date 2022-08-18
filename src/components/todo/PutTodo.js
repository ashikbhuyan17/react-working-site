import React from 'react';
import { useParams } from 'react-router-dom';

const PutTodo = () => {
    const { getTodoId } = useParams()
    console.log("////////////", getTodoId)
    return (
        <div>
            this is todo id {getTodoId}
        </div>
    );
};

export default PutTodo;