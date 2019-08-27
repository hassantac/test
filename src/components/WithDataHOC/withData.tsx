import React, { Component } from 'react';
import { data } from './data';
import { IDataHOCState } from '../../interfaces';

function withData(WrappedComponent: any) {
  return class extends Component<{}, IDataHOCState> {
    constructor(props: any) {
      super(props);
      this.state = {
        data: []
      };
    }

    componentDidMount() {
      this.setState({ data });
    }
    render() {
      const { data } = this.state;
      return <WrappedComponent data={data} {...this.props} />;
    }
  };
}
export default withData;
