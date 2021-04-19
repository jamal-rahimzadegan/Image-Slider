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
