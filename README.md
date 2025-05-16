# A typescript based project to simulate USSD
## Overview
This project uses `Typescript` implemented with a linter `ESlint`

It contains some of the following features:
  - displaying the menus with multiple choices
  - navigating the menus
  - exiting the app

## Step to run the project
Make sure you node version 22.x on your computer
First, install all dependencies : 
```
npm install
```

Next, run the linter to verify if there is any warnings :
```
npx eslint .
```

And then, build the javascript file :
```
npx tsc
```

Run it :
```
node ussd.js
```
(There is already a ussd.js file in the repo but you can delete it)

## Convention
For this project there are two rules for namning conventions for variables and functions
```
rules: {
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "variableLike",
                    format: ["camelCase"],
                },
                {
                    selector: "function",
                    format: ["camelCase"]
                },
                {
                    selector: "variable",
                    types: ["boolean"],
                    format: ["PascalCase"],
                    prefix: ["is", "should", "has", "can", "did", "will"],
                },
            ],
        },
```

`selector: "variableLike"`
This means to apply the rules to variables, function parameters, class properties, and class methods—basically any identifier that behaves like a variable.

`format: ["camelCase"]`
Requires all names of the above selector to be in camelCase

`selector: "function"`
This means to apply the rules to function names.

`selector: "variable"`
This targets only variables (not parameters or properties, etc.)

`types: ["boolean"]`
This rule applies only to variables explicitly or implicitly typed as boolean

`format: ["PascalCase"]`
Requires all names of the above selector to be in PascalCase
Boolean has to be in PascalCase because eslint does not take into account the prefix

`prefix: ["is", "should", "has", "can", "did", "will"]`
The boolean variable must begin with one of these logical prefixes, which improves readability and clarity.
