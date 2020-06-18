import React from 'react';
import './Videoitem.css';



const Videoitem =   (props)  =>  {  
    
    return(
        <div className="item vitem" onClick={
            
            () => {
                props.videoExtraction(props.video)
            }
            
            }>
            <img src={props.video.snippet.thumbnails.medium.url} className="ui image" alt="desc"/>
            <div className="content">
                <div style={{fontFamily:"font-family: 'Roboto', sans-serif;",fontSize:"14px",fontWeight:"500",lineHeight:"16px"}}>
                    {props.video.snippet.title}
                </div>
                <div className="content" style={{fontFamily:"font-family: 'Roboto', sans-serif;",fontSize:"13px",fontWeight:"400",color:"grey",paddingTop:"5px"}}>
                    {props.video.snippet.channelTitle}
                </div>
            </div>
        </div>
    );
}



export default Videoitem;