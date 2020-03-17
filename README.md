# 20-03-17 React Forms and Events Lecture

## Review
- Create a react app in the directory that you cloned called `form-lecture-app`
- Create a folder to hold all new components
- Create a class based container component called `AppContainer` that renders an h1 tag with the text `03 17 2020` and an h2 tag with the text `The button has been clicked 0 times`
- Render the `AppContainer` component in the default parent component `App.js`
- Create a class based component called `Review` that renders an h3 tag with some text and a button with the text `Click Me`
- Render the `Review` component in the `AppContainer` component and pass down the text to be rendered in the h3 tag
- When the button is clicked update the display of the number of times the button is clicked in the `AppContainer` component

## Events + Forms
- Create a new class based component called `StudentForm` that renders a form with a name field and average grade field
- When the form is submitted push the submission to an array and clear out the form fields
- Display all submissions below the form