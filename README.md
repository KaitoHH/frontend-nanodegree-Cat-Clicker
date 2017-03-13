## Cat Clicker
This project involves several requirement changes. I wrote this project from naive-method implementation to an MVC-like approach.

Checkout these commits for different requirements.

| requirement | commit id | remark |
| --- | --- | --- |
| initial | N/A | simple |
| second | `6d626c` |  |
| premium | `457613` |  |
|  | `b00000` | a refactor version |
| premium pro | `3c20ba` |  |


### Requirement Change
#### Initial
##### Visuals
- The application should display a picture of a cat and a number of clicks.
- The specifics of the layout do not matter, so style it however you'd like.
##### Interaction
- The number of clicks should increment when the cat picture is clicked.

#### Second
##### Visuals
- The application should display two cats. Each cat includes
 - The application should display two cats. Each cat includes
 - a picture of the cat
 - text showing the number of clicks
- The specifics of the layout do not matter, so style it however you'd like.
##### Interaction
- The number of clicks should increment when each cat picture is clicked.

#### Premium
##### Visuals
- The application should display
 - a list of at least 5 cats, listed by name
 - an area to display the selected cat
- In the cat display area, the following should be displayed
 - the cat's name
 - a picture of the cat
 - text showing the number of clicks
- The specifics of the layout do not matter, so style it however you'd like.
##### Interaction
- When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
- The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.

#### Premium Pro
##### Visuals
- The application should display
 - a list of cats by name
 - an area to display the selected cat
 - an admin button
 - an admin area with inputs for changing the cat's name, url, and number of clicks (hidden by default)
- In the cat display area, the following should be displayed
 - the cat's name
 - a picture of the cat
 - text showing the number of clicks
- The specifics of the layout do not matter, so style it however you'd like.
##### Interaction
- When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
- The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.
- When the admin button is clicked, the admin area should appear with the inputs filled in for the currently-selected cat.
- When the cancel button in the admin area is pressed, the admin area disappears.
- When the save button in the admin area is pressed, the currently-selected cat's values update with the values in the admin area, and the admin area disappears.
