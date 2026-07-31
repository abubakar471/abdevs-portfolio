# AB DEVS - Personal Portfolio Website
Abu Bakar's personal portfolio webiste designed with Figma and built with HTML, CSS and Javascript, while completely unit tested with Jest. 

## Repository Structure

```text
abdevs-portfolio/
├── index.html
├── styles.css
├── .babelrc
├── package.json
├── scripts/
│   ├── script.js
│   └── helpers/
│       ├── validations.js
│       └── validations.test.js
├── public/
│   ├── docs/
│   │   └── resume.pdf
│   ├── icons/
│   └── images/
└── README.md
```

# How to run the app 

```
npm install
npx serve
```

Note: without 'npx serve' the site won't be able to import script.js as we have marked it explicitly as a type="module". 

# Installing and Integrating our Testing framework JEST

```
npm init -y 
npm i -D jest babel-jest @babel/core @babel/preset-env
```

#### @/.babelrc

.babelrc helps our testing framework JEST in understanding modern ES6 features.

#### How to run the Tests

```
npm run test
```

