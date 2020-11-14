import React from 'react';
import { connect } from 'react-redux';
import {get_users} from '../../store/action/action';
import firebase from '../../config/firebase';
import 'firebase/database'
class Chat extends React.Component{

    constructor(){
        super();

        this.state = {
              chat_user : {},
              chat : [],
              message : ''

        }
    }

    componentDidMount(){
        this.props.get_users();
    }


    chat = (user) => {
        this.setState({
            chat_user : user
        })
        let current_user = this.props.current_user;
        let merge_uid = this.uid_merge(current_user.uid,user.uid);
        this.get_messages(merge_uid);    
             
    } 
    
    uid_merge = (uid1,uid2) =>{
            if(  uid1 < uid2)
            { 
             return uid1+uid2 
             
            }
            else{
                return uid2 + uid1
            }
     }

    send_message =() =>{
        let user = this.props.current_user;
        let chat_user = this.state.chat_user;
        let merge_uid = this.uid_merge(user.uid,chat_user.uid);

        firebase.database().ref('/').child(`chats/${merge_uid}`).push({
            message: this.state.message,
            name : user.name,
            uid : user.uid,
        })
       this.setState({
           message:''
       })
    }

    get_messages = (uid) =>{
        firebase.database().ref('/').child(`chats/${uid}`).on('child_added',(message)=>{
           console.log('messages...',message)
            this.state.chat.push(message.val());
            this.setState({
                chat: this.state.chat
            })
        })
    }

     render(){
         let user = this.props.current_user;
         
         return(
             <div>
                 <h1>Welcome {user.name}</h1>
                  <h3>Email: {user.email}</h3>
                  <img src={user.profile} alt=''/>
                   <div style={{display:'flex'}}>
                       <div style={{backgroundColor:'grey'}}>
                          <h4> Chat User : </h4>
                           <ul>
                          {this.props.users.map( (value,index) => {
                                   return value.uid !== user.uid &&  <li key={index}>
                                       <img src={value.profile} alt='' width='20'/>
                                        {value.name}
                                        <button onClick={ () => this.chat(value)}>Chat Now</button>
                                        </li>
                          })
                          }
                         </ul>
                          </div>
                          <div style={{backgroundColor:'yellow',width:400}}>
                              <h4>Chat</h4>
                            {Object.keys(this.state.chat_user).length ?  
                              <div>  
                               <h4>
                                   <img src={this.state.chat_user.profile} alt='' width='20' />
                                   {this.state.chat_user.name}
                                   </h4>
                                      <ul>                             
                                   {this.state.chat.map((value,index) =>{
                                         return <li style={ {color: value.uid === user.uid ? 'red' : 'green'}} key={index} >{value.message}</li>   
                                   })}
                                   </ul>
                                
                              <input value={this.state.message} type='text' 
                               onChange ={ (e) =>this.setState({ message: e.target.value })}
                               placeholder='Enter Your message' />
                              <button onClick={ () =>this.send_message()}>Send Message</button>
                              </div> 
                              :
                              <h4>No User</h4>   
                            }
                          </div>
                   </div>
             </div>
         )
     }
}

const mapStateToProps = (state) =>{
   return {
        current_user : state.current_user,
        users: state.users,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
          get_users : () => dispatch(get_users())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chat);