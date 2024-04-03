document.addEventListener('DOMContentLoaded', function () {
  // 获取所有父手风琴项
  var skillItems = document.getElementsByClassName("skill-item");

  for (var i = 0; i < skillItems.length; i++) {
      // 获取当前父手风琴项中的按钮和面板
      var accButton = skillItems[i].getElementsByClassName("accordion-button")[0];
      var accPanel = skillItems[i].getElementsByClassName("accordion-content")[0];

      // 当父手风琴按钮被点击时，切换它的活动状态并切换它的面板的显示和隐藏
      accButton.addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      });

      // 获取当前父手风琴项中的所有子手风琴按钮
      var subAccButtons = skillItems[i].getElementsByClassName("accordion-content")[0].getElementsByClassName("accordion-button");

      for (var j = 0; j < subAccButtons.length; j++) {
          subAccButtons[j].addEventListener("click", function(e) {
              e.stopPropagation(); // 阻止事件冒泡到父手风琴
              this.classList.toggle("active");
              var panel = this.nextElementSibling;
              if (panel.style.display === "block") {
                  panel.style.display = "none";
              } else {
                  // 关闭同级别的其他所有子手风琴面板
                  var siblingPanels = this.parentElement.parentElement.getElementsByClassName("accordion-content");
                  for (var k = 0; k < siblingPanels.length; k++) {
                      siblingPanels[k].style.display = "none";
                  }
                  // 打开当前子手风琴面板
                  panel.style.display = "block";
              }
          });
      }
  }
});