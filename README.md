<h1>
  Practice api test automation with Demo sites <a href="https://restful-booker.herokuapp.com/apidoc/index.html">Restful-booker</a>
</h1>

## PLaywright features
API testing using:

- Playwright https://playwright.dev/

### Prerequisites
You need to have Node.js and VS code installed on your machine.
## Commands Used

### Setup Instruction:

### Clone repo

```shell
git clone https://github.com/IMSMITHA66/Playwright_Automation.git
cd API_Automation
```

### Playwright dependencies installation

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
Post Execution html report will be generated under playwright-report folder

```shell
npx playwright show-report
```
### Run all tests and show test report
```shell
npm run report
or
npx playwright test --reporter=html
```

### Env config
You can use .env files for storing data.

```shell
const url = BASEURL + `${process.env.id}`;
```



### Automated all the API Functionality like generating auth token, POST,GET,PUT,PATCH,DELETE.
### Added scenarios for validating without authtoken, Validating Put call post Delete,Validating get call post delete.
### html report will be generated post execution.
### Repo is integrated with Jenkins which will Automatically triggers for git push Action.
### Hosted the jenkins in Azure linux VM justed to avoid using local host.
### Jenkins will mail the html reports and console log to endusers Once completion of Execution.



### Faced Issue while setting Extended email configaration in Jenkins.
### Need to provide credential for sender mail id with password generated for app in gmail account.
###