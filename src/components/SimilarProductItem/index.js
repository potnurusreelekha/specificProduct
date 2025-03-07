// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {title, brand, imageUrl, rating, price} = productDetails

  return (
    <li className="similar-product-item">
      <img
        src={imageUrl}
        className="similar-product-image"
        alt={`similar product ${title}`}
      />
      <p className="similar-product-title">{title}</p>
      <p className="similar-product-brand">{brand}</p>
      <div className="similar-product-price-container">
        <p className="similar-product-price">{price}</p>
        <div className="similar-product-rating-container">
          <p className="similar-product-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png "
            alt="star"
            className="similar-product-star"
          />
        </div>
      </div>
    </li>
  )
}
export default SimilarProductItem
