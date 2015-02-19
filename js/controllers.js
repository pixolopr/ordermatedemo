var adminurl = "http://mafiawarloots.com/clientunderworkcode/index.php/";

var filenameee = "";
var imdata = [];

angular.module('starter.controllers', ['ngCordova', 'myservices', 'mydatabase', 'ngCordova'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $location, MyServices, MyDatabase, $cordovaKeyboard, $ionicLoading) {
    //GET OFFLINE MODE VALUE
    var offline = MyServices.getmode();
    console.log("APP CONTROL");
    $scope.setslide = function () {
        var path = $location.path();
        var path2 = path.slice(0, 12)
            //console.log(path);

        if (path2 == "/app/dealer/") {
            //console.log("true");
            return true;
        } else {
            //console.log("false");
            return false;
        };
        //return false;        

        $cordovaKeyboard.hideAccessoryBar(true);

        $cordovaKeyboard.disableScroll(true);

        $cordovaKeyboard.close();

        var isVisible = $cordovaKeyboard.isVisible();
    };

    //GET CATEGORY NAMES
    $scope.categorynamedata = [{
        "id": "1",
        "name": "Apple"
    }, {
        "id": "2",
        "name": "Samsung"
    }, {
        "id": "3",
        "name": "Google"
    }];


    $scope.rid = MyServices.getretailer();
    $scope.changecategory = function (cid) {
        MyServices.setcategory(cid);
        MyServices.setsearchtxt("");
        var retailer = MyServices.getretailer();
        $location.path("/app/dealer/" + retailer + "/" + cid);
        $location.replace();
    };

    $scope.gotosyncpage = function () {
        $location.path("/app/sync");
    };
    var zonedata = function (data, status) {
        console.log(data);
        MyDatabase.addzonedata(data);
    };
    MyDatabase.findzonebyuser().success(zonedata);

})
    .controller('syncCtrl', function ($scope, $stateParams, MyServices, MyDatabase, $location, $cordovaNetwork, $cordovaToast) {

        $scope.retailerdatao = [];

        var toptendatasuccess = function (data, status) {
            MyDatabase.inserttopten(data);
        };
        $scope.gettoptendata = function () {
            db.transaction(function (tx) {
                var sqls = 'TRUNCATE TABLE TOPTEN';
                console.log(sqls);
                tx.executeSql(sqls, [], function (tx, results) {
                    console.log("TOP TEN RAOW DELETED");
                }, function (tx, results) {
                    console.log("TOP TEN NOT DELETED");
                });
            });
            MyServices.gettoptenproducts().success(toptendatasuccess);
        };

        $scope.sendofflineorders = function () {
            db.transaction(function (tx) {
                var sqls = 'SELECT max(orderid) as maxorder FROM ORDERS';
                console.log(sqls);
                tx.executeSql(sqls, [], function (tx, results) {
                    numorders = parseInt(results.rows.item(0).maxorder);
                    //see if it is greater than 0
                    if (numorders > 0) {
                        console.log("greater");
                        console.log(numorders);
                        for (var i = 1; i <= numorders; i++) {
                            var sqls = 'SELECT * FROM ORDERS WHERE orderid=' + i;
                            var dsqls = 'DELETE FROM ORDERS WHERE orderid=' + i;
                            MyDatabase.syncsendorders(sqls, dsqls);
                        };

                    };
                }, function (tx, results) {});
            });
        };


        $scope.updateretailerdata = function () {
            /* db.transaction(function (tx) {
                tx.executeSql('SELECT * FROM RETAILER WHERE sync = "false" AND id != null', [], function (tx, results) {
                    console.log(results.rows.item(1));
                }, function (tx, results) {});
            });*/
            MyDatabase.sendretailerupdate('SELECT id, contactname, contactnumber, ownername, ownernumber FROM RETAILER WHERE sync = "false" AND id > 0');
            MyDatabase.sendnewretailer('SELECT * FROM RETAILER WHERE sync = "false" AND id = 0');
        };
    })

.controller('LoginCtrl', function ($scope, $stateParams, MyServices, $location, MyDatabase) {
    $scope.login = {};
    console.log($scope.login)

    $scope.loginFunction = function (login) {
        db.transaction(function (tx) {
            console.log(login.password);
            var sqls = 'SELECT * FROM USER WHERE username = "' + login.username +'"';
            tx.executeSql(sqls, [], function (tx, results) {
                console.log(results.rows.item(0).password);
                if (results.rows.item(0).password == login.password) {
                    $location.path("#/app/home");
                    MyServices.setuser(results.rows.item(0));
                };
            }, function (tx, results) {
                $scope.alert = "Username or password incorrect";
            });
        });
    };


})

