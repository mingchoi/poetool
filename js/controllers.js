(function(){angular.module("POETool.controllers",[]).controller("NavbarCtrl",function($scope,$state,BroadcastServer){$scope.visitingDash=$state.current.name==="dash";$scope.visitingBuildList=$state.current.name==="buildList";$scope.visitingCurrencyConverter=$state.current.name==="currencyConverter";$scope.visitingWalkthrough=$state.current.name==="walkthrough";$scope.visitingChatChannel=$state.current.name==="chatChannel";$scope.visitingBroadcast=$state.current.name==="broadcast";$scope.isBroadcastOnline=false;return BroadcastServer.getStatus(function(data){if(data.status==="online"){$scope.isBroadcastOnline=true;return $scope.broadcastTitle=data.title}else{return $scope.broadcastTitle=""}})}).controller("AsideCtrl",function($scope,TradeServer,User){TradeServer.connect();$scope.login=function(){return TradeServer.login(function(data){return console.log(data)})};$scope.logout=function(){return TradeServer.logout()};return $scope.regist=function(un,pw){return TradeServer.registation(un,pw,function(data){return console.log(data)})}}).controller("DashCtrl",function($scope,StaticData){$scope.newsInfo=StaticData.get("newsInfo");return $scope.updateNotice=StaticData.get("updateNotice")}).controller("BuildListCtrl",function($scope,$window,Builds){$scope.filteredBuilds=Builds.get();$scope.filteredBuildsTotal=$scope.filteredBuilds.length;$scope.selectedClassese=[];$scope.selectedTags=[];$scope.updateFilteredBuilds=function(){var classes,tags;classes=[];tags=[];if($scope.classMarauderEnable){classes.push("野蠻人")}if($scope.classDuelistEnable){classes.push("決鬥者")}if($scope.classRangerEnable){classes.push("遊俠")}if($scope.classShadowEnable){classes.push("暗影刺客")}if($scope.classWitchEnable){classes.push("女巫")}if($scope.classTemplarEnable){classes.push("聖堂武僧")}if($scope.classScionEnable){classes.push("貴族")}if($scope.tagMelee){tags.push("近戰")}if($scope.tagRanged){tags.push("遠程")}if($scope.tagSpell){tags.push("法術")}if($scope.tagTrap){tags.push("陷阱")}if($scope.tagCOC){tags.push("爆擊施放")}if($scope.tagOneHanded){tags.push("單手")}if($scope.tagTwoHanded){tags.push("雙手")}if($scope.tagDualWielding){tags.push("雙持")}if($scope.tagPhysical){tags.push("物理")}if($scope.tagElement){tags.push("元素")}if($scope.tagChaos){tags.push("混沌")}if($scope.tagCritical){tags.push("暴擊")}if($scope.tagDOT){tags.push("持續傷害")}if($scope.tagLifeLeech){tags.push("吸血")}if($scope.tagLifeRegen){tags.push("回血")}if($scope.tagEnergyShield){tags.push("能量護盾")}if($scope.tagMultiAura){tags.push("多光環")}if($scope.tagScratch){tags.push("白手起家")}if($scope.tag5LFree){tags.push("免五連")}if($scope.tagAtziriKill){tags.push("可擊殺女王")}if(classes.length===0&&tags.length===0){return $scope.filteredBuilds=Builds.get()}else{if(tags.length===0){return $scope.filteredBuilds=Builds.get(classes)}else{return $scope.filteredBuilds=Builds.get(classes,tags)}}};return $scope.openURL=function(url){return $window.open(url,"_blank")}}).controller("CurrencyConverterCtrl",function($scope,CurrencyConverter){$scope.currencyList=CurrencyConverter.list();$scope.selectedCurrencyA=$scope.currencyList[9];$scope.currencyAmountA=1;$scope.selectedCurrencyB=$scope.currencyList[5];$scope.updateFrom=function(sideOrName){if(sideOrName==="A"){return $scope.currencyAmountB=$scope.currencyAmountA*$scope.selectedCurrencyA.cRate/$scope.selectedCurrencyB.cRate}else{if(sideOrName==="B"){return $scope.currencyAmountA=$scope.currencyAmountB*$scope.selectedCurrencyB.cRate/$scope.selectedCurrencyA.cRate}else{if($scope.selectedCurrencyA.name===sideOrName){return $scope.updateFrom("A")}else{if($scope.selectedCurrencyB.name===sideOrName){return $scope.updateFrom("B")}}}}};return $scope.updateFrom("A")}).controller("WalkthroughCtrl",function($scope){}).controller("ChatChannelCtrl",function($scope){}).controller("BroadcastCtrl",function($scope){})}).call(this);