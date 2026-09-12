# A 版导航与栏目精简设计

## 范围

本设计是 `2026-09-12-weijie-hybrid-homepage-design.md` 的增量修订，只影响 `design-previews/weijie/`。未在本文明确修改的论文内容、双栏比例、Biography、News、Honors、Academic Service 和 Blog 设计保持不变。

## 删除 Experiences

- 从首页完整删除 Experiences 区块。
- 从导航删除 Experiences 入口。
- 删除只服务于 Experiences 的 CSS，不保留不可达样式。
- 首页栏目顺序调整为 Profile、Biography、News、Publications、Honors、Academic Service、Footer。
- 不改动 CV 文件中的教育经历。

## 日期颜色

- News、Honors 和 Academic Service 的日期统一使用中性深灰 `#555`。
- 日期继续使用半粗体和等宽数字特性，以维持与正文的层次。
- 不再使用来自 Ji Jiaming 参考页的绿色 `#5F6F52`。

## 固定顶部导航

使用 Ji Jiaming 主页的固定导航结构，同时保留 A 版的单页内容：

- 导航固定在视口顶部并占满浏览器宽度。
- 背景为半透明白色，使用轻微 `backdrop-filter` 模糊、底部细边线和极浅阴影。
- 导航内部最大宽度为 `960px`，水平内边距与 A 版正文的 `50px` 保持一致，使导航文字与正文左缘对齐。
- 左侧品牌为 `Changyi Li`，链接回首页顶部。
- 主链接依次为 Publications、Honors、Academic Service、Blog、CV。
- 右侧显示 `Updated: 2026-09-12`。
- 当前页面的品牌链接使用活动态底线；页面锚点链接保持 A 版蓝色。
- 页面顶部增加与导航高度相匹配的偏移，所有锚点使用 scroll margin，点击后标题不得被固定导航遮挡。

## 手机导航

- 在 `700px` 及以下切换为汉堡按钮。
- 品牌保留在左侧，汉堡按钮位于右侧；Updated 文本在手机端隐藏。
- 菜单默认收起，点击后在导航下方纵向展开全部五个入口。
- 汉堡按钮具有 `aria-expanded` 和 `aria-controls`，展开状态动画为三条线变为关闭符号。
- 点击任一菜单链接或按 Escape 后关闭菜单。
- JavaScript 不可用时，链接仍通过基础 HTML 保持可访问，不影响首页内容阅读。

## 保持不变

- 桌面端每篇论文的图片仍为 `240×135px`。
- 图片与文字间距仍为 `15px`。
- Selected / Full List、实时 GitHub Stars 和断网回退值保持不变。
- A 版 Blog 页面及其路由保持不变。
- 仓库根目录的正式主页、B 版和 C 版不修改。

## 验收

- 1440px 和 960px 视口下，导航固定且内部宽度不超过 `960px`，导航左缘与正文左缘一致。
- 375px 视口下，菜单默认关闭；按钮可展开和收起菜单；Escape 和菜单链接均能关闭菜单；页面无横向溢出。
- 点击 Publications、Honors、Academic Service 锚点后，对应标题完整显示在固定导航下方。
- 页面中不存在 Experiences 标题、导航入口或相关专用 CSS。
- 所有日期的计算颜色为 `rgb(85, 85, 85)`。
- Publications 桌面几何继续通过 `240×135px` 图片和 `15px` 间距检查。

