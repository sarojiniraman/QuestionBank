'use strict';

var ApplicationConfiguration = (function () {
  var applicationModuleName = 'questionbank';
  var applicationModuleVendorDependencies = [];

  var registerModule = function (moduleName, dependencies) {
    angular.module(moduleName, dependencies || []);
    angular.module(applicationModuleName).requires.push(moduleName);
  };

  var _loadMockDependencies = function(dependencies){
    try{
      angular.module('ngMockE2E');
      dependencies.push('ngMockE2E');
      console.log('Using Mock server');
      return dependencies;
    }catch(e){
      console.log('Using live server');
      return dependencies;
    }
  };

  return {
    applicationModuleName: applicationModuleName,
    applicationModuleVendorDependencies: applicationModuleVendorDependencies,
    registerModule: registerModule,
    loadMockDependencies:_loadMockDependencies
  };
})();
