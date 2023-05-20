// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardList} = props
  const {headerText, description, className} = bannerCardList
  return (
    <li className={`banner-cards ${className}`}>
      <div className="content-card">
        <h1 className="header-text">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
