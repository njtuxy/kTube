angular.module('app.controllers', [])

  .controller('page2Ctrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http) {
      $http.get("https://api.myjson.com/bins/3k1cw").then(function (response) {
        $scope.video_list = response.data;
      });
    }])

  .controller('page3Ctrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http) {
      $http.get("https://api.myjson.com/bins/1plds").then(function (response) {
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
  .controller('FileTransferController', function ($scope, $cordovaFileTransfer, $cordovaFileOpener2) {

    $scope.testFileDownload = function (file_url) {

      // File for download
      var url = "http://www.gajotres.net/wp-content/uploads/2015/04/logo_radni.png";
      // var url = file_url;

      // File name only
      var filename = url.split("/").pop();
      // var filename = temp.png;

      // Save location
      var targetPath = cordova.file.externalRootDirectory + "kTube/" + filename;

      $cordovaFileTransfer.download(url, targetPath, {}, true).then(function (result) {
        $scope.play_info = "sccuessfully downloed the pic!";
        $scope.fileLocation = targetPath;
      }, function (error) {
        $scope.play_info = "Error when download the png file" + error.message
      }, function (progress) {
        // PROGRESS HANDLING GOES HERE
      });
    };

    $scope.openFile = function (fileLocation) {
      $cordovaFileOpener2.open( fileLocation,'image/png'
      ).then(function() {
        // Success!
        $scope.play_info = "going to play the image"
      }, function(err) {
        // An error occurred. Show a message to the user
        $scope.play_info = "some error " + err.status + " with details: " + err.message
      });

    };
    // console.log('Error status: ' + e.status + ' - Error message: ' + e.message);

    // $scope.testFileUpload = function () {
    //   // Destination URL
    //   var url = "http://example.gajotres.net/upload/upload.php";
    //
    //   //File for Upload
    //   var targetPath = cordova.file.externalRootDirectory + "logo_radni.png";
    //
    //   // File name only
    //   var filename = targetPath.split("/").pop();
    //
    //   var options = {
    //     fileKey: "file",
    //     fileName: filename,
    //     chunkedMode: false,
    //     mimeType: "image/jpg",
    //     params: {'directory': 'upload', 'fileName': filename}
    //   };
    //
    //   $cordovaFileTransfer.upload(url, targetPath, options).then(function (result) {
    //     console.log("SUCCESS: " + JSON.stringify(result.response));
    //   }, function (err) {
    //     console.log("ERROR: " + JSON.stringify(err));
    //   }, function (progress) {
    //     // PROGRESS HANDLING GOES HERE
    //   });
    // }
  });
