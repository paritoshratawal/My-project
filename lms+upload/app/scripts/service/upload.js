app.service('uploadService',['$http','$q',function($http,$q){
  this.post=function(file){
    var defer=$q.defer();
    var fileData=new FormData();
    fileData.append('file',file);
    $http.post('/upload',fileData,{
      transformRequest:angular.identity,
      headers:{'content-Type':undefined}
    }).success(function(data){
      defer.resolve(data);
    }).error(function(error){
      defer.reject(error);
    })
    return defer.promise;
  }
}]);