.controller('HomeCtrl', function ($scope, $stateParams, $location, MyServices, $ionicLoading) {
    //GET OFFLINE MODE VALUE
    var offline = MyServices.getmode();

    $ionicLoading.hide();

    //GET ZONE DATA
    var user = MyServices.getuser();
    $scope.userzone = user.zone;
    $scope.zonedata = [];
    //$scope.zonedata.id = userzone;

    //SETS VALUE FOR ZONE
    //MyDatabase.findzonebyuseroffline();

    //$ionicSideMenuDelegate.canDragContent(false);

    $scope.logout = function () {
        $.jStorage.flush();
        user = undefined;
        var emptycart = [];
        MyServices.setcart(emptycart);
        MyServices.setretailer(0);

        for (var i = 0; i < 5; i++) {
            var stateObj = {
                foo: "bar"
            };
            history.pushState(stateObj, "page 2", "index.html#/app/login");
        }
        $location.replace();
        window.location.href = window.location.href + "#";
    };
    $scope.user = user;
    $scope.lastretailer = MyServices.getretailer();
    if (!($scope.lastretailer > 0)) {
        $scope.lastretailer = 0;
    }

    $scope.gotolastretailer = function () {
        var pathtolast = "/app/dealer/" + $scope.lastretailer + "/6";
        $location.path(pathtolast);
    };

    todaytallydatasuccess = function (data, status) {
        if (data == "false") {
            $scope.todtallydata = data;
        } else {
            $scope.todtallydata = data;
        }

    };

    monthtallydatasuccess = function (data, status) {
        $scope.monthtallydata = data;
    };

    console.log("user id is" + user.id)
    MyServices.gettodaytally(user.id).success(todaytallydatasuccess);
    MyServices.getmonthtally(user.id).success(monthtallydatasuccess)
})

.controller('loaderCtrl', function ($scope, $stateParams, $ionicLoading) {
    console.log('Loading..');
    $ionicLoading.show({
        template: '<h1 class="ion-loading-c"></h1><br>Loading...',
        animation: 'fade-in',
        showBackdrop: true
    });
})



.controller('ZoneCtrl', function ($scope, $stateParams, $http, MyServices) {
    //GET OFFLINE MODE VALUE
    var offline = MyServices.getmode();

    $scope.zonedata = [];
    var onzonesuccess = function (data, status) {
        $scope.zonedata = data;
    };
    MyServices.findzone().success(onzonesuccess);

})

.controller('StateCtrl', function ($scope, $stateParams, $http, MyServices, MyDatabase, $ionicLoading, $cordovaNetwork) {

    var zoneID = 4;
    $scope.statedata = [];
    db.transaction(function (tx) {
        var sqls = 'SELECT * FROM STATE WHERE "zone" = "' + zoneID + '"';
        tx.executeSql(sqls, [], function (tx, results) {
            var length = results.rows.length;
            for (var i = 0; i < length; i++) {
                $scope.statedata.push(results.rows.item(i));
            }
            $ionicLoading.hide();
        }, function (tx, results) {

        });
    });
})

.controller('CityCtrl', function ($scope, $stateParams, $http, MyServices, $ionicLoading, $cordovaNetwork) {
    var stateID = $stateParams.id;
    $scope.citydata = [];
    db.transaction(function (tx) {
        var sqls = 'SELECT * FROM CITY WHERE "state" = "' + stateID + '"';
        tx.executeSql(sqls, [], function (tx, results) {
            var length = results.rows.length;
            for (var i = 0; i < length; i++) {
                $scope.citydata.push(results.rows.item(i));
            }
            $ionicLoading.hide();
        }, function (tx, results) {

        });
    });
})

.controller('AreaCtrl', function ($scope, $stateParams, $http, MyServices, $ionicLoading, $cordovaNetwork) {
    var cityID = $stateParams.id;
    $scope.areadata = [];
    db.transaction(function (tx) {
        var sqls = 'SELECT * FROM AREA WHERE "city" = "' + cityID + '"';
        tx.executeSql(sqls, [], function (tx, results) {
            var length = results.rows.length;
            for (var i = 0; i < length; i++) {
                $scope.areadata.push(results.rows.item(i));
            }
            $ionicLoading.hide();
        }, function (tx, results) {

        });
    });
})

.controller('RetailerCtrl', function ($scope, $stateParams, $http, MyServices, $location, $ionicLoading, $cordovaNetwork) {
    var areaID = $stateParams.id;
    $scope.areaid = areaID;

    console.log(MyServices.setareaid(areaID));
    $scope.retailerdata = [];

    db.transaction(function (tx) {
        var sqls = 'SELECT * FROM RETAILER WHERE "area" = "' + areaID + '"';
        tx.executeSql(sqls, [], function (tx, results) {
            var length = results.rows.length;
            for (var i = 0; i < length; i++) {
                $scope.retailerdata.push(results.rows.item(i));
            }
            $ionicLoading.hide();
        }, function (tx, results) {

        });
    });
})

