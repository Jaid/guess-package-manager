# guess-package-manager


Detects the packager manager used in a Node project. Currently supports npm, pnpm and yarn.

## Installation
<a href='https://npmjs.com/package/guess-package-manager'><img alt='npm logo' src='https://github.com/Jaid/action-readme/raw/master/images/base-assets/npm.png'/></a>
```bash
npm install --save guess-package-manager@^1.1.3
```
<a href='https://yarnpkg.com/package/guess-package-manager'><img alt='Yarn logo' src='https://github.com/Jaid/action-readme/raw/master/images/base-assets/yarn.png'/></a>
```bash
yarn add guess-package-manager@^1.1.3
```



## Documentation
Converts an array to an object with static keys and customizable values

**Kind**: Exported function  
**Returns**: <code>&quot;npm&quot;</code> \| <code>&quot;pnpm&quot;</code> \| <code>&quot;yarn&quot;</code> - A generated object based on the array input  

| Param | Type | Description |
| --- | --- | --- |
| directory | <code>string</code> | Project directory that uses a package manager |

**Example**  
```javascript
guessPackageManager()
// npm
```
**Example**  
```javascript
guessPackageManager("/home/me/development/yarn-project")
// yarn
```


## License
```text
MIT License

Copyright © 2019, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
