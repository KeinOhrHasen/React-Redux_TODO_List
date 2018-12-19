import React from "react"
import { Table} from "semantic-ui-react"
import TodoRow from "./todoRow"
import EditTodo from "./editTodo"


// TodoTable is a Stateless component

const TodoTable = (props) => {
    return (

        <Table celled className="listTable">
            {/* <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Options</Table.HeaderCell>
                </Table.Row>
            </Table.Header> */}

            <Table.Body>

                {/* This maps the todos recieved as a prop */}

                {props
                    .todos
                    .map((t, index) => {

                        // If the todo is being edited, EditTodo Component is rendered here
                        
                        if (t.editing) {
                            return <EditTodo
                                editTodo={props.editTodo}
                                cancelEditing={e => props.cancelEditing(t.id)}
                                key={t.id}
                                todo={t}/>
                        } else {

                            // Is the todo is not being edited the TodoRow stateless component is returned

                            return <TodoRow
                                todo={t}
                                key={t.id}
                                completeTodoTougle={e => props.completeTodoTougle(t)}
                                startEditing={e => props.startEditing(t.id)}
                                deleteTodo={e=> props.deleteTodo(t)}
                                className="todoRow"                                
                            />
                        }
                    })}
                
                {/* This EditTodo component is used as a Create new Todo Component */}
                {/* Thus by using the same component for both use, we can reuse a lot of the codes */}
                
                <EditTodo createTodo={props.createTodo} /> 
            </Table.Body>

        </Table>
    )
}

export default TodoTable;