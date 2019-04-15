## Project set up

To get started first run `npm install` or `yarn install` to install dependencies.

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Challenges

### Functional components

I have minimal prior experience using react hooks and effect but I wanted to use this as an opportunity to get more comfortable with them.  I was familiar in concept but it took me a little longer than it normally would to complete the project while also doing further reading and checking documentation.

### Mobile

Not so much a challenge as a time investment but I wanted to spend the extra time to make the app mobile first with stylings for both mobile and desktop media.

## Reasonings

### UI

I wanted to go with what I felt would be a cleaner UI by displaying the movie posters as 'card' type elements and displaying the movie details when the image is hovered.  To me this makes for a nice user experience and makes the page look visually less cluttered.  I used flexbox rows to display the results.  With more time I would use media queries and javascript to create 'ghost' flex items to fill the last row in order to keep the 'columns' of flex items spaced consistently when the last row does not have enough items to fill the row.

### Debounce

I added a debounce to the search input so that the search would update when the user stops typing instead of every keystroke.

### Infinite Scroll

I used an infinite scroll type functionality to load the next page of results when the user scrolls to the bottom of the page if additional results exist.

## Next steps

### Optional Feature

It is important to me that things are both functional as well as visually appealing.  I opted to focus on making sure I was happy with the user experience which did not leave me any time to work on the optional feature.

### Testing

Given more time I would implement testing for the application.
