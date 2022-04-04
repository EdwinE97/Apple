import React from 'react'

function Header() {
    return (
        <header>
        <nav>
            <ul>
                <div className="logo">
                    <a href="/"><img src="assets/images/apple.svg" alt="Apple logo"/></a>
                </div>
                <a href="/">
                    <li>Store</li>
                </a>
                <a href="/">
                    <li>Mac</li>
                </a>
                <a href="/">
                    <li>iPad</li>
                </a>
                <a href="/">
                    <li>iPhone</li>
                </a>
                <a href="/">
                    <li>Watch</li>
                </a>
                <a href="/">
                    <li>AirPods</li>
                </a>
                <a href="/">
                    <li>TV & Home</li>
                </a>
                <a href="/">
                    <li>Only on Apple</li>
                </a>
                <a href="/">
                    <li>Accessories</li>
                </a>
                <a href="/">
                    <li>Support</li>
                </a>
                <div className="s">
                    <a href="/"><img src="assets/images/search.svg" alt="Apple Search Icon"/></a>
                </div>
                <div className="c">
                    <a href="/"><img src="assets/images/bag.svg" alt="Apple Bag Icon"/></a>
                </div>
            </ul>
        </nav>
    </header>
    )
}

export default Header