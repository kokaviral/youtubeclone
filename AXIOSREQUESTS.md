for creating requests:


1. Create folder apis in which create a file for a particular API.
2. INside you only need to create axios components like:
    
    export default axios.create({
        baseURL:'https://www.googleapis.com/youtube/v3'
    });

3. This creates the component to be used again. Moreover, the name of the file is the component to be imported.
4. Then in App.js import "Name" in this case youtube. To continue this first extract the search Term


:::EXTRACTING SEARCH TERM:::

1. In the file for searchbar put an onSubmit method on the form tag of the searchbar.
ex: onSubmit={this.onFormSubmit}
2. Then declare the function earlier in class.
ex:
onFormSubmit    =   (event) =>  {
    event.preventDefault();

    this.props.fname(this.state.searchterm)
}

the first line is for preventing the reload of page
second line is for the function that sends back the searchterm to app.js

3. The work for searchBar.js is finished and come to app.js
4. In app.js describe a function for getting the name such as termExtraction.
5. Inside termExtraction we use that axios component youtube such as :
termExtraction = (searchterm) => {
    youtube.get('/search',{
        params:{....}
    });
}

You might think where did we get the searchterm even if we haven't done anything.
6. So we go the <Searchbar> line in app.js and add a prop such that:
termExtraction={this.termExtraction}

##END
So we get the searchterm as well as data