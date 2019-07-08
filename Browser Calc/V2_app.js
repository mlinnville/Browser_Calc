var app = angular.module('app', []);

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

app.controller('Controller', ['$scope', '$window', '$location', '$anchorScroll',
  function($scope, $window, $location, $anchorScroll) {

    // Grab URL Parameters
    var urlstage = $location.search().stage
    var urlNameOfBusiness = $location.search().name
    var urlImpressions = parseInt($location.search().impressions)
    var urlNumLocs = parseInt($location.search().locations)
    var urlAccuracy = parseInt($location.search().accuracy)
    var urlCustomerCallClicks = parseInt($location.search().callClicks)
    var urlCustomerDirectionsClicks = parseInt($location.search().directionsClicks)
    var urlCustomerWebClicks = parseInt($location.search().webClicks)
    var urlOnlineToOfflineRate = parseInt($location.search().onlineToOffline)
    var urlCallApptRate = parseInt($location.search().CallApptRate)
    var urlCTA = parseInt($location.search().CTA)
    var urlcallClickCompletionRate = parseInt($location.search().callClickCompletionRate)
    var urlClickCompletionRate = parseInt($location.search().ClickCompletionRate)
    var urlStoreConversion = parseInt($location.search().StoreConversion)
    var urlSalePerCustomer = parseInt($location.search().salePerCustomer)
    var urlConversion1 = $location.search().conversion1 
    var urlCallApptRate = $location.search().CallApptRate     
    var urlConversion2 = $location.search().conversion2
    var urlAov = $location.search().aov

    var urllowOptimization = $location.search().lop
    var urlmediumOptimization = $location.search().pop
    var urlhighOptimization = $location.search().dsop    


    // Stage 0 - Get accuracyRate
    // Stage 1 - Get accuracyRate
    // Stage 2 - Get number of locs
    // Stage 3 - Get impressions
    // Stage 4 - Short output
    // Stage 5 - Long output
    $scope.stage = 4

    // DEFAULT Values
    $scope.nameOfBusiness = '';
    $scope.numberOfLocations = 25;
    $scope.entityOptions = ["locations", "stores", "doctors", "professionals"]
    $scope.entityLabel = "locations"

    $scope.conversion1 = "Online to Offline Visit Rate from Directions"
    $scope.conversion3 = "Calls to Book Appointment or Order Rate"
    $scope.conversion4 = "Online Call-to-Action CTR"
    $scope.conversion5 = "Appointment or Order Completion Rate"
    $scope.conversion2 = "In Store Conversion Rate"
    $scope.aov = "Average Sale per Customer"

    $scope.displayScanImage = false;
    $scope.displayScanResult = false;
    $scope.displayAdditionalInputs = false;

    $scope.accuracyRate = 75;
    $scope.industry = "";
    $scope.annualGMBImpressions = 150000;

    $scope.estAnnualImpressionsPerLoc = 250000;
    $scope.estAnnualCallActionsPerLoc = 4.5; // %
    $scope.estAnnualDirectionsActionsPerLoc = 4.5; // %
    $scope.estAnnualClickActionsPerLoc = 4.5; // %
    $scope.optimizationRate = 30; // %

    $scope.lowOptimizationRate = 10; //%
    $scope.mediumOptimizationRate = 20; //%
    $scope.highOptimizationRate = 30; //%

    // Checkboxes
    //$scope.webClicks = true;
    //$scope.phoneCalls = true;
    //$scope.drivingDirections = true;

    // Conversion Rates
    $scope.actionRate = 3.6; // %
    $scope.onlineToOffline = 76; // %
    $scope.CallApptRate = 10; // %
    $scope.CTA = 5; // %
    $scope.callClickCompletionRate = 70; // %
    $scope.ClickCompletionRate = 70; // %
    $scope.instoreConversionRate = 85; // %
    $scope.averageSalePerCustomer = 20;

    // PRESET based on URL parameters if populated
    if(urlstage) $scope.stage = parseInt(urlstage)
    if(urlNameOfBusiness) $scope.nameOfBusiness = urlNameOfBusiness
    if(urlConversion1) $scope.conversion1 = urlConversion1     
    if(urlConversion2) $scope.conversion2 = urlConversion2
    if(urlAov) $scope.aov = urlAov
    if(urlImpressions) $scope.estAnnualImpressionsPerLoc = parseInt(urlImpressions)
    if(urlNumLocs) $scope.numberOfLocations = parseInt(urlNumLocs)
    if(urlAccuracy) $scope.accuracyRate = parseInt(urlAccuracy)
    if(urlCustomerCallClicks) $scope.estAnnualCallActionsPerLoc = parseInt(urlCustomerCallClicks)
    if(urlCustomerDirectionsClicks) $scope.estAnnualDirectionsActionsPerLoc = parseInt(urlCustomerDirectionsClicks)
    if(urlCustomerWebClicks) $scope.estAnnualClickActionsPerLoc = parseInt(urlCustomerWebClicks)
    if(urlCallApptRate) $scope.CallApptRate = parseInt(urlCallApptRate)
    if(urlCTA) $scope.CTA = parseInt(urlCTA)
    if(urlcallClickCompletionRate) $scope.urlcallClickCompletionRate = parseInt(urlcallClickCompletionRate)
    if(urlClickCompletionRate) $scope.urlClickCompletionRate = parseInt(urlClickCompletionRate)
    if(urlOnlineToOfflineRate) $scope.onlineToOffline = parseInt(urlOnlineToOfflineRate)
    if(urlStoreConversion) $scope.instoreConversionRate = parseInt(urlStoreConversion)
    if(urlSalePerCustomer) $scope.averageSalePerCustomer = parseInt(urlSalePerCustomer)

    if(urllowOptimization) $scope.lowOptimizationRate = parseInt(urllowOptimization)
    if(urlmediumOptimization) $scope.mediumOptimizationRate = parseInt(urlmediumOptimization)
    if(urlhighOptimization) $scope.highOptimizationRate = parseInt(urlhighOptimization)

    // Populate URL parameters
    $scope.$watch(function() {return $scope.stage}, function(newVal) {
      $location.search('stage', newVal)
    })

    $scope.$watch(function() {return $scope.nameOfBusiness}, function(newVal) {
      $location.search('name', newVal)
    })

    $scope.$watch(function() {return $scope.estAnnualImpressionsPerLoc}, function(newVal) {
      $location.search('impressions', newVal)
    })

    $scope.$watch(function() {return $scope.numberOfLocations}, function(newVal) {
      $location.search('locations', newVal)
    })

    $scope.$watch(function() {return $scope.accuracyRate}, function(newVal) {
      $location.search('accuracy', newVal)
    })

    $scope.$watch(function() {return $scope.estAnnualCallActionsPerLoc}, function(newVal) {
      $location.search('callClicks', newVal)
    })
    
     $scope.$watch(function() {return $scope.estAnnualClickActionsPerLoc}, function(newVal) {
      $location.search('webClicks', newVal)
    })

 	$scope.$watch(function() {return $scope.estAnnualDirectionsActionsPerLoc}, function(newVal) {
      $location.search('directionsClicks', newVal)
    })

    $scope.$watch(function() {return $scope.CallApptRate}, function(newVal) {
      $location.search('CallApptRate', newVal)
    })

    $scope.$watch(function() {return $scope.CTA}, function(newVal) {
      $location.search('CTA', newVal)
    })
    
    $scope.$watch(function() {return $scope.callClickCompletionRate}, function(newVal) {
      $location.search('callClickCompletionRate', newVal)
    })

    $scope.$watch(function() {return $scope.ClickCompletionRate}, function(newVal) {
      $location.search('ClickCompletionRate', newVal)
    })

    $scope.$watch(function() {return $scope.onlineToOffline}, function(newVal) {
      $location.search('onlineToOffline', newVal)
    })

    $scope.$watch(function() {return $scope.instoreConversionRate}, function(newVal) {
      $location.search('storeConversion', newVal)
    })

    $scope.$watch(function() {return $scope.averageSalePerCustomer}, function(newVal) {
      $location.search('salePerCustomer', newVal)
    })

    $scope.$watch(function() {return $scope.conversion1}, function(newVal) {
      $location.search('conversion1', newVal)
    })

    $scope.$watch(function() {return $scope.conversion2}, function(newVal) {
      $location.search('conversion2', newVal)
    })

    $scope.$watch(function() {return $scope.aov}, function(newVal) {
      $location.search('aov', newVal)
    })

    $scope.$watch(function() {return $scope.lowOptimizationRate}, function(newVal) {
      $location.search('lop', newVal)
    })
    $scope.$watch(function() {return $scope.mediumOptimizationRate}, function(newVal) {
      $location.search('pop', newVal)
    })
    $scope.$watch(function() {return $scope.highOptimizationRate}, function(newVal) {
      $location.search('dsop', newVal)
    })


    // Funnel

    $scope.refresh = function() {
      
      $scope.totalImpressions = []
      $scope.accurateImpressions  = []
      $scope.callActions  = []
      $scope.directionsActions  = []
      $scope.clickActions  = []
      $scope.callAppts  = []
      $scope.CTAClicks  = []
      $scope.callClickCompletions  = []
      $scope.ClickCompletions  = []
      $scope.storeVistors  = []
      $scope.purchases  = []
      $scope.sales  = []
      $scope.optimization  = []

      // Current Funnel
      $scope.totalImpressions['CURRENT'] = $scope.numberOfLocations*$scope.estAnnualImpressionsPerLoc
      $scope.accurateImpressions['CURRENT'] = $scope.totalImpressions['CURRENT']*$scope.accuracyRate/100
      $scope.callActions['CURRENT'] = $scope.accurateImpressions['CURRENT']*$scope.estAnnualCallActionsPerLoc/100
      $scope.directionsActions['CURRENT'] = $scope.accurateImpressions['CURRENT']*$scope.estAnnualDirectionsActionsPerLoc/100
      $scope.clickActions['CURRENT'] = $scope.accurateImpressions['CURRENT']*$scope.estAnnualClickActionsPerLoc/100
	  $scope.callAppts['CURRENT'] = $scope.callActions['CURRENT']*$scope.CallApptRate/100
	  $scope.CTAClicks['CURRENT'] = $scope.clickActions['CURRENT']*$scope.CTA/100
      $scope.callClickCompletions['CURRENT'] = $scope.callAppts['CURRENT']*$scope.callClickCompletionRate/100
      $scope.ClickCompletions['CURRENT'] = $scope.CTAClicks['CURRENT']*$scope.ClickCompletionRate/100
      $scope.storeVistors['CURRENT'] = $scope.directionsActions['CURRENT']*$scope.onlineToOffline/100
      $scope.purchases['CURRENT'] = $scope.storeVistors['CURRENT']*$scope.instoreConversionRate/100
      $scope.sales['CURRENT'] = ($scope.purchases['CURRENT']+$scope.callClickCompletions['CURRENT']+$scope.ClickCompletions['CURRENT'])*($scope.averageSalePerCustomer)


      // Optimized Funnel
      $scope.totalImpressions['OPTIMIZED'] = $scope.numberOfLocations*$scope.estAnnualImpressionsPerLoc
      $scope.accurateImpressions['OPTIMIZED'] = $scope.totalImpressions['OPTIMIZED']
      $scope.callActions['OPTIMIZED'] = $scope.accurateImpressions['OPTIMIZED']*$scope.estAnnualCallActionsPerLoc/100
      $scope.directionsActions['OPTIMIZED'] = $scope.accurateImpressions['OPTIMIZED']*$scope.estAnnualDirectionsActionsPerLoc/100
      $scope.clickActions['OPTIMIZED'] = $scope.accurateImpressions['OPTIMIZED']*$scope.estAnnualClickActionsPerLoc/100
      $scope.callAppts['OPTIMIZED'] = $scope.callActions['OPTIMIZED']*$scope.CallApptRate/100
	  $scope.CTAClicks['OPTIMIZED'] = $scope.clickActions['OPTIMIZED']*$scope.CTA/100
      $scope.callClickCompletions['OPTIMIZED'] = $scope.callAppts['OPTIMIZED']*$scope.callClickCompletionRate/100
      $scope.ClickCompletions['OPTIMIZED'] = $scope.CTAClicks['OPTIMIZED']*$scope.ClickCompletionRate/100
      $scope.storeVistors['OPTIMIZED'] = $scope.directionsActions['OPTIMIZED']*$scope.onlineToOffline/100
      $scope.purchases['OPTIMIZED'] = $scope.storeVistors['OPTIMIZED']*$scope.instoreConversionRate/100     
      $scope.sales['OPTIMIZED'] = ($scope.purchases['OPTIMIZED']+$scope.callClickCompletions['OPTIMIZED']+$scope.ClickCompletions['OPTIMIZED'])*($scope.averageSalePerCustomer)

      $scope.lowOptimization = $scope.sales['OPTIMIZED']*$scope.lowOptimizationRate/100
      $scope.mediumOptimization = $scope.sales['OPTIMIZED']*$scope.mediumOptimizationRate/100
      $scope.highOptimization = $scope.sales['OPTIMIZED']*$scope.highOptimizationRate/100      

      $scope.optimization['OPTIMIZED'] = ($scope.lowOptimization + $scope.mediumOptimization + $scope.highOptimization)/3

      // Difference
      $scope.accurateImpressions['DIFFERENCE'] = $scope.accurateImpressions['OPTIMIZED'] - $scope.accurateImpressions['CURRENT']
      $scope.callActions['DIFFERENCE'] = $scope.callActions['OPTIMIZED'] - $scope.callActions['CURRENT']
      $scope.clickActions['DIFFERENCE'] = $scope.clickActions['OPTIMIZED'] - $scope.clickActions['CURRENT']
      $scope.directionsActions['DIFFERENCE'] = $scope.directionsActions['OPTIMIZED'] - $scope.directionsActions['CURRENT']
      $scope.callAppts['DIFFERENCE'] = $scope.callAppts['OPTIMIZED'] - $scope.callAppts['CURRENT']
      $scope.CTAClicks['DIFFERENCE'] = $scope.CTAClicks['OPTIMIZED'] - $scope.CTAClicks['CURRENT']
      $scope.callClickCompletions['DIFFERENCE'] = $scope.callClickCompletions['OPTIMIZED'] - $scope.callClickCompletions['CURRENT']
      $scope.ClickCompletions['DIFFERENCE'] = $scope.ClickCompletions['OPTIMIZED'] - $scope.ClickCompletions['CURRENT']
      $scope.storeVistors['DIFFERENCE'] = $scope.storeVistors['OPTIMIZED'] - $scope.storeVistors['CURRENT']
      $scope.purchases['DIFFERENCE'] = $scope.purchases['OPTIMIZED'] - $scope.purchases['CURRENT']
      $scope.sales['DIFFERENCE'] = $scope.sales['OPTIMIZED'] - $scope.sales['CURRENT']
      $scope.optimization['DIFFERENCE'] = $scope.sales['DIFFERENCE'] + $scope.optimization['OPTIMIZED']

    }

    $scope.refresh()


    $scope.backButtonClicked = function() {
      if ($scope.stage > 0) {
        $scope.stage = $scope.stage-1;
      }
    }

    $scope.showAdditionalInputs = function() {
      $scope.displayAdditionalInputs = !$scope.displayAdditionalInputs
    }

    $scope.toggleScanImage = function() {
      $scope.displayScanImage = !$scope.displayScanImage;
      $scope.displayScanResult = false;
    }

    $scope.generateScanOutput = function() {
      $scope.accuracyRate = 72;
      $scope.displayScanResult = !$scope.displayScanResult;
    }

    $scope.benchmarks = {
      "Food Services": {
        "Casual Dining": { smbImpressions: 450488.55, entImpressions: 541602.84, mmImpressions: 496046, getDirections: 1.67, estAnnualCallActionsPerLoc: 0.55, webClicks: 0.78, },
        "Fast Casual": {smbImpressions: 450488.55,entImpressions: 302456.27,mmImpressions: 376472,getDirections: 1.35,estAnnualCallActionsPerLoc: 0.43,webClicks: 0.36,},
        "QSR": {smbImpressions: 450488.55,entImpressions: 300020.99,mmImpressions: 375255,getDirections: 1.41,estAnnualCallActionsPerLoc: 0.84,webClicks: 0.35,},
        "Fine Dining": {smbImpressions: 450488.55,entImpressions: 1772433.27,mmImpressions: 1111461,getDirections: 0.92,estAnnualCallActionsPerLoc: 0.25,webClicks: 0.77,},
        "Grocery Stores": {smbImpressions: 450488.55,entImpressions: 268772.16,mmImpressions: 359630,getDirections: 2,estAnnualCallActionsPerLoc: 0.55,webClicks: 0.35,},
      },
      "Retail": {
        "Clothing and Shoe Stores": {smbImpressions: 1540685.87,entImpressions: 287285.63,mmImpressions: 913986,getDirections: 1,estAnnualCallActionsPerLoc: 0.49,webClicks: 0.6,},
        "Furniture and Home Furnishings Stores": {smbImpressions: 1540685.87,entImpressions: 131355.34,mmImpressions: 836021,getDirections: 1.18,estAnnualCallActionsPerLoc: 0.49,webClicks: 1.43,},
        "Home Improvement": {smbImpressions: 1540685.87,entImpressions: 719513.64,mmImpressions: 1130100,getDirections: 1.81,estAnnualCallaActionsPerLoc: 0.6,webClicks: 1.16,},
        "Department Store": {smbImpressions: 1540685.87,entImpressions: 563518.4,mmImpressions: 1052102,getDirections: 1.96,estAnnualCallActionsPerLoc: 0.43,webClicks: 0.53,},
        "Sporting Goods": {smbImpressions: 1540685.87,entImpressions: 477723.12,mmImpressions: 1009204,getDirections: 2.36,estAnnualCallActionsPerLoc: 0.67,webClicks: 2.07,},
        "Jewelry": {smbImpressions: 1540685.87,entImpressions: 127490.5,mmImpressions: 834088,getDirections: 0.77,estAnnualCallActionsPerLoc: 0.77,webClicks: 0.97,},
        "Consumer Electronics": {smbImpressions: 1540685.87,entImpressions: 940809.62,mmImpressions: 1240748,getDirections: 1.55,estAnnualCallActionsPerLoc: 0.78,webClicks: 0.73,},
        "Logistics & Office Supplies": {smbImpressions: 1540685.87,entImpressions: 307565.64,mmImpressions: 924126,getDirections: 1.69,estAnnualCallActionsPerLoc: 0.5,webClicks: 0.59,},
      },
      "Healthcare": {
        "Medical Facilities": {smbImpressions: 112271.35,entImpressions: 296707.82,mmImpressions: 204490,getDirections: 1.65,estAnnualCallActionsPerLoc: 0.95,webClicks: 0.82,},
        "Primary Care": {smbImpressions: 47882.6,entImpressions: 25711.32,mmImpressions: 36797,getDirections: 1.48,estAnnualCallActionsPerLoc: 1.99,webClicks: 1.58,},
        "Medical Specialists": {smbImpressions: 44310.49,entImpressions: 11573.39,mmImpressions: 27942,getDirections: 1.04,estAnnualCallActionsPerLoc: 2.19,webClicks: 2.43,},
        "Dental Services": {smbImpressions: 44768.77,entImpressions: 51302.85,mmImpressions: 48036,getDirections: 1.68,estAnnualCallActionsPerLoc: 2.16,webClicks: 1.75,},
        "Eye Care": {smbImpressions: 41176.47,entImpressions: 46410.14,mmImpressions: 43793,getDirections: 1.44,estAnnualCallActionsPerLoc: 2.2,webClicks: 1.32,},
      },
      "Financial Services": {
        "Branches": {smbImpressions: 86643.65,entImpressions: 202148.24,mmImpressions: 144396,getDirections: 1.38,estAnnualCallActionsPerLoc: 0.5,webClicks: 0.15,},
        "Insurance": {smbImpressions: 21059.65,entImpressions: 14730.77,mmImpressions: 17895,getDirections: 0.46,estAnnualCallActionsPerLoc: 1.53,webClicks: 0.6,},
        "Mortgage": {smbImpressions: 34653.21,entImpressions: 15560.18,mmImpressions: 25107,getDirections: 0.62,estAnnualCallActionsPerLoc: 0.41,webClicks: 0.5,},
        "Investments": {smbImpressions: 16483.33,entImpressions: 15243.87,mmImpressions: 15864,getDirections: 0.69,estAnnualCallActionsPerLoc: 0.28,webClicks: 0.5,},
        "Tax Services": {smbImpressions: 9683.29,entImpressions: 22011.28,mmImpressions: 15847,getDirections: 1.11,estAnnualCallActionsPerLoc: 2,webClicks: 0.58,},
      }, 
      "Hospitality": {
        "Hotel": {smbImpressions: 2339432.8,entImpressions: 1663837.2,mmImpressions: 2001635,getDirections: 1.22,estAnnualCallActionsPerLoc: 0.17,webClicks: 0.54,},
        "Luxury Hotel": {smbImpressions: 4173221.29,entImpressions: 6853972.57,mmImpressions: 5513597,getDirections: 1.04,estAnnualCallActionsPerLoc: 0.12,webClicks: 0.61,},
      },
      "Auto": {
        "Auto Parts & Service": {smbImpressions: 95801.16,entImpressions: 131780.46,mmImpressions: 113791,getDirections: 1.42,estAnnualCallActionsPerLoc: 1.81,webClicks: 0.98,},
        "Auto Sales": {smbImpressions: 321639.96,entImpressions: 383562.96,mmImpressions: 352601,getDirections: 1.64,estAnnualCallActionsPerLoc: 1.48,webClicks: 4.07,},
        "Auto Rental": {smbImpressions: 87967.22,entImpressions: 218353.4,mmImpressions: 153160,getDirections: 1.44,estAnnualCallActionsPerLoc: 1.15,webClicks: 1.06,},
      },
      "Real Estate": {
        "Agents & Brokers": {smbImpressions: 20293.91,entImpressions: 31594.23,mmImpressions: 25944,getDirections: 0.63,estAnnualCallActionsPerLoc: 0.29,webClicks: 1.48,},
        "For Sale": {smbImpressions: 33401.79,entImpressions: 151292.86,mmImpressions: 92347,getDirections: 0.92,estAnnualCallActionsPerLoc: 0.34,webClicks: 2.55,},
        "Rental": {smbImpressions: 348815.58,entImpressions: 372593.9,mmImpressions: 360705,getDirections: 1.36,estAnnualCallActionsPerLoc: 0.28,webClicks: 1.48,},
      },
    }


    $scope.setImpressionsBasedOnGMB = function() {
      $scope.estAnnualImpressionsPerLoc = Math.round($scope.annualGMBImpressions * 1.1);
      $scope.refresh()
    }

    $scope.selectedSubIndustry = ""
    $scope.subIndustry = ""
    $scope.updateImpressionsForSubIndustry = function() {
      // ensure a sub-vertical has been selected
      if ($scope.subIndustry != "" && $scope.subIndustry != null) {
        var engagement = 0.0
        if ($scope.webClicks) engagement += $scope.subIndustry.webClicks;
        if ($scope.estAnnualCallActionsPerLoc) engagement += $scope.subIndustry.estAnnualCallActionsPerLoc;
        if ($scope.drivingDirections) engagement += $scope.subIndustry.getDirections;
        
        $scope.estAnnualCustomerActionsPerLoc = Math.round(engagement * 10) / 10;
      // ---- SET IMPRESSIONS ----
        // SMB
        if ($scope.numberOfLocations < 10) {
            $scope.estAnnualImpressionsPerLoc = $scope.subIndustry.smbImpressions;
        // MM
        } else if ($scope.numberOfLocations < 100) {
          $scope.estAnnualImpressionsPerLoc = $scope.subIndustry.mmImpressions
        // ENT
        } else {
          $scope.estAnnualImpressionsPerLoc = $scope.subIndustry.entImpressions;
        }

        // set in-store conversion rate
        // $scope.instoreConversionRate = $scope.subIndustry.inStoreConversion;
        $scope.refresh()
      }
    }

  }
]);

app.filter('singular', ['$filter', function ($filter) {
  return function (input) {
    return input.substring(0, input.length - 1);;
  };
}]);


app.filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}]);

app.filter('capital', ['$filter', function ($filter) {
  return function (input, decimals) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  };
}]);