.controller('DealerCtrl', function ($scope, $stateParams, $http, MyServices, MyDatabase, $location, $ionicModal, $window, $ionicLoading, $cordovaNetwork) {
    $scope.firstclick = 1;
    $scope.heightVal = $window.innerHeight - 44;

    $scope.params = {};

    //////////////GEO-LOCATION/////////////////////
    var onSuccess = function (position) {
        console.log('Latitude: ' + position.coords.latitude + '\n' +
            'Longitude: ' + position.coords.longitude);
    };

    function onError(error) {
        console.log('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }
    window.navigator.geolocation.getCurrentPosition(onSuccess, onError, {
        enableHighAccuracy: false
    });
    /////////////////////////////////////////////////

    $scope.total = 0;
    $scope.user = user;

    //CHECK IF NEW RETAILER
    $scope.retailerid = $stateParams.id;
    MyServices.checkretailer($scope.retailerid);
    //SET RETAILER
    MyServices.setretailer($scope.retailerid);
    //GET CART
    $scope.mycart = MyServices.getCart();
    //RETAILER DATA VARIABLE
    $scope.retailerdata2 = [];

    $scope.retailerID = $stateParams.id;
    if ($scope.retailerID == 0) {
        $location.path("/app/home");
    };

    ////////////////////////////////////////////////////GAINING RETAILER INFO//////////////////////////////////////////////

    //GAINING RETAILER INFORMATION - OFFLINE////////////////////////////////////////////////
    var getretailerdataoffline = function () {
        db.transaction(function (tx) {
            var sqls = 'SELECT * FROM RETAILER WHERE "id" = "' + $scope.retailerid + '"';
            tx.executeSql(sqls, [], function (tx, results) {
                var length = results.rows.length;
                for (var i = 0; i < length; i++) {
                    $scope.retailerdata2 = results.rows.item(i);
                    console.log($scope.retailerdata2);
                };
                $ionicLoading.hide();
                $scope.firstclick = 0;
                //DEALER EMAIL ID
                $scope.dealeremail = $scope.retailerdata2.distributor;
                //EDIT RETAILER INFO
                $scope.editretailer = [];
                $scope.editretailer.ownername = $scope.retailerdata2.ownername;
                $scope.editretailer.ownernumber = $scope.retailerdata2.ownernumber;
                $scope.editretailer.contactname = $scope.retailerdata2.contactname;
                $scope.editretailer.contactnumber = $scope.retailerdata2.contactnumber;
                $scope.editretailer.email = $scope.retailerdata2.email;
            }, function (tx, results) {});
        });
    };

    //GET RETAILER INFORMATION
    getretailerdataoffline();
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $scope.productquantity = 1;

    //PRODUCT INFORMATION
    var pronumber = 1;
    $scope.pname;
    $scope.pid;
    $scope.pquantity;

    $scope.giveclass = function (category) {
        var returnval = "";
        if (category == "scheme") {
            returnval = "list list-assertive"
        } else if (category == "new") {
            returnval = "list list-calm";
        }
        return returnval;
    };

    ////FUNCTION CALLED WHEN QUANTITY IS CHANGED////
    $scope.changequantity = function (quantity, code, category) {
        var id = -1;
        for (var i = 0; i < $scope.mycart.length; i++) {
            if ($scope.mycart[i].productcode == code && $scope.mycart[i].category == category) {
                id = i;
            };
        };
        if (id >= 0) {
            $scope.mycart[id].quantity = parseInt(quantity);
            var mrp = $scope.mycart[id].mrp;
            $scope.mycart[id].totalprice = $scope.mycart[id].quantity * mrp;
            MyServices.setcart($scope.mycart);
        };
    };


    //GET TOTAL COST////////////////////////////////////
    $scope.gettotal = function () {
        var total = 0;
        for (var i = 0; i < $scope.mycart.length; i++) {
            total += $scope.mycart[i].totalprice;
        }
        return total;
    };
    ////////////////////////////////////////////////////////

    //GET TOTAL QUANTITY///////////////////////////////////////////
    $scope.gettotalquantity = function () {
        $scope.quantitytotal = 0;
        for (var i = 0; i < $scope.mycart.length; i++) {
            $scope.quantitytotal += parseInt($scope.mycart[i].quantity);
        };
        return $scope.quantitytotal;
    };
    ////////////////////////////////////////////////////////////

    //INITIAL CALLING PRODUCTS ON PAGE LOAD
    $scope.choice = "scheme";
    //CAEGORY AND PRODUCTS
    $scope.categoryid = $stateParams.cid;
    MyServices.setcategory($stateParams.cid);

    //DEFINING THE ARRAY VARIABLE
    $scope.categoryproductdata = {};

    //GIVING VALUES IN VARIABLE - OFFLINE
    var oncategoryproductofflinesuccess = function (data) {
        $ionicLoading.hide();
        console.log(data);
        $scope.imagedata = [];
        data2 = data.image.split(",");
        var image = {};
        for (var l = 0; l < data2.length; l++) {
            image.image = data2[l];
            $scope.imagedata.push(image);
            image = {};
        };
        console.log($scope.imagedata.length);
        console.log($scope.imagedata[0].image);
        $scope.categoryproductdata = data;

    };

    //OFFLINE PRODUCT CALL FUNCTION///////////
    nextproductoffline = function (productid, next) {
        var tempproducts = [];
        var sqls2;
        if (parseInt($scope.categoryid) > 0) {
            sqls2 = 'SELECT * FROM PRODUCT WHERE "category" = "' + $scope.categoryid + '"';
        } else {
            if ($scope.categoryid == "new") {
                sqls2 = 'SELECT * FROM PRODUCT WHERE "isnew" = "1"';
            } else {
                if ($scope.categoryid == "scheme") {
                    sqls2 = 'SELECT * FROM PRODUCT WHERE "scheme" > 0';
                } else {
                    var findindicator = $scope.categoryid.charAt(0);
                    if (findindicator == "f") {
                        var value = $scope.categoryid.slice(1);
                        sqls2 = 'SELECT * FROM PRODUCT WHERE name LIKE "%' + value + '%"';
                    };
                };
            };
        };
        db.transaction(function (tx2) {

            console.log(sqls2);
            tx2.executeSql(sqls2, [], function (tx2, results2) {
                for (var i = 0; i < results2.rows.length; i++) {
                    tempproducts.push(results2.rows.item(i));
                };
                var one
                if (next == 1) {
                    one = 9999;
                    for (var j = 0; j < tempproducts.length; j++) {
                        if (tempproducts[j].id > productid) {
                            var two = one;
                            one = Math.min(tempproducts[j].id, one);
                            if (one != two) {
                                var varid = j;
                            };
                        };
                    };
                    if (one == 9999) {
                        for (var j = 0; j < tempproducts.length; j++) {
                            var two = one;
                            one = Math.min(tempproducts[j].id, one)
                            if (one != two) {
                                var varid = j;
                            };
                        };
                    };
                } else {
                    one = 0;
                    for (var j = 0; j < tempproducts.length; j++) {
                        if (tempproducts[j].id < productid) {
                            var two = one;
                            one = Math.max(tempproducts[j].id, one);
                            if (one != two) {
                                var varid = j;
                            };
                        };
                    };
                    if (one == 0) {
                        for (var j = 0; j < tempproducts.length; j++) {
                            var two = one;
                            one = Math.max(tempproducts[j].id, one)
                            if (one != two) {
                                var varid = j;
                            };
                        };
                    };
                };
                console.log(one);
                oncategoryproductofflinesuccess(tempproducts[varid]);

            }, function (tx2, results2) {});
        });

    };

    //INITITAL FUNCTION CALL ON PAGE LOAD FOR PRODUCT
    if ($scope.categoryid) {
        nextproductoffline(0, 1);
    };

    //NEXT BUTTON AN PREVIOUS BUTTON (1 FOR NEXT, 0 FOR PREVIOUS)
    $scope.getnextproduct = function (next) {
        nextproductoffline($scope.categoryproductdata.id, next);
    };

    //SCHEME AND NEW PRODUCTS
    $scope.getscheme = function (cid) {
        MyServices.setsearchtxt("");
        MyServices.setcategory(cid);
        var retailer = MyServices.getretailer();
        $location.path("/app/dealer/" + $scope.retailerid + "/" + cid);
        $location.replace();
    };


    //SEARCH////////////////////////////////////////////
    var searchtxt = MyServices.getsearchtxt();
    if (searchtxt != "") {
        $scope.searchtext = searchtxt;
    };
    $scope.searchproduct = function (searchvalue) {
        var retail = MyServices.getretailer();
        MyServices.setsearchtxt(searchvalue);
        console.log(searchvalue);
        var searchtext = "f" + searchvalue;
        console.log(searchtext);
        MyServices.setcategory(searchtext);
        $location.path("/app/dealer/" + retail + "/" + searchtext);
    };
    ///////////////////////////////////////////////
    //TOP TEN ORDERS///////////////////////////////////////////////////
    $scope.toptendata = [];
    db.transaction(function (tx) {
        tx.executeSql('SELECT product.id,product.code,SUM(product.quantity) as `sumquantity` FROM orders GROUP BY `product`.`id` ORDER BY `product`.`sumquantity` LIMIT 0,10', [], function (tx, results) {
            for (var q = 0; q < results.row.length; q++) {
                $scope.toptendata.push(results.row.item[q]);
            };
        }, function (tx, results) {})
    });
    $ionicModal.fromTemplateUrl('templates/topten.html', {
        id: '1',
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.oModal1 = modal;
    });
    $scope.gettopten = function () {
        $scope.oModal1.show();
    };
    /////////////////////////////////////////////////////////////

    //EDIT RETAILERS/////////////////////////////////////////////
    $scope.editretailer = {};
    $scope.editretailer.id = $scope.retailerID;
    $ionicModal.fromTemplateUrl('templates/editretailer.html', {
        id: '2',
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.oModal2 = modal;
    });
    $scope.gettopen = function () {
        $scope.oModal2.show();
    };
    $scope.editRetailerFunction = function () {
        console.log($scope.editretailer.number);
        MyDatabase.editaretailer($scope.editretailer, $scope.retailerdata2.name);
        $scope.oModal2.hide();
    };
    /////////////////////////////////////////////////////////

    //USPs//////////////////////////////////////////////////////
    $ionicModal.fromTemplateUrl('templates/usp.html', {
        id: '3',
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.oModal3 = modal;
    });
    $scope.closeusp = function () {
        $scope.oModal3.hide();
    };
    $scope.openusp = function () {
        $scope.oModal3.show();
    };
    ////////////////////////////////////////////////////////////////


    //GET LAST THREE ORDERS OF RETAIlER///////////////////
    $scope.retailerrecentdata = [];
    db.transaction(function (tx) {
        var sqls = 'SELECT * FROM ORDERS WHERE id = $scope.retailerid LIMIT 3';
        tx.executeSql(sqls, [], function (tx, results) {
            var length = results.rows.length;
            for (var i = 0; i < length; i++) {
                $scope.retailerrecentdata.push(results.rows.item(i));
            };
        }, function (tx, results) {})
    });
    //////////////////////////////////////////////////////
    //RECENT ORDERS////////////////////////////////////////////////////
    $ionicModal.fromTemplateUrl('templates/recent-orders.html', {
        id: '4',
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.oModal4 = modal;
    });
    $scope.closerecent = function () {
        $scope.oModal4.hide();
    };
    $scope.openrecent = function () {
        $scope.oModal4.show();
    };
    /////////////////////////////////////////////////////////////////////

    //GIVING CLASS///////////////////////////////////////////////////////
    $scope.cartnotschemenew = function (category, $index) {
        if (category.category == "new" || category.category == "scheme") {
            return false;
        } else {
            return true;
        }
    };

    //ADD TO CART///////////////////////////////////////////////////////////
    $scope.addToCart = function (id, productcode, name, quantity, mrp) {
        $scope.totalprice = quantity * mrp;
        if (quantity > 0) {
            MyServices.addItemToCart(id, productcode, name, quantity, mrp, $scope.totalprice);
            $scope.mycart = MyServices.getCart();
        };
    };
    ////////////////////////////////////////////////////////////////////////
    //REMOVE FROM CART//////////////////////////////////////////////////////
    $scope.remove = function (id, category) {
        for (var i = 0; i < $scope.mycart.length; i++) {
            if ($scope.mycart[i].id == id && $scope.mycart[i].category == category) {
                MyServices.removeObject(i);
                return false;
            };
        };
    };
    ///////////////////////////////////////////////////////////////////////////////
    var userdata = MyServices.getuser();
    console.log(userdata);
    ////CONFIRM ORDER/////////////////////////////////////////////////////////////
    $scope.sendOrder = function (retailerdata2) {
        if ($scope.firstclick == 0) {
            $scope.firstclick = 1;
            var u = MyServices.getuser();
            var c = MyServices.getCart();
            MyDatabase.sendcartoffline(retailerdata2.id, u.id, c, retailerdata2.remark);
            $ionicLoading.show({
                template: '<h1 class="ion-loading-c"></h1><br>Sendig order...',
                animation: 'fade-in',
                showBackdrop: true
            });
        };
    };
    ///////////////////////////////////////////////////////////////////////////////

})

.controller('ViewallCtrl', function ($scope, $stateParams, MyServices, $ionicLoading) {
    $scope.noorder = true;
    var userorders = function (data, status) {
        $ionicLoading.hide();
        if (data != "false") {
            $scope.userordersdata = data;
        } else {
            $scope.noorder = false;
            console.log("noorder is true");
        };
    };
    MyServices.getuserorders(user.id).success(userorders);


})

.controller('OrderCtrl', function ($scope, $stateParams, MyServices,MyDatabase, $ionicModal, $location, $ionicLoading, $ionicPopup, $timeout) {
    $ionicLoading.hide();

    var user = MyServices.getuser();
    console.log(user);
    $scope.useremail = user.email;


    var orderdetails = function (data, status) {
        console.log("resend email success");
        console.log(data);
        $scope.retailerdata = data.retailer;
        $scope.distributoremail = data.retailer.distributor;
        $scope.retaileremail = data.retailer.email;

        $scope.mycart = data.orderproduct;
        $scope.user = data.sales;
        $scope.total = data.amount;
        $scope.timestamp = data.timestamp;

        email(data);
        console.log(data);
        console.log($scope.retailerdata);
        console.log($scope.mycart);
        console.log($scope.user);
        console.log($scope.total);

        //resend popup
        var myPopup = $ionicPopup.show({
            template: '<center><h3>Order Resend !</h3></center>',
            title: 'Hurray!',
            scope: $scope
        });
        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });
        $timeout(function () {
            myPopup.close(); //close the popup after 3 seconds for some reason
        }, 2000);
    };

    //RESEND EMAIL
    $scope.resendemail = function (orderid) {};

    $scope.recart = [];
    //ADD TO CART FUNCTION
    $scope.addToCart = function (id, productcode, name, quantity, mrp) {

        $scope.totalprice = quantity * mrp;
        //$scope.total += totalprice;
        if (quantity > 0) {

            MyServices.addItemToCart(id, productcode, name, quantity, mrp, $scope.totalprice);
            $scope.newcart = MyServices.getCart();
            console.log("YOUR CART " + $scope.newcart);
        };

    };

    //REORDER ORDER////////////////////////////////////////
    var reorder = function (data, status) {
        console.log(data);
        $scope.retailerid = data.retailer.id;
        MyServices.setretailer($scope.retailerid);
        MyServices.setcart($scope.recart);
        $scope.recart = data.orderproduct;

        for (i = 0; i < $scope.recart.length; i++) {
            $scope.addToCart($scope.recart[i].id, $scope.recart[i].productcode, $scope.recart[i].name, $scope.recart[i].quantity, $scope.recart[i].amount);
        };
        $location.path("/app/dealer/" + $scope.retailerid + "/6");

    };

    $scope.resendorder = function (orderid) {
        $scope.orderID = orderid;
        var orderdata = MyDatabase.getorderdetail(orderid);
        console.log(orderdata);
    };

    console.log(user.zone);
    var zid = user.zone;

    $scope.filter = {
        state: "",
        city: "",
        area: "",
        retailer: ""
    };

    $scope.ordersdata = 'false';

    //STATE
    $scope.statedata = [];
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM STATE",[],function(tx, results){
            for(var w=0; w<results.rows.length; w++)
            {
                $scope.statedata.push(results.rows.item(w));
            };
        }, function(tx, results){});
    });

    //CITY
    
    $scope.statechange = function (sid) {
        console.log(sid);
        $scope.citydata = [];
        db.transaction(function(tx2){
        tx2.executeSql("SELECT * FROM CITY WHERE id="+sid,[],function(tx2, results){
            for(var w=0; w<results.rows.length; w++)
            {
                $scope.citydata.push(results.rows.item(w));
            };
        }, function(tx2, results){});
    });
    };
    //AREA
    $scope.areadata = [];
    $scope.citychange = function (cid) {
        db.transaction(function (tx) {
            tx.executeSql("SELECT * FROM AREA WHERE city =" + cid, [], function (tx, results) {
                for (var q = 0; q < results.rows.length; q++) {
                    console.log("in success");
                    $scope.areadata.push(results.rows.item(q));
                };
            }, function (tx, results) {
            console.log("in success");
            });
        });
    };
    //RETAILER
    $scope.retailerdata = [];
    $scope.areachange = function (aid) {
        db.transaction(function (tx) {
            tx.executeSql("SELECT * FROM RETAILER WHERE area =" + aid, [], function (tx, results) {
                for (var q = 0; q < results.rows.length; q++) {
                    $scope.retailerdata.push(results.rows.item(q));
                };
            }, function (tx, results) {});
        });
    };
    
    retailersuccessini = function (data, status) {
        $scope.retailerdata = data;
        console.log("Chinatn shah");
        MyServices.getretailerdata(MyServices.getmyorderretailer().retailer).success(retailerdatasuccess);
    };

    $scope.resettoold = function () {
        $scope.filter = {
            zone: "4",
            state: "27",
            city: "1",
            area: "1",
            retailer: "1"
        };
    };
    $scope.resettoold2 = function () {
        $scope.filter = {
            zone: "",
            state: "",
            city: "",
            area: "",
            retailer: ""
        };
    };

    //GET RETAILER DATA
    retailerdatasuccess = function (data, status) {
        $scope.ordersdata = data;
        $scope.filter = {
            zone: "",
            state: "",
            city: "",
            area: "",
            retailer: ""
        };
        $scope.filter = MyServices.getmyorderretailer();
    };
    
    $scope.retialerdata = [];
    $scope.retailerchange = function (filter) {
        console.log(filter);
        MyServices.setmyorderretailer(filter);
        MyServices.setmyorderdate(false);

        db.transaction(function (tx) {
            tx.executeSql("SELECT * FROM RETAILER WHERE id=" + filter, [], function (tx, results) {
                $scope.retialerdata.push(results.rows.item(0));
            }, function (tx, results) {})
        });
        console.log($scope.retailerdata);
        $scope.closeRetailer();
    };

    //GET DATA BY DATE
    datedatasuccess = function (data, status) {
        $scope.ordersdata = data;

    };
    $scope.datechange = function (did) {
        MyServices.setmyorderdate(did);
        MyServices.getdatedata(did).success(datedatasuccess);
        $scope.closeDate();
    };

    $scope.selecteddate = MyServices.getmyorderdate();

    if (MyServices.getmyorderdate()) {
        MyServices.getdatedata(MyServices.getmyorderdate()).success(datedatasuccess);
    } else if (MyServices.getmyorderretailer().retailer != "") {
        //$scope.filter=MyServices.getmyorderretailer();
        MyServices.findzone().success(zonesuccess);
        MyServices.findstate(MyServices.getmyorderretailer().zone).success(statesuccess);
        MyServices.findcity(MyServices.getmyorderretailer().state).success(citysuccess);
        MyServices.findarea(MyServices.getmyorderretailer().city).success(areasuccess);
        MyServices.findretailer(MyServices.getmyorderretailer().area).success(retailersuccessini);
    }


    //MyServices.getuserorders(user.id).success(userorders);

    //    Sorting Modals

    // Date Modal
    $ionicModal.fromTemplateUrl('templates/sort-date.html', {
        id: '1',
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.oModal1 = modal;
    });
    $scope.openDate = function () {
        $scope.oModal1.show();
    };
    $scope.closeDate = function () {
        $scope.oModal1.hide();
    };

    // Retailer Modal 
    $ionicModal.fromTemplateUrl('templates/sort-retailer.html', {
        id: '2',
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.oModal2 = modal;
    });
    $scope.openRetailer = function () {
        $scope.oModal2.show();
    };
    $scope.closeRetailer = function () {
        $scope.oModal2.hide();
    };


})

