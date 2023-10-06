import React, { Component } from 'react';

class NotesInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body : '',
      title : ''
    };
    this.onSubmitListener = this.onSubmitListener.bind(this);
    this.onTitleChangeListenter = this.onTitleChangeListenter.bind(this);
    this.onBodyChangeListener = this.onBodyChangeListener.bind(this);
  }

    onSubmitListener = (e) => {
    e.preventDefault();
    this.props.makeNotes(this.state);
    this.setState({
        body : '',
        title : ''
    });
    }

    onTitleChangeListenter = (e) => {
        const { value } = e.target;
        this.setState(prevState => {
            return {
                ...prevState,
                title: value.length > 50 ? value.slice(0, 50) : value,
            }
        });
    }

    onBodyChangeListener = (e) => {
       this.setState(prevState => {
              return {
                    ...prevState,
                    body: e.target.value,
              };
       });
    }

  render() {
    const { body, title } = this.state;
    return (
        <form className="note-input" onSubmit={this.onSubmitListener}>
        <input
          className="note-input__title"
          type="text"
          value={title}
          onChange={this.onTitleChangeListenter}
          placeholder="Title"
          required
        />
        <p className="note-input__title__char-limit">{title.length}/50</p>
        <textarea
          value={body}
          onChange={this.onBodyChangeListener}
          placeholder="Note your thoughts here..."
          required
        />
        <button type="submit">Add Note</button>
      </form>
    );
}
}
export default NotesInput;