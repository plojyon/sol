import React from 'react';
import _ from 'lodash';

class Atmosphere extends React.Component {
    /// Circle that can be rotated with the mouse.

    constructor(props) {
        super(props);
        this.state = {
            rotating: false,
            angle: 0,
        };
        this.radius = 600;
        this.ref = React.createRef();
        this.handleRotate = _.throttle(this.handleRotate.bind(this), 200);
    }

    consume = (e) => {
        e.stopPropagation();
        e.preventDefault();
        e.cancelBubble = true;
        e.returnValue = false;
    }

    handleMouseDown = (e) => {
        this.consume(e);
        this.setState({ rotating: true });
    }

    handleMouseUp = (e) => {
        this.consume(e);
        this.setState({ rotating: false });
    }

    handleRotate = (e) => {
        this.consume(e);
        if (!this.state.rotating) {
            return;
        }

        const bounds = (this.ref ? this.ref.current.getBoundingClientRect() : { left: 0, top: 0 });
        const centerX = bounds.left + this.radius;
        const centerY = bounds.top + this.radius;
        const mouseX = e.pageX - (document.documentElement.scrollLeft || document.body.scrollLeft);
        const mouseY = e.pageY - (document.documentElement.scrollTop || document.body.scrollTop);
        const angleRad = Math.atan2(mouseY - centerY, mouseX - centerX); //Math.atan2(mouseX - centerX, -(mouseY - centerY));
        const angleDeg_ = angleRad * (180.0 / Math.PI);
        const angleDeg = angleDeg_ < 0 ? 360 + angleDeg_ : angleDeg_;

        console.log(mouseX, mouseY, angleDeg);

        this.setState({ angle: angleDeg });
    }

    render() {
        return (
            <div className="atmosphere">
                <div
                    className="spinny__circle"
                    style={{
                        rotate: `${this.state.angle}deg`,
                        borderRadius: `100%`,
                        width: `${this.radius * 2}px`,
                        height: `${this.radius * 2}px`,
                        backgroundImage: 'url("https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg")',
                        backgroundSize: `${this.radius * 2}px ${this.radius * 2}px`,
                    }}
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                    onMouseMove={this.handleRotate}
                    ref={this.ref}
                ></div>
            </div>
        );
    }
}

export default Atmosphere;