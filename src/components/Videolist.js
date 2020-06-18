import React from 'react';
import Videoitem from './Videoitem';

const Videolist =   (props)  =>  {
        const renderedlist = props.videos.map(video => {
            return <Videoitem video={video} videoExtraction={props.videoExtraction} key={video.id.videoId}/>
    });

    return(
        <div className="ui relaxed divided list">
            {renderedlist}
        </div>
    );

}
export default Videolist;
//img={video.snippet.thumbnails.medium} title