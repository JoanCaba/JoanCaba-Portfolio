
const ImageText = ({ image, imageAlt, text }) => {
  return (
    <><img src={image} alt={imageAlt}></img><span>{text}</span></>
  )
}

export default ImageText