// New component to manage Message section
var GreeterMessage = React.createClass({
  //Every React component needs a render method
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + "..."}</p>
      </div>
    );
  }
});

// Component to contain Form
var GreeterForm = React.createClass ({
  onFormSubmit: function(e) {
    e.preventDefault();

    var name = this.refs.name.value;
    if(name.length > 0) {
      this.refs.name.value = "";
      this.props.onNewName(name);
    }
  },

  render:function() {
    return (
      <form onSubmit= {this.onFormSubmit}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
      </form>
    );
  }
});

// Greeter is our component
var Greeter = React.createClass({
  // Default React method that assigns default values to props
  // in the event that they are not passed in

  // Prop: gets passed into component as it is initialized
  getDefaultProps: function() {
    return {
      name: 'React',
      message: "This is the default message"
    };
  },

  // State: Internally maintained and updated by the component
  // In other words, props get passed in, states are changed
  // in the component
  getInitialState: function() {
    return {
      //
      name: this.props.name
    };
  },

  // Updates name state with name passed in
  //onButtonClick: function(e) {
  handleNewName: function(name) {
    // //Prevents form from submitting, preventing page refresh
    // e.preventDefault();
    //
    // // Comes from onSubmit form when user inputs value
    // var name = this.refs.name.value;
    //
    // // Clears form input field
    // this.refs.name.value = "";
    //
    //
    // // Only sets a name if the user types into the input
    // if(typeof name === 'string' && name.length > 0) {
    //   // Sets the name property in the state to the one from the
    //   // form and refreshes the page state
    //   this.setState({
    //     name: name
    //   });
    //}
    this.setState({
        name: name
    });

    //alert(name);
  },

  // Another default React method
  render:function () {
    // Makes name dependent on prop
    // var name = this.props.name;

    // Makes name update with state
    var name = this.state.name;
    var message = this.props.message;
    return (
      // Cannot return multiple root HTML elements.
        <div>
          {/* <h1>Hello {name}!</h1>
        <p>{message + " yeaaa"}</p> */}

      {/* Calls Greeter Message component */}
        <GreeterMessage name={name} message={message}/>

        {/* <form onSubmit={this.onButtonClick}>
            <input type="text" ref="name"/>
            <button>Set Name</button>
        </form> */}

        {/* New prop for GreeterForm from it's parent component */}
        <GreeterForm onNewName={this.handleNewName}/>

      </div>

      //The following would prevent the above from rendering
      // <div> <p> Ayyyy </p> </div>
    );
  },

});

var firstName = "Kenneth";

ReactDOM.render(
  //<Greeter name="Kenneth"/>, //Refers to Greeter var above
  // Prop named 'name' and 'message' are created
  <Greeter name={firstName} message="Ayyy"/>,
  document.getElementById('app')
);
