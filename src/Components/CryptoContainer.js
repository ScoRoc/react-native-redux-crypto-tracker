import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import FetchCoinData from '../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {

  componentDidMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;
    console.log(crypto);
  }

  render() {
    const { crypto } = this.props;
    return (
      <View>
        {this.renderCoinCards()}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.cyrpto
  }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)
