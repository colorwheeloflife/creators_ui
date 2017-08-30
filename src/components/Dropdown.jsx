import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styler from '../lib/styler';

export default class Dropdown extends Component {

  constructor(props) {
    super(props);

    this.state = {
      listVisible: false,
      selected: props.selected
    }
  }

  static propTypes = {
    size: PropTypes.oneOf(['small', 'large'])
  };

  handleOpen = () => {
    var listVisible = this.state.listVisible;
    this.setState({ listVisible: !listVisible });
  }

  handleSelect = (item) => {
    this.setState({
      selected: item,
      listVisible: false
    });
    console.log(`You have selected: ${item.name}`);
  }

  renderListItems = () => {
    var items = [];
    this.props.list.map((item) => {
      items.push(
        <div
          className="dropdown_list_item"
          key={item.name}
          onClick={ event => this.handleSelect(item)}
          >
          {item.name}
        </div>)
    });
    return items;
  }



  render() {
    const { selected, size, children } = this.props;

    const baseClass = Styler(
      size
    );

    return (
      <div className={ "dropdown_container " + baseClass }>
        <div
          className={ "dropdown_display " + baseClass }
          onClick={this.handleOpen} >
          { this.state.selected.name }
        </div>
        <div className={ "dropdown_list " + (this.state.listVisible === true ? 'show ' : 'hidden ') + baseClass }>
          {this.renderListItems()}
        </div>
      </div>
    )
  }
}


/*



*/
