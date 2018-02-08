import React from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
    ImageBackground,
} from 'react-native';
import { Rating } from 'react-native-elements';

class HotelCard extends React.PureComponent {

    onHotel = () => {
        this.props.navigation.navigate('HotelDetailScreen', { hotel: this.props.hotel } );
    }

    render() {
        return(
            <TouchableWithoutFeedback onPress={() => this.onHotel()}>
                <View style={styles.containerStyle} >
                    <ImageBackground
                        backgroundColor= '#ccc'
                        resizeMode='cover'
                        source={{uri: this.props.hotel.imageUrl}}
                        style={styles.imageStyle} />
                    <View style={{ flexDirection: 'row', padding: 10, height: 70 }}>
                        <View style={styles.columOneStyle}>
                            <Text style={styles.titleStyle}>
                                {this.props.hotel.name}
                            </Text>
                            <Rating
                                onFinishRating={this.ratingCompleted}
                                imageSize={20}
                                readonly={true}
                                startingValue={this.props.hotel.rating}
                                style={{ paddingVertical: 10, height: 50, width: 100 }}
                            />
                        </View>
                        <View style={styles.columTwoStyle}>
                            <Text style={styles.labelStyle}>
                                Precio por noche
                            </Text>
                            <Text style={styles.priceStyle}>
                                {`${this.props.hotel.currency} ${this.props.hotel.price}`}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    containerStyle: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        margin: 7
    },
    columOneStyle: {
        flex: 3,
        flexDirection: 'column'
    },
    columTwoStyle: {
        flex: 2,
        flexDirection: 'column'
    },
    imageStyle: {
        height: 140,
        flex: 1,
        backgroundColor: '#ccc',
        overflow: 'hidden',
        alignSelf: 'stretch'
    },
    footerStyle: {
        padding: 10
    },
    labelStyle: {
        fontSize: 15,
        color: '#ccc',
        alignSelf: 'flex-end'
    },
    priceStyle: {
        fontSize: 15,
        color: '#e1b110',
        paddingVertical: 10,
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    },
    titleStyle:{
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
    }
}

export default HotelCard;