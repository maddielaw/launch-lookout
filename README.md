# Launch Lookout 🚀

![Screen Shot 2022-04-24 at 6 58 53 PM](https://user-images.githubusercontent.com/92049763/165004782-b0d648f3-c76e-4083-8fb7-c901d513cfa3.png)

## Description

Launch Lookout is a solo showcase project built in 5 days.

For those who love space exploration but never seem to be able to catch an important rocket launch until after it's already happened, Launch Lookout is here to help!

Launch Lookout is designed to provide updated information on the next upcoming launches from global public and commercial aerospace companies, along with countdown timers, mission details, links to live webcasts and more. Need some extra help keeping track? Bookmark a launch you don't want to miss to add it to your Bookmarks section.

The goal of this project was to incorporate React.js fundamentals, React Router, end-to-end testing with Cypress, RESTful APIs, as well as our own creativity to create a showcase piece.

## Motivation
- Demonstrate mastery of React.js, React Router, Cypress, and asynchronous JavaScript
- Develop user personas and stories to inform site design and target audience and solve a unique problem

## Technology Used
- React.js
- React Router
- React Context API
- JavaScript
- HTML / JSX
- CSS3
- Fetch API
- Cypress
- date-fns
- PropTypes

## Deployment
Site is deployed via Surge and can be accessed 👉🏻 [here](https://launch-lookout.surge.sh/)

## Features

### Main Dashboard

On load the user will see the main dashboard with the next immediate launch displayed at the top along with a countdown timer. The user can scroll down to view additional launches and bookmark them if they choose. On the right-hand panel, the user can view a list of upcoming spaceflight events such as splashdowns and EVAs and view the livestream links.

![launch-lookout-main-demo](https://user-images.githubusercontent.com/92049763/165005008-25d6faf9-c624-4fc3-adb6-c152f29e8339.gif)

<details>
  <summary>Under the Hood</summary>
  Upcoming Launches are populated using the fetch API from the Space Launch Now API, stored within a central context provider, and given to the children components as needed for rendering. Events are retrieved from a separate endpoint and stored only in the Events component.
</details>
</br>

### Single Launch Detail

When a user clicks on the View Launch Details button attached to any of the upcoming launches, they are directed to a separate page with a unique URL where they can view additional information about that launch including mission description, mission patch, launch provider and rocket type information, and launch location. The user can also bookmark a launch from this page.

![launch-lookout-single-page-demo](https://user-images.githubusercontent.com/92049763/165005044-0e248a2e-b25c-46fa-bfd5-c47a2fdeebb4.gif)

<details>
  <summary>Under the Hood</summary>
  Additional launch detail is retrieved from the main Data Context provider and rendered out.
</details>
</br>

### Bookmark a Launch

A user can bookmark a launch from either the main dashboard or from the single launch page.

<details>
  <summary>Under the Hood</summary>
  Bookmarking flow is handled with a Bookmark Context Provider that is able to store bookmarks in state and pass that data to various child components. This allows launches to be bookmarked and their visual success cue to persist across pages.
</details>
</br>

### Bookmarked Launches View 

From the main dashboard, the user can navigate to the Bookmarks page where they can see all of their bookmarked launches. From here they can navigate to each launch's detail page, as well as remove launches from the bookmarks.

![launch-lookout-bookmark-demo](https://user-images.githubusercontent.com/92049763/165005078-7c7ca54f-1351-425b-9464-79531d393197.gif)

<details>
  <summary>Under the Hood</summary>
  Clicking on the delete button for a launch will remove that launch from the Bookmark Context state and re-render the page.
</details>
</br>

### Testing, Responsiveness & Accessibility

Launch Lookout is fully end-to-end tested with Cypress. URLs are tested and all network requests are stubbed. The site was also built to be screen-reader accessible.

Launch Lookout is also responsive to desktop, laptop, tablet, and various mobile screen sizes.

![launch-lookout-mobile-demo](https://user-images.githubusercontent.com/92049763/165866912-91f39776-51f7-4a8e-b494-ea173acbbbdb.gif)


## Future Additions
- Incorporate Local Storage or a remote Express microservice so bookmarked launches persist after page refresh
- Incorporate the built in Notifications API for in-browser notifcations on bookmarked launches occurring in the next 24 hours
- Add additional section for spaceflight news or additional information on rocket and aerospace tech capabilities for each launch

## Credits
Author: [Maddie Law](https://github.com/maddielaw)

Project spec -> [here](https://frontend.turing.edu/projects/module-3/showcase.html)

[Turing School of Software and Design's GitHub](https://github.com/turingschool-examples)

[Icons - React Icons](https://react-icons.github.io/react-icons)

[Space Images - Freepik](https://www.freepik.com/vectors/)