angular.module('app.controllers', [])

  .controller('page2Ctrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http) {
      $http.get("https://api.myjson.com/bins/2uyi4").then(function (response) {
        $scope.video_list = response.data;
      });
    }])

  .controller('page3Ctrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http) {
      $http.get("https://api.myjson.com/bins/1wvng").then(function (response) {
        $scope.favorite_video_list = response.data;
      });
    }])

  .controller('page4Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('side-menu21Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

// for file download and upload
  .controller('FileTransferController', function ($scope, $cordovaFileTransfer) {

    $scope.testFileDownload = function () {

      // File for download
      var url = "http://www.gajotres.net/wp-content/uploads/2015/04/logo_radni.png";

      // File name only
      var filename = url.split("/").pop();

      // Save location
      var targetPath = cordova.file.externalRootDirectory + filename;

      $cordovaFileTransfer.download(url, targetPath, {}, true).then(function (result) {
        console.log('Success');
      }, function (error) {
        console.log('Error');
      }, function (progress) {
        // PROGRESS HANDLING GOES HERE
      });
    }

    $scope.testFileUpload = function () {
      // Destination URL
      var url = "http://example.gajotres.net/upload/upload.php";

      //File for Upload
      var targetPath = cordova.file.externalRootDirectory + "logo_radni.png";

      // File name only
      var filename = targetPath.split("/").pop();

      var options = {
        fileKey: "file",
        fileName: filename,
        chunkedMode: false,
        mimeType: "image/jpg",
        params: {'directory': 'upload', 'fileName': filename}
      };

      $cordovaFileTransfer.upload(url, targetPath, options).then(function (result) {
        console.log("SUCCESS: " + JSON.stringify(result.response));
      }, function (err) {
        console.log("ERROR: " + JSON.stringify(err));
      }, function (progress) {
        // PROGRESS HANDLING GOES HERE
      });
    }
  });
