import React, { Component } from 'react';

import { connect } from "react-redux";
import {
    FlatList,
    View,
    Keyboard,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import { SearchBar } from 'react-native-elements';

import HotelCard from './HotelCard';
import {
    getAllHotels,
    refreshHotelList,
    searchHotel
} from '../../containers/Hotel/actions';

import {
    filteredItems,
} from '../../containers/Hotel/selectors';

XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;

class AppScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Lista de Hoteles',
        headerTitleStyle : {
            textAlign: 'left',
            alignSelf:'center',
            color: 'black',
            fontWeight: 'bold'
        },
        headerStyle:{
            backgroundColor:'white',
        },
    });

    componentWillMount(){
        this.props.dispatchGetAllHotels();
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount () {
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidHide () {}

    handleRefreshing(){
        this.props.dispatchResfreshHotelList();
    }

    searchHotel(searchText) {
        this.props.dispatchSearch(searchText);

        if(searchText.trim().length === 0)
            Keyboard.dismiss();
    }

    clearSearchBar() {
        this.props.dispatchSearch('')
        Keyboard.dismiss();
    }

    render() {
        return(
            this.props.loading ?
                <View style={styles.containerStyle}>
                    <ActivityIndicator
                        size="large"
                        color='#e1b110'
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    />
                </View>
             :
                <View style={{flex: 1}}>
                    <SearchBar
                        lightTheme
                        clearIcon
                        onChangeText={(text) => this.searchHotel(text)}
                        onClearText={() => this.clearSearchBar()}
                        inputStyle={{ backgroundColor: 'white' }}
                        containerStyle={{ backgroundColor: 'white' }}
                        icon={{ type: 'font-awesome', name: 'search', color: '#e1b110' }}
                        placeholder='Buscar tu hotel' />
                    <FlatList
                        renderItem={({item}) => (
                        <HotelCard
                            key={`${item.id}`}
                            navigation = { this.props.navigation }
                            hotel = { item }/>
                        )}
                        data={this.props.data}
                        keyExtractor={item => item._id}
                        refreshControl= {
                            <RefreshControl
                                refreshing={this.props.refreshing}
                                onRefresh={() => this.handleRefreshing()}
                                title="Pull to refresh"
                                tintColor="#fff"
                                titleColor="#fff"
                            />
                        }
                    />
                </View>
        )
    }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
}

const mapStateToProps = (state) => {
    const { loading, refreshing, error, searchText } = state.hotel;
    const data = filteredItems(state, searchText);
    return { loading, refreshing, data, error }
}

const mapDispatchToProps = ({
    dispatchGetAllHotels: () => getAllHotels(),
    dispatchResfreshHotelList: () => refreshHotelList(),
    dispatchSearch: (searchText) => searchHotel(searchText),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppScreen);
