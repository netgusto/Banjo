// CoreViewHelpers

var CoreViewHelpers = function(handlebars, router) {
    
    return [
        {
            name: 'route',
            helper: function(routename, helperparams) {
                routeparams = helperparams.hash || {};
                return router.build(routename, routeparams);
            }
        },
    ];
};

module.exports = CoreViewHelpers;