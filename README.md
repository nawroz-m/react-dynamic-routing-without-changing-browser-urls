# Create a Dynamic Routing system in react where the browser URL remains unchanged or Internal routing

## This solution offers several advantages:

**1. Performance:** It only renders the active route, improving performance for larger applications.

**2. Scalability:** You can easily add new routes without modifying the main App component.

**3. Flexibility:** The useRouter hook provides an easy way to access and modify the current route from any component.

**4. Single URL:** The browser URL remains unchanged.

## Disadvantages:

**1. It's not saving the routes to histroy**

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## References

1.  (https://legacy.reactjs.org/docs/context.html).
2.  (https://legacy.reactjs.org/docs/hooks-intro.html).
3.  (https://reactrouter.com/en/main).
4.  (https://developer.mozilla.org/en-US/docs/Glossary/SPA).
