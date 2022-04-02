# Group-Project-2

Ultimate Pokedex

User Stories:

Search Features (results come from a get request from pokeapi):
    Game / Generation = list of all pokemon in card format for what ones were in what game -check
    Type / element = cards of all pokemon in that type.  - check
    Name = pokemon name gives you a card about that pokemon - check
    strength = cards of all pokemon with that strength - poop
    weakness = cards of all pokemon with that weakness - poop


User Features (stored on our db in a users model):
    Username
    Password
    Bio
    Profile Picture / Avatars (possible growth feature)
    Personal Pokedex - they can tag from the seearch features and add to their pokedex; they can also tag ones as their favorite and if they've ever caught it
    Search full podex


Pokedex Features (on our server / database, rest of info is done by a get call to pokeapi.co/docs/v2#pokemon):
    user_id
    pokemon_name*
    unique_name
    favorite
    captured field
    captured date
    captured game


Pokemon Cards:
    name
    picture
    strength
    weaknesses
    abilities
    capability to evolve it / search by evolution (possible growth feature)


Profile Page Features:
    Display avatar above name
    show most recent 6 favorites
    show most recent 6 captured
    show friends / other users (ossible growth feature)
    logout button
    drop downs for search features



As a user WHEN i select a Pokemon, THEN i am presented with a card containing the information about that Pokemon
AS a User, i want to be given awards / medals for collecting benchmark numbers of different pokemon
AS a USER i want to be told that i've just captured a rare pokemon
WHEN I capture a pokemon, a unique card for my pokemon is created
AS a user, i want to be able to search for other users in my area
AS a USER, i want to be able to share my list of captured pokemon with other users
AS a USER i want to be able to display some sort of avatar on my home page


