import "../styles/HeroSection.css"


function HeroSection(){
    return(
        <header>
            <div>
                <h4>Little Lemon </h4>
                <h5>Chicago</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maiores voluptate omnis iste dignissimos asperiores eveniet ex enim. Accusamus esse placeat provident odio dolor obcaecati iste praesentium nemo quidem reiciendis.</h6>
                <button>Reserve a Table</button>
            </div>
            <div>
                <img src={require("../Assets/restauranfood.jpg")}></img>
            </div>
        </header>
    )
}
export default HeroSection;