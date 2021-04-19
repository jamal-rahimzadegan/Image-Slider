# Image-Slider
Pure Javascript image slider for react native

- `ImageItem` &mdash; Wrapper component for img
```js
export default function ImageItem(props) {  
const {imgSrc} = props
    return (
     <ImageBackground  source={{uri:imgSrc}}>
     </ImageBackground>
    )
}

```

- `SliderBullets` &mdash; Component for showing the bullets under the slider
```js
export default function SliderBullets(props) {
  const { activeImg, photos } = props;

  const styles = {
    bulletContainer: {},
    bulletStyle: {
      elevation: 1,
      height: 8,
      width: 8,
      borderRadius: 2.7,
      margin: 5,
    },
  };

  return (
    <View style={styles.bulletContainer}>
      {photos.length > 1
        ? photos.map((item, index) => (
            <View
              style={[
                styles.bulletStyle, {
                  backgroundColor:
                    activeImg == index ? "red" : "rgba(220,220,220,.8)",
                },
              ]}
            />
          ))
        : null}
    </View>
  );
}
© 2021 GitHub, Inc.
```

- `Slider` &mdash; Main component of the slider
```js
import SliderBullet from './SliderBullet';

export default function Slider() {
  const [photos, setPhotos] = useState([]);
  const [activeImg, setActiveImg] = useState(0);

  const handleSliderBullet = (e) => {
    const { contentOffset, layoutMeasurement } = e.nativeEvent;
    let sliderImgOffset = Math.round(contentOffset.x / layoutMeasurement.width);
    if (activeImg !== sliderImgOffset) setActiveImg(sliderImgOffset);
  };

  return (
    <>
      <FlatList
        inverted
        horizontal
        pagingEnabled
        keyExtractor={(item) => item.id}
        onScroll={handleSliderBullet}
        showsHorizontalScrollIndicator={false}
        data={photos}
        renderItem={(item) => <ImageItem item={item} />}
      />
      <SliderBullets activeImg={"pass id of active img"} photos={photos} />
    </>
  );
```
