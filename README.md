## Netflix Concept

This application (a Netflix clone) was built using React (Custom Hooks, Context), Firebase, & Styled Components. I have built the following pages within this application: sign in, sign up, browse, & the homepage. There are four different pages, some using protected routes with auth listeners. Firebase firestore handles all the data and that data is retrieved using a custom hook; authentication is used on all pages, which is handled by Firebase as well.

I used compound components (just a design pattern) to build my components and the styling is all handled via styled components. Using compound components made my components easy to test. You can contribute to this project (highly encouraged!).

# File Structure
```
.

├── public

│   ├── images

│   ├── videos

├── src

│   ├── components

│   │   └── accordion, card, feature, footer, form, header, jumbotron, etc

│   ├── containers


│   ├── pages

│   ├── containers

│   ├── pages

│   └── hooks

├── LICENSE

└── README.md
```

![Preview](netflix-preview.png?raw=true)
