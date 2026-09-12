# A 版 Profile 与社交入口对齐设计

## 范围

本设计增量修改 `design-previews/weijie/` 的 Profile 头部和 Publications 筛选栏。其他栏目、导航、Spotlight、论文链接、Stars 与论文双栏比例保持不变。

## 姓名与头像对齐

- 姓名采用 Ji Jiaming 的展示格式：`Changyi Li (李长艺)`。
- 整个姓名使用同一字号体系，不再把中文姓名缩小为英文的 60%。
- 姓名字号从当前 210% 调整为 Ji 风格的 165%，保持粗体 serif。
- Profile 左侧信息从照片顶部对齐，不再垂直居中。
- 桌面头像从 `220×293px` 收至 `200×267px`，保持现有裁切方式和直角外观。
- 手机头像为 `170×227px`，继续位于个人信息下方。
- 删除头像尺寸变化产生的多余空白，Biography 与 Profile 之间保持现有标题节奏。

## 社交入口

- 邮箱继续以现有文本形式展示。
- 邮箱下方图标依次为 Google Scholar、GitHub、X、LinkedIn、WeChat。
- 五个入口均使用 `30×30px` 的固定点击盒，图形在盒内居中并共享同一基线。
- Google Scholar 与 GitHub 保留当前参考资源；X、LinkedIn 与 WeChat 使用内联单色 SVG，默认颜色与现有黑色图标一致。
- X 直接跳转 `https://x.com/ChangyiLi2002`。
- LinkedIn 跳转 `https://www.linkedin.com/in/changyi-li-6445112b3/`。
- WeChat 跳转仓库现有的 `wechat.html` 二维码页面，不在 Profile 内直接展开二维码。
- 五个社交入口均使用新标签页，并设置 `rel="noopener noreferrer"`、可访问名称和 tooltip。
- hover 与键盘 focus 采用一致的轻微透明度反馈，不新增其他强调色。

## Publications 筛选精简

- 删除 `Cybersecurity` 筛选按钮。
- CyberEvolver 仍显示在默认 `Selected` 和 `Agents` 中。
- 从 CyberEvolver 的 `data-tags` 中删除不再使用的 `cybersecurity` 标签。
- 筛选只保留 `Selected`、`AI Safety`、`Agents`，数量依次为 4、3、3。
- 不改变论文顺序、内容、链接或 Stars。

## 验收

- 姓名文本精确为 `Changyi Li (李长艺)`，计算字号为基准字号的 165%，且不含单独缩小的姓名 span 样式。
- 桌面端姓名顶部与头像顶部的垂直差不超过 4px；头像为 `200×267px`。
- 375px 手机端头像为 `170×227px`，页面无横向溢出。
- 五个社交图标的点击盒均为 `30×30px`，顶部坐标一致；X、LinkedIn 与 WeChat 链接正确并在新标签页打开。
- 页面不存在 `Cybersecurity` 筛选按钮或 `cybersecurity` 分类标签。
- 三个筛选按钮显示论文数量依次为 4、3、3。
- 论文桌面图片继续为 `240×135px`，图文间距继续为 `15px`。
