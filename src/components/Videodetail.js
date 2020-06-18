import React from 'react';
import './videodetail.css';

const Videodetail = ({video})  =>  {
    
    if(!video)
        {
            return(
                <div>
                    <div className="headeri sixteen wide column">
                        Welcome to Youtube Clone V1.0.0
                    </div>
                    <div id="cara">
                        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-interval="10000">
                                    <img src="https://marketingland.com/wp-content/ml-loads/2017/04/youtube-crowd-uproar-protest-ss-19201920-800x450.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-interval="2000">
                                    <img src="https://www.storybench.org/wp-content/uploads/2019/09/32-08-yt-data-api-search.png" class="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://developers.google.com/youtube/images/youtube_home_page_analytics_api.png" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                        </div>
                            </div>
            );
        }

    const vidSrc = `https://www.youtube.com/embed/${video.id.videoId}`;


    return(
        <div >
            <div className="ui embed container" style={{width:"90%",height:"50%"}}>
            <iframe title="video player"
            src={vidSrc}
            allowFullScreen="allowfullscreen"
            frameBorder="0"
            
            />
            </div>
            <div className="ui container">
                <div id="vidtitle">
                    {video.snippet.title}
                </div>
                <hr />
                <div id="chtitle">
                    <b>{video.snippet.channelTitle}</b> 
                </div>
                <br />
            </div>
        </div>
    );
}

export default Videodetail;