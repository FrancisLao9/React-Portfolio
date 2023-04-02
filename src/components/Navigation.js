import React, {useEffect} from 'react';
import {capitalizeFirstLetter} from '../utils/helper';

function Nav(props) {
    const { currentTab, setCurrentTab } = props;

    useEffect(() => {document.title = capitalizeFirstLetter(currentTab);
    }, [currentTab]);

    return (
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href='#about'
                        onClick={() => setCurrentTab('About')}
                        className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href='#portfolio'
                        onClick={() => setCurrentTab('Portfolio')}
                        className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href='#contact'
                        onClick={() => setCurrentTab('Contact')}
                        className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href='#resume'
                        onClick={() => setCurrentTab('Resume')}
                        className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;