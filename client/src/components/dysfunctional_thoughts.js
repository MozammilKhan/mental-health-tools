import React from 'react';
import "../assets/dysfunctional_thoughts.css"
import axios from "axios";


function DysfunctionalThoughts() {


    React.useEffect(() => {
        axios.get()
            .then(function (response) {
                // handle success
                console.log(response)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    return (
        <div>
            <p class="page-title">Daily Record of Dysfunctional Thoughts</p>
            <div class="container">
                <div class="item item1">
                    <p class="title">Situation</p>
                    <p class="description">Briefly describe the actual event leading leading to the unpleasant
                        emotion</p>
                    <textarea rows="4" autofocus name="situation" form="usrform" id="situation"></textarea>
                </div>
                <div class="item item2">
                    <p class="title">Emotion(s)</p>
                    <p class="description">1. Specify sad/anxious/angry, etc. <br/>2. Rate degree of emotion, 1-100%.
                    </p>
                    <textarea rows="4" name="emotion" form="usrform"></textarea>
                </div>
                <div class="item item3">
                    <p class="title">Automatic Thought(s)</p>
                    <p class="description">Write the automatic thought(s) that accompany the emotion(s)</p>
                    <textarea rows="4" name="auto-thought" form="usrform"></textarea>
                </div>
                <div class="item item4">
                    <p class="title">Cognitive Distortion(s)</p>
                    <p class="description">Identify the distortion(s) present in the automatic thought.</p>
                    <textarea rows="4" name="cog-dist" form="usrform"></textarea>
                </div>
                <div class="item item5">
                    <p class="title">Rational Response(s)</p>
                    <p class="description">Write rational response(s) to the automatic thought(s)</p>
                    <textarea rows="4" name="response" form="usrform"></textarea>
                </div>
                <div class="item item6">
                    <p class="title">Outcome</p>
                    <p class="description">Specify and rate subsequent emotions, 0-100%.</p>
                    <textarea rows="4" name="outcome" form="usrform"></textarea>
                </div>
            </div>

            <div className="form">
                <form action="http://jkorpela.fi/cgi-bin/echo.cgi" id="usrform">
                    <input type="datetime-local" id="usrform"/>
                    <input className="d-btn" type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default DysfunctionalThoughts;
