

const Nav = ({ handleHomeClick, handleServicesClick, handleProductsClick, handleAboutClick }) => {
    return (
        <div className="navbar col-s-12">
            <h3
                onClick={handleHomeClick}
                style={{ cursor: 'pointer' }}
            >YOUR LOGO HERE</h3>

            <div className="navMenu">
                <p onClick={handleHomeClick}>Home</p>
                <p onClick={handleServicesClick}>Services</p>
                <p onClick={handleProductsClick}>Products</p>
                <p onClick={handleAboutClick}>About</p>
            </div>
        </div>
    )
}

export default Nav;