export default getSupportMappingConfig;

function getSupportMappingConfig(RestangularProvider, getSupportMappingConstants) {
    'ngInject';

    RestangularProvider.setBaseUrl(getSupportMappingConstants.API.BASE_URL);

    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
        var extractedData;

        if (operation === 'get') {
            extractedData = data;
        }
        return extractedData;
    });
}
