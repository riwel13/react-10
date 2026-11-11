import { Component } from "react";
import css from "./Form.module.css";

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit();

    e.target.reset();
  };

  handleChange = (e) => {
    console.log(e.target.name);
    if (
      e.target.name === "name" &&
      this.props.contacts.contacts.some(
        (contact) =>
          contact.name.toLowerCase() === e.target.value.trim().toLowerCase(),
      )
    ) {
      alert("this name is already in contacts");
    }

    this.props.onInfo(e.target.name, e.target.value);

    // e.target.value = ""
  };
  render() {
    return (
      <>
        <h2 className={css.h2}>add new contact</h2>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <input
            className={css.input}
            placeholder="enter name"
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
          className={css.input}
            placeholder="enter phone number"
            type="tel"
            name="number"
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={css.button} type="submit">SUBMIT</button>
        </form>
      </>
    );
  }
}

export default Form;
