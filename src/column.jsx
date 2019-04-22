import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task.jsx';

const Container = styled.div`
    margin: 20px auto;
    border: 1px solid black;
    border-radius: 2px;
    width: 50%;
    
`;

const Title = styled.h1`
    padding: 8px;
`;

const TaskList = styled.div`
    padding: 8px;
`;

export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {provided => (
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {this.props.tasks.map((task, index) => 
                                <Task key={task.id} task={task} index={index} />
                            )}
                            {provided.placeholder}
                        </TaskList>
                    )}

                </Droppable>
            </Container>
        )
    }
}