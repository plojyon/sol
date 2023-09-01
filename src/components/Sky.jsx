import React from 'react';

class Sky extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rotation: props.rotation || 0,
        };
    }

    render() {
        return (
            <div className="sky">
                <div
                    className="gradient__descent"
                    style={{
                        background: `linear-gradient(${this.state.rotation}deg, #0000aa 0%, #00eeff 100%)`,
                        width: `100vw`,
                        height: `100vh`,
                        zIndex: `-1`,
                        position: `absolute`,
                        top: `0`,
                        left: `0`,
                    }}
                ></div>
            </div>
        );
    }
}

export default Sky;
