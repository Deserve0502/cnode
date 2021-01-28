import React, { Component, useState } from 'react'
import Header from '../components/Header'
import IndexInvi from '../components/Main/indexInvi'
import Footer from '../components/Footer'
import Ignore from '../components/aside/Ignore'
import Login from '../components/aside/Login'
import Range from '../components/aside/Range'
import Author from '../components/aside/Author'
import Connect from '../components/aside/Connect'
import '../components/aside/index.css'

export default class Index extends Component {

    render() {
        return (
            <>
                <Header />
                <article>
                    <section>
                        <IndexInvi />
                        <aside>
                            <Login />
                            <Ignore />
                            <Range />
                            <Author />
                            <Connect />
                        </aside>
                    </section>
                </article>
                <Footer />
            </>
        )
    }
}
