import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setThumbnailId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const thumbnailClassName = isActive ? 'img-thumbnail active' : 'img-thumbnail'

  const onClickThumbnail = () => {
    setThumbnailId(id)
  }

  return (
    <li className="list-images">
      <button className="btn" type="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          className={thumbnailClassName}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
