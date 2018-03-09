# auto-router
auto router by file path for express

# auto-router
auto router by file path for express

if you have a file named `user.js` in `routes/api`, `auto-router` will do this:
```javascript
app.use('/api/user', require('path/to/user.js'))

// for the file 'routes/index.js'
app.use('/', require('path/to/index.js'))
```

# Install

```bash
 npm install auto-router --save-dev
```

# Usage

```JavaScript
const app = require('express')
const AutoRouter = require('auto-router')

AutoRouter.init(app, path.join(__dirname, 'path/to/routes'))
```
