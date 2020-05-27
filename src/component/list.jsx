import React, { Component } from 'react';
import contacts from './../contacts.json';
import './list.css';

class List extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        contacts[0],
        contacts[1],
        contacts[2],
        contacts[3],
        contacts[4],
      ],
    };
  }

  addRandom = () => {
    const contactsCp = [...contacts];
    const rndIndex = Math.floor(Math.random() * contactsCp.length);
    const newContacts = [...this.state.contacts];
    newContacts.push(contactsCp[rndIndex]);

    this.setState({
      contacts: newContacts,
    });
  };

  sortByName = () => {
    const contactsCp = [...this.state.contacts];
    const contactSortedByName = contactsCp.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    this.setState({
      contacts: contactSortedByName,
    });
  };

  sortByPopularity = () => {
    const contactsCp = [...this.state.contacts];
    const contactSortedByPop = contactsCp.sort(
      (a, b) => b.popularity - a.popularity
    );

    this.setState({
      contacts: contactSortedByPop,
    });
  };

  deleteContact = (index) => {
    const contactsCp = [...this.state.contacts];
    contactsCp.splice(index, 1);
    this.setState({
      contacts: contactsCp,
    });
  };

  render() {
    return (
      <div className="list">
        <h1>Iron Contacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => {
              return (
                <tr key={contact.name}>
                  <td>
                    <img src={contact.pictureUrl} alt="contact"></img>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>
                    <button onClick={() => this.deleteContact(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
