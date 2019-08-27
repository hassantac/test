import React, { Component } from 'react';
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
          {data => <WrappedComponent data={data} />}
        </DataContext.Consumer>
      );
    }
  };
}
export default withData;
