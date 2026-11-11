import "./App.css";
import { Component } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import Filter from "./Components/Filter/Filter";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts")
    if (contacts) {
      this.setState({
        contacts: JSON.parse(contacts)
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
  }

  handleFilter = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleForm = () => {
    this.setState((prev) => ({
      contacts: [
        ...prev.contacts,
        {
          name: prev.name,
          number: prev.number,
          id: nanoid(),
        },
      ],
      name: "",
    }));

    console.log(this.state);
  };

  handleInfo = (type, info) => {
    this.setState({
      [type]: info,
    });
  };

  handleDelete = (id) => {
this.setState(prev => ({
  contacts: prev.contacts.filter(contact => contact.id !== id)
}))


  }

  render() {
    return (
      <>
        <Form
          contacts={this.state}
          onInfo={this.handleInfo}
          onSubmit={this.handleForm}
        />
         <Filter onFilter={this.handleInfo} onSearch={this.handleFilter} />
        <List contacts={this.handleFilter()} onDelete={this.handleDelete} />
       
      </>
    );
  }
}

export default App;
