# Chocolate-Bundle

Approach:

Chocolates Array:
The project starts by defining an array of chocolate objects, each containing information about the chocolate's name, price, and image.
Displaying Chocolates:The displayChocolates function dynamically creates HTML elements for each chocolate, including an image, name, price, and an "Add" button. Event listeners are set up for the "Add" buttons.

Handling Chocolate Selection:The handleChocolateSelect function is triggered when a user clicks the "Add" button. It ensures that the user can only select up to 8 chocolates and updates the selected items list and total price accordingly.

Updating Selected Items and Total Price:The updateSelectedItemsList function dynamically updates the selected items list in the selection panel based on the user's choices.
The updateTotalPrice function calculates and displays the total price of the selected chocolates.

Initialization:The displayChocolates function is called to initialize the page with the list of available chocolates.
