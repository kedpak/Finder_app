import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

/* Implements select menu for type of search */
class SelectQuery extends Component {
  render() {
    const { state, option } = this.props;
    return(
      <Select
        name="form-field-name"
        className="selectQuery"
        value={state}
        onChange={option}
        options={[
          { value: 'Pizza', label: 'Pizza' },
          { value: 'Bars', label: 'Bars' },
          { value: 'Diner', label: 'Diner' },
          { value: 'Hamburger', label: 'Hamburger' },
          { value: 'Mexican', label: 'Mexican' },
          { value: 'Brunch', label: 'Brunch' },
          { value: 'Coffee', label: 'Coffee' },
          { value: 'Breakfast', label: 'Breakfast' },
          { value: 'Lunch', label: 'Lunch' },
          { value: 'Dinner', label: 'Dinner' },
          { value: 'Chinese', label: 'Chinese' },
          { value: 'Japanese', label: 'Japanese' },
          { value: 'Korean', label: 'Korean' },
          { value: 'Italian', label: 'Italian' },
          { value: 'Indian', label: 'Indian' },
          { value: 'Mediterranean', label: 'Mediterranean' }
        ]}
        clearable={false}
      />
    )
  }
}

export default SelectQuery;
