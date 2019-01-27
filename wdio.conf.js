process.env.TS_NODE_FILES = true
require('ts-node').register()

exports.config = {
    specs: [
        './tests/**/buy*.ts'
    ],
    port: '9515',
    path: '/',
    services: ['chromedriver'],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome'
    }],
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    baseUrl: 'http://ip-5236.sunline.net.ua:38015',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    },
    before: () => {
        browser.timeouts('implicit', 2000);
    },
    afterHook: () => {
        browser.timeouts('implicit', 2000);
        browser.deleteCookie();
        browser.sessionStorage('DELETE');
    }
}
