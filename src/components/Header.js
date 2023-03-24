import React from "react";
import Nav from "./Navigation";

function Header(props) {
    console.log(props);
    const {currentTab, setCurrentTab} = props;

    return (
        <div>
            <section>
                <header>
                    <div>
                        <h1>Francis Lao Portfolio</h1>
                    </div>
                    <div>
                        <Nav currentTab={currentTab}
                             setCurrentTab={setCurrentTab}>
                        </Nav>
                    </div>
                </header>
            </section>
        </div>
    )
}

export default Header;