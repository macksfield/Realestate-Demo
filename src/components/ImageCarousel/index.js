import React, {Component} from 'react'
import './styles.scss'

class ImageCarousel extends Component {
    constructor() {
        super();
        this.state = {
            selectedImage: 0
        }
    }

    increment = () => {
        this.setState(prevState => ({
            selectedImage: prevState.selectedImage + 1
        }));
    }
    decrement = () => {
        this.setState(prevState => ({
            selectedImage: prevState.selectedImage - 1
        }));
    }

    render() {
        const {images} = this.props;

        return (
            <div>
                <div className="buttonsContainer">
                    <button onClick={this.decrement} disabled={this.state.selectedImage <= 0}>Back</button>
                    <button onClick={this.increment} disabled={this.state.selectedImage >= images.length - 1}>Next
                    </button>
                </div>

                <div className="image-carousel fill">
                    {images.map((image, index) => {
                            return (
                                //{/*<figure className={"slide " + (this.state.selectedImage === index ? 'show' : 'hidden')}*/}
                                //{/*style={{backgroundImage: "url(" + image.url + ")"}} key={index} alt={"House photo "+index}/>*/}
                                <img className={"slide " + (this.state.selectedImage === index ? 'show' : 'hidden')}
                                     src={image.url} key={index} alt={"House photo " + index}/>
                            )
                        }
                    )}
                </div>
            </div>
        );
    }

}


export default ImageCarousel