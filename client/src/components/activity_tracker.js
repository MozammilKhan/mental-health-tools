import React from 'react';
import '../assets/activity_tracker.css'

function Activitytracker() {
  return (<div>
<p class="title">Daily Activity Tracker</p>
    <div class="container">
        <div class="item before">Fill out the night before</div>
        <div class="item ">Fill out at the end of the day</div>
        <div class="item plan">What you plan to do</div>
        <div class="item">What you actually did if it differs from what you planned</div>
        <div class="item">Your mood during this time on a scale of 1 (poor) to 5 (great)</div>
        <div class="item">Triggers, events, or thoughts that might have affected your mood</div>
        <div class="item time">Early Morning (Waking time until 10 a.m.)</div>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <div class="item time">Late Morning (10 a.m.- noon)</div>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <div class="item time">Early Afternoon (Noon -3 p.m)</div>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <div class="item time">Late Afternoon (3-5 p.m.)</div>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <div class="item time">Evening (5-8 p.m.)</div>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <div class="item time">Night (8 p.m. until bedtime)</div>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
        <textarea rows="4" name="response" form="usrform"></textarea>
    </div>

  </div>)
}

export default Activitytracker;