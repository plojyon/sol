import React from 'react';

class Earth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: props.x || 0,
            y: props.y || 0,
            radius: props.radius || 100,
        };
        this.colour = "#56b906";
    }
    render() {
        const top = this.state.y - this.state.radius;
        const left = this.state.x - this.state.radius;
        return (
            <div className="earth">
                <div
                    className="balkica"
                    style={{
                        borderRadius: '100%',
                        width: `${this.state.radius * 2}px`,
                        height: `${this.state.radius * 2}px`,
                        background: this.colour,
                        position: 'absolute',
                        top: `${top}px`,
                        left: `${left}px`,
                        zIndex: '1',
                        boxShadow: `inset 0 0 10px rgba(0,0,0,0.15), ${this.colour} 0px 0px 10px`,
                    }}
                ></div>
            </div>
        );
    }
}

export default Earth;
