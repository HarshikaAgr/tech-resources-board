# Community Board - Tech Resources Board

## Description

A responsive React app displaying curated coding and software engineering resources. Users can browse 10+ resource cards, each showing the title, category, difficulty level, description, and a direct link to the resource.

**Tech used:** HTML | CSS | JavaScript | React | Vite

## Features

- [x] The app has a cohesive, unique theme for events or resources relevant to a specific community
- [x] Header/title describing the theme is displayed
- [x] At least 10 unique events or resources are displayed in a responsive card format
- [x] The cards are displayed in an organized format (grid layout)
- [x] Each card includes information about the event or resource
- [x] Buttons or links to related resources are on each card component
- [ ] The site is responsive for both desktop and mobile formats

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

One challenge I encountered was understanding how the `map()` function works in React to render multiple components from an array.

At first, it wasn't obvious how to go from a plain JavaScript array of objects to actual Card components showing up on the screen. I learned that `.map()` loops over the array and returns a new Card component for each item, passing that item's data as props. I also ran into a console warning about a missing
`key` prop, React requires each item rendered in a list to have a unique `key` so it can track which card is which when the page updates. Adding `key={resource.id}` to each Card in the map fixed that warning and taught me why React needs
to identify list items individually.

## License

Copyright [2026] [Harshika Agrawal]

Licensed under the Apache License, Version 2.0.