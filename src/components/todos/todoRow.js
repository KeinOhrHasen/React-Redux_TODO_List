import React, {Component} from "react"
import {Button, Table} from "semantic-ui-react"
import WarningIdentificator from "./WarningIdentificator"

// The Todo Row component is a simple stateless component, It simply takes the props 
// and maps the specific events to the methods of parent component 


class TodoRow extends Component {

    constructor(props) {
        super(props);
        // If props.todo exists this component is used to  Edit a Todo, 
        // else this is a Create New Todo Component

        this.state = {
            // options for data show format
            options : {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                timezone: 'UTC',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            },
        }
    }


    render(){
        return (
            
            // getClassName assigns the class names of this element 

            <Table.Row className={getClassName(this.props)} onClick={this.clickHandler} cursor="pointer">
                <Table.Cell>{this.props.todo.title}</Table.Cell>
                
                <Table.Cell>{(new Date(this.props.todo.expires_at)).toLocaleString("en", this.state.options)}</Table.Cell>
                <Table.Cell>
                    <WarningIdentificator expires_at={this.props.todo.expires_at}
                    />
                    </Table.Cell>
                <Table.Cell className="options">
                    {!this.props.todo.completed?
                        <Button className="option-buttons" color='green' onClick={this.props.completeTodoTougle}>
                            <i className="fa fa-square-o" aria-hidden="true"></i>
                        </Button>
                    :
                        <Button className="option-buttons" color='green' onClick={this.props.completeTodoTougle}>
                            <i className="fa fa-check-square-o" aria-hidden="true"></i>
                        </Button>
                }
                    <Button className="option-buttons" color='blue' onClick={this.props.startEditing}>
                        <i className="fa fa-pencil"></i>
                    </Button>
                    <Button className="option-buttons delete-todo" color='red' onClick={this.props.deleteTodo}>
                        <i className="fa fa-trash"></i>
                    </Button>
                </Table.Cell>
            </Table.Row>
        );
    } 
}

// Right now Updating, done and deleting these three states are represented with different Class Name

const getClassName = (props) => {
    return `
    
    ${props.todo.updating
        ? "updating"
        : ""}
    ${props.todo.completed
            ? "done"
            : ""}
    ${props.todo.deleting
                ? "deleting"
                : ""}
    `
}

export default TodoRow;

