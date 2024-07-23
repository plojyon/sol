import React from 'react';

const Hud = () => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = currentDate.toLocaleDateString('en-US', options);

    const handleCalendarClick = () => {
        alert("This is a calendar picker (pretend)");
    };

    return (
        <div className="hud">
            <a className="calendar" onClick={handleCalendarClick} style={{ cursor: "pointer" }}>
                <div className="date">{dateString}</div>
                <div>Afternoon <span className="phaseDuration">(12:03 - 15:33)</span></div>
            </a >
            <div className="solstice-equinox" >
                <div>29 days since Winter Solstice</div>
                <div>59 days until Spring Equinox</div>
            </div >
            <div className="sunrise-sunset" >
                <div>Sunrise: 9:19</div>
                <div>Sunset: 19:18</div>
            </div >
            <div className="elevation-azimuth" >
                <div>Elevation: 12.6&deg;</div>
                <div>Azimuth: 232.0&deg; SW</div>
            </div >
            <style>
                {`
                .hud {
                    position: fixed;
                    width: 100vw;
                    height: 100vh;
                    top: 0;
                    left: 0;
                    color: white;
                    font-weight: bold;
                    font-family: helvetica;
                    pointer-events: none;
                }
                .date {
                    font-size: 1.4em;
                }
                .phaseDuration {
                    font-size: 0.8em;
                }
                .calendar, .solstice-equinox, .sunrise-sunset, .elevation-azimuth {
                    position: fixed;
                    padding: 0.5em 1em;
                    background: rgba(0, 0, 0, 0.5);
                    pointer-events: auto;
                }
                .calendar, .sunrise-sunset {
                    top: 0;
                }
                .solstice-equinox, .elevation-azimuth {
                    bottom: 0;
                }
                .calendar, .solstice-equinox {
                    left: 0;
                    padding-right: 4em;
                    background: linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
                }
                .sunrise-sunset, .elevation-azimuth {
                    right: 0;
                    padding-left: 4em;
                    text-align: right;
                    background: linear-gradient(270deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
                }
                `}
            </style>
        </div >
    );
}

export default Hud;
