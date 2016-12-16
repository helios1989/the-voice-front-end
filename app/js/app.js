var factory;
var competition;

///////////////////////////////////////////////////////////////////////////////////////////
// Angular Module Declaration For the application
///////////////////////////////////////////////////////////////////////////////////////////
// Dependencies
// NgRoute to support client side navigational routing
///////////////////////////////////////////////////////////////////////////////////////////
angular.module("TheVoice", ["ngRoute", "ngYoutubeEmbed"]);

///////////////////////////////////////////////////////////////////////////////////////////
// Client Side Routing Configuration of Route Provider
// Identifies the controller and template for each route
// Sets Home as the Unconfigured default Route
///////////////////////////////////////////////////////////////////////////////////////////
angular.module("TheVoice").config(["$routeProvider", function($routeProvider) {

    $routeProvider.
      when("/", {
        templateUrl : "home.html",
        controller  : "HomeController"
      })
      .when("/form", {
        templateUrl : "form.html",
        controller  : "FormController"
      })
      .when("/singers/:id", {
        templateUrl : "singer.html",
        controller  : "SingerController"
      })

      .otherwise({
        redirectTo: "/"
      });

}]);


window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      console.log(err);
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;

    /*meta.AddCompetition(1,1,1).then(function() {
      console.log("good");
    }).catch(function(e) {
      console.log("bad");
      setStatus("Error sending coin; see log.");
    });*/


  factory= CompetitionFactory.deployed();
  competition = Competition.deployed();



    var meta = CompetitionFactory.deployed();
    //console.log(meta);


    //var temp = meta.AddCompetition.call(1,1,1,{ from: accounts[0] }).then(function() {

    var meta2 = Competition.deployed();

  /*  meta2.AddArtist.call("lol","lol","lol",{ from: accounts[0],gas:500000 }).then(function() {
      console.log("added");
      meta2.getNumberArtists.call({ from: accounts[0],gas:500000 }).then(function(nb) {
        console.log(nb.valueOf());
      }).catch(function(e) {
        console.log(e);
      });
    }).catch(function(e) {
      console.log(e);
    });*/


      /*var lol = meta.test.call({from: accounts[0]}).then(function(value) {
        console.log("brut " + value);
        console.log(value);
        var temp =  value.valueOf();
        console.log("valueOf " +temp);

      }).catch(function(e) {
        console.log(e);
      });*/

      /*meta.getCompetition.call(0,{ from: accounts[0],gas:50000 }).then(function(comp) {
        comp.getNumberArtists.call({ from: accounts[0],gas:50000 }).then(function(nb) {
          console.log(nb.valueOf());
        }).catch(function(e) {
        console.log(e);
      });
      }).catch(function(e) {
        console.log("fail get comp");
      });*/


      //var comp = meta.getCompetition.call(0,{ from: accounts[0],gas:50000 }).then(function() {
      //var lol = meta.test.call({ from: accounts[0],gas:50000 }).then(function() {



    //1console.log(meta.test());
    //var meta2 = Test.new({ from: accounts[0] });

    //var result = meta.test();

  });



}
