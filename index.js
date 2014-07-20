// KernelBundle

var KernelBundle = function(string) {
};

KernelBundle.prototype.getServicesFilePath = function() {
    return __dirname;
}

module.exports = KernelBundle;