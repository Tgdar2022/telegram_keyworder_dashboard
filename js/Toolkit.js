"use strict";

class Toolkit {
  /**
   * 判断设备是否为手机
   */
  static isMobile() {
    let userAgent = navigator.userAgent.toLowerCase();
    let mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone"];
    for (let i = 0; i < mobileAgents.length; i++) {
      if (-1 != userAgent.indexOf(mobileAgents[i].toLowerCase())) {
        return true;
      }
    }
    return false;
  }
}
