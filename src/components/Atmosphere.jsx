import React from 'react';

class Atmosphere extends React.Component {
    /// Circle that can be rotated with the mouse.

    constructor(props) {
        super(props);
        this.state = {
            rotating: false,
            angle: 0,
            angleOffset: props.angle || 0,
            x: props.x || 0,
            y: props.y || 0,
            radius: props.radius || 300,
        };
        this.colours = {
            "day": "#00c1f7",
            "night": "#0c2b46",
            "astronomical": "#1e5785",
            "nautical": "#3285ce",
            "civil": "#915b6f",
            "golden": "#d9ca1c",
        }
        this.phases = {
            "Afternoon": "day",
            "Golden hour PM": "golden",
            "Civil dusk": "civil",
            "Nautical dusk": "nautical",
            "Astronomical dusk": "astronomical",
            "Full darkness PM": "night",
            "Full darkness AM": "night",
            "Astronomical dawn": "astronomical",
            "Nautical dawn": "nautical",
            "Civil dawn": "civil",
            "Golden hour AM": "golden",
            "Morning": "day",
        }
        this.ref = React.createRef();
    }

    componentDidMount = () => {
        document.addEventListener('mouseup', this.handleMouseUp);
        document.addEventListener('mousemove', this.handleRotate);
    }

    componentWillUnmount = () => {
        document.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('mousemove', this.handleRotate);
    }

    consume = (e) => {
        e.stopPropagation();
        e.preventDefault();
        e.cancelBubble = true;
        e.returnValue = false;
    }

    handleMouseDown = (e) => {
        this.consume(e);
        this.setState({
            rotating: true,
            angleOffset: this.state.angle - this.getMouseAngle(e)
        });
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

        this.setState({ angle: this.getMouseAngle(e) + this.state.angleOffset });
    }

    getMouseAngle = (e) => {
        const bounds = (this.ref ? this.ref.current.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 });
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        const mouseX = e.pageX - (document.documentElement.scrollLeft || document.body.scrollLeft);
        const mouseY = e.pageY - (document.documentElement.scrollTop || document.body.scrollTop);
        const angleRad = Math.atan2(centerY - mouseY, mouseX - centerX); //Math.atan2(mouseX - centerX, -(mouseY - centerY));
        const angleDeg_ = 90 - angleRad * (180.0 / Math.PI);
        const angleDeg = angleDeg_ < 0 ? 360 + angleDeg_ : angleDeg_;

        return angleDeg;
    }

    getPhases = () => {
        let angle = 0;
        let phases = [];
        for (let phase in this.phases) {
            let colour = this.colours[this.phases[phase]];
            let phaseAngle = 20; // TODO:
            phases.push(`${colour} ${angle}deg ${angle + phaseAngle}deg`);
            angle += phaseAngle;
        }
        return phases;
    }

    render() {
        const top = this.state.y - this.state.radius;
        const left = this.state.x - this.state.radius;

        const gradient = `conic-gradient(${this.getPhases().join(', ')})`;
        console.log(gradient);
        return (
            <div className="atmosphere">
                <div
                    className="spinny__circle"
                    style={{
                        rotate: `${this.state.angle}deg`,
                        borderRadius: `100%`,

                        width: `${this.state.radius * 2}px`,
                        height: `${this.state.radius * 2}px`,
                        position: `absolute`,
                        top: `${top}px`,
                        left: `${left}px`,

                        backgroundImage: gradient,
                        backgroundSize: `${this.state.radius * 2}px ${this.state.radius * 2}px`,
                        backgroundPosition: `center center`,
                    }}
                    onMouseDown={this.handleMouseDown}
                    ref={this.ref}
                ></div>
            </div>
        );
    }
}

export default Atmosphere;
