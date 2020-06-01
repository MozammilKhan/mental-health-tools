import React, {useContext} from 'react';
import axios from 'axios';

import '../assets/activity_tracker.css'
import {SessionContext} from '../session'

function Activitytracker() {
    const [time, checkTime] = React.useState("");
    const [earlyMorning, setEarlyMorning] = React.useState("");
    const [lateMorning, setLateMorning] = React.useState("");
    const [earlyAfternoon, setEarlyAfternoon] = React.useState("");
    const [lateAfternoon, setLateAfternoon] = React.useState("");
    const [evening, setEvening] = React.useState("");
    const [night, setNight] = React.useState("");

    const session = useContext(SessionContext);
    const curDate = new Date().toJSON().slice(0, 10);

    function handleEarlyMorning(e) {
        setEarlyMorning(e.target.value);
    }

    function handleLateMorning(e) {
        setLateMorning(e.target.value);
    }

    function handleEarlyAfternoon(e) {
        setEarlyAfternoon(e.target.value);
    }

    function handleLateAfternoon(e) {
        setLateAfternoon(e.target.value);
    }

    function handleEvening(e) {
        setEvening(e.target.value);
    }

    function handleNight(e) {
        setNight(e.target.value);
    }

    React.useEffect(() => {
        // Make a request for a user with a given ID
        axios.get(`/activitytracker/loadday/${curDate}`)
            .then(function (response) {
                // handle success
                checkTime(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }, []);

    const dataHandler = async () => {
        axios.post(`/activitytracker/handledata/${curDate}`, {
            early_morning: earlyMorning,
            late_morning: lateMorning,
            early_afternoon: earlyAfternoon,
            late_afternoon: lateAfternoon,
            evening: evening,
            night: night
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    if (time !== "None") {
        return (
            <div>
                <p className="activity-title">Today’s Plan</p>
                <div className="activity-container">
                    <div className="item">
                        <p>Early Morning (Wakeup to 10 A.M.)</p>
                        <p className="textarea">{earlyMorning}</p>
                    </div>
                    <div className="item">
                        <p>Late Morning (10 A.M.- noon)</p>
                        <p className="textarea">{lateMorning}</p>
                    </div>
                    <div className="item">
                        <p>Early Afternoon (Noon -3 p.m)</p>
                        <p className="textarea">{earlyAfternoon}</p>
                    </div>
                    <div className="item">
                        <p>Late Afternoon (3-5 P.M.)</p>
                        <p className="textarea">{lateAfternoon}</p>
                    </div>
                    <div className="item">
                        <p>Evening (5-8 P.M.)</p>
                        <p className="textarea">{evening}</p>
                    </div>
                    <div className="item">
                        <p>Night (8 P.M. until bedtime)</p>
                        <p className="textarea">{night}</p>
                    </div>
                </div>
                <div className="form">
                    <form action="http://jkorpela.fi/cgi-bin/echo.cgi" id="usrform">
                        <button type="button">Click Me!</button>

                    </form>
                </div>
                <div className="data">
                    some data
                </div>
            </div>
        )
    } else{
        return (
            <div>
                <p className="activity-title">Today’s Plan</p>
                <div className="activity-container">
                    <div className="item">
                        <p>Early Morning (Wakeup to 10 A.M.)</p>
                        <textarea rows="7" form="usrform" value={earlyMorning} onChange={handleEarlyMorning} />
                    </div>
                    <div className="item">
                        <p>Late Morning (10 A.M.- noon)</p>
                        <textarea rows="7" form="usrform" value={lateMorning} onChange={handleLateMorning}/>
                    </div>
                    <div className="item">
                        <p>Early Afternoon (Noon -3 p.m)</p>
                        <textarea rows="7" form="usrform" value={earlyAfternoon} onChange={handleEarlyAfternoon}/>
                    </div>
                    <div className="item">
                        <p>Late Afternoon (3-5 P.M.)</p>
                        <textarea rows="7" form="usrform" value={lateAfternoon} onChange={handleLateAfternoon}/>
                    </div>
                    <div className="item">
                        <p>Evening (5-8 P.M.)</p>
                        <textarea rows="7" form="usrform" value={evening} onChange={handleEvening}/>
                    </div>
                    <div className="item">
                        <p>Night (8 P.M. until bedtime)</p>
                        <textarea rows="7" form="usrform" value={night} onChange={handleNight}/>
                    </div>
                </div>
                <div className="form">
                    <form action="http://jkorpela.fi/cgi-bin/echo.cgi" id="usrform">
                        <button className="act-button" type="button" onClick={dataHandler}>Click Me!</button>

                    </form>
                </div>
                <div className="data">
                    some data
                </div>
            </div>
        )
    }

}

export default Activitytracker;
