import React, { PureComponent } from 'react';

export default getComponent => class AsyncComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Component: AsyncComponent.Component,
    };
  }

  componentWillMount() {
    if (!this.state.Component) {
      getComponent().then(Component => {
        AsyncComponent.Component = Component;
        this.setState({ Component });
      });
    }
  }
  render() {
    const { Component } = this.state;
    if (Component) {
      return <Component {...this.props} />;
    }
    return null;
  }
};
