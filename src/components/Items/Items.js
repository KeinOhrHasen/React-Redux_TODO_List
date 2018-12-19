import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Items extends Component {
  render () {
    const {items} = this.props;
    return <div className="items">
      <h2>
        Items
      </h2>
      {!items.length ? 'Loading...' : (<ul>
        {
          items
              .map(i =>
                  <li key={i.id}>
                    <Link to={"/items/" + i.id}>{i.title}</Link>
                  </li>)
        }
      </ul>)
      }
    </div>
  }
}

export default Items;
