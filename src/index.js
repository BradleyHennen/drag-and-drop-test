import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class App extends React.Component {
    state = initialData;

    onDragEnd = (result) => {
        // const {destination, source, draggableId} = result;
        const items = reorder(
            this.state.tasks,
            result.source.index,
            result.destination.index
        );

        this.setState({
            tasks: items,
        });
    }

    finishReorder = () => {
        console.log('final order: ', this.state.tasks);        
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Column tasks={this.state.tasks} finishReorder={this.finishReorder} />            
            </DragDropContext>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

