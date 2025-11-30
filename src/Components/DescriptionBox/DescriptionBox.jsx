import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    This stylish and comfortable women’s crop top is crafted from premium
                    fabric that feels soft, breathable, and gentle on the skin. Its trendy
                    modern fit makes it perfect for casual outings, college wear, and daily
                    styling. The vibrant color and durable stitching ensure long-lasting
                    comfort and style, even after multiple washes.
                </p>

                <p>
                    This crop top pairs effortlessly with jeans, skirts, joggers, or shorts,
                    giving you the freedom to create multiple fashionable looks. Designed to
                    offer both style and functionality, it keeps you fresh and confident
                    throughout the day. A must-have wardrobe essential for all fashion lovers!
                </p>
            </div>


        </div>
    )
}

export default DescriptionBox
