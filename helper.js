module.exports = () => {
    global.loadApp = (moduleName) => { return require(`${APP_PATH}/${moduleName}`) };
    global.loadMiddleware = (middlewareName) => { return loadApp(`middleware/${middlewareName}`) };
    global.loadController = (controllerName) => { return loadApp(`controllers/${controllerName}`) };
    global.loadModel = (modelName) => { return loadApp(`models/${modelName}`) };
    global.loadHelper = (helperName) => { return loadApp(`helpers/${helperName}`) };
    global.loadRouter = (routerName) => { return loadApp(`routes/${routerName}`) };
    global.loadLib = (libName) => { return require(`${BASE_PATH}/libs/${libName}`) };
    global.logger = loadLib('logger')
}