Feature: Search functionality
As a user I want search for concerts so I could select interesting events easier

Scenario: Search elements view
Given I am on 'Main' page
When I observe 'Search' section
Then I see search elements are displayed properly

# Expected behavior:
# * Search section should contain: search input and search button
# * Search input should be placed on the top of page, on left side
# * Search input should contain placehoder: "Artist or city"
# * Search button should be placed on the top of page, right from search input
# * Search button should have blue-green backgorund
# * Search button should have text 'SEARCH' (capitalized)

Scenario Outline: Search with button or key
Given I am on 'Main' page
When I type 'U2' into search input
And I press '<press>'
Then I see search action is performed

Examples:
|press|
|Search button|
|Enter key|

# Expected behavior:
# In this scenario user do not care what is the efect of search
# What user should observe is that search action is performed from search button and from enter key

Scenario Outline: Search by artist or city
Given I am on 'Main' page
When I type '<search>' into search input
And I press 'Search button' 
Then I see loader for a moment
And I see results for '<search>' displayed correctly in concert table

Examples:			
|search|
|U2|
|System of a Down|
|System of|
|System|
|London|
|London, UK|
|UK|
|Lond|

# Expected behavior:
# * Searching should work both on press search button and press enter key 
# * If inserted phrase fits more than one artist - more than one artist results are dispalyed
# * Searching by city should work for: city, city and state, state only
# * If there is more results for city only (ex: London in UK and London in USA) results for all cities should be displayed
# * If there is more results for state only (ex: London in UK and Cambridge in UK) all results for state should be dispalyed
# * Searchnig by artist or city should work for whole phrase but also for partial phrase

Scenario Outline: Searching by unexpected string

Given I am on 'Main' page
When I type '<search>' into search input
And I press 'Search button'
Then I see empty table displayed properly

Examples:
|search|
|U23|
|XYZ|

# Expected behavior:
# * table is displayed with expected header but without any content (no rows)

Scenario: Search without entered string

Given I am on 'Main' page
When I focus on search input
And I press 'Search button'
Then I see no changes done on page

# Expected behavior:
# * Nothing should happen if user search without providing any string