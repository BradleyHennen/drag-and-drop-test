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
        // reorder results
        const reorderedTasks = reorder(
            this.state.tasks,           // starting array data
            result.source.index,        // starting array index
            result.destination.index    // ending array index
        );

        // update our state
        this.setState({
            tasks: reorderedTasks,
        });
    }

    finishReorder = () => {
        // this function could dispatch to a saga for your PUT/update

        // prove our order is correct in state
        console.log('final order: ', this.state.tasks);        
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                {/* tasks must be the current tasks from state, not initialData */}
                <Column tasks={this.state.tasks} finishReorder={this.finishReorder} />            
            </DragDropContext>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

