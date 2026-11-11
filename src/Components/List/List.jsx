import { Component } from "react";
import css from "./List.module.css";

class List extends Component {
    handleClick = (e) => {
        const contact = e.target.closest("li").id
        this.props.onDelete(contact)
        
    }
  render() {
    return (
      <ul className={css.ul}>
        {this.props.contacts.map((item) => {
          return (
            <li className={css.li} key={item.id} id={item.id}>
              <p>name: {item.name}</p> 
              <p>phone number: {item.number}</p>
              <button onClick={this.handleClick}>delete</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
