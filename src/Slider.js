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
}
