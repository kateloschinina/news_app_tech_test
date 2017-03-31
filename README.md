# Tech Test for News Company

[Online version of the app](https://k-loschinina-news-app.herokuapp.com/)
Deployed to Heroku. To search different topics just click on the magnified glass, and enter the subject of your search. You can also go to the next page in the bottom of the screen.

Build a news headline aggregator
----
Build a website that shows a list of news headlines from ####. You may use Developer APIs to achieve this.

Provide a search box for users to search for headlines containing specific words (i.e. searching for "brexit" should return a list of brexit-related headlines).

Optionally, provide pagination for results, at 20 results per page.

This website should be:
* Server-rendered
* Progressively enhanced
* Responsive
* Accessible


For bonus points, the site should:
* Be built using Javascript and node.js
* Be deployed on Heroku
* Not rely too heavily on client-side frameworks (i.e. Angular, React) or libraries like jQuery
* Have a similar look and feel as ####.com
* Be performant over 3G networks


It'd be really awesome if, on top of all that, your site:
* Uses Origami Components
* Works offline

How I explored new technologies
----
1. I browsed through suggested technologies, and decided to start to spike with Origami tutorial to explore what it can offer.
2. Origami technology allowed me to build a simple page with #### style, header and footer. At this stage it seemed reasonable to move towards API exploration. First of all, I have to do some spiking to understand how I can work with suggested APIs.
3. I moved to TDD API exploration. After a number of attempts I was able to get all the necessary information from APIs using promises. Tests that test APIs pass.
4. Server-rendered: created an Express part of the functionality. Moved all functionality there. Now it is calling APIs and displays information of the page.
5. Couldn't stop myself from spiking a search functionality - took just a little bit.
6. Cleaned all the styling - removed origami parts I don't need, put teasers in container, so that now you can see the topic of your search at the top. Changed the teaser type as this is the one that is currently used at real #### website. Next step - do all the test coverage for server-rendered part of app.
7. I have got some test coverage, although it is far from perfect, and for some files it is quite low. I decided to use `istanbul` to estimate my test coverage for now. In the interest of time my next steps would be to TDD some functionality improvement, and then if I have time try to solve test coverage problem again.
8. As I am marginally satisfied with functionality, I decided to deploy to Heroku, just in case if I have any issue with the deployment. There was no major issues, and all functionality seems to look great on screen, iPad and mobile. I think I have enough time to spike pagination.
9. Spiking of pagination was successful. The last part I will do before deadline - update README and improve test coverage, if possible.

Screenshots of the app
----
The app is responsive, see below screenshots for different views.

Mobile one looks like this. It was also loaded through 4G =)
![Imgur](http://i.imgur.com/E92MUIE.png)

This is from iPad:
![Imgur](http://i.imgur.com/DitxiN0.jpg)

![Imgur](http://i.imgur.com/YmcBOfu.jpg)

And this one is on standard laptop:
![Imgur](http://i.imgur.com/Fl6Jnkv.png)

Technical details
----
### Technologies used

Javascript, Node.js, Express, Chai
Native APIs of #### and Origami

### How to run
Run the following from the command line:
```
$ git clone https://github.com/kateloschinina/news_app_tech_test.git
$ cd news_app_tech_test
$ npm install
$ npm start
Navigate to http://localhost:3000/ to use the app
```

### How to test
```
$ npm test
```

### How to see test coverage
```
$ istanbul cover routes/index.js client/js/headline.js
$ open coverage/Icov-report/index.html
```
