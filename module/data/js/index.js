"use strict";

class Index {
  /**
   * 构造函数
   */
  constructor() {
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]客服对象。
    ////////////////////////////////////////////////////////////////////////////
    this.customerObj = {
      "name": "@TgdarServicer",
      "link": "https://t.me/TgdarServicer",
    };
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]当前星期几。
    ////////////////////////////////////////////////////////////////////////////
    this.currentDay = new Date().getDay();
    if (0 == this.currentDay) {
      this.currentDay = 7;
    }
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]关键字图表对象。
    ////////////////////////////////////////////////////////////////////////////
    this.keywordsChartObj = {};
  }

  /**
   * 生成代码
   */
  generateCode() {
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]容器。
    ////////////////////////////////////////////////////////////////////////////
    this.container = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]页头。
    ////////////////////////////////////////////////////////////////////////////
    this.pageHeader = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]提示栏。
    ////////////////////////////////////////////////////////////////////////////
    this.tipBar = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]按钮表格。
    ////////////////////////////////////////////////////////////////////////////
    this.buttonTable = new JSControl("table");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]星期按钮。
    ////////////////////////////////////////////////////////////////////////////
    this.week1Button = new JSControl("button");
    this.week2Button = new JSControl("button");
    this.week3Button = new JSControl("button");
    this.week4Button = new JSControl("button");
    this.week5Button = new JSControl("button");
    this.week6Button = new JSControl("button");
    this.week7Button = new JSControl("button");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]关键字图表区域。
    ////////////////////////////////////////////////////////////////////////////
    this.keywordsChartArea = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]页脚。
    ////////////////////////////////////////////////////////////////////////////
    this.pageFooter = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]容器。
    ////////////////////////////////////////////////////////////////////////////
    this.container.setAttribute(
      {
        "class": "container"
      }
    );
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]页头。
    ////////////////////////////////////////////////////////////////////////////
    this.pageHeader.setAttribute(
      {
        "class": "page_header"
      }
    );
    this.pageHeader.setContent(`<span>T</span>ele<span>g</span>ram <span>D</span>etection <span>A</span>nd <span>R</span>anging`);
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]提示栏。
    ////////////////////////////////////////////////////////////////////////////
    this.tipBar.setAttribute(
      {
        "class": "tip_bar"
      }
    );
    this.tipBar.setContent(`电报雷达 7 × 24 小时不间断扫描搜索关键字，竭诚为大家提供信息服务（因数据量较大，仅展示近7天数据情况）。官方助手：<a href = "${this.customerObj.link}" target = "_blank">${this.customerObj.name}</a>`);
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]添加星期按钮。
    ////////////////////////////////////////////////////////////////////////////
    this.week1Button.setAttribute(
      {
        "class": "week_button",
        "data-week": "1"
      }
    );
    this.week2Button.setAttribute(
      {
        "class": "week_button",
        "data-week": "2"
      }
    );
    this.week3Button.setAttribute(
      {
        "class": "week_button",
        "data-week": "3"
      }
    );
    this.week4Button.setAttribute(
      {
        "class": "week_button",
        "data-week": "4"
      }
    );
    this.week5Button.setAttribute(
      {
        "class": "week_button",
        "data-week": "5"
      }
    );
    this.week6Button.setAttribute(
      {
        "class": "week_button",
        "data-week": "6"
      }
    );
    this.week7Button.setAttribute(
      {
        "class": "week_button",
        "data-week": "7"
      }
    );
    this.week1Button.setContent("周一");
    this.week2Button.setContent("周二");
    this.week3Button.setContent("周三");
    this.week4Button.setContent("周四");
    this.week5Button.setContent("周五");
    this.week6Button.setContent("周六");
    this.week7Button.setContent("周日");
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]星期按钮。
    ////////////////////////////////////////////////////////////////////////////
    this.week1Button.generateCode();
    this.week2Button.generateCode();
    this.week3Button.generateCode();
    this.week4Button.generateCode();
    this.week5Button.generateCode();
    this.week6Button.generateCode();
    this.week7Button.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]按钮表格。
    ////////////////////////////////////////////////////////////////////////////
    this.buttonTable.setAttribute(
      {
        "class": "button_table"
      }
    );
    this.buttonTable.setContent(`
      <tbody>
        <tr>
          <td>${this.week1Button.getCode()}</td>
          <td>${this.week2Button.getCode()}</td>
          <td>${this.week3Button.getCode()}</td>
          <td>${this.week4Button.getCode()}</td>
          <td>${this.week5Button.getCode()}</td>
          <td>${this.week6Button.getCode()}</td>
          <td>${this.week7Button.getCode()}</td>
        </tr>
      </tbody>
    `);
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]关键字图表区域。
    ////////////////////////////////////////////////////////////////////////////
    this.keywordsChartArea.setAttribute(
      {
        "class": "keywords_chart_area"
      }
    );
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]页脚。
    ////////////////////////////////////////////////////////////////////////////
    this.pageFooter.setAttribute(
      {
        "class": "page_footer"
      }
    );
    this.pageFooter.setContent(`©${new Date().getFullYear()}&nbsp;tgdar.com`);
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]容器。
    ////////////////////////////////////////////////////////////////////////////
    this.container.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]页头。
    ////////////////////////////////////////////////////////////////////////////
    this.pageHeader.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]提示栏。
    ////////////////////////////////////////////////////////////////////////////
    this.tipBar.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]按钮表格。
    ////////////////////////////////////////////////////////////////////////////
    this.buttonTable.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]关键字图表区域。
    ////////////////////////////////////////////////////////////////////////////
    this.keywordsChartArea.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]页脚。
    ////////////////////////////////////////////////////////////////////////////
    this.pageFooter.generateCode();
  }

  /**
   * 初始化视图
   */
  initView() {
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]页面添加容器。
    ////////////////////////////////////////////////////////////////////////////
    $("body").html(this.container.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]容器添加页头。
    ////////////////////////////////////////////////////////////////////////////
    this.container.getObject().append(this.pageHeader.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]容器添加提示栏。
    ////////////////////////////////////////////////////////////////////////////
    this.container.getObject().append(this.tipBar.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]容器添加按钮表格。
    ////////////////////////////////////////////////////////////////////////////
    this.container.getObject().append(this.buttonTable.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]容器添加关键字图表区域。
    ////////////////////////////////////////////////////////////////////////////
    this.container.getObject().append(this.keywordsChartArea.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]容器添加页脚。
    ////////////////////////////////////////////////////////////////////////////
    this.container.getObject().append(this.pageFooter.getCode());
  }

  /**
   * 初始化布局
   */
  initLayout() {
  }

  /**
   * 初始化事件
   */
  initEvent() {
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]初始化关键字图表对象。
    ////////////////////////////////////////////////////////////////////////////
    this.keywordsChartObj = echarts.init(document.getElementById(this.keywordsChartArea.getId()));
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]重新排序星期几按钮顺序。
    ////////////////////////////////////////////////////////////////////////////
    {
      let thisObj = this;
      let isBreak = false;
      this.buttonTable.getObject().find("tr").find("td").each(function() {
        let dataWeek = $(this).find("button").attr("data-week");
        if (dataWeek == thisObj.currentDay) {
          isBreak = true;
        }
        let tdCode = $(this).prop("outerHTML");
        $(this).remove();
        thisObj.buttonTable.getObject().find("tr").append(tdCode);
        if (isBreak) {
          return false;
        }
      });
    }
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]注册星期几按钮的click事件。
    ////////////////////////////////////////////////////////////////////////////
    $(".week_button").off("click").on("click", null, this, this.weekButtonClickEvent);
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]根据当前星期几点击相应星期按钮。
    ////////////////////////////////////////////////////////////////////////////
    {
      if (1 == this.currentDay) {
        // 周一
        this.week1Button.getObject().trigger("click");
      } else if (2 == this.currentDay) {
        // 周二
        this.week2Button.getObject().trigger("click");
      } else if (3 == this.currentDay) {
        // 周三
        this.week3Button.getObject().trigger("click");
      } else if (4 == this.currentDay) {
        // 周四
        this.week4Button.getObject().trigger("click");
      } else if (5 == this.currentDay) {
        // 周五
        this.week5Button.getObject().trigger("click");
      } else if (6 == this.currentDay) {
        // 周六
        this.week6Button.getObject().trigger("click");
      } else if (7 == this.currentDay) {
        // 周日
        this.week7Button.getObject().trigger("click");
      }
    }
  }

  /**
   * 星期几按钮click事件
   * @param event 事件对象
   */
  weekButtonClickEvent(event) {
    let source = event.data;
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]加载对应数据。
    ////////////////////////////////////////////////////////////////////////////
    let dataWeek = $(this).attr("data-week");
    let dataSource = {};
    if (1 == dataWeek) {
      dataSource = dataSource1;
    } else if (2 == dataWeek) {
      dataSource = dataSource2;
    } else if (3 == dataWeek) {
      dataSource = dataSource3;
    } else if (4 == dataWeek) {
      dataSource = dataSource4;
    } else if (5 == dataWeek) {
      dataSource = dataSource5;
    } else if (6 == dataWeek) {
      dataSource = dataSource6;
    } else if (7 == dataWeek) {
      dataSource = dataSource7;
    } else {
      alert("没有找到数据源");
      return false;
    }
    if (0 >= dataSource.list.length) {
      alert("数据源没有数据");
      return false;
    }
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]改变按钮样式。
    ////////////////////////////////////////////////////////////////////////////
    $(".week_button").removeClass("week_checked");
    $(this).addClass("week_checked");
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]排序数据源。
    ////////////////////////////////////////////////////////////////////////////
    dataSource.list.sort(function(obj1, obj2) {
      return obj1.count - obj2.count;
    });
    let childrenArray = new Array();
    for (let i = 0; i < dataSource.list.length; i++) {
      let obj = dataSource.list[i];
      let children = {
        "name": obj.keywords,
        "value": obj.count,
        "itemStyle": {
          "color": "#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16)
        }
      };
      childrenArray.push(children);
    }
    let title = "";
    if (source.currentDay == dataWeek) {
      title = dataSource.last_update_datetime_str + " [今日实时]";
    } else {
      title = dataSource.data_datetime_str;
    }
    let option = {
      "title": {
        "text": title,
        "padding": [10, 0, 0, 16]
      },
      tooltip: {
        "trigger": "item",
        "formatter": function(params) {
          if(null != params) {
            return params.data.name;
          }
        }
      },
      "series": [
        {
          "type": "treemap",
          "top": "1.5%",
          "width": "98%",
          "height": "98%",
          "roam": false,
          "nodeClick": false,
          "breadcrumb": {
            "show": false
          },
          "label": {
            "fontSize": 14,
            "color": "#ffffff"
          },
          "itemStyle": {
            "borderWidth": 2,
            "borderRadius": 8,
            "borderColor": "#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16)
          },
          "data": [
            {
              "children": childrenArray 
            }
          ]
        }
      ]
    };
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]绘制图表。
    ////////////////////////////////////////////////////////////////////////////
    source.keywordsChartObj.clear();
    source.keywordsChartObj.setOption(option)
  }
}
