improt SliderBullet from './SliderBullet';

export default function Slider(props) {
  const [photos, setPhotos] = useState([]);

    const handleSliderBullet=(e)=> {
        let sliderImgOffset = Math.round((e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width))
        if (activeImg != sliderImgOffset) setActiveImg(sliderImgOffset)
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



