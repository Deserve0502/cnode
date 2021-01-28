<<<<<<< HEAD
import React, { Component, useState } from 'react'
import IndexNav from '../components/indexNav'
import IndexInvi from '../components/indexInvi'
=======
import React, { Component} from 'react'
import IndexNav from '../components/indexNav'
import MainInvi from '../components/main/mainInvi'
>>>>>>> 8427892 (feenan)
export default class Index extends Component {
   
    render() {
        return (
            <>
<<<<<<< HEAD

            <IndexNav />
            <IndexInvi history={this.props}/>
          
=======
            <IndexNav />
            <article>
             <section>
             <MainInvi history={{...this.props}}/>
             </section>
             </article>
            
>>>>>>> 8427892 (feenan)
            </>
)
}
}
