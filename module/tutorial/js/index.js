"use strict";

class Index {
  /**
   * 构造函数
   */
  constructor() {
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
    // [创建对象]教程区域。
    ////////////////////////////////////////////////////////////////////////////
    this.tutorialArea = new JSControl("div");
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
    this.tipBar.setContent(`使用教程（为了提升服务质量，系统版本迭代较快，教程与实际使用略有出入）`);
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]教程区域。
    ////////////////////////////////////////////////////////////////////////////
    this.tutorialArea.setAttribute(
      {
        "class": "tutorial_area"
      }
    );
    this.tutorialArea.setContent(`
      <div class = "tutorial_title">简介</div>
      <div class = "tutorial_content">
        <p>我们通过监听电报用户的搜索关键字，将用户信息分门别类，并以消息订阅的方式推送给会员，帮助会员在电报领域内精准定位目标客户群体。绝大多数以软件方式提供服务的电报机器人存在巨大的安全隐患，病毒、木马夹杂其中的情况并不罕见。而我们的消息订阅服务，不会让您安装任何可能存在风险的软件，也不会让您给予电报账户的授权，在隐私和安全上为您提供最大程度的保障！</p>
      </div>
      <div class = "tutorial_title">价格优势</div>
      <div class = "tutorial_content">
        <p>抛开软件类电报机器人中病毒、木马，以及盗号的风险暂且不说，每月费用动辄几百上千，而且必须包月、包年，大大增加了获客成本。而我们能够做到真正的<span class = "bold">【全网最低价】</span>，不仅单日价格低（每日最低1U），更重要的是可以<span class = "bold">按日付费</span>，可随时停用。</p>
      </div>
      <div class = "tutorial_title">实时数据</div>
      <div class = "tutorial_content">
        <p>打开<a class = "tg_link" href = "../data/index.html" target = "_blank">实时数据</a>（点击打开），查看我们收录的部分数据，您可以看到每个关键字的搜索占比，按照需求设置所需关键字（由于数据量较大，仅展示近7天数据情况）。</p>
      </div>
      <div class = "tutorial_title">找到我们</div>
      <div class = "tutorial_content">
        <p>您可以在电报中搜索<a class = "tg_link" href = "https://t.me/TgdarServicer" target = "_blank">@TgdarServicer</a>（点击打开）找到我们，并添加为联系人。</p>
      </div>
      <img class = "tutorial_img" src = "./img/1.png" />
      <div class = "tutorial_title">支持命令</div>
      <div class = "tutorial_content">
        <p>发送<span class = "command">任意消息</span>查看支持命令。</p>
      </div>
      <img class = "tutorial_img" src = "./img/2.png" />
      <div class = "tutorial_title">会员角色</div>
      <div class = "tutorial_content">
        <p>发送：<span class = "command">会员角色</span>&nbsp;&nbsp;查看当前会员角色。当前共有两类： </p>
        <p>（1）普通会员（normal）：每日扣费1U，每15分钟通知1次，每次通知包含用户信息封顶10条。 </p>
        <p>（2）VIP会员（vip）：每日扣费2U，每15分钟通知1次，每次通知包含用户信息封顶30条。</p>
        <p>若要修改会员角色，发送（格式为：修改会员角色[空格]会员角色名）：<span class = "command">修改会员角色 normal</span>&nbsp;&nbsp;即可修改会员角色为普通会员；发送：<span class = "command">修改会员角色 vip</span>&nbsp;&nbsp;即可修改会员角色为VIP会员。</p>
        <p>会员角色每天只能修改一次，修改成功后相应的扣费及通知数据立即生效。另外，由于是实时数据，所以无法保证每次通知数量为封顶条数。</p>
      </div>
      <div class = "tutorial_title">关于充值</div>
      <div class = "tutorial_content">
        <p>我们仅接受泰达币的充值方式，当前Trc20的充值地址为：<span class = "bold">TCZTUaUe3USBXCW2gScaAorroY9PqTDSJU</span></p>
        <p>发送：<span class = "command">充值地址</span>&nbsp;&nbsp;查看我们最新的泰达币收款地址。</p>
        <p>需要充值会员时，发送（格式为：充值[空格]您的Trc20钱包地址）：<span class = "command">充值 TAZWZdPxda1iqKRsWN36nG4qPwMq945bh9</span></p>
        <p>（注意：这里的<span class = "bold">TAZWZdPxda1iqKRsWN36nG4qPwMq945bh9</span>为用户自己泰达币钱包地址，我们将创建一个有效期为<span class = "bold">10分钟</span>的支付订单，您必须在有效期内完成支付操作，否则订单取消）</p>
        <p>充值成功后，系统将向会员发送确认消息并且更新会员账户余额。</p>
      </div>
      <div class = "tutorial_title">查看会员信息</div>
      <div class = "tutorial_content">
        <p>充值成功后，发送：<span class = "command">查看会员信息</span>&nbsp;&nbsp;可以查看会员信息，其中包括会员角色、余额以及关键字。</p>
      </div>
      <div class = "tutorial_title">修改关键字</div>
      <div class = "tutorial_content">
        <p>会员初次充值成功后，没有设置关键字，系统将不会推送任何消息。发送用逗号分割的关键字（格式为：修改关键字[空格]第1个关键字，第2个关键字，第3个关键字）（注：关键字数量不要超过对应角色限制）即可修改关键字，比如：<span class = "command">修改关键字 数据，短信，二次元</span></p>
        <p>若要提高精准获客率，建议从实时数据中选取和自己业务相关且已存在的关键字。</p>
      </div>
      <div class = "tutorial_title">消息订阅通知</div>
      <div class = "tutorial_content">
        <p>系统根据会员设置的关键字监听到电报用户搜索的关键字时，按照会员角色的通知时间间隔，把用户信息以消息订阅的方式通知用户，点击用户名即可向用户发送消息。比如：</p>
      </div>
      <img class = "tutorial_img" src = "./img/3.png" />
      <div class = "tutorial_title">合作共赢</div>
      <div class = "tutorial_content">
        <p>相对于微信、QQ社交工具，电报相对开放很多，使用范围也更加广袤。关键字搜索监听仅是Tgdar的业务模块之一，未来可以拓展的空间举不胜举，欢迎各方合作洽谈。</p>
        <p class = "bold">Email：tgdar@outlook.com</p>
      </div>
    `);
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
    // [生成代码]教程区域。
    ////////////////////////////////////////////////////////////////////////////
    this.tutorialArea.generateCode();
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
    // [注释说明]容器添加教程区域。
    ////////////////////////////////////////////////////////////////////////////
    this.container.getObject().append(this.tutorialArea.getCode());
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
  }
}
