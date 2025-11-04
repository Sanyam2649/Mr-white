'use client'
import React, { useState } from 'react'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { ChevronDown, ChevronUp } from 'lucide-react'

const ProductPage = () => {
    
    const [showProduct, setShowProduct] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const ProductData = [
        {
            id: 1,
            title: '3-in-1 Portable Travel Water Bottle',
            mrp: 29.99,
            price: 24.99,
            description: 'The Tall-Wingding Lane Portable Hydration bottle is a convenient, pet-themed water bottle designed for dog lovers to stay hydrated on the go.',
            image: 'https://res.cloudinary.com/dhahajyth/image/upload/v1762147048/22bbdc066a8a1664c02267fb38577f0a9bc5b9e3_slhqhw.jpg',
            images: [
                'https://res.cloudinary.com/dhahajyth/image/upload/v1762147048/22bbdc066a8a1664c02267fb38577f0a9bc5b9e3_slhqhw.jpg',
                'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&h=500&fit=crop',
                'https://images.unsplash.com/photo-1544003484-3af55ccbb4e4?w=500&h=500&fit=crop',
                'https://images.unsplash.com/photo-1544003484-3c3e5f6e6c0b?w=500&h=500&fit=crop'
            ],
            colors: ['Black', 'Blue', 'Pink', 'Green'],
            details: [
                'BPA-free material',
                'Leak-proof design',
                '3-in-1 functionality: water bottle, food container, and treat dispenser',
                'Portable and lightweight',
                'Easy to clean'
            ],
            shipping: 'Free shipping on orders over $50. Delivery within 3-5 business days.',
            cleaning: 'Dishwasher safe. Hand wash recommended for longer durability.'
        },
        {
            id: 2,
            title: '3-in-1 Portable Travel Water Bottle',
            mrp: 29.99,
            price: 24.99,
            description: 'The bottle is a convenient, pet-themed water bottle designed for dog lovers to stay hydrated on the go.',
            image: 'https://res.cloudinary.com/dhahajyth/image/upload/v1762147048/22bbdc066a8a1664c02267fb38577f0a9bc5b9e3_slhqhw.jpg',
            images: [
                'https://res.cloudinary.com/dhahajyth/image/upload/v1762147048/22bbdc066a8a1664c02267fb38577f0a9bc5b9e3_slhqhw.jpg',
                'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&h=500&fit=crop'
            ],
            colors: ['Black', 'Red'],
            details: [
                'BPA-free material',
                'Leak-proof design'
            ],
            shipping: 'Standard shipping: $5.99',
            cleaning: 'Hand wash only'
        },
        {
            id: 3,
            title: '3-in-1 Portable Travel Water Bottle',
            mrp: 29.99,
            price: 24.99,
            description: 'The bottle is a convenient, pet-themed water bottle designed for dog lovers to stay hydrated on the go.',
            image: 'https://res.cloudinary.com/dhahajyth/image/upload/v1762147048/22bbdc066a8a1664c02267fb38577f0a9bc5b9e3_slhqhw.jpg',
            images: [
                'https://res.cloudinary.com/dhahajyth/image/upload/v1762147048/22bbdc066a8a1664c02267fb38577f0a9bc5b9e3_slhqhw.jpg'
            ],
            colors: ['Blue', 'Green', 'Yellow'],
            details: [
                '3-in-1 functionality',
                'Portable design'
            ],
            shipping: 'Free shipping',
            cleaning: 'Dishwasher safe'
        },
        {
            id: 4,
            title: '3-in-1 Portable Travel Water Bottle',
            mrp: 29.99,
            price: 24.99,
            description: 'The bottle is a convenient, pet-themed water bottle designed for dog lovers to stay hydrated on the go.',
            image: 'https://res.cloudinary.com/dhahajyth/image/upload/v1762147048/22bbdc066a8a1664c02267fb38577f0a9bc5b9e3_slhqhw.jpg',
            images: [
                'https://res.cloudinary.com/dhahajyth/image/upload/v1762147048/22bbdc066a8a1664c02267fb38577f0a9bc5b9e3_slhqhw.jpg',
                'https://images.unsplash.com/photo-1544003484-3af55ccbb4e4?w=500&h=500&fit=crop'
            ],
            colors: ['Black', 'White'],
            details: [
                'Premium quality',
                'Easy to carry'
            ],
            shipping: 'Express shipping available',
            cleaning: 'Easy to clean'
        },
    ]

    const handleGoToProduct = (product) => {
        setSelectedProduct(product);
        setShowProduct(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleBackToProducts = () => {
        setShowProduct(false);
        setSelectedProduct(null);
    }

    return (
        <div className="overflow-hidden bg-black text-white m-0">
            <Navbar />
            <section className="w-full mx-auto min-h-screen py-8 md:py-16 flex flex-col justify-center items-center gap-8 md:gap-10">
                {!showProduct ? (
                    <>
                        <img
                            src="https://res.cloudinary.com/dhahajyth/image/upload/v1762104527/Small_Hero_er5o3x.png"
                            alt="Hero"
                            className="w-full max-h-[400px] object-cover"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12 py-12 w-full justify-items-center">
                            {ProductData.map((product, index) => (
                                <ProductCard key={index} productData={product} onClick={() => handleGoToProduct(product)} />
                            ))}
                        </div>
                    </>
                ) : (
                    <Product product={selectedProduct} onBack={handleBackToProducts} />
                )}
            </section>
            <Footer />
        </div>
    )
}

export default ProductPage

const ProductCard = ({ productData, onClick }) => {
    const [isAdded, setIsAdded] = useState(false)

    const handleCartToggle = (e) => {
        e.stopPropagation();
        setIsAdded(!isAdded)
        alert(isAdded ? 'Product Removed from the cart' : 'Product Added to cart')
    }

    return (
        <div 
            className="bg-[#FFFFFF1A] text-white rounded-[8px] flex flex-col gap-[16px] w-[320px] sm:w-[280px] md:w-[300px] lg:w-[321px] min-h-[567px] p-[12px] cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={onClick}
        >
            <div
                className="w-full h-[276px] bg-cover bg-center rounded-[8px] flex justify-between items-start px-[12px] pt-[8px] gap-[12px]"
                style={{ backgroundImage: `url(${productData.image})` }}
            >
                <label className="py-[2px] px-[12px] bg-[#D3B86A] rounded-[4px] text-black font-semibold text-sm">
                    Gravity-fed
                </label>
                <label className="py-[2px] px-[12px] bg-[#FFFFFF1A] rounded-[4px] text-white font-medium text-sm">
                    Premium
                </label>
            </div>

            <div className="flex flex-col gap-[20px] flex-1 px-[8px]">
                <div className="flex flex-col gap-[12px]">
                    <p className="font-semibold text-[20px]">{productData.title}</p>
                    <div className="space-x-[8px]">
                        <span className="text-[16px] line-through text-gray-400">
                            ${productData.mrp}
                        </span>
                        <span className="text-[20px] text-[#D3B86A] font-semibold">
                            ${productData.price}
                        </span>
                    </div>
                </div>

                <p className="text-[14px] text-gray-300 leading-[1.4]">
                    {productData.description}
                </p>

                <button
                    onClick={handleCartToggle}
                    className="mt-auto flex justify-center items-center gap-[8px] bg-[#D3B86A] text-black h-[48px] py-[12px] rounded-[8px] font-medium transition-all hover:scale-[1.02]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M1 4.75C1 4.33579 1.33579 4 1.75 4H3.07595C3.78892 4 4.43061 4.43253 4.69811 5.09341L5.06506 6H20.25C20.4968 6 20.7279 6.12146 20.8678 6.32479C21.0078 6.52812 21.0387 6.78729 20.9505 7.01785L18.1921 14.2321C17.7851 15.2968 16.7634 16 15.6235 16H9.3481C8.22772 16 7.21935 15.3203 6.79899 14.2818L3.30769 5.6562C3.26947 5.56179 3.1778 5.5 3.07595 5.5H1.75C1.33579 5.5 1 5.16421 1 4.75Z"
                            fill="black"
                        />
                        <path
                            d="M8.5 17C9.32843 17 10 17.6716 10 18.5C10 19.3284 9.32843 20 8.5 20C7.67157 20 7 19.3284 7 18.5C7 17.6716 7.67157 17 8.5 17Z"
                            fill="black"
                        />
                        <path
                            d="M18 18.5C18 17.6716 17.3284 17 16.5 17C15.6716 17 15 17.6716 15 18.5C15 19.3284 15.6716 20 16.5 20C17.3284 20 18 19.3284 18 18.5Z"
                            fill="black"
                        />
                    </svg>
                    {isAdded ? 'Remove' : 'Add to Cart'}
                </button>
            </div>
        </div>
    )
}

const Product = ({ product, onBack }) => {
    const [isAdded, setIsAdded] = useState(false);
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
       const [showDetails, setShowDetails] = useState(true);
    const [showShipping, setShowShipping] = useState(false);
    const [showCleaning, setShowCleaning] = useState(false);

    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        message: ''
    });
    
    const QuestCard = [
        {
            name: "Sarah Johnson",
            location: "New York, NY",
            rating: 5,
            image: "https://res.cloudinary.com/dhahajyth/image/upload/v1762149362/34029129a1a7c576591443f3b1463a5bddb89a23_e4n8ng.jpg",
            description: "Absolutely amazing experience! Mr White went above and beyond to help us find the perfect companion. Our Royal Frenchel has brought so much joy to our family."
        },
        {
            name: "Michael Chen",
            location: "Los Angeles, CA",
            rating: 4,
            image: "https://res.cloudinary.com/dhahajyth/image/upload/v1762149362/34029129a1a7c576591443f3b1463a5bddb89a23_e4n8ng.jpg",
            description: "Professional service and healthy, happy puppies. The entire process was smooth and Mr White was very knowledgeable about the breed."
        },
        {
            name: "Emily Rodriguez",
            location: "Miami, FL",
            rating: 5,
            image: "https://res.cloudinary.com/dhahajyth/image/upload/v1762149362/34029129a1a7c576591443f3b1463a5bddb89a23_e4n8ng.jpg",
            description: "Our Royal Frenchel is the sweetest dog we've ever owned. Mr White's dedication to the breed shows in the quality and temperament of his dogs."
        },
        {
            name: "David Thompson",
            location: "Chicago, IL",
            rating: 4,
            image: "https://res.cloudinary.com/dhahajyth/image/upload/v1762149362/34029129a1a7c576591443f3b1463a5bddb89a23_e4n8ng.jpg",
            description: "Great communication throughout the adoption process. Our puppy was well-socialized and healthy. Highly recommend Mr White!"
        }
    ];

    const handleCartToggle = () => {
        setIsAdded(!isAdded);
        alert(isAdded ? 'Product Removed from the cart' : 'Product Added to cart');
    }

    const handleRatingClick = (starIndex) => {
        setRating(starIndex + 1);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Review submitted:', {
            ...formData,
            rating
        });
        
        // Reset form
        setFormData({
            name: '',
            location: '',
            message: ''
        });
        setRating(0);
        
        alert('Thank you for your review!');
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => 
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => 
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    }

    const selectImage = (index) => {
        setCurrentImageIndex(index);
    }
    
    const StarRating = ({ rating, onRatingClick, hoverRating, onMouseEnter, onMouseLeave }) => {
        return (
            <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className="cursor-pointer transition-transform hover:scale-110"
                        onClick={() => onRatingClick(index)}
                        onMouseEnter={() => onMouseEnter(index + 1)}
                        onMouseLeave={onMouseLeave}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="23" 
                            viewBox="0 0 28 27" 
                            fill={index < (hoverRating || rating) ? "#D3B86A" : "#FFFFFF1A"}
                            className="transition-colors duration-200 w-6 h-6 md:w-7 md:h-7"
                        >
                            <path d="M27.9035 10.175C27.7783 9.78123 27.5371 9.43446 27.2114 9.18017C26.8857 8.92588 26.4908 8.77594 26.0785 8.75L18.6535 8.2375L15.9035 1.3C15.7533 0.918004 15.4919 0.58988 15.1532 0.358105C14.8144 0.12633 14.4139 0.0015786 14.0035 0V0C13.593 0.0015786 13.1925 0.12633 12.8537 0.358105C12.515 0.58988 12.2536 0.918004 12.1035 1.3L9.30346 8.275L1.92846 8.75C1.51659 8.77762 1.12249 8.92819 0.79713 9.18224C0.471771 9.43629 0.230129 9.78212 0.103463 10.175C-0.0266113 10.5739 -0.0342111 11.0026 0.0816435 11.4059C0.197498 11.8092 0.431495 12.1685 0.753463 12.4375L6.42846 17.2375L4.74096 23.875C4.62421 24.324 4.64522 24.7978 4.80127 25.2347C4.95731 25.6716 5.24117 26.0515 5.61596 26.325C5.97975 26.5861 6.41317 26.7327 6.86076 26.7461C7.30835 26.7594 7.74975 26.6389 8.12846 26.4L13.991 22.6875H14.016L20.3285 26.675C20.6523 26.8854 21.0298 26.9983 21.416 27C21.7313 26.9975 22.0418 26.9228 22.3237 26.7815C22.6056 26.6403 22.8514 26.4362 23.0421 26.1851C23.2329 25.9341 23.3635 25.6426 23.424 25.3331C23.4844 25.0236 23.4731 24.7044 23.391 24.4L21.6035 17.1375L27.2535 12.4375C27.5754 12.1685 27.8094 11.8092 27.9253 11.4059C28.0411 11.0026 28.0335 10.5739 27.9035 10.175Z" />
                        </svg>
                    </button>
                ))}
            </div>
        );
    };
    
    const renderServings = (servings) => {
    return Array(servings).fill(0).map((_, index) => (
        <svg 
            key={index} 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 14 14" 
            fill="none"
            className="inline-block"
        >
            <path d="M13.9517 5.0875C13.8892 4.89061 13.7685 4.71723 13.6057 4.59009C13.4429 4.46294 13.2454 4.38797 13.0392 4.375L9.32673 4.11875L7.95173 0.65C7.87665 0.459002 7.74596 0.29494 7.57659 0.179052C7.40722 0.0631651 7.20695 0.000789302 7.00173 0C6.79651 0.000789302 6.59625 0.0631651 6.42687 0.179052C6.2575 0.29494 6.12681 0.459002 6.05173 0.65L4.65173 4.1375L0.964231 4.375C0.758297 4.38881 0.561245 4.4641 0.398565 4.59112C0.235885 4.71814 0.115064 4.89106 0.0517314 5.0875C-0.0133057 5.28695 -0.0171055 5.50131 0.0408217 5.70294C0.098749 5.90458 0.215747 6.08423 0.376731 6.21875L3.21423 8.61875L2.37048 11.9375C2.3121 12.162 2.32261 12.3989 2.40063 12.6174C2.47866 12.8358 2.62059 13.0258 2.80798 13.1625C2.98988 13.293 3.20659 13.3664 3.43038 13.373C3.65418 13.3797 3.87487 13.3195 4.06423 13.2L6.99548 11.3438H7.00798L10.1642 13.3375C10.3261 13.4427 10.5149 13.4991 10.708 13.5C10.8656 13.4988 11.0209 13.4614 11.1619 13.3908C11.3028 13.3201 11.4257 13.2181 11.5211 13.0926C11.6164 12.967 11.6817 12.8213 11.712 12.6666C11.7422 12.5118 11.7366 12.3522 11.6955 12.2L10.8017 8.56875L13.6267 6.21875C13.7877 6.08423 13.9047 5.90458 13.9626 5.70294C14.0206 5.50131 14.0168 5.28695 13.9517 5.0875Z" fill="#D3B86A" />
        </svg>
    ));
};

    if (!product) {
        return <div className="text-white text-center py-8">Product not found</div>;
    }

    return (
        <div className='gap-8 md:gap-12 lg:gap-16 px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 flex flex-col w-full max-w-7xl mx-auto'>
            {/* Product Details Section */}
            <div className="w-full">
                {/* Back Button */}
                <button 
                    onClick={onBack}
                    className="flex items-center gap-2 text-[#D3B86A] mb-8 hover:underline transition-all"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Return to collection
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                    {/* Product Images Section */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FFFFFF1A]">
                            <img
                                src={product.images[currentImageIndex]}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                            
                            {/* Navigation Arrows */}
                            {product.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnail Images */}
                        {product.images.length > 1 && (
                            <div className="flex gap-3 overflow-x-auto pb-2">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => selectImage(index)}
                                        className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                            currentImageIndex === index 
                                                ? 'border-[#D3B86A]' 
                                                : 'border-transparent hover:border-gray-400'
                                        }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`${product.title} view ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info Section */}
                    <div className="space-y-6 md:space-y-8">
                        {/* Header */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                   <span>{renderServings(product.rating)} {product.ratings}</span>
                            {product.Time !== 'N/A' && (
                                <>
                                    <span>•</span>
                                    <span>{product.Time}</span>
                                </>
                            )}
                            </div>
                            
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                                {product.title}
                            </h1>
                            
                            <div className="flex items-center gap-3">
                                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-[#D3B86A]">
                                    ${product.price}
                                </span>
                                <span className="text-lg md:text-xl line-through text-gray-400">
                                    ${product.mrp}
                                </span>
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                {product.description}
                            </p>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleCartToggle}
                            className="w-full bg-[#D3B86A] text-black font-semibold py-3 md:py-4 px-6 rounded-lg hover:bg-[#c4a95d] transition-all flex items-center justify-center gap-3 text-sm md:text-base"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M1 4.75C1 4.33579 1.33579 4 1.75 4H3.07595C3.78892 4 4.43061 4.43253 4.69811 5.09341L5.06506 6H20.25C20.4968 6 20.7279 6.12146 20.8678 6.32479C21.0078 6.52812 21.0387 6.78729 20.9505 7.01785L18.1921 14.2321C17.7851 15.2968 16.7634 16 15.6235 16H9.3481C8.22772 16 7.21935 15.3203 6.79899 14.2818L3.30769 5.6562C3.26947 5.56179 3.1778 5.5 3.07595 5.5H1.75C1.33579 5.5 1 5.16421 1 4.75Z"
                                    fill="black"
                                />
                                <path
                                    d="M8.5 17C9.32843 17 10 17.6716 10 18.5C10 19.3284 9.32843 20 8.5 20C7.67157 20 7 19.3284 7 18.5C7 17.6716 7.67157 17 8.5 17Z"
                                    fill="black"
                                />
                                <path
                                    d="M18 18.5C18 17.6716 17.3284 17 16.5 17C15.6716 17 15 17.6716 15 18.5C15 19.3284 15.6716 20 16.5 20C17.3284 20 18 19.3284 18 18.5Z"
                                    fill="black"
                                />
                            </svg>
                            {isAdded ? 'Remove from Cart' : 'Add to Cart'}
                        </button>

                        {/* Color Selection */}
                       {/* Color Selection */}
{product.colors && product.colors.length > 0 && (
  <div className="space-y-3 md:space-y-4">
    <h3 className="text-lg font-semibold text-white">Color</h3>
    <div className="flex gap-2 md:gap-3 flex-wrap">
      {product.colors.map((color, index) => (
        <button
          key={index}
          onClick={() => setSelectedColor(color)}
          className={`w-[64px] h-[64px] rounded-[4px] border rounded-[4px] transition-all  flex items-center justify-center ${
            selectedColor === color
              ? 'border-[#D3B86A] scale-105'
              : 'border-[#3A3A3A] hover:border-[#D3B86A]'
          }`}
        >
          <div
            className="w-full h-full rounded-[4px]"
            style={{ backgroundColor: color }}
          ></div>
        </button>
      ))}
    </div>
  </div>
)}


                        {/* Details Section */}
                          <div className="space-y-4 border-t border-gray-700 pt-6">
                        {/* Details Accordion */}
                        <div className="border-b border-gray-700 pb-4">
                            <button
                                onClick={() => setShowDetails(!showDetails)}
                                className="flex justify-between items-center w-full text-left"
                            >
                                <h3 className="text-lg font-semibold text-white">Details</h3>
                                {showDetails ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            {showDetails && (
                                <ul className="space-y-2 mt-3">
                                    {product.details.map((detail, index) => (
                                        <li key={index} className="text-gray-300 flex items-start gap-2">
                                            <span className="text-[#D3B86A] mt-1">•</span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Shipping Accordion */}
                        <div className="border-b border-gray-700 pb-4">
                            <button
                                onClick={() => setShowShipping(!showShipping)}
                                className="flex justify-between items-center w-full text-left"
                            >
                                <h3 className="text-lg font-semibold text-white">Shipping</h3>
                                {showShipping ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            {showShipping && (
                                <p className="text-gray-300 mt-3">{product.shipping}</p>
                            )}
                        </div>

                        {/* Cleaning Accordion */}
                        <div className="border-b border-gray-700 pb-4">
                            <button
                                onClick={() => setShowCleaning(!showCleaning)}
                                className="flex justify-between items-center w-full text-left"
                            >
                                <h3 className="text-lg font-semibold text-white">Cleaning</h3>
                                {showCleaning ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            {showCleaning && (
                                <p className="text-gray-300 mt-3">{product.cleaning}</p>
                            )}
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className='w-full flex flex-col gap-6 md:gap-8'>
                <h1 className='text-2xl md:text-3xl font-semibold text-center md:text-left'>Word on the Streets</h1>
                
                {/* Review Form */}
                <div className='w-full p-4 md:p-6 lg:p-8 gap-4 md:gap-6 flex flex-col bg-[#FFFFFF1A] rounded-lg border border-[#FFFFFF1A]'>
                    <h1 className='font-semibold text-xl md:text-2xl text-center'>Leave a review</h1>
                    
                    {/* Star Rating */}
                    <div className="flex flex-col gap-2 items-center">
                        <StarRating 
                            rating={rating}
                            onRatingClick={handleRatingClick}
                            hoverRating={hoverRating}
                            onMouseEnter={setHoverRating}
                            onMouseLeave={() => setHoverRating(0)}
                        />
                        <p className="text-xs md:text-sm text-gray-400 text-center">
                            {rating > 0 ? `You rated: ${rating} star${rating > 1 ? 's' : ''}` : 'Your rating here'}
                        </p>
                    </div>

                    {/* Form Inputs */}
                    <div className="flex flex-col gap-3 md:gap-4">
                        <input 
                            type="text" 
                            name="name"
                            placeholder='Name' 
                            value={formData.name}
                            onChange={handleInputChange}
                            className='bg-[#101010] p-3 rounded text-sm md:text-base w-full border border-[#FFFFFF1A] focus:border-[#D3B86A] focus:outline-none transition-colors text-white placeholder-gray-400'
                        />
                        <input 
                            type="text" 
                            name="location"
                            placeholder='Location' 
                            value={formData.location}
                            onChange={handleInputChange}
                            className='bg-[#101010] p-3 rounded text-sm md:text-base w-full border border-[#FFFFFF1A] focus:border-[#D3B86A] focus:outline-none transition-colors text-white placeholder-gray-400'
                        />
                        <textarea 
                            name="message"
                            placeholder='Your message here' 
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            className='bg-[#101010] p-3 rounded text-sm md:text-base w-full border border-[#FFFFFF1A] focus:border-[#D3B86A] focus:outline-none transition-colors resize-none text-white placeholder-gray-400'
                        />
                    </div>

                    {/* Submit Button */}
                    <button 
                        className="whitespace-nowrap disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-[#D3B86A] text-primary-foreground shadow-xs rounded-sm cursor-pointer transition-all duration-300 active:scale-98 px-4 py-3 flex items-center justify-center gap-2 w-full hover:bg-[#D3B86A]/80 font-medium font-work-sans text-black mt-2 md:mt-4 disabled:cursor-not-allowed text-sm md:text-base"
                        onClick={handleSubmit}
                        disabled={!formData.name || !formData.message || rating === 0}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            className="text-black"
                        >
                            <path d="M21.5 2.5L2.5 10.5L10.5 13.5L13.5 21.5L21.5 2.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Leave Review
                    </button>
                </div>

                {/* Existing Reviews */}
                <div className="space-y-4 md:space-y-6">
                    {QuestCard.map((data, index) => (
                        <ReviewCard key={index} data={data} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const ReviewCard = ({ data }) => {
    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 28 27"
                fill={index < rating ? "#D3B86A" : "#FFFFFF1A"}
                className="transition-colors duration-200 w-4 h-4 md:w-5 md:h-5"
            >
                <path d="M27.9035 10.175C27.7783 9.78123 27.5371 9.43446 27.2114 9.18017C26.8857 8.92588 26.4908 8.77594 26.0785 8.75L18.6535 8.2375L15.9035 1.3C15.7533 0.918004 15.4919 0.58988 15.1532 0.358105C14.8144 0.12633 14.4139 0.0015786 14.0035 0V0C13.593 0.0015786 13.1925 0.12633 12.8537 0.358105C12.515 0.58988 12.2536 0.918004 12.1035 1.3L9.30346 8.275L1.92846 8.75C1.51659 8.77762 1.12249 8.92819 0.79713 9.18224C0.471771 9.43629 0.230129 9.78212 0.103463 10.175C-0.0266113 10.5739 -0.0342111 11.0026 0.0816435 11.4059C0.197498 11.8092 0.431495 12.1685 0.753463 12.4375L6.42846 17.2375L4.74096 23.875C4.62421 24.324 4.64522 24.7978 4.80127 25.2347C4.95731 25.6716 5.24117 26.0515 5.61596 26.325C5.97975 26.5861 6.41317 26.7327 6.86076 26.7461C7.30835 26.7594 7.74975 26.6389 8.12846 26.4L13.991 22.6875H14.016L20.3285 26.675C20.6523 26.8854 21.0298 26.9983 21.416 27C21.7313 26.9975 22.0418 26.9228 22.3237 26.7815C22.6056 26.6403 22.8514 26.4362 23.0421 26.1851C23.2329 25.9341 23.3635 25.6426 23.424 25.3331C23.4844 25.0236 23.4731 24.7044 23.391 24.4L21.6035 17.1375L27.2535 12.4375C27.5754 12.1685 27.8094 11.8092 27.9253 11.4059C28.0411 11.0026 28.0335 10.5739 27.9035 10.175Z" />
            </svg>
        ));
    };

    return (
        <div className='w-full rounded-lg p-4 md:p-6 gap-3 md:gap-4 flex flex-col bg-[#FFFFFF1A]'>
            <div className='flex flex-row gap-3 md:gap-4 pb-3 md:pb-4 border-b border-white/20'>
                <img 
                    src={data.image} 
                    alt={data.name}
                    className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg object-cover flex-shrink-0' 
                />
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                        <p className="text-base md:text-lg font-medium text-white">{data.name}</p>
                        <div className="flex gap-1">
                            {renderStars(data.rating)}
                        </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-300">
                        {data.location}
                    </p>
                </div>
            </div>
            <div className='w-full'>
                <p className='text-sm md:text-base text-gray-200 leading-relaxed'>
                    {data.description}
                </p>
            </div>
        </div>
    );
};