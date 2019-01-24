# getClass.react

[![getClass.js on NPM](https://img.shields.io/npm/v/getclass.react.svg?style=flat-square)](https://www.npmjs.com/package/getclass.react)

Better react class names.

Follow these steps to get started:

1. [Why](#why)
2. [Usage](#usage)
3. [Install](#install)

### Why

This is not the first utility released designed to make adding classNames easier in React.  However, this is the smallest, fastest, and most fully featured utility available.  Key differences between `getClass` and other alternatives:

* allows the use of if/else classes (see [usage](#usage))
* written in the fewest lines of code possible
* maintained in ES6

### Usage

getClass.react is a simple, small (< 1KB), dependency-free utility that allows you to dynamically set class names for React components.  You can use it in a variety of ways:

1. Use strings to add classes.
2. Use objects to add classes conditionally.
3. Use arrays with an object to express if/else classes.
4. Classes are never duplicated.

getClass.react draws inspiration from the Angular `ng-class` method.

```es6
getClass('apple', {'pie': true})  // output -> 'apple pie'

// **standard use

getClass({
  'apple': true,
  'pie': false
})  // output -> 'apple'

getClass(
  {'apple': true}, 
  {'pie': true}
)  // output -> 'apple pie'

// **if/else

getClass({
  [1 + 2 === 3]: ['apple', 'pie']
})  // output -> 'apple'

getClass(
  `${1 + 2 === 3 ? 'apple' : 'pie'}`
)  // output -> 'apple'

// **complex use

getClass('apple', {
  'apple': true
}) // output -> 'apple'

getClass('apple', {
  'pie': 1 + 2 === 3,
  [1 + 2 !== 3]: ['is good', 'is bad']
})  // output -> 'apple pie is bad'
```

Inside a react component:

```es6
// props = {sample: true, badSample: false}

<SampleComponent
  className={getClass('apple', {
    'pie': this.props.sample,
    'is-good': this.props.badSample
  })}
/>  

// className='apple pie'

<SampleComponent
  className={getClass('apple', {
    [this.props.badSample]: ['pie', 'soda']
  })}
/> 

// className = 'apple soda'
```

### Install

Using NPM, install getClass.react, and save it to your `package.json` dependencies.

```bash
$ npm install getclass.react --save
```

Then import, naming it according to your preference.

```es6
import getClass from 'getclass.react'
```

## Browser Support

getClass.react depends on the following browser APIs:

* [Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

Consequently, it supports the following natively:

* Chrome 5+
* Firefox 4+
* Safari 5+
* Opera 12+
* IE 9+

## License

[MIT](https://opensource.org/licenses/MIT). © 2019 Christopher Cavalea
