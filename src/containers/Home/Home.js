import React from 'react';
import {connect} from 'react-redux';
import { facebook_login} from '../../store/action/action';



class Home extends React.Component{
     
     render(){
        
         return(
             <div>
                 <h1>Home</h1>
                 <button onClick = { () => this.props.facebook_login(this.props.history)}>Facebook Login</button>
                 {/* <button onClick ={ () => this.props.set_data(new_user)}>SETDATA</button> */}
                 </div>
         )
     }
}


const mapStateToProps =(state) =>{
    return {
           users : state.users,
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
       
    //   set_data : (data) => dispatch(set_data(data)),
      facebook_login: (history) => dispatch(facebook_login(history))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);