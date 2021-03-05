import {View, Text} from "react-native";

export default function SliderBullets(props) {
    const {activeImg , photos} = props
    
    return (
        <View style={styles.SliderBulletContainer}>
            {
                photos.length > 1 ?
                    photos.map((item, index) => {
                        return (
                            <View style={{
                                elevation:1,
                                backgroundColor: activeImg == index ? 'red' : 'rgba(220,220,220,.8)',
                                height:8,
                                width:8,
                                borderRadius:2.7,
                                margin: 5,
                            }}/>
                        )
                    }) : null
            }
        </View>
    )
}
