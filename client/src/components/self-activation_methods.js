import React from 'react';
import {Link} from 'react-router-dom'
import "../assets/activation_methods.css"

function ActivationMethods() {

    return (
        <div>
            <p className="methods-title">Synopsis of Self-Activation Methods</p>
            <div className="methods-container">
                <div className="method method-header">
                    <div className="method-symptom">Target Symptoms</div>
                    <div className="method-technique">Self-Activation Technique</div>
                    <div className="method-purpose">Purpose of the method</div>
                </div>
                <div className="method">
                    <div className="method-symptom">You feel disorganised. You have nothing to do. You get lonely and bored on
                        weekends
                    </div>
                    <div className="method-technique"><Link to="/activitytracker">Daily Activity Schedule</Link></div>
                    <div className="method-purpose">Plan things one hour at a time and record the amount of Mastery and
                        Pleasure.Virtually any activity will make you feel better than lying in bed and will undercut
                        your sense of inadequacy.
                    </div>
                </div>
                <div className="method">
                    <div className="method-symptom">You feel overwhelmed by the urge to do nothing.</div>
                    <div className="method-technique"><Link to="/thoughts">Daily Record of Dysfunctional Thoughts</Link></div>
                    <div className="method-purpose">You expose the illogical thoughts that paralyse you. You learn that
                        motivation follows action, not vice versa.
                    </div>
                </div>
                <div className="method">
                    <div className="method-symptom">You procrastinate because tasks seem to difficult and unrewarding.</div>
                    <div className="method-technique">The Antiprocrastination Sheet</div>
                    <div className="method-purpose">You put your negative predictions to the test.</div>
                </div>
                <div className="method">
                    <div className="method-symptom">You feel there’s no point in doing anything when you’re alone.</div>
                    <div className="method-technique">The Pleasure Predicting Sheet</div>
                    <div className="method-purpose">Schedule activities with the potential for personal growth or satisfaction,
                        and predict how rewarding they will be. Compare the actual satisfaction you experience when you
                        are alone and when you are with others.
                    </div>
                </div>
                <div className="method">
                    <div className="method-symptom">You give yourself excuses for avoiding things.</div>
                    <div className="method-technique">But-Rebuttal</div>
                    <div className="method-purpose">You get off your “but” by combatting “buts” with realistic rebuttals.</div>
                </div>
                <div className="method">
                    <div className="method-symptom">You have the idea that whatever you do isn’t worth much.</div>
                    <div className="method-technique">Self-endorsement</div>
                    <div className="method-purpose">Write down the self downing thoughts and talk back to them. Look for
                        distorted thought patterns, such as “all-or-nothing thinking”. Make a list of things you do
                        accomplish each day.
                    </div>
                </div>
                <div className="method">
                    <div className="method-symptom">You think about a task in a self-defeating manner.</div>
                    <div className="method-technique">TIC-TOC Technique</div>
                    <div className="method-purpose">You substitute task-interfering cognitions (TICs) with task-oriented
                        cognitions (TOCs).
                    </div>
                </div>
                <div className="method">
                    <div className="method-symptom">You feel overwhelmed by the magnitude of everything you have to do.</div>
                    <div className="method-technique">Little Steps for Little Feet</div>
                    <div className="method-purpose">Break the tasks down into it’s component parts, and do these one step at a
                        time.
                    </div>
                </div>
                <div className="method">
                    <div className="method-symptom">You feel guilty, oppressed, obliged, and duty-bound.</div>
                    <div className="method-technique">Motivation without coercion</div>
                    <div className="method-purpose">a. You eliminate “shoulds”, “musts” and “oughts” when you give yourself
                        instructions.
                        b. You list the advantages and disadvantages of any activity so you can begin to think in terms
                        of what you want to do rather than what you must do.
                    </div>
                </div>
                <div className="method">
                    <div className="method-symptom">Someone else nags and harangues you. You feel pressured and resentful, so
                        you refuse to do anything at all.
                    </div>
                    <div className="method-technique">Disarming Technique</div>
                    <div className="method-purpose">You assertively agree with them and remind them that you are capable of
                        your own thinking.
                    </div>
                </div>
                <div className="method">
                    <div className="method-symptom">You have difficulty modifying a habit such as smoking</div>
                    <div className="method-technique">Visualise Success</div>
                    <div className="method-purpose">You make a list of the positive benefits of having changed the habit. You
                        visualise these after inducing a state of deep relaxation.
                    </div>
                </div>
                <div className="method">
                    <div className="method-symptom">You feel unable to do anything on your own initiative because you see
                        yourself as “a procrastinator”
                    </div>
                    <div className="method-technique">Count what Counts</div>
                    <div className="method-purpose">You count the things you do each day on your own initiative, using a wrist
                        counter. This helps you overcome your bad habit of constantly dwelling on your inadequacies.
                    </div>
                </div>

                <div className="method">
                    <div className="method-symptom">You feel inadequate and incompetent because you say “I can’t”</div>
                    <div className="method-technique">Test Your Can’ts</div>
                    <div className="method-purpose">You set up an experiment in which you challenge and disprove your negative
                        predictions.
                    </div>
                </div>
                <div className="method">
                    <div className="method-symptom">You are afraid to fail, so you risk nothing</div>
                    <div className="method-technique">“Can’t Lose” System</div>
                    <div className="method-purpose">Write down any negative consequences of failure and develop a coping
                        strategy ahead of time.
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ActivationMethods;
