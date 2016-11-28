class getSupportMappingService {
    constructor(Restangular, getSupportMappingConstants) {
        'ngInject';

        this.Restangular = Restangular;
        this.getSupportMappingConstants = getSupportMappingConstants;
    }

    getSupportMappingByActivity(activityID, levelID, typeID, methodID) {
        var resources = this.getSupportMappingConstants.API.RESOURCES,
            resource,
            searchParams = this.getSupportMappingConstants.API.SEARCH,
            searchBy = {};

            resource = resources.GET_SUPPORT_MAPPING;

            angular.forEach(searchParams, function(value, key) {
                switch(value) {
                    case 'activityID':
                        searchBy[value] = activityID;
                        break;
                    case 'levelID':
                        searchBy[value] = levelID;
                        break;
                    case 'typeID':
                        searchBy[value] = typeID;
                        break;
                    case 'methodID':
                        searchBy[value] = methodID;
                }
            });

        return this.Restangular.all(resource).customGET('', searchBy).then(function(mapping) {
            return mapping;
        }, function(err) {
            return err;
        });
    }
}

export default getSupportMappingService;
