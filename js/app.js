(function(){var MEGADATA;MEGADATA={buildList:JSON.parse('[{"name":"三光環雙手旋風斬","author":"a2829929","url":"http://forum.gamer.com.tw/C.php?bsn=18966&snA=20558&tnum=12","preview":"img/build/preview/1.jpg","summary":"對新手也適用的雙手旋風斬攻略，遊戲時間一天內達到可農月影神殿2、3層的程度。","classes":["野蠻人","決鬥者","聖堂武僧"],"tags":["近戰","雙手","物理","吸血","多光環","白手起家","免五連"],"passives":["霸體","堅毅之心"]},{"name":"近戰熔岩打擊","author":"kisk93784","url":"http://forum.gamer.com.tw/C.php?bsn=18966&snA=22049&tnum=36","preview":"img/build/preview/2.jpg","summary":"一種坦力足夠並且有著相當高傷害的流派，選用的正是熔岩打擊，來幫助近戰發展出既坦傷害又高的玩法。","classes":["野蠻人"],"tags":["近戰","單手","元素","吸血","白手起家","免五連"],"passives":["火之化身","堅鐵之力","霸體","零點射擊","堅毅之心","烈士意志"]},{"name":"元素靈投1.10","author":"a29510029","url":"http://forum.gamer.com.tw/C.php?bsn=18966&snA=20348&tnum=45","preview":"img/build/preview/3.jpg","summary":"只要有白狼+5L電甲你就能單刷73~75MAP，不到15EX你就能單刷女王，這就是此Bulid最大的優勢。","classes":["遊俠","暗影刺客","貴族"],"tags":["遠程","單手","元素","吸血","多光環","可擊殺女王"],"passives":[""]},{"name":"燃燒型烈焰爆破","author":"andyy22k","url":"http://forum.gamer.com.tw/C.php?bsn=18966&snA=20139&tnum=32","preview":"img/build/preview/4.jpg","summary":"此build適合白手起家的新手服用，幾乎所有寶石任務都解的到，裝備需求也極低。","classes":["暗影刺客","女巫","聖堂武僧"],"tags":["法術","單手","元素","白手起家","免五連"],"passives":["異能魔力","霸體"]},{"name":"白手起家爆擊施法","author":"m77101611706","url":"http://forum.gamer.com.tw/C.php?bsn=18966&snA=22792&tnum=12","preview":"img/build/preview/5.jpg","summary":"證明其實白手起家且頂著一身天然自產的廢裝也能玩的相當不錯，看過我實況的應該都知道60等轉型的時候我手上還拿著藍色匕首跟盾牌....","classes":["遊俠"],"tags":["遠程","單手","元素","吸血","能量護盾","爆擊施放","白手起家"],"passives":["異能魔力"]},{"name":"COC爆擊施放流","author":"stevecnh","url":"http://forum.gamer.com.tw/C.php?bsn=18966&snA=19884&tnum=49","preview":"img/build/preview/6.jpg","summary":"爆擊施放流是非常不適合新手用來拓荒/打寶，但對遊戲基本內容有一定認識的中高階玩家，這流派將會讓你的DPS上升，遊戲爽度進一步提升的流派。","classes":["女巫"],"tags":["遠程","爆擊施放","單手","元素","吸血","能量護盾"],"passives":["異能魔力","靈能護體","烈士意志","瓦爾冥約"]}]'),newsInfo:["2014/8/14 PoE正式公測","2014/8/8 PoE建長刪檔封測時間"],updateNotice:["2014/8/10 網站正式上線","2014/8/9 網站測試中"]};angular.module("POETool",["ngAnimate","ui.router","ui.bootstrap"]).config(function($stateProvider,$urlRouterProvider){$urlRouterProvider.otherwise("/Dash");return $stateProvider.state("dash",{url:"/Dash",views:{navbar:{templateUrl:"template/navbar.html",controller:"NavbarCtrl"},aside:{templateUrl:"template/aside.html",controller:"AsideCtrl"},content:{templateUrl:"template/dash.html",controller:"DashCtrl"}}}).state("buildList",{url:"/BuildList",views:{navbar:{templateUrl:"template/navbar.html",controller:"NavbarCtrl"},aside:{templateUrl:"template/aside.html",controller:"AsideCtrl"},content:{templateUrl:"template/buildlist.html",controller:"BuildListCtrl"}}})}).controller("NavbarCtrl",function($scope,$state){$scope.visitingDash=$state.current.name==="dash";return $scope.visitingBuildList=$state.current.name==="buildList"}).controller("AsideCtrl",function($scope){}).controller("DashCtrl",function($scope){$scope.newsInfo=MEGADATA.newsInfo;return $scope.updateNotice=MEGADATA.updateNotice}).controller("BuildListCtrl",function($scope,$window,Builds){$scope.filteredBuilds=Builds.get();$scope.filteredBuildsTotal=$scope.filteredBuilds.length;$scope.selectedClassese=[];$scope.selectedTags=[];$scope.updateFilteredBuilds=function(){var classes,tags;classes=[];tags=[];if($scope.classMarauderEnable){classes.push("野蠻人")}if($scope.classDuelistEnable){classes.push("決鬥者")}if($scope.classRangerEnable){classes.push("遊俠")}if($scope.classShadowEnable){classes.push("暗影刺客")}if($scope.classWitchEnable){classes.push("女巫")}if($scope.classTemplarEnable){classes.push("聖堂武僧")}if($scope.classScionEnable){classes.push("貴族")}if($scope.tagMelee){tags.push("近戰")}if($scope.tagRanged){tags.push("遠程")}if($scope.tagSpell){tags.push("法術")}if($scope.tagTrap){tags.push("陷阱")}if($scope.tagCOC){tags.push("爆擊施放")}if($scope.tagOneHanded){tags.push("單手")}if($scope.tagTwoHanded){tags.push("雙手")}if($scope.tagDualWielding){tags.push("雙持")}if($scope.tagPhysical){tags.push("物理")}if($scope.tagElement){tags.push("元素")}if($scope.tagChaos){tags.push("混沌")}if($scope.tagCritical){tags.push("暴擊")}if($scope.tagDOT){tags.push("持續傷害")}if($scope.tagLifeLeech){tags.push("吸血")}if($scope.tagLifeRegen){tags.push("回血")}if($scope.tagEnergyShield){tags.push("能量護盾")}if($scope.tagMultiAura){tags.push("多光環")}if($scope.tagScratch){tags.push("白手起家")}if($scope.tag5LFree){tags.push("免五連")}if($scope.tagAtziriKill){tags.push("可擊殺女王")}if(classes.length===0&&tags.length===0){return $scope.filteredBuilds=Builds.get()}else{if(tags.length===0){return $scope.filteredBuilds=Builds.get(classes)}else{return $scope.filteredBuilds=Builds.get(classes,tags)}}};return $scope.openURL=function(url){return $window.open(url,"_blank")}}).factory("Builds",function(){var builds;builds=MEGADATA.buildList;return{get:function(classes,tags){var filteredBuilds,i$,ref$,len$,build;filteredBuilds=[];if(!classes&&!tags){filteredBuilds=builds}else{if(!tags){for(i$=0,len$=(ref$=builds).length;i$<len$;++i$){build=ref$[i$];if(this.matchArray(build.classes,classes)){filteredBuilds.push(build)}}}else{if(classes.length===0){for(i$=0,len$=(ref$=builds).length;i$<len$;++i$){build=ref$[i$];if(this.matchAllArray1(tags,build.tags)){filteredBuilds.push(build)}}}else{for(i$=0,len$=(ref$=builds).length;i$<len$;++i$){build=ref$[i$];if(this.matchArray(build.classes,classes)){if(this.matchAllArray1(tags,build.tags)){filteredBuilds.push(build)}}}}}}return filteredBuilds},matchArray:function(arr1,arr2){var i$,len$,itemA,j$,len1$,itemB;for(i$=0,len$=arr1.length;i$<len$;++i$){itemA=arr1[i$];for(j$=0,len1$=arr2.length;j$<len1$;++j$){itemB=arr2[j$];if(itemA===itemB){return true}}}return false},matchAllArray1:function(arr1,arr2){var arr1Length,matchTotal,i$,len$,itemA,j$,len1$,itemB;arr1Length=arr1.length;matchTotal=0;for(i$=0,len$=arr1.length;i$<len$;++i$){itemA=arr1[i$];for(j$=0,len1$=arr2.length;j$<len1$;++j$){itemB=arr2[j$];if(itemA===itemB){matchTotal++}}}if(matchTotal===arr1Length){return true}else{return false}}}})}).call(this);