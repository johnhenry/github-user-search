#Github User Search
This application searches Github's database of users and display his or her repositories. It works by sending requests to GitHub's search API to find a list of potential users. Once a user is selected, the application sends a request for the users full profile and displays it accordingly.

##Features

- [Angular](https://angularjs.org/)
- [Material Design](https://www.google.com/design/spec/material-design/) via ([Angular Material](https://material.angularjs.org/))
- Responsive interface works on most devices!

##Installation

Start by cloning the application.

```bash
git clone git@github.com:johnhenry/github-user-search.git
```

or

```bash
git clone https://github.com/johnhenry/github-user-search.git
```

There will be a pre-built application in 'github-user-search/www'.

##Running the applications

###Open file directly
With some browsers, [Firefox](https://www.mozilla.org/en-US/firefox/) and [Safari](http://www.apple.com/safari/), you can open the 'github-user-search/www/index.html' file directly and use the application.

###Using a server
Some browsers, [Chrome](https://www.google.com/chrome), require that you use a local web server, such as [http-server](https://github.com/indexzero/http-server) to properly run the application.

```bash
http-server github-user-search/www
```

###Demo
You can also check out the demo [here](http://healthy-memory.surge.sh).

##Usage
Open the application in your browser and you will see a search box. As you pause between typing in this search box, a dropdown menu will appear. Select a user from this menu to view his or her profile and repositories.


##Building
If you would like to tweak the pre-built application, ensure that you are within the project directory ('github-user-search').
Install dependencies with npm:

```bash
npm install
```

And run the build script:

```bash
npm run build
```

Read more about [John Henry's Hammer](https://github.com/johnhenry/john-henrys-hammer) to learn how building works.

You can also pass a help flag to learn more.

```bash
npm run build -- --help
```

##Known issues

- Typing Speed -- Multiple searches in rapid succession will cause the application to gracefully fail due to [GitHub's API rate limit](https://developer.github.com/v3/search/#rate-limit). When this happens, the autocomplete function will pause temporarily, but **should** resume after approximately 10 seconds.
