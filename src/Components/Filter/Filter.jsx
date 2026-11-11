import { Component } from "react";
import css from "./Filter.module.css";

class Filter extends Component {

    handleChange = (e) => {
    console.log(e.target.name);
    this.props.onFilter(e.target.name, e.target.value);
// this.props.handleFilter()
  };


  render() {
    return (
        <div className={css.div}>
        <h2 className={css.h2}>FILTER</h2>
      <input className={css.input} type="text" name="filter" onChange={this.handleChange}/>
    </div>
    );
  }
}

export default Filter;
