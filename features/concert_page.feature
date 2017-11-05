Feature: Concert single page
As a user I want to see single concert page so that I can gather information about the artist and the concert

Scenario: Concert page view
Given I am on 'Concert' page
When I observe the page
Then I see it is displayed correctly

# Expected behavior:
# * On the left part of the page artist's picture should be displayed
# * Right part of the page should contain from top:
# - 'SHARE' button (capitalized, blue-green background) )and amount of shares displayed (right from share button)
# - name of the artist as title
# - short description of artist
# - concert details (where, when, and how much information) - all capitalized
# - 'BACK TO LIST' button (capitalized, blue-purple background)

Scenario Outline: Redirect user from concert table to single concert information view
Given I am on 'Main' page
When I press concert row in table for artist '<artist>'
Then I am redirecter to concert information view

Examples:
|artist|
|U2|
|System of a Down|

# Expected behavior:
# * User is redirected to proper page
# * Information for proper concert are displayed (expected picture, title, information for selected artist;
# where, when and how much information - as on selected row on main page)

Scenario: Share the concert information
Given I am on 'Concert' page
When I press 'Share' button
Then I see amount of shares is increased by one

Scenario: Go to main page from single concert page
Given I am on 'Concert' page
When I press 'Back to list' button 
Then I am redirected to 'Main' page
