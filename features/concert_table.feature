Feature: Concert table 
As a user I want to see all concerts in table so I could decide which concert is interesting for me

Scenario: Concert table view  
    Given I am on 'Main' page
    When I observe 'Table' section
    Then I see header elements are displayed correctly
    And I see row elements are displayed correctly

#Expected behaviour:
# * header displayed correctly should contain titles of columns: ARTIST, CITY, DATE, PRICE, TICKETS
# * header elements should be capitalized
# * row displayed correctly should contain: 
# - picture and name of artist in first column, 
# - city and shortcut for state in cloumn city, 
# - date in format YYYY-MM-DD
# - price and currency
# - amount of tickets selected by user to buy - buy default set as 1 
# - green circle with + symbol (add symbol)

Scenario Outline: Change amount of ticket on Home page
Given I am on 'Main' page
When I press '<arrow>' arrow '<amount>' times 
Then I see amount of ticets in column TICKETS '<change>' by '<amount>'

Examples:
|arrow|amount|change|
|up|one|increase|
|up| three|increase|
|down|two|decrease|
|down|one|decrease|

Scenario Outline: Add new ticket to your list
Given I am on 'Main' page
When I press up arrow in row of '<state>' before concert
And I press 'Add' button 
And I go to 'My Tickets' page
Then I see concert's row has correct amount of tickets displayed

Examples:
|state|
|selected|
|not selected|

















    






