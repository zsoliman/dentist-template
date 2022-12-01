const Menu = ({ handleHomeClick, homeRef, handleServicesClick, handleProductsClick, handleAboutClick }) => {
    return (
        <div ref={homeRef} className="menu">
            <p onClick={handleHomeClick}>Home</p>
            <p onClick={handleServicesClick}>Services</p>
            <p onClick={handleProductsClick}>Products</p>
            <p onClick={handleAboutClick}>About</p>
        </div>
    )
}

export default Menu;