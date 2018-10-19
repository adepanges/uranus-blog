module.exports = () => {
    global.loadApp = (moduleName) => { return require(`${APP_PATH}/${moduleName}`) };
    global.loadMiddleware = (middlewareName) => { return loadApp(`middleware/${middlewareName}.middleware`) };
    global.loadController = (controllerName) => { return loadApp(`controllers/${controllerName}.controller`) };
    global.loadModel = (modelName) => { return loadApp(`models/${modelName}.model`) };
    global.loadHelper = (helperName) => { return loadApp(`helpers/${helperName}.helper`) };
    global.loadRouter = (routerName) => { return loadApp(`routes/${routerName}.route`) };
    global.loadLib = (libName) => { return require(`${BASE_PATH}/libs/${libName}`) };
    global.logger = loadLib('logger')
}