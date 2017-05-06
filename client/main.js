import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/client/App';

Meteor.startup(() => {
  console.log("start up");
  render(<App />, document.getElementById('App'));
});

