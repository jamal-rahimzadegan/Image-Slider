# Image-Slider
Pure Javascript image slider for react native

- `ImageItem` &mdash; Wrapper component for img
```js
export default function ImageItem(props) {   
    return (
        <TouchableOpacity disabled={isLoading} activeOpacity={1}>
            <ImageBackground onLoadEnd={() => setLoading(false)} source={{uri: linkOfImg}}>
            </ImageBackground>
        </TouchableOpacity>
    )
}

```

- `SliderBullets` &mdash; Component for showing the bullets under the slider
```js
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
```

- `Slider` &mdash; Main component of the slider
```js
export default function Slider(props) {
  const [photos, setPhotos] = useState([]);

   const handleSliderBullet=(e)=> {
        let sliderImgOffset = Math.round((e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width))
        if (this.state.activeImg != sliderImgOffset) {
            this.setState({activeImg: sliderImgOffset}, () => null)
        }
    }

    return (
        <View>
        <FlatList
             inverted horizontal pagingEnabled
             keyExtractor={(item) => item.id}
             onScroll={handleSliderBullet.bind(this)}
             showsHorizontalScrollIndicator={false}
             data={photos}
             renderItem={(item) => (<ImageItem item={item} />)}
      />
      <SliderBullets activeImg={activeImgId}  photos={photos}/>
    </View>
    )
}
```
