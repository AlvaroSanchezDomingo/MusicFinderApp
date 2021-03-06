# Assignment - ReactJS app. Music Finder App

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
>Shazam API endpoints
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/api-endpoints.PNG">


### autoComplete
Auto complete returns text sugestions base on text input by the user. In the example bellow, if the text input is "bad habits" the text suggestions are as follow.

Request:
url: 'https://shazam.p.rapidapi.com/auto-complete',
params: {term: 'bad habits', locale: 'en-US'},

Response
>Autocomplete response
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/autocomplete-response.PNG">


### search
Search retuns a list of recommended tracks and a list of recomended artists based on a text. In the example bellow, if the text input is "bad habits" the tracks and artist recommendatios are as follow.
Request:
url: 'https://shazam.p.rapidapi.com/search',
params: {term: 'bad habits', locale: 'en-US', offset: '0', limit: '5'},

Response
>Search track response
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/searchtracks-response.PNG">

>Search artist response
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/searchartist-response.PNG">

### explore
Explore returns a list with the latest hits. It has paginations features therefore we can retrieve several pages with an expecific size. In the example bellow, "bad habits" of Ed sheeran is number 2 in the list.
Request:
url: 'https://shazam.p.rapidapi.com/charts/track',
params: {locale: 'en-US', pageSize: '20', startFrom: '0'},

Response
>Explore response
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/explore-response.PNG">

## App Design.

### Component catalogue.

>List storybook
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/storybook-list.PNG">

>Login storybook
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/storybook-login.PNG">

>Header storybook
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/storybook-header.PNG">

>SearchBox storybook
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/storybook-searchbox.PNG">

>ArtistCard storybook
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/storybook-artistcard.PNG">

>ArtistList storybook
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/storybook-artistlist.PNG">

>TrackCard storybook
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/storybook-trackcard.PNG">

>TrackList storybook
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/storybook-tracklist.PNG">


### UI Design.

>Allow the user to login in order to view the private views.
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/view-login.PNG">

>Public view that shows a list of the latest hits. Clicking the paginations to show more tracks.
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/view-explore.PNG">

>Private view that shows a list of recommended tracks based on an input text from the search box. Insert text on the search box and select one of the recomendations to get a list of recommended tracks.
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/view-findtracks.PNG">

>Private view tha shows a list of recommended artist based on an input text from the search box. Insert text on the search box and select one of the recomendations to get a list of recommended artists.
<img src="https://github.com/AlvaroSanchezDomingo/MusicFinderApp/blob/master/images/view-findartists.PNG">


### Routing.

+ GET / - Public Explore view - Shows a list of latests hits with pagination feature.
+ GET /login - Public Login view - Allow the user to login.
+ GET /track - Private find track view -  Allow the user to find tracks based on an input text.
+ GET /artist - Private find track view -  Allow the user to find artists based on an input text.


## Independent learning.

+ react query pagination (https://react-query.tanstack.com/guides/paginated-queries)
+ basic authentication (components/login)
+ New material UI for login view (components/login)
+ Shazam API endpoints (https://rapidapi.com/apidojo/api/shazam)
