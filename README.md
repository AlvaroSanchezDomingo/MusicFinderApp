# Assignment - ReactJS app.

Name: Alvaro Sanchez Domingo

## Overview.

The music finder app uses Shazam API to allow the user to explore latest music hits as well as find specific tracks and artist by de name. In order to find tracks and artist, the user must insert text in the search box, the system will suggest few posible options base on the text inputed. Selecting one of the sugestions, the system will offer all the tracks or artist related with that piece of text. All three main views have pagination feature. In the case of explore view, the tracks are stored on cash using react query pagination feature. In the other hand, when searching for tracks and artist, the result it is not stored in cash as it changes with every search. The view Explore tracks is public, there is no need for the user to login, instead the find tracks and find artist views are private and the user is forced to login in order to use this advance views. There is a extra view for loging in.


 
 + Explore latest hits recomended by Shazam with pagination and cashed store
 + Find tracks based on user input and Shazam text sugestion with pagination.
 + Find artist based on user input and Shazam text sugestion with pagination.
 + Login view
 + Logout feature

## Setup requirements.

Run the following commands in order to get the app running.

Download the Repository
run the following command to install all the npm dependencies
npm install
run the following command to run the application
npm run start

## API Data Model.

The music finder app uses a Shazam API as backend to retrieve track and artist recomendations. The app uses three endponts which are explained bellow.
<img src="api-endpoints">


### autoComplete
Auto complete returns text sugestions base on text input by the user. In the example bellow, if the text input is "bad habits" the text suggestions are as follow.

Request:
url: 'https://shazam.p.rapidapi.com/auto-complete',
params: {term: 'bad habits', locale: 'en-US'},

Response
<img src="autocomplete-response">


### search
Search retuns a list of recommended tracks and a list of recomended artists based on a text. In the example bellow, if the text input is "bad habits" the tracks and artist recommendatios are as follow.
Request:
url: 'https://shazam.p.rapidapi.com/search',
params: {term: 'bad habits', locale: 'en-US', offset: '0', limit: '5'},

Response
<img src="searchtrack-response">
<img src="searchartist-response">

### explore
Explore returns a list with the latest hits. It has paginations features therefore we can retrieve several pages with an expecific size. In the example bellow, "bad habits" of Ed sheeran is number 2 in the list.
Request:
url: 'https://shazam.p.rapidapi.com/charts/track',
params: {locale: 'en-US', pageSize: '20', startFrom: '0'},

Response
<img src="explore-response">

## App Design.

### Component catalogue.

<img src="storybook-login">

<img src="storybook-header">

<img src="storybook-searchbox">

<img src="storybook-artistcard">

<img src="storybook-artistlist">

<img src="storybook-trackcard">

<img src="storybook-tracklist">


### UI Design.

<img src="view-login">
>Allow the user to login in order to view the private views.

<img src="view-explore">
>Public view that shows a list of the latest hits. Clicking the paginations to show more tracks.

<img src="view-findtracks">
>Private view that shows a list of recommended tracks based on an input text from the search box. Insert text on the search box and select one of the recomendations to get a list of recommended tracks.

<img src="view-findartists">
>Private view tha shows a list of recommended artist based on an input text from the search box. Insert text on the search box and select one of the recomendations to get a list of recommended artists.

### Routing.

+ GET / - Public Explore view - Shows a list of latests hits with pagination feature.
+ GET /login - Public Login view - Allow the user to login.
+ GET /track - Private find track view -  Allow the user to find tracks based on an input text.
+ GET /artist - Private find track view -  Allow the user to find artists based on an input text.


## Independent learning.

....... Briefly state any technologies/techniques used in your project codebase that was not covered in the lectures/labs. Provide source code filename (source code excerpts are not required in most cases) references to support your assertions and include references (articles/blogs) ......... 

+ react query pagination (https://react-query.tanstack.com/guides/paginated-queries)
+ basic authentication (components/login)
+ New material UI for login view (components/login)
+ Shazam API endpoints (https://rapidapi.com/apidojo/api/shazam)