.controller('OrderdetailCtrl', function ($scope, $stateParams, MyServices, $ionicLoading) {

    var orderID = $stateParams.id;
    //console.log(user);
    var orderdetails = function (data, status) {
        $ionicLoading.hide();
        $scope.user = data.sales;
        $scope.total = data.amount;
        $scope.retailerdata = data.retailer;
        $scope.orderdetailsdata = data.orderproduct;
        $scope.gettotalquantity();

    };
    MyServices.getorderdetail(orderID).success(orderdetails);

    $scope.gettotalquantity = function () {
        $scope.quantitytotal = 0;
        for (var i = 0; i < $scope.orderdetailsdata.length; i++) {
            $scope.quantitytotal += parseInt($scope.orderdetailsdata[i].quantity);
        };
        return $scope.quantitytotal;
    };

    //FUNCTION TO DISPLAY PRODUCTS FILTER
    $scope.cartnotschemenew = function (category, $index) {
        if (category.category == "new" || category.category == "scheme") {
            return false;
        } else {
            return true;
        }
    };

})

.controller('AddshopCtrl', function ($scope, $stateParams, $cordovaCamera, $cordovaFile, $http, MyServices, MyDatabase, $location, $ionicLoading, $cordovaGeolocation, $cordovaNetwork) {
    var offline = MyServices.getmode();
    offline = true;
    console.log("OFFLINE MODE IS " + offline);
    //CHECK IF INTERNET IS CONNECTED
    /* $scope.type = $cordovaNetwork.getNetwork();
    var isOnline = $cordovaNetwork.isOnline();
    offline = !(isOnline);*/

    $ionicLoading.hide();

    var aid = $stateParams.areaid;
    $scope.firstclick = 0;


    var areasuccess = function (data, status) {
        $scope.areaname = data.name;
    };
    MyServices.areaone(aid).success(areasuccess);

    $scope.filename2 = "";
    //GEO-LOCATION
    /*var onSuccess = function (position) {
        alert('Latitude: ' + position.coords.latitude + '\n' +
            'Longitude: ' + position.coords.longitude);
         //$scope.lat = position.coords.latitude;
        //$scope.long = position.coords.longitude;
        $scope.addretailer.lat = '' + position.coords.latitude + '';
        $scope.addretailer.long = '' + position.coords.longitude + '';
    };

    function onError(error) {
        alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');

        $scope.addretailer.lat = 'not found';
        $scope.addretailer.long = 'not found';
    }
    window.navigator.geolocation.getCurrentPosition(onSuccess, onError, {
        enableHighAccuracy: true
    });*/
    $cordovaGeolocation.getCurrentPosition().then(function (position) {
        $scope.addretailer.lat = '' + position.coords.latitude + '';
        $scope.addretailer.long = '' + position.coords.longitude + '';
    }, function (err) {
        // error
        alert("GPS is off");
    });

    $scope.addretailer = {};
    $scope.addretailer.area = aid;
    $scope.addretailer.name = '';
    $scope.addretailer.number = '';
    $scope.addretailer.address = '';
    $scope.addretailer.code = '';
    $scope.addretailer.contactname = '';
    $scope.addretailer.contactnumber = '';
    $scope.addretailer.ownername = '';
    $scope.addretailer.ownernumber = '';
    $scope.addretailer.dob = '';
    $scope.addretailer.type_of_area = '';
    $scope.addretailer.sq_feet = '';
    $scope.addretailer.store_image = '';
    $scope.addretailer.lat = '';
    $scope.addretailer.long = '';


    $scope.addRetailerFunction = function () {
        if ($scope.firstclick == 0) {
            $scope.firstclick = 1;
            console.log("retailer name is " + $scope.addretailer.name);
            console.log($scope.addretailer);

            function addRetailerSuccess(data, status) {
                //SUCCESS
                console.log(data);

                //REDIRECT
                var pathToGo = "/app/retailer/" + aid;
                console.log($location.path());
                $location.path(pathToGo);

            };
            if (offline) {
                console.log("ADD TO OFFLINE DB");
                MyDatabase.addnewretailer($scope.addretailer);
            } else {
                MyServices.addNewRetailer($scope.addretailer).success(addRetailerSuccess);
            };

        }

        //sqfeet type dob area latitude longitude contactperson address contactnumber email compony code name
    };


    //Capture Image
    $scope.takePicture = function () {
        var options = {
            quality: 20,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            saveToPhotoAlbum: true
        };

        $cordovaCamera.getPicture(options).then(function (imageData) {
            // Success! Image data is here
            $scope.cameraimage = imageData;
            $scope.uploadPhoto();
        }, function (err) {
            // An error occured. Show a message to the user
        });

        //Upload photo
        var server = 'http://wohlig.biz/Toykraftbackend/index.php/json/uploadfile';

        //File Upload parameters: source, filePath, options
        $scope.uploadPhoto = function () {
            console.log("function called");
            $cordovaFile.uploadFile(server, $scope.cameraimage, options)
                .then(function (result) {
                    console.log(result);
                    result = JSON.parse(result.response);
                    filenameee = result;
                    $scope.filename2 = result.file_name;
                    $scope.addretailer.store_image = $scope.filename2;

                }, function (err) {
                    // Error
                    console.log(err);
                    console.log("Error");
                }, function (progress) {
                    // constant progress updates
                });

        };

    };
})
    .controller('PhotoSliderCtrl', function ($scope, $stateParams, MyServices, $ionicModal, $ionicSlideBoxDelegate, $ionicLoading) {

        $ionicLoading.hide();
        $ionicModal.fromTemplateUrl('templates/image-slider.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function (index2) {

            $scope.modal.show();
            // Important: This line is needed to update the current ion-slide's width
            // Try commenting this line, click the button and see what happens

            $ionicSlideBoxDelegate.start();
            $ionicSlideBoxDelegate.update();
            for (var i = 0; i < 20; i++) {
                $ionicSlideBoxDelegate.previous();
            }
            for (var i = 0; i < index2; i++) {
                $ionicSlideBoxDelegate.next();
            }

        };

        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hide', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });
        $scope.$on('modal.shown', function () {
            console.log('Modal is shown!');
        });

        // Call this functions if you need to manually control the slides
        $scope.next = function () {
            $ionicSlideBoxDelegate.next();
        };

        $scope.previous = function () {
            $ionicSlideBoxDelegate.previous();
        };

        // Called each time the slide changes
        $scope.slideChanged = function (index) {
            $scope.slideIndex = index;
        };
    });