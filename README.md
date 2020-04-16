# Hubs Web API

Guided project for **Web Testing I** module.

In this module we will cover the basics of automated testing and use `jest` to write unit tests.

## How to find ideas on what to test.
Start with the user stories to discover the "what" to test.
Then look into the scenarios to determine the "how" to test.

### User stories
As an ... role
I want ... features
So that ... values 

### Scenarios
Given ...
  and ...
  and ...
When ...
  and ...
  and ...
Then ...
  and ...
  and ...


### Test Driven Development/Design
Red -> Green -> Refactor

Red: write a failing test.
Green: write enough implementation code to make the test pass.
Refactor: rewrite the code without changing the functionality. Reformatting codewithout breaking the functionality.


Why Do We Test?
Testing is an important skill for a web developer to have. Its hard to anticipate every way that a user might interact with your site, not to mention it is incredibly time-consuming to manually test all of those options. That’s where automated testing comes in. Any major company will use automated testing on its websites as a safety net, to prevent regressions, and to get a better overall understanding of how an application works. As such, testing is a great thing to have on your resume!

We’ll quickly review what testing is before jumping into tooling we can use for automated testing. Generally speaking, testing is code that checks if the application code is correct.

If we don’t have tests, it’s safe to assume the following:

application code has to be tested manually
there is no way to know if a change broke another piece of code
you cannot be sure if the code is correct
manually testing takes a lot of unnecessary time
adding new features becomes slow
Advantages of Testing
verifies edge cases
developer can concentrate on current changes (safety net)
Drawbacks of Testing
more code to write and maintain
more tooling
additional dependencies
may provide a false sense of security
trivial test failures may break the build
regressions (when a new feature breaks existing code)
What tools do we use for testing?
Hopefully by now you’re convinced that testing is important and want to start using it in your projects. In this course you’ve already used react testing library to write tests for React components, but there are other tools available. Examples of those tools are: Jest, Mocha/chai, jasmine, qunit, enzyme, supertest, istambul, karma, and cypress.

With so many testing tools available, how do you even begin to set up custom testing for a project? It helps to know why you want to test, so that you can pick the tool most suited to your needs.

Jest
We’ll use the testing library Jest to start setting up our own tests. Jest runs under the hood in react testing library, so a lot of what we do moving forward should look somewhat familiar. With create-react-app and react testing library there was no need to install and set up Jest, but as you grow as a web developer you will likely run into a need to install and use Jest on its own.

Jest is a test runner and command line interface npm package. It was originally made by Facebook and is included out-of-the-box with create-react-app. Jest is a very general purpose testing tool, and it works best with React applications, though it works with other frameworks as well. In addition to the types of tests we’ve seen, Jest can run asynchronous tests, snapshot testing, and produce coverage reports.

Watch Mode
You’ll learn how to install and configure Jest in the tutorial below, but first, lets talk briefly about watch mode. Instead of running tests manually, Jest has a built-in feature called watch mode that will run tests automatically as files change. Jest detects these changes automatically and only runs the tests pertaining to the changes. This is one of the reasons developers love Jest so much, and hopefully one that you’ll find equally compelling.

Follow Along
Install jest with npm. We first need to install Jest as a developent dependency. As soon as we do, Jest dependencies will show up in our package.json file.
Copy
npm install -D jest
Add test script. In package.json we’ll need to indicate that we’re using jest for testing. This can be done by simply adding "test": "jest --watch", to your “scripts” object.
Run Tests. We can start Jest by typing npm test in a terminal window at the root of the project. However, since there are no tests written, it will return an error “No tests found” because we haven’t actually written any tests yet, so let’s move on.
Create test files. By convention, Jest will find your tests in two ways: 1) by placing .js files inside a folder called __tests__ or 2) by ending the name of a file in .test.js or .spec.js. Technically, you could give the __tests__ folder a different name, but then you’d need to manually change where Jest looks for test files.
