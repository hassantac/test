import React, { Component } from 'react';
import { data } from './data';
import { IDataHOCState } from '../../interfaces';
import { DataContext } from '../../App';

function withData(WrappedComponent: any) {
  return class extends Component {
    // constructor(props: any) {
    //   super(props);
    //   this.state = {
    //     data: []
    //   };
    // }

    // componentDidMount() {
    //   this.setState({ data });
    // }

    render() {
      // const { data } = this.state;
      return (
        <DataContext.Consumer>
          {props => <WrappedComponent data={props} />}
        </DataContext.Consumer>
      );
    }
  };
}
export default withData;
