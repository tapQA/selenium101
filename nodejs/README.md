# Set up for testing with Node.js

### Install Node.js

##### For Mac

If you use homebrew, execute
```
brew install node
```

Otherwise, follow the Windows instructions.

##### For Windows 

- Download the node.js installer from https://nodejs.org/en/download/.
- Select the v4.x installer appropriate for your machine.
- Run the installer with all default settings.

----------------------------

##### Next Steps

1. Clone this code repository
2. Install dependencies with `npm install`
3. Install a selenium server (suggestion: selenium-standalone)
4. Run the example test
``` nodejs
mocha wdio_espn.js
```