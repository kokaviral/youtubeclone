import React from 'react';
import Searchbar from './searchbar';
import youtube from '../apis/youtube';
import Videodetail from './Videodetail';
import Videolist from './Videolist';

const KEY = "AIzaSyBmWbj6J1FYigvi4871cjuobNs-B2rMdos";
class App extends React.Component
{
    state= { videos:[], selectedvideo: null }

    termExtraction    =   async (searchterm)  =>  {
        const response = await youtube.get('/search',{
            params:{
                part:'snippet',
                maxResults:'25',
                type:'video',
                q: searchterm,
                key: KEY
            }
        });
    this.setState({
        videos:response.data.items,
        selectedvideo:response.data.items[0]
    });
    };

   videoExtraction  =   (clickedvideo)  =>  {

    this.setState({selectedvideo:clickedvideo});
   }


    render()
    {
        if(this.state.videos.length===0)
        {
            return(
                <div>
                    <Searchbar termExtraction={this.termExtraction} />
                {/* term on left to be referenced in searchbar.js term on right present in this file */}
                <div className="ui container">
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="sixteen wide column">
                                <Videodetail video={this.state.selectedvideo} />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            );
        }
        
        return(
            <div>
                <Searchbar termExtraction={this.termExtraction} />
                {/* term on left to be referenced in searchbar.js term on right present in this file */}
                <div className="ui container" style={{marginTop:"50px"}}>
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <Videodetail video={this.state.selectedvideo} />
                            </div>
                            <div className="five wide column">
                                <Videolist videos={this.state.videos} videoExtraction={this.videoExtraction}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// render()
//     {
//         return(
//             <div>
//                 <Searchbar termExtraction={this.termExtraction} />
//                 {/* term on left to be referenced in searchbar.js term on right present in this file */}
//                 <div className="ui container">
//                     <div className="ui grid">
//                         <div className="ui row">
//                             <div className="eleven wide column">
//                                 <Videodetail video={this.state.selectedvideo} />
//                             </div>
//                             <div className="five wide column">
//                                 <Videolist videos={this.state.videos} videoExtraction={this.videoExtraction}/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
export default App;