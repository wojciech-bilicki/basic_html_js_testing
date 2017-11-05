Feature: Your tickets 
As a User I want to see all tickets I have selected so that I could pay or delete it from my list

Scenario: Your tickets page view

Given I am on 'Your tickets' page
When I observe the page
Then I see it is displayed correctly

# Expected behavior:
# * On the top of page user can see:
# - header 'Your Tickets' on the left side
# - two buttons 'Pay for all' (green background) and 'Delete all' (red background) on the right
# * below the header user can see table with chosen tickets
# * Header of the table: ARTIST, CITY, DATE, PRICE,TICKETS, STATUS (all capitalized)
# * Rows of table contains coresponding informatins
# * In row of table, between amount of tickets and the status - two buttons are placed: PAY (green background)
# and DELETE (red background) - button PAY is placed above button DELETE

Scenario: Payment status 
Given I am on 'Main' page
And I have added some concert to my list
When I go to 'My tickets' page
And I observe status for added concert
Then I see status for 'this' tickets is 'not payed'

# Tutaj pytaniem pozostaje co w prawdziwej aplikacji dziać się powinno w sytuacji gdy: dodałam bilety, 
# zapłaciłam, dodałam kolejne na ten sam koncert i jaki mam teraz status

Scenario: Pay for all tickets
Given I am on 'Your tickets' page
And some tickets are added to my list
When I press 'PAY FOR ALL' button
Then I see status for 'all' tickets is 'payed'

Scenario: Delete all tickets
Given I am on 'Your tickets' page
And some tickets are added to my list
When I press 'DELETE ALL' button
Then I see 'all' tickets were deleted from my list


Scenario: Pay for single ticket
Given I am on 'Your tickets' page 
And some tickets are added to my list
When I press 'PAY' button 
Then I see status for 'this' tickets is 'payed'

Scenario: Delete single ticket
Given I am on 'Your tickets' page
And some ticets are added to my list
When I press 'DELETE' button
Then I see 'this' tickets were deleted from my list