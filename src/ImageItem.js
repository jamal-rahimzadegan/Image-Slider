export default function ImageItem(props) {  
const {imgSrc} = props
    return (
     <ImageBackground  source={{uri:imgSrc}}>
     </ImageBackground>
    )
}
