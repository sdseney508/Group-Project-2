# Pokedex
![image](https://user-images.githubusercontent.com/62141103/162576186-336daf66-b42b-426f-a0a7-111b0a24d9b2.png)

Ultimate Pokedex

## The requirements for the project were as following:
* Use Node.js and Express.js to create a RESTful API.
* Use Handlebars.js as the template engine.
* Use MySQL and the Sequelize ORM for the database.
* Have both GET and POST routes for retrieving and adding new data.
* Use at least one new library, package, or technology that we haven’t discussed.
* Have a folder structure that meets the MVC paradigm.
* Include authentication (express-session and cookies).
* Protect API keys and sensitive information with environment variables.
* Be deployed using Heroku (with data).
* Have a polished UI.
* Be responsive.
* Be interactive (i.e., accept and respond to user input).
* Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
* Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).
* 
# User Stories:
As a USER i want to be able to search all the pokemon in the Poke-verse. 

# Acceptance Criteria
    GIVEN a top level search page for Pokemon:
    
    Cards of random Pokemon are shown to picque their curiosity about various Pokemon.
    
    WHEN a User selects the name of a Pokemon from the random cards, THEN they are taken to a details page providing more information on the Pokemon.
    
    The USER is given a page to Create an Account
    
    WHEN the USER logs in, THEN they are taken to their personal Pokemon Dashboard.
	
	WHEN I type in a pokemon name in the search, 
	THEN I am given a card containing the details on that Pokemon
	
    WHEN the user selects add to collection and logged in, THEN the pokemon is added to their unique collection.  If not logged in, the user is not presented a capture button

# MVP
* Search Function - A user should be able to search for Pokemon.
* Detailed Cards - Specific details presented on a user's key pokemon
* Personal Collection - Store the users captured Pokemon and display to the user

# Future Development Features (Icebox)
* Users can find others in their area
* Sending friend requests to other players via name or id #
* Teams generated based on strength for team battles
* Caught and Customized name for Pokémon in collection
