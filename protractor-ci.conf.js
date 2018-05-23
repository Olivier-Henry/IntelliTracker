const confif = require('./protractor.conf').config;

config.capabilities = {
    browserName: 'chrome',
    chromeOptions: {
        args: ['--no-sandbox']
    }
}

