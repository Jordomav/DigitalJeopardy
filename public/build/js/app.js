!function(){"use strict";angular.module("jeopardyApp",["ngTouch"])}(),function(){"use strict";angular.module("jeopardyApp").controller("adminController",function(){var e=this;e.questionType=null,e.setQuestionType=function(o){e.questionType=o},e.getQuestionType=function(o){return e.questionType?e.questionType:(o&&(console.log(o),o=JSON.parse(o),_.has(o,"question")?e.questionType="text":_.has(o,"image")&&(e.questionType="image")),"text")}})}(),function(){"use strict";angular.module("jeopardyApp").controller("buzzerController",["$scope","$http","$timeout",function(e,o,n){var t=this;t.allPlayersWhoBuzzed=[],t.firstPlayerWhoBuzzed=null,t.thisPlayer=null,t.pusher=new Pusher("4792c6294d140acf74ba"),t.pusherChannel=t.pusher.subscribe("buzzer-channel"),t.pusherChannel.bind("App\\Events\\PlayerHitBuzzer",function(o){t.allPlayersWhoBuzzed.push(o.player),t.disableBuzzer(),e.$apply()}),Pusher.log=function(e){window.console&&window.console.log&&window.console.log(e)},t.init=function(e){t.thisPlayer=e};t.disableBuzzer=function(){return t.allPlayersWhoBuzzed.length>0?!0:void 0},t.broadcastToAllPlayersInGame=function(){o.get("buzz")},t.enabledness=function(){return t.disableBuzzer()===!0?"buzzer-disabled":void 0},t.getFirstPlayerWhoBuzzedIn=function(){t.firstPlayerWhoBuzzed=t.allPlayersWhoBuzzed[0]}}])}(),function(){"use strict";angular.module("jeopardyApp").controller("jeopardyController",["$http","Jeopardy",function(e,o){function n(e){o.init(e).then(function(){console.log(o.gameData),u.gameData=o.gameData,t()})}function t(){_.forEach(u.gameData.categories,function(e){e.questions=[];var o=100,n=1;_.forEach(u.gameData.questions,function(t){t.category_id===e._id&&(t.money=o*n,e.questions.push(t),n++)}),u.categories.push(e)}),console.log(u.categories)}var u=this;u.gameData=[],u.categories=[],u.setGame=function(e){n(e)},u.selectQuestion=function(e){u.selectedQuestion=e,o.selectQuestion(e)},u.toggleShowAnswer=function(){u.selectedQuestion.showAnswer=!u.selectedQuestion.showAnswer},u.returnToGameboard=function(){o.returnToGameboard()},u.buttonClick=function(){console.log("Hello")}}])}(),function(){"use strict";angular.module("jeopardyApp").service("Jeopardy",["$http",function(e){function o(o){return console.log(o),e.get("/get-categories/"+o)}var n=this;n.gameData=[],n.init=function(e){return o(e).then(function(e){console.log(e),n.gameData=e.data},function(e){alert("There was an error retrieving game data."),console.log(e)})},n.selectQuestion=function(e){e.selected=!0,Custombox.open({target:"#modal",effect:"push"})},n.returnToGameboard=function(){Custombox.close()}}])}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImplb3BhcmR5LmFwcC5qcyIsImFkbWluL2FkbWluLmNvbnRyb2xsZXIuanMiLCJidXp6ZXIvYnV6emVyLmNvbnRyb2xsZXIuanMiLCJqZW9wYXJkeS9qZW9wYXJkeS5jb250cm9sbGVyLmpzIiwiamVvcGFyZHkvamVvcGFyZHkuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsInZtIiwidGhpcyIsInF1ZXN0aW9uVHlwZSIsInNldFF1ZXN0aW9uVHlwZSIsInR5cGUiLCJnZXRRdWVzdGlvblR5cGUiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiLCJfIiwiaGFzIiwiJHNjb3BlIiwiJGh0dHAiLCIkdGltZW91dCIsImFsbFBsYXllcnNXaG9CdXp6ZWQiLCJmaXJzdFBsYXllcldob0J1enplZCIsInRoaXNQbGF5ZXIiLCJwdXNoZXIiLCJQdXNoZXIiLCJwdXNoZXJDaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsImJ1enpFdmVudCIsInB1c2giLCJwbGF5ZXIiLCJkaXNhYmxlQnV6emVyIiwiJGFwcGx5IiwibWVzc2FnZSIsIndpbmRvdyIsImluaXQiLCJsZW5ndGgiLCJicm9hZGNhc3RUb0FsbFBsYXllcnNJbkdhbWUiLCJnZXQiLCJlbmFibGVkbmVzcyIsImdldEZpcnN0UGxheWVyV2hvQnV6emVkSW4iLCJKZW9wYXJkeSIsInJlbmRlckdhbWVib2FyZCIsImlkIiwidGhlbiIsImdhbWVEYXRhIiwicG9wdWxhdGVDYXRlZ29yaWVzIiwiZm9yRWFjaCIsImNhdGVnb3JpZXMiLCJjYXRlZ29yeSIsInF1ZXN0aW9ucyIsIm1vbmV5IiwiaSIsImNhdGVnb3J5X2lkIiwiX2lkIiwic2V0R2FtZSIsInNlbGVjdFF1ZXN0aW9uIiwic2VsZWN0ZWRRdWVzdGlvbiIsInRvZ2dsZVNob3dBbnN3ZXIiLCJzaG93QW5zd2VyIiwicmV0dXJuVG9HYW1lYm9hcmQiLCJidXR0b25DbGljayIsInNlcnZpY2UiLCJnZXRHYW1lRGF0YSIsInJlcyIsImRhdGEiLCJlcnIiLCJhbGVydCIsInNlbGVjdGVkIiwiQ3VzdG9tYm94Iiwib3BlbiIsInRhcmdldCIsImVmZmVjdCIsImNsb3NlIl0sIm1hcHBpbmdzIjoiQ0FBQSxXQUVBLFlBRUFBLFNBQUFDLE9BQUEsZUFBQSxlQ0pBLFdBRUEsWUFFQUQsU0FBQUMsT0FBQSxlQUNBQyxXQUFBLGtCQUFBLFdBRUEsR0FBQUMsR0FBQUMsSUFFQUQsR0FBQUUsYUFBQSxLQUVBRixFQUFBRyxnQkFBQSxTQUFBQyxHQUNBSixFQUFBRSxhQUFBRSxHQUdBSixFQUFBSyxnQkFBQSxTQUFBQyxHQUVBLE1BQUFOLEdBQUFFLGFBQ0FGLEVBQUFFLGNBR0FJLElBQ0FDLFFBQUFDLElBQUFGLEdBQ0FBLEVBQUFHLEtBQUFDLE1BQUFKLEdBQ0FLLEVBQUFDLElBQUFOLEVBQUEsWUFDQU4sRUFBQUUsYUFBQSxPQUNBUyxFQUFBQyxJQUFBTixFQUFBLFdBQ0FOLEVBQUFFLGFBQUEsVUFJQSxjQzlCQSxXQUVBLFlBRUFMLFNBQUFDLE9BQUEsZUFDQUMsV0FBQSxvQkFBQSxTQUFBLFFBQUEsV0FBQSxTQUFBYyxFQUFBQyxFQUFBQyxHQUVBLEdBQUFmLEdBQUFDLElBQ0FELEdBQUFnQix1QkFDQWhCLEVBQUFpQixxQkFBQSxLQUNBakIsRUFBQWtCLFdBQUEsS0FHQWxCLEVBQUFtQixPQUFBLEdBQUFDLFFBQUEsd0JBQ0FwQixFQUFBcUIsY0FBQXJCLEVBQUFtQixPQUFBRyxVQUFBLGtCQUVBdEIsRUFBQXFCLGNBQUFFLEtBQUEsK0JBQUEsU0FBQUMsR0FFQXhCLEVBQUFnQixvQkFBQVMsS0FBQUQsRUFBQUUsUUFFQTFCLEVBQUEyQixnQkFDQWQsRUFBQWUsV0FJQVIsT0FBQVosSUFBQSxTQUFBcUIsR0FDQUMsT0FBQXZCLFNBQUF1QixPQUFBdkIsUUFBQUMsS0FDQXNCLE9BQUF2QixRQUFBQyxJQUFBcUIsSUFLQTdCLEVBQUErQixLQUFBLFNBQUFiLEdBQ0FsQixFQUFBa0IsV0FBQUEsRUFPQWxCLEdBQUEyQixjQUFBLFdBQ0EsTUFBQTNCLEdBQUFnQixvQkFBQWdCLE9BQUEsR0FDQSxFQURBLFFBSUFoQyxFQUFBaUMsNEJBQUEsV0FDQW5CLEVBQUFvQixJQUFBLFNBSUFsQyxFQUFBbUMsWUFBQSxXQUNBLE1BQUFuQyxHQUFBMkIsbUJBQUEsRUFDQSxrQkFEQSxRQUtBM0IsRUFBQW9DLDBCQUFBLFdBdUJBcEMsRUFBQWlCLHFCQUFBakIsRUFBQWdCLG9CQUFBLFVDL0VBLFdBRUEsWUFFQW5CLFNBQUFDLE9BQUEsZUFDQUMsV0FBQSxzQkFBQSxRQUFBLFdBQUEsU0FBQWUsRUFBQXVCLEdBV0EsUUFBQUMsR0FBQUMsR0FDQUYsRUFBQU4sS0FBQVEsR0FDQUMsS0FBQSxXQUNBakMsUUFBQUMsSUFBQTZCLEVBQUFJLFVBQ0F6QyxFQUFBeUMsU0FBQUosRUFBQUksU0FDQUMsTUFNQSxRQUFBQSxLQUVBL0IsRUFBQWdDLFFBQUEzQyxFQUFBeUMsU0FBQUcsV0FBQSxTQUFBQyxHQUVBQSxFQUFBQyxZQUNBLElBQUFDLEdBQUEsSUFDQUMsRUFBQSxDQUVBckMsR0FBQWdDLFFBQUEzQyxFQUFBeUMsU0FBQUssVUFBQSxTQUFBeEMsR0FFQUEsRUFBQTJDLGNBQUFKLEVBQUFLLE1BR0E1QyxFQUFBeUMsTUFBQUEsRUFBQUMsRUFFQUgsRUFBQUMsVUFBQXJCLEtBQUFuQixHQUNBMEMsT0FJQWhELEVBQUE0QyxXQUFBbkIsS0FBQW9CLEtBRUF0QyxRQUFBQyxJQUFBUixFQUFBNEMsWUExQ0EsR0FBQTVDLEdBQUFDLElBRUFELEdBQUF5QyxZQUNBekMsRUFBQTRDLGNBRUE1QyxFQUFBbUQsUUFBQSxTQUFBWixHQUNBRCxFQUFBQyxJQXVDQXZDLEVBQUFvRCxlQUFBLFNBQUE5QyxHQUNBTixFQUFBcUQsaUJBQUEvQyxFQUNBK0IsRUFBQWUsZUFBQTlDLElBR0FOLEVBQUFzRCxpQkFBQSxXQUNBdEQsRUFBQXFELGlCQUFBRSxZQUFBdkQsRUFBQXFELGlCQUFBLFlBR0FyRCxFQUFBd0Qsa0JBQUEsV0FDQW5CLEVBQUFtQixxQkFHQXhELEVBQUF5RCxZQUFBLFdBQ0FsRCxRQUFBQyxJQUFBLGdCQy9EQSxXQUVBLFlBRUFYLFNBQUFDLE9BQUEsZUFDQTRELFFBQUEsWUFBQSxRQUFBLFNBQUE1QyxHQWtCQSxRQUFBNkMsR0FBQXBCLEdBRUEsTUFEQWhDLFNBQUFDLElBQUErQixHQUNBekIsRUFBQW9CLElBQUEsbUJBQUFLLEdBbEJBLEdBQUF2QyxHQUFBQyxJQUVBRCxHQUFBeUMsWUFFQXpDLEVBQUErQixLQUFBLFNBQUFRLEdBQ0EsTUFBQW9CLEdBQUFwQixHQUNBQyxLQUFBLFNBQUFvQixHQUNBckQsUUFBQUMsSUFBQW9ELEdBQ0E1RCxFQUFBeUMsU0FBQW1CLEVBQUFDLE1BRUEsU0FBQUMsR0FDQUMsTUFBQSw0Q0FDQXhELFFBQUFDLElBQUFzRCxNQVVBOUQsRUFBQW9ELGVBQUEsU0FBQTlDLEdBQ0FBLEVBQUEwRCxVQUFBLEVBRUFDLFVBQUFDLE1BQ0FDLE9BQUEsU0FDQUMsT0FBQSxVQUlBcEUsRUFBQXdELGtCQUFBLFdBQ0FTLFVBQUFJIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpXHJcbntcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnamVvcGFyZHlBcHAnLCBbJ25nVG91Y2gnXSk7XHJcblxyXG59KCkpOyIsIihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdqZW9wYXJkeUFwcCcpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ2FkbWluQ29udHJvbGxlcicsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2bS5xdWVzdGlvblR5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdm0uc2V0UXVlc3Rpb25UeXBlID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHZtLnF1ZXN0aW9uVHlwZSA9IHR5cGU7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2bS5nZXRRdWVzdGlvblR5cGUgPSBmdW5jdGlvbiAocXVlc3Rpb24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodm0ucXVlc3Rpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZtLnF1ZXN0aW9uVHlwZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24gPSBKU09OLnBhcnNlKHF1ZXN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXy5oYXMocXVlc3Rpb24sICdxdWVzdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnF1ZXN0aW9uVHlwZSA9ICd0ZXh0JztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF8uaGFzKHF1ZXN0aW9uLCAnaW1hZ2UnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5xdWVzdGlvblR5cGUgPSAnaW1hZ2UnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3RleHQnO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG59KCkpO1xyXG4iLCJcclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2plb3BhcmR5QXBwJylcclxuICAgICAgICAuY29udHJvbGxlcignYnV6emVyQ29udHJvbGxlcicsIGZ1bmN0aW9uICgkc2NvcGUsICRodHRwLCAkdGltZW91dCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICAgICAgdm0uYWxsUGxheWVyc1dob0J1enplZCA9IFtdO1xyXG4gICAgICAgICAgICB2bS5maXJzdFBsYXllcldob0J1enplZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHZtLnRoaXNQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZtLnB1c2hlciA9IG5ldyBQdXNoZXIoJzQ3OTJjNjI5NGQxNDBhY2Y3NGJhJyk7XHJcbiAgICAgICAgICAgIHZtLnB1c2hlckNoYW5uZWwgPSB2bS5wdXNoZXIuc3Vic2NyaWJlKCdidXp6ZXItY2hhbm5lbCcpO1xyXG5cclxuICAgICAgICAgICAgdm0ucHVzaGVyQ2hhbm5lbC5iaW5kKCdBcHBcXFxcRXZlbnRzXFxcXFBsYXllckhpdEJ1enplcicsIGZ1bmN0aW9uIChidXp6RXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2bS5hbGxQbGF5ZXJzV2hvQnV6emVkLnB1c2goYnV6ekV2ZW50LnBsYXllcik7XHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZGlzYWJsZUJ1enplcigpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEVuYWJsZSBQdXNoZXIgbG9nc1xyXG4gICAgICAgICAgICBQdXNoZXIubG9nID0gZnVuY3Rpb24obWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICB2bS5pbml0ID0gZnVuY3Rpb24gKHRoaXNQbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgIHZtLnRoaXNQbGF5ZXIgPSB0aGlzUGxheWVyO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogbWFrZSBob3N0IGNvbnRyb2xsZXIgdGhhdCByZXNldHMgYnV0dG9uIGZvciBhbGwgcGxheWVycyAod2hlbiBwbGF5ZXIgYW5zd2VycyBpbmNvcnJlY3RseSwgYW5kIGV2ZXJ5XHJcbiAgICAgICAgICAgIC8vICh0b2RvIGNvbnQuLi4pIHRpbWUgYSBuZXcgcXVlc3Rpb24gaXMgc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgIHZhciByZXNldEFsbEJ1enplcnMgPSBmdW5jdGlvbiAoKSB7fTtcclxuXHJcbiAgICAgICAgICAgIHZtLmRpc2FibGVCdXp6ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodm0uYWxsUGxheWVyc1dob0J1enplZC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdm0uYnJvYWRjYXN0VG9BbGxQbGF5ZXJzSW5HYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCdidXp6Jyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBSZXR1cm5zIGNzcyBjbGFzcyBmb3IgZ3JheSBidXp6ZXIgdG8gbmctY2xhc3NcclxuICAgICAgICAgICAgdm0uZW5hYmxlZG5lc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodm0uZGlzYWJsZUJ1enplcigpID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdidXp6ZXItZGlzYWJsZWQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdm0uZ2V0Rmlyc3RQbGF5ZXJXaG9CdXp6ZWRJbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIHZhciBtaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdmFyIGZpcnN0UGxheWVyV2hvQnV6emVkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBpZih2bS5hbGxQbGF5ZXJzV2hvQnV6emVkLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBmaXJzdFBsYXllcldob0J1enplZCA9IHZtLmFsbFBsYXllcnNXaG9CdXp6ZWRbMF07XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vVE9ETzogcHVzaGVyIHNvbWV0aW1lcyByZWNlaXZlcyBjbG9zZSBldmVudHMgb3V0IG9mIHNlcXVlbmNlLiBGaWd1cmUgb3V0IGhvdyB0byBoYW5kbGUgdGhpcy5cclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBfLmVhY2godm0uYWxsUGxheWVyc1dob0J1enplZCwgZnVuY3Rpb24gKHBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICB2YXIgdGltZXN0YW1wID0gcGFyc2VJbnQocGxheWVyLmxhc3RfYnV6ei5zbGljZShwbGF5ZXIubGFzdF9idXp6Lmxlbmd0aCAtIDEyKSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKHBsYXllci5uYW1lICsgJzogJyArIHRpbWVzdGFtcCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgIGlmICh0aW1lc3RhbXAgPCBtaW4pIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgIG1pbiA9IHRpbWVzdGFtcDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgIGZpcnN0UGxheWVyV2hvQnV6emVkID0gcGxheWVyO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZpcnN0UGxheWVyV2hvQnV6emVkID0gdm0uYWxsUGxheWVyc1dob0J1enplZFswXTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyB2bS5maXJzdFBsYXllcldob0J1enplZCA9IGZpcnN0UGxheWVyV2hvQnV6emVkO1xyXG5cclxuICAgICAgICAgICAgICAgIHZtLmZpcnN0UGxheWVyV2hvQnV6emVkID0gdm0uYWxsUGxheWVyc1dob0J1enplZFswXTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxufSgpKTtcclxuIiwiXHJcbihmdW5jdGlvbigpXHJcbntcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnamVvcGFyZHlBcHAnKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdqZW9wYXJkeUNvbnRyb2xsZXInLCBmdW5jdGlvbigkaHR0cCwgSmVvcGFyZHkpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIHZtLmdhbWVEYXRhID0gW107XHJcbiAgICAgICAgICAgIHZtLmNhdGVnb3JpZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHZtLnNldEdhbWUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckdhbWVib2FyZChpZCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZW5kZXJHYW1lYm9hcmQoaWQpIHtcclxuICAgICAgICAgICAgICAgIEplb3BhcmR5LmluaXQoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSmVvcGFyZHkuZ2FtZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5nYW1lRGF0YSA9IEplb3BhcmR5LmdhbWVEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUNhdGVnb3JpZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTmVzdCBRdWVzdGlvbnMgaW5zaWRlIG9mIHRoZWlyIGFzc29jaWF0ZWQgY2F0ZWdvcmllcyBzbyB0aGF0IHdlIGhhdmUgYSBtb3JlIGludGVsbGlnaWJsZSBvYmplY3QgdG9cclxuICAgICAgICAgICAgLy8gdXNlIGluIG91ciB2aWV3LlxyXG4gICAgICAgICAgICBmdW5jdGlvbiBwb3B1bGF0ZUNhdGVnb3JpZXMoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5mb3JFYWNoKCB2bS5nYW1lRGF0YS5jYXRlZ29yaWVzLCBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkucXVlc3Rpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vbmV5ID0gMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHZtLmdhbWVEYXRhLnF1ZXN0aW9ucywgZnVuY3Rpb24gKHF1ZXN0aW9uKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlc3Rpb24uY2F0ZWdvcnlfaWQgPT09IGNhdGVnb3J5Ll9pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQXNzaWduIG1vbmV0YXJ5IHZhbHVlIHRvIGVhY2ggcXVlc3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLm1vbmV5ID0gKG1vbmV5ICogaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkucXVlc3Rpb25zLnB1c2gocXVlc3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLmNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2bS5zZWxlY3RRdWVzdGlvbiA9IGZ1bmN0aW9uIChxdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdm0uc2VsZWN0ZWRRdWVzdGlvbiA9IHF1ZXN0aW9uO1xyXG4gICAgICAgICAgICAgICAgSmVvcGFyZHkuc2VsZWN0UXVlc3Rpb24ocXVlc3Rpb24pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdm0udG9nZ2xlU2hvd0Fuc3dlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZtLnNlbGVjdGVkUXVlc3Rpb24uc2hvd0Fuc3dlciA9ICEodm0uc2VsZWN0ZWRRdWVzdGlvbi5zaG93QW5zd2VyKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZtLnJldHVyblRvR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgSmVvcGFyZHkucmV0dXJuVG9HYW1lYm9hcmQoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZtLmJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hlbGxvJyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG59KCkpOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IE5laWwgU3RyYWluIG9uIDQvMjgvMjAxNi5cclxuICovXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnamVvcGFyZHlBcHAnKVxyXG4gICAgICAgIC5zZXJ2aWNlKCdKZW9wYXJkeScsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIHZtLmdhbWVEYXRhID0gW107XHJcblxyXG4gICAgICAgICAgICB2bS5pbml0ID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0R2FtZURhdGEoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5nYW1lRGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2soZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnVGhlcmUgd2FzIGFuIGVycm9yIHJldHJpZXZpbmcgZ2FtZSBkYXRhLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRHYW1lRGF0YShpZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2dldC1jYXRlZ29yaWVzLycraWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdm0uc2VsZWN0UXVlc3Rpb24gPSBmdW5jdGlvbiAocXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBDdXN0b21ib3gub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiAnI21vZGFsJyxcclxuICAgICAgICAgICAgICAgICAgICBlZmZlY3Q6ICdwdXNoJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2bS5yZXR1cm5Ub0dhbWVib2FyZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIEN1c3RvbWJveC5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG59KCkpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
