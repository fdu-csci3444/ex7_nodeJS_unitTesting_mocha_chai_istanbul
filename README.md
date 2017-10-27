# JS Unit testing 'Hello World' with Mocha and Chai and Istanbul
Example project for JS Unit testing 'Hello World' with Mocha and Chai and unit test coverage with Istanbul and nyc.

Using
+ Mocha - JS Unit test runner, to unit test in. It supports BDD(default), TDD, Exports, QUnit and Require style interfaces. By default it looks for unit test files ./test/*.js or ./test/*.coffee.  
+ Chai - JS assertion library, that is better than 'assert' lib that comes default with nodeJs
+ Istanbul - JS code coverage(how much of code is covered by unit tests) library
    - execute(execute and create coverage report) JS unit tests via mocha test runner using istanbul, which checks coverage and creates dir "coverage" where it puts its coverage info. Note you need to put mocha arguments after lonely --
    ```
    istanbul cover ./node_modules/mocha/bin/_mocha -- --recursive
    ```
    - then can open the report in a browser
    ```
    opn coverage/lcov-report/index.html
    ```
    - then can check coverage(from last run)
    ```
    istanbul check-coverage
    istanbul check-coverage --per-file
    istanbul check-coverage --per-file --lines 60 --functions 95 --branches 85
    ```
+ Nyc - istanbul's state of the art command interface. It uses istanbul behind the scenes. It can work with many JS unit runners like mocha. It can also integrate with continuous-integration flow like "travis-ci". It can also be integrated to provide coverage reports to github via "coveralls.io" and "codecov".
    - execute(execute and create coverage report) JS unit tests via mocha test runner using nyc, which checks coverage and creates dir ".nyc_output" in addition to istanbul's "coverage" where it puts its coverage info
    ```
    nyc mocha --recursive
    ```
    - then can open the report in a browser
    ```
    opn coverage/lcov-report/index.html
    ```
    - then can open the report(which reports result of last run) in console as well
    ```
    nyc report
    ```
    - then can check coverage(from last run)
    ```
    nyc check-coverage
    nyc check-coverage --per-file
    nyc check-coverage --per-file --lines 60 --functions 95 --branches 85
    ```
+ opn-cli - Open a file or url in user's preferred application in command line or in nodeJs code. Using it to open coverage report index.html in a browser
```
opn coverage/lcov-report/index.html
```

Will add
+ Sinon - JS lib for **faking** external dependencies. It can spy, stub, mock
    - Spy; used to get information about function calls. For example, a spy can tell us how many times a function was called, what arguments each call had, what values were returned, what errors were thrown, etc
    - Stub; like spies, except in that they replace the target function. They can also contain custom behavior, such as returning values or throwing exceptions. They can even automatically call any callback functions provided as parameters
    - Mock; can do everything a spy and stub can do. Typically used when you need stub, but need to verify multiple more specific behaviors.

## TDD, BDD
### TDD (Test Driven Development)
+ Developer writes test suite containing unit tests, for functions that have not been implemented
    - Unit tests are composed of test suites that can contain other suites or directly tests
    - *suite* is keyword for suites
    - *test* is keyword for tests
+ Developer runs tests and see them all fail
+ Developer starts to implement them, and watch slowly more and more tests passing, until all implementation is done with all tests passing
+ Then in future, during a refactoring or feature addition, developer can repeat the same cycle, but can mostly rest assured that modification had most likely not broken existing features


### BDD (Behavior Driven Development)
+ Basically very similar to TDD, but you specify behaviour and specification, which are slightly more general sense and easier to read then test suites and tests. NOTE suggest following BDD.
    - *describe* is keyword for behavior
    - *it* is keyword for specification

## Setup
+ Create project dir
```
mkdir -p /c/fdu/csci3444/projects/ex7_JS_unitTesting_mocha_chai_istanbul
cd  /c/fdu/csci3444/projects/ex7_JS_unitTesting_mocha_chai_istanbul
```
+ Create project's package.json
    - either enter fields one by one
    ```
    npm init
    ```
    - or let 'npm init' create a default package.json and edit it afterwards. This is quicker
    ```
    npm init --yes
    ```
+ Install dev dependencies (meaning they are not needed for prod, just for dev) of Mocha, Chai, Istanbul, Nyc and let them be auto added to package.json. Also installing istanbul and nyc globally to 
```
npm install mocha chai istanbul nyc --save-dev
```
+ Install related helpfull tools globally
```
npm install -g istanbul nyc opn-cli 
```
+ Modify package.json's script element to be as;
```
"scripts": {
"test": "npm run testAndCoverage",

"testOnly": "npm run test_mocha_all",

"test_mocha_testDirOnly": "mocha",
"test_mocha_all": "mocha --recursive",
"test_mocha_all_TDD_asWellAs_BDD": "mocha --recursive --ui tdd",

"testAndCoverage": "npm run testAndCoverage_via_nyc",

"testAndCoverage_via_nyc": "nyc mocha --recursive",
"testAndCoverage_via_nyc_TDD_asWellAs_BDD": "nyc mocha --recursive --ui tdd",

"testAndCoverage_via_istanbul": "istanbul cover ./node_modules/mocha/bin/_mocha -- --recursive",
"testCoverage_via_istanbul_2": "./node_modules/.bin/istanbul cover ./node_modules/mocha/bin/_mocha -- --recursive",
"testAndCoverage_via_istanbul_DONTwork": "istanbul cover _mocha",

"checkCoverage": "npm run checkCoverage_perFile_nyc",
"checkCoverage_overAll_nyc_defaults": "nyc check-coverage || true",
"checkCoverage_overAll_nyc": "nyc check-coverage --lines 90 --functions 95 --branches 85 || true",
"checkCoverage_perFile_nyc": "nyc check-coverage --lines 90 --functions 95 --branches 85 --per-file || true",
"checkCoverage_perFile_istanbul": "istanbul check-coverage --lines 90 --functions 95 --branches 85 --per-file || true",

"openCoverageReport": "npm run openCoverageReport_inBrowser",
"openCoverageReport_inShell_via_nyc": "nyc report",
"openCoverageReport_inBrowser": "opn coverage/lcov-report/index.html",

"testAndCoverageAndReport": "npm run testAndCoverage && npm run openCoverageReport"
},
```
## Write unit tests in mocha
+ Create dir test
+ Create unit test JS files like; test/myMathTest.js

## To run
### To run JS unit tests via mocha without any test coverage
+ By default mocha expects JS unit tests to be under directory *test*. Also mocha expects BDD as the default user interface of JS unit test files. So, if all your tests are BDD, to run your JS unit tests under test dir
```
mocha
```
 + Or to run JS unit tests under another dir name
```
mocha test/mySubDir
```
+ To run a specific JS unit test, for example test/myMathTest.js that has unit tests for src/myMath.js, from command prompt (of git bash) at root of the project issue;
```
cd /c/fdu/csci3444/projects/ex7_JS_unitTesting_mocha_chai_istanbul
mocha test/myMathTest.js
mocha test/myMathTest
mocha "./test/**/*Test.js"
mocha "./test/**/*ServiceTest.js"
```
+ To run TDD style unit tests. NOTE default user interface is BDD, so if you have some tests in TDD you have to pass "--ui tdd", which would run TDD tests in addition to BDD tests. NOTE also -u is short had of --ui
```
mocha --ui tdd testTDD
mocha -u tdd testTDD
```
+ To run all tests under a test directory, you need to enable recursively running them. Note by default mocha looks for unit test JS files under directory 'test' only. Note "--recursive" means, include all sub directories under test dir.
```
mocha --recursive
mocha --recursive test
```
### How npm scripts in package.json are defined and used
+ You define npm scripts in package.json like shown on top of this README
+ You run a npm script(for example "test" script) defined in a package.json from command line like;
```
npm run test
```
+ A npm script can invoke other ones in sequence or in parallel
    - A script that invokes other 2 scripts in *sequence*
    ```
    "executeScript1ThenScript2": "npm run script1 && npm run script2",
    "script1": "mocha --recursive",
    "script2": "istanbul cover ./node_modules/mocha/bin/_mocha -- --recursive"
    ```
    - A script that invokes other 2 scripts in *parallel*
    ```
    "executeScript1AndScript2": "npm run script1 & npm run script2"
    ```

### To run JS unit tests and their coverage reports via npm scripts defined above
+ To delete previous JS unit test coverage report directories (.nyc_output, coverage) of nyc and istanbul
```
npm run cleanCoverageDirs
```
+ To run all mocha unit tests only via npm, using script "testOnly" we had added to package.json above
```
npm run testOnly
``` 
+ To run all mocha unit tests and generate coverage reports(both nyc and istanbul) using npm script "test";
```
npm run test
```
+ To check JS unit test coverage
```
npm run checkCoverage
```
+ To see JS unit test coverage report in console
```
npm run openCoverageReport_inShell_via_nyc
```
+ To see JS unit test coverage report opened in a browser
```
npm run openCoverageReport
```
+ To do all above at once; run all mocha unit tests and generate coverage reports(both nyc and istanbul) and see test result details in console and see coverage report in console and finally open coverage report in browser
```
npm run testAndCoverageAndReport
```
