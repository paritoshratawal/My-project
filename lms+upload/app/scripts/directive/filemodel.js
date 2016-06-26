app.directive('fileModel', ['$parse',function($parse){
  return{
    restrict:'A',
    link:function(scope,element,attrs)
    {
      var model=$parse(attrs.fileModel);
      var modelSet=model.assign;
      element.bind('change',function(){
        scope.$apply(function(){
          modelSet(scope,element[0].files[0]);

        });
      });
    }
  };
}]);
