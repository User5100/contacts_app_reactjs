Responsive web app built with 

ReactJS

Webpack 2.0

Preact

Bootstrap 4.0

React Router v4!

![Alt text](landing.gif?raw=true "Landing")

$npm start - To run the application in webpack developer server mode.


Add a contact

![Alt text](add_contact.gif?raw=true "AddContact")

Update an existing contact

![Alt text](update_contact.gif?raw=true "UpdateContact")

Delete a contact

![Alt text](delete_contact.gif?raw=true "DeleteContact")


**** Issues/Improvements ****

1. Currently server side rendering is not fully implemented. Integrate isomorphic-style-loader into Webpack configuration to ensure CSS rendered from the server when the app starts.
2. CSS - the growl displaying confirmation messages to the user should be adjusted for width and horizontally centered.
3. CSS - Strip out redundant CSS code.
3. Babel - Currently the entire es2015 preset included in the production build which is inefficient. We can cut the bundle size shipped to the client even further by identifying and declaring the specific plugins needed instead.
