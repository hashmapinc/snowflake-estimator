![CircleCI](https://img.shields.io/circleci/build/github/hashmapinc/snowflake-estimator/main?label=CircleCI%20Master%20Build)

# Snowflake Estimator
Welcome to the Snowflake Estimator project! 

You can access a live version of the tool at https://estimator.snowflakeinspector.com

## How to run locally for development
To build the project, ensure you have `npm` installed and do the following:
- Run `npm i` to install dependencies
- Run `npm start` and visit http://localhost:3000

## How to build for production:
To build the project, ensure you have `npm` installed and do the following:
- run `npm i` to install dependencies
- run `npm run build` to build the static website. The files will show up in `build/`

## Reach out + Feedback
[You can contact us at here](https://www.hashmapinc.com/reach-out) if you want to learn more about Hashmap.

[You can also provide feedback on this tool at here](https://docs.google.com/forms/d/e/1FAIpQLSc6B82kzw1y9ZwxurukXdgKmQacKiTwof099IFGXE-7NSI77Q/viewform?usp=sf_link)

## Note
To build and run locally, you may need to temporarily remove "--openssl-legacy-provider" from the package.json file.  Then put back when ready to deploy.  Some objects were deprecated in Nodejs that are causing issues with SSL.