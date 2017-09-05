import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../lib/styler';

export default class CheckboxGroup extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    label: PropTypes.string,
    orientation: PropTypes.oneOf(['horizontal']),
    size: PropTypes.oneOf(['small', 'large']),
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: []
    }
  }

  handleSelect = (index) => {
    var selected = this.state.selected;

    if (selected.indexOf(index) > -1) {
      var placement = selected.indexOf(index);
      selected.splice(placement, 1);
    } else {
      selected.push(index);
    }

    this.setState({ selected });
  }

  render() {
    const { selected } = this.state;
    const { label, items, size, orientation, children } = this.props;

    const checkboxGroupClass = Styler(
      'checkbox_group',
      size
    );

    const labelClass = Styler(
      'label',
      label ? null : 'hidden',
      size
    );

    const itemsClass = Styler(
      'items',
      orientation,
      size
    );

    const itemClass = Styler(
      'item',
      orientation,
      size
    );

    const checkboxItems = items.map((item, index) => {
      return (
        <div
          className={ itemClass }
          key={item.name}>
          <input
            className="checkbox"
            name={item.name}
            value={index}
            type="checkbox"
            checked={selected.indexOf(index) > -1}
            onChange={ event => this.handleSelect(index) }/>
          <label
            className="name"
            key={item.name}
            onClick={ event => this.handleSelect(index) }>
            {item.name}
          </label>
        </div>
      )
    });

    return (
      <div className={ checkboxGroupClass }>
        <div className={ labelClass }>
          { label }
        </div>
        <div className={ itemsClass }>
          { checkboxItems }
        </div>
      </div>
    )
  }
}
