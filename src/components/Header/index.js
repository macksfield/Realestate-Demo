import React from 'react'
import './styles.scss'

const Header = () =>
    <div>
        <nav id="header" className={"navbar is-info navbar-menu"}>
            <div className="navbar-start">
                <a className="navbar-item home">
                    <a href="/"><h1>React, Router, Redux, Redux-Thunk Example Project Architecture</h1></a>
                </a>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a class="button" href="https://github.com/macksfield/Realestate-Demo">GitHub Project</a>
                    </div>
                </div>
            </div>
        </nav>
        <br/>
    </div>

export default Header
