var Banjo = function() {
}

Banjo.prototype.buildContainer = function(rootdir) {

    var _ = require('underscore');
    var containerBuilder = require('service-container');
    
    // Making a new empty container
    var container = containerBuilder.makeEmptyContainer(rootdir);

    // Loading services.json
    containerBuilder.parseFile({
        file: rootdir + '/services.json',
        dir: rootdir,
        level: 0,
        isEnvFile: false,
        isParamFile: false
    }, container);

    // For every Bundle declared
    var bundleProviders = container.getServiceIdsHavingTag('kernel.bundle_provider');

    _.each(bundleProviders, function(bundleProvider) {

        var bundle = container.get(bundleProvider.id);
        var bundleRootDir = bundle.getServicesFilePath();

        // Loading every Bundle declared
        containerBuilder.parseFile({
            file: bundleRootDir + '/services.json',
            dir: bundleRootDir,
            level: 0,
            isEnvFile: false,
            isParamFile: false
        }, container);

    }, this);

    return container;
};

// Banjo itself is a bundle, exposing Kernel services
Banjo.prototype.getServicesFilePath = function() {
    return __dirname;
};

module.exports = Banjo;