import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: white;
`;

export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {provided => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <div><strong>{this.props.task.header}</strong></div>
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        )}
}