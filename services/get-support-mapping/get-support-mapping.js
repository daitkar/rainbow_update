const MODULE_NAME = 'getSupportMapping';

export default MODULE_NAME;

angular.module(MODULE_NAME, [])
    .config(require('../get-support-mapping/get-support-mapping-config.js'))
    .constant('getSupportMappingConstants',
        require('../get-support-mapping/get-support-mapping-constants.js'))
    .service('getSupportMappingService',
        require('../get-support-mapping/get-support-mapping-service.js'));
