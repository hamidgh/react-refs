import React from "react";

class ContactUs extends React.Component {
  constructor(props:any) {
    super(props);
    console.log('constructor');
    // place to set our initial states
  }

  componentDidMount() {
    console.log('component did mount');
    //place to add any logic that we need after view did load
  }

  componentWillUnmount() {
    console.log('component will unmount');
    //place to add any logic that we need after we exit this component
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
    console.log('some props got updated');
    //place to add any logic that we need if some specific prop has changed the value
  }

  render() {
    return (<h2>Contact Us</h2>);
  }
}

export default ContactUs;