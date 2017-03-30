# Tech Test for News Company

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
