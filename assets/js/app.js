$(document).ready(function () {
    // var div = document.createElement('div');
    var today = document.getElementById('moment');

    var $scope = {};
    $scope.date = new Date();
    $scope.moment = moment($scope.date);

    // DateTime Format
    $('#date1').html($scope.moment.format('DD-MM-YYYY'));
    $('#date2').html($scope.moment.format('DD-MM-YYYY hh:mm:ss'));
    console.log($scope.date);
    var txt = document.createTextNode($scope.date);
    today.appendChild(txt)
    // DateTime Manipulation
    $scope.temp = $scope.moment.add(1, 'weeks');
    $('#date3').html($scope.temp.format('DD-MM-YYYY hh:mm:ss'));
    $scope.temp = $scope.moment.add(1, 'months');
    $('#date4').html($scope.temp.format('DD-MM-YYYY hh:mm:ss'));
});