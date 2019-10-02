var app = angular.module('myApp', ['ui.bootstrap']);
app.controller('MyCtrl', function($scope, $window, $http,  $uibModal) {
    var vm = this;


    vm.losaForma=false;
    vm.email="stefanr@gmail.com";
    vm.password="123";
    vm.imejl="";
    vm.sifra="";
    vm.ulogovan=false;
    vm.poruka="";
    vm.porukaKupovine="";
    vm.korpa=0;
    vm.listaKorpe=[];
    vm.cenaKorpe=0;



    vm.ulogujSe= function(){
        if(vm.sifra==vm.password && vm.imejl==vm.email){
            vm.poruka="tacno";
            vm.ulogovan=true;
            $('#modalLoginForm').modal('hide');
        }else{
            vm.poruka="netacno";
            vm.ulogovan = false;
        }
    }
    vm.izlogujSe=function(){
      vm.ulogovan=false;
      vm.korpa=0;
      vm.listaKorpe=[];
      vm.cenaKorpe=0;
    }
    vm.registrujSe=function(){
        vm.email=vm.imejl;
        vm.password=vm.sifra;
        $('#modalRegisterForm').modal('hide');
    }


    vm.get = function(){
      var req2 = {
          method: "GET",
          url: "/games"
      }
      $http(req2).then(
          function(resp){
            console.log(resp);
            vm.filmovi = resp.data.filmovi;
            vm.sviFilmovi = resp.data.filmovi;
          }, function(resp){
              vm.message = 'error';
          });
    };

      vm.kupiBossBottledNight = function(){
        vm.poruka = "";
        if(!vm.ulogovan){
          vm.poruka = "Morate se ulogovati!";
        }else{
            vm.korpa += 1;
          vm.listaKorpe.push("Hugo Boss Bottled Night: 5500 rsd")
          vm.cenaKorpe += 5500;
          $('#modalBuyForm8').modal('hide');
          console.log(vm.cenaKorpe);
          console.log(vm.listaKorpe);
        }
      }

      vm.kupiBossBottledUnlimited = function(){
        vm.poruka = "";
        if(!vm.ulogovan){
          vm.poruka = "Morate se ulogovati!";
        }else{
            vm.korpa += 1;
          vm.listaKorpe.push("Hugo Boss Bottled Unlimited: 4990 rsd")
          vm.cenaKorpe += 4990;
          $('#modalBuyForm8').modal('hide');
          console.log(vm.cenaKorpe);
          console.log(vm.listaKorpe);
        }
      }

      vm.kupiBossTheScent = function(){
        vm.poruka = "";
        if(!vm.ulogovan){
          vm.poruka = "Morate se ulogovati!";
        }else{
            vm.korpa += 1;
          vm.listaKorpe.push("Hugo Boss The Scent: 4390 rsd")
          vm.cenaKorpe += 4390;
          $('#modalBuyForm8').modal('hide');
          console.log(vm.cenaKorpe);
          console.log(vm.listaKorpe);
        }
      }

      vm.kupiCasio = function(){
        vm.poruka = "";
        if(!vm.ulogovan){
          vm.poruka = "Morate se ulogovati!";
        }else{
            vm.korpa += 1;
          vm.listaKorpe.push("Casio: 6990 rsd")
          vm.cenaKorpe += 6990;
          $('#modalBuyForm8').modal('hide');
          console.log(vm.cenaKorpe);
          console.log(vm.listaKorpe);
        }
      }

      vm.kupiBossTheScentStick = function(){
        vm.poruka = "";
        if(!vm.ulogovan){
            vm.poruka = "Morate se ulogovati!";
        }else{
          vm.korpa += 1;
          vm.listaKorpe.push("Hugo Boss The Scent Stick: 2200 rsd")
          vm.cenaKorpe += 2200;
          $('#modalBuyForm8').modal('hide');
          console.log(vm.cenaKorpe);
          console.log(vm.listaKorpe);
        }
      }

      vm.kupiCarolinaHerrera212VIP = function(){
        vm.poruka = "";
        if(!vm.ulogovan){
            vm.poruka = "Morate se ulogovati!";
        }else{
          vm.korpa += 1;
          vm.listaKorpe.push("Carolina Herrera 212 VIP Men: 7100 rsd")
          vm.cenaKorpe += 7100;
          $('#modalBuyForm8').modal('hide');
          console.log(vm.cenaKorpe);
          console.log(vm.listaKorpe);
        }
      }

      vm.kupiGShock = function(){
        vm.poruka = "";
        if(!vm.ulogovan){
            vm.poruka = "Morate se ulogovati!";
        }else{
          vm.korpa += 1;
          vm.listaKorpe.push("G-Shock MR-G: 11290 rsd")
          vm.cenaKorpe += 11290;
          $('#modalBuyForm8').modal('hide');
          console.log(vm.cenaKorpe);
          console.log(vm.listaKorpe);
        }
      }

      vm.kupiPacoRabbaneBlackXS = function(){
        vm.poruka = "";
        if(!vm.ulogovan){
          vm.poruka = "Morate se ulogovati!";
        }else{
          vm.kolicina = 1;
          vm.korpa += 1 * vm.kolicina;
          vm.listaKorpe.push("Paco Rabbane Black XS: 6600 rsd")
          vm.cenaKorpe += 6600;
          $('#modalBuyForm8').modal('hide');
          console.log(vm.cenaKorpe);
          console.log(vm.listaKorpe);
        }
      }

    vm.get();

});