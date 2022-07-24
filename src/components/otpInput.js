import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
class Otpinput extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", otp6: "", disable: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(value1, event) {

    this.setState({ [value1]: event.target.value });
  }

  handleSubmit(event) {
    // eslint-disable-next-line
    const data = new FormData(event.target);
    console.log(this.state);
    event.preventDefault();
  }

  inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {

        elmnt.target.form.elements[next].focus()
      }
    }
    else {
      console.log("next");
     
        const next = elmnt.target.tabIndex;
        if (next < 6) {
          elmnt.target.form.elements[next].focus()
        }
    }

  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <div className="otpContainer">

          <input
            name="otp1"
            type="number"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp1}
            onKeyPress={this.keyPressed}
            onChange={e => this.handleChange("otp1", e)}
            tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
          <input
            name="otp2"
            type="number"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp2}
            onChange={e => this.handleChange("otp2", e)}
            tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
          <input
            name="otp3"
            type="number"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp3}
            onChange={e => this.handleChange("otp3", e)}
            tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
          <input
            name="otp4"
            type="number"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp4}
            onChange={e => this.handleChange("otp4", e)}
            tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
          />

          <input
            name="otp5"
            type="number"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp5}
            onChange={e => this.handleChange("otp5", e)}
            tabIndex="5" maxLength="1" onKeyUp={e => this.inputfocus(e)}
          />

        <input
            name="otp6"
            type="number"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp6}
            onChange={e => this.handleChange("otp6", e)}
            tabIndex="6" maxLength="1" onKeyUp={e => this.inputfocus(e)}
          />
        </div>
        <Button className="primary" type="submit">
          Submit
        </Button>
       </form>
    );
  }
}


export default Otpinput;