import React from "react";
import resume from '../assets';

//import resume as pdf
function Resume() {
    return (
        <section>
            <div>
                <h3>Resume</h3>
                <a href={resume}>
                    <button>Download/View My Resume</button>
                </a>
            </div>
        </section>
    )
}
export default Resume;