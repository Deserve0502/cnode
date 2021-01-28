<<<<<<< HEAD
import React, { Component, useState } from 'react'
=======
import React, { Component } from 'react'
>>>>>>> 8427892 (feenan)
import IndexNav from '../components/indexNav'
import store from '../store'
import {
    observer
} from 'mobx-react';
<<<<<<< HEAD
=======
import InviDetile from '../components/main/inviDetile';

>>>>>>> 8427892 (feenan)

@observer
export default class Detile extends Component {
    render() {
        return (
            <>
            <IndexNav />
<<<<<<< HEAD
{
    store.detile.title
}
=======
            <article>
             <section>
             <InviDetile history={{...this.props}}/>
             </section>
             </article>
>>>>>>> 8427892 (feenan)
            </>
)
}
}