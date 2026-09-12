# A 版最终视觉微调设计

## 范围

本设计仅调整 `design-previews/weijie/` 的导航字体、Spotlight 标签、Profile 地点和 Academic Service 字重。现有固定导航结构、手机汉堡菜单、论文筛选、链接顺序、末尾 Stars、论文双栏比例及其他栏目不变。

## 导航字体

- 顶部固定导航的字体改为 Ji Jiaming 主页使用的 serif 字体栈：`Constantia, "Lucida Bright", "DejaVu Serif", Georgia, serif`。
- 品牌、栏目链接和更新时间全部继承该字体栈。
- 导航字号、固定定位、半透明背景、960px 内部宽度、正文左缘对齐和手机汉堡行为保持不变。
- 导航链接继续使用 A 版蓝色，不引入绿色。

## Spotlight

- 复用 Weijie Ma 风格 badge 的几何语言：紧凑内边距、4px 圆角、12px 加粗文字、轻阴影和与 venue 对齐的基线。
- 配色改为红色系渐变：从 `#8B0012` 到 `#C83E4D`，文字为白色。
- `NeurIPS 2026` 保持黑色半粗斜体；Spotlight badge 紧随其后。
- `Reviews: 5/5/4 (all positive)` 继续使用深灰 `#555` 小字。

## Profile

- 删除个人信息区的 `Shanghai, China`。
- `Ph.D. Student`、SII 与 Fudan University、邮箱和两个资料图标保持不变。
- 删除地点后收紧 Profile 文字区的垂直空白，不用占位元素补齐。

## Academic Service

- 删除 Invited Talk、Invited Participant、Organizer、Teaching Assistant 外层的粗体。
- 活动名称链接继续保持蓝色，年份继续保持深灰。
- 不改变条目文字、日期、链接或列表几何。

## 验收

- 导航所有文字的计算字体族以 `Constantia` 开头，桌面端与手机端一致。
- 页面源码不再包含 `Shanghai, China`。
- Spotlight badge 的计算文字颜色为白色，背景包含 `#8B0012` 与 `#C83E4D` 对应的红色渐变，圆角为 4px。
- Academic Service 条目中不存在 `strong` 元素，计算字重为正常字重。
- 论文筛选数量继续为 4、3、3、1；Stars、链接顺序、240×135px 图片和 15px 图文间距不变。
- 1440px 和 375px 视口均无横向溢出，手机汉堡菜单继续可用。

