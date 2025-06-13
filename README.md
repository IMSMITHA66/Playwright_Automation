<h1>
  Practice api test automation with Demo sites <a href="https://restful-booker.herokuapp.com/apidoc/index.html">Restful-booker</a>
</h1>

## PLaywright features
API testing using:

- Playwright https://playwright.dev/

### Prerequisites
You need to have Node.js and VS code installed on your machine.
## Commands Used

### Playwright installation

```shell
npx playwright install
```

### Run all tests in Playwrigh
```shell
npx playwright test 
or
npm run test
```
### To open last HTML report
```shell
npx playwright show-report
```
### Run all tests and show test report
```shell
npm run report
or
npx playwright test --reporter=html
```


### We have Automated all the API Functionality like generating auth token, POST,GET,PUT,PATCH,DELETE.
### We have added scenarios for 
###
###
###

### Repo is integrated with Jenkins which will Automatically triggers for git push Action.
### Jenkins will mail the reports to endusers Once completion of Execution.

### Faced Issue while setting Extended email configaration in Jenkins.
### Need to provide credential for sender mail id with password generated for app in gmail account.