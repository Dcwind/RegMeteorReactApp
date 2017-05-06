import {React, Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';


Meteor.startup(() => {
  return render(<App />, document.getElementById('App'));
});

class App extends Component {

  render(){
    return <h1>React Integration test run </h1>;
  }

}