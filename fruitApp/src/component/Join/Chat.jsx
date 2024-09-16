import { useEffect, useState } from 'react';
import socketIO from 'socket.io-client'
import {user} from '../Join/Join';
import sendLogo from '../../assets/images/send.png'
import Message from './Message';
import ReactScrollToBottom from 'react-scroll-to-bottom'

const ENDPOINT='http://localhost:3000/'
let socket;
function Chat(){
    
    const [id,setId]=useState("");
    const [message,setMessages]=useState([])

    const send=()=>{
        const message=document.getElementById('chatInput').value;
        socket.emit('message',{message,id})
        document.getElementById('chatInput').value="";
    }
    
    console.log(message);

    useEffect(()=>{
         socket=socketIO(ENDPOINT,{transports:['websocket']});
        socket.on("connect",()=>{
            // alert("Connected");
            setId(socket.id)
        })
        console.log(socket);
        
        socket.emit('joined',{user})

        socket.on('welcome',(data)=>{
            setMessages([...message, data]);
            console.log(data.user,data.message);
        })
        socket.on('userJoined',(data)=>{
          setMessages([...message, data]);
            console.log(data.user,data.message);
        })
        socket.on('leave',(data)=>{
          setMessages([...message, data]);
            console.log(data.user,data.message);
        })
        return()=>{
            socket.emit('disconnect')
            socket.off()
        }
    },[])

    useEffect(()=>{
      socket.on('sendMessage',(data)=>{
        setMessages([...message, data]);
          console.log(data.user,data.message,data.id);
      })
      return()=>{
        socket.off();
      }
    },[message])

    const getCurrentDate = () => {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);  // e.g., Sunday, October 24, 2024
      };
  
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md h-full relative">
            
            {/* Header */}
            <div className="flex items-center p-4 bg-white border-b border-gray-200">
              <div className="w-12 h-12 rounded-full bg-gray-300"></div>
              <div className="ml-3">
                <h2 className="text-lg font-semibold">{user}</h2>
                <p className="text-sm text-green-500">Online</p>
              </div>
              <div className="ml-auto text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
            </div>
    
            {/* Date */}
            <div className="text-center py-2 text-sm text-gray-500">
              <span className="bg-gray-200 px-2 py-1 rounded-full">{getCurrentDate()}</span>
            </div>
    
            {/* Chat Area */}
            <div className="flex flex-col space-y-4 p-4 h-[calc(100vh-200px)] overflow-y-auto">
              {/* Sent message (Placeholder bubble) */}
           
                <ReactScrollToBottom >
                   

                      {message.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                     
                </ReactScrollToBottom>
             
            </div>
    
           {/* Input Area */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 flex items-center">
            <input
                onKeyPress={(event) => event.key === 'Enter' ? send() : null}
                id='chatInput'
                type="text"
                placeholder="Message..."
                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none"
            />
            <button onClick={send}className="ml-3 p-3 bg-purple-500 text-white rounded-full w-[10%]">
              <img src={sendLogo} alt='sendLogo'/>
            </button>
            </div>
         </div>
    </div>
    );
}
export default Chat;
