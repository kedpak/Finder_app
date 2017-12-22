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
          { value: 'Burger', label: 'Burger' },
          { value: 'Sandwich', label: 'Sandwich' },
          { value: 'Mexican', label: 'Mexican' },
          { value: 'Brunch', label: 'Brunch' },
          { value: 'Coffee', label: 'Coffee' },
          { value: 'Ice Cream', label: 'Ice Cream' },
          { value: 'Breakfast', label: 'Breakfast' },
          { value: 'Lunch', label: 'Lunch' },
          { value: 'Dinner', label: 'Dinner' },
          { value: 'Chinese', label: 'Chinese' },
          { value: 'Japanese', label: 'Japanese' },
          { value: 'Korean', label: 'Korean' },
          { value: 'Thai', label: 'Thai' },
          { value: 'Italian', label: 'Italian' },
          { value: 'Indian', label: 'Indian' },
          { value: 'Mediterranean', label: 'Mediterranean' },
          { value: 'Bagel', label: 'Bagel' },
          { value: 'Boba', label: 'Boba' }
        ]}
        clearable={false}
      />
    )
  }
}

export default SelectQuery;
