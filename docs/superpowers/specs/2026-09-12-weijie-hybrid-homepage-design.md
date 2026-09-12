# A 版个人主页完整化设计

## 目标

在 `design-previews/weijie/` 现有 A 版上重做首页，使它不只呈现 Weijie Ma 主页的表面字体和配色，也完整复现其单页学术主页的信息层次、栏目顺序和 Publications 交互。同时吸收 Ji Jiaming 主页更适合 Changyi 内容的论文缩略图双栏与 Honors 日期排版。

本轮只修改 A 版预览，不覆盖仓库根目录的正式主页，也不修改 B、C 两版。

## 参考边界

- 页面主体采用 Weijie Ma 主页的 Jemdoc 单页结构：白色窄版内容区、灰色页面背景、serif 正文、蓝色链接、细横线标题、紧凑学术信息密度。
- 首页保留 A 版的 Blog 与 CV 入口。
- Ji Jiaming 主页仅用于两处明确增强：Publications 的缩略图双栏条目、Honors 的日期—内容双列列表。
- 不复制参考作者的文字、照片、奖项、论文或统计代码；所有内容来自 Changyi 当前主页与英文 CV。

## 页面结构

首页栏目顺序固定为：

1. Profile
2. Biography
3. News
4. Publications
5. Experiences
6. Honors
7. Academic Service
8. Footer

顶部导航提供 Home、Publications、Experiences、Honors、Blog、CV。页面内栏目链接使用锚点滚动，Blog 和 CV 保持独立链接。

## Profile 与 Biography

- 保留当前横向个人信息与右侧证件照结构。
- 标题为 `Changyi Li 李长艺`。
- 身份写作 `Ph.D. Student`，机构为 Shanghai Innovation Institute 与 Fudan University。
- 邮箱保持文本防爬写法。
- Google Scholar 和 GitHub 使用参考 A 的两个 30px 图标。
- Biography 保持已确认的英文表述：joint doctoral program；advised by Xudong Pan and Min Yang；co-advised by Xipeng Qiu。
- 不加入 Fudan System Software and Security Lab，也不写硕士导师。

## News

- 使用 Weijie Ma 风格的方形项目符号和 `[MM/YYYY]` 日期前缀。
- 首页默认展示当前三条近期信息，不增加缺乏来源的新事件。
- 日期列宽固定，正文自然换行；移动端仍保持日期与正文的清晰层次。

## Publications

### 结构与交互

- 标题使用 `Publications`，不再只写 `Selected Publications`。
- 标题下加入 `Selected` / `Full List` 两个胶囊按钮，行为与 Weijie Ma 参考页一致。
- Selected 展示 AutoControl Arena、ReasoningShield、CyberEvolver；Full List 额外展示 AI Self-Replication。
- 按钮切换不跳页，保持无框架的原生 JavaScript 实现。

### 双栏比例

- 桌面端严格使用 Ji Jiaming 的论文条目几何：左侧图片固定为 `240px × 135px`，右侧文字占剩余宽度，图片与文字之间为 `15px` 间距。
- 在 A 版约 860px 的正文宽度内，视觉比例约为 30:70；不得继续使用旧版的 `180px + 自适应` 布局。
- 条目容器使用 Ji Jiaming 参考值：上下 `14px`、左右 `16px` 内边距，条目间距 `12px`，圆角 `8px`。
- 图片使用 `object-fit: contain`，避免裁掉论文图内容；圆角 `8px`，保留轻量阴影。
- 移动端在不缩小到难以阅读的前提下改为上下堆叠，图片宽度为容器宽度，高度按 16:9 保持。

### 论文信息

每篇条目统一包含完整标题、完整作者、venue 和链接行：

- AutoControl Arena：ICML 2026；Paper、Code、Page、Machine Heart、PaperWeekly。
- ReasoningShield：NeurIPS 2026 Spotlight；显示 `Reviews: 5/5/4 (all positive)`；Paper、Code、Page、Models、Data。
- CyberEvolver：NeurIPS 2026；Paper、Code、Page。
- AI Self-Replication：arXiv 2025；Paper、Page、LiveScience、Forbes、The Independent。

本人姓名加粗。链接采用 Ji Jiaming 的紧凑方括号样式。Code 后保留实时 GitHub Stars：优先读取 GitHub API，失败时显示静态回退值。

## Experiences

使用 Weijie Ma 的两行经历格式：第一行加粗身份与机构，第二行显示日期和地点。内容来自英文 CV：

- Ph.D., Shanghai Innovation Institute & Fudan University，Sep 2026 – Jun 2029 (Expected)。
- M.S., Fudan University，Sep 2024 – Jun 2026。
- B.S., Qilu University of Technology (Shandong Academy of Sciences)，Sep 2020 – Jun 2024。

本栏目不重复导师信息，不出现 Fudan System Software and Security Lab。

## Honors

采用 Ji Jiaming 的日期—奖项双列结构，年份左列固定宽度，奖项右列自适应。内容按英文 CV 倒序完整列出：

- 2026 — First-Class Scholarship, Fudan University
- 2025 — Freshman Scholarship, Fudan University
- 2024 — Principal Scholarship (1/38,000+)
- 2024 — Provincial Outstanding Graduate (Top 0.1%)
- 2023 — National Scholarship (Top 0.1%)
- 2023 — MCM/ICM Meritorious Winner, Team Leader
- 2022, 2023 — First-Class Scholarship & Merit Student Pacesetter

不添加中文翻译，保持主页英文风格。

## Academic Service

采用与 Experiences 一致的紧凑两列信息格式，列出英文 CV 中已有内容：

- Invited Talk — Seoul Alignment Workshop, FAR.AI, 2026
- Invited Participant — Safety & Alignment closed-door mixer, ICML, 2026
- Organizer — OpenAI AI Deception Workshop, 2025
- Teaching Assistant — Foundation of Deep Learning, Fudan University, 2025 and 2026

## Blog

保留现有 A 版 Blog 首页和示例文章，不在本轮重做其视觉结构。顶部导航中的 Blog 必须继续可用。

## 响应式与可访问性

- 桌面端以 960px 页面宽度验证论文 240:剩余宽度的双栏几何。
- 在 375px 手机宽度下，Profile、论文条目、Experiences、Honors 和 Service 不得产生横向溢出。
- 导航在窄屏允许换行，不隐藏核心入口。
- 所有图片包含准确的 `alt`；图标链接包含可访问名称；Selected / Full List 按钮通过 `aria-pressed` 暴露状态。
- 键盘焦点可见，切换 Publications 后焦点不丢失。

## 验收

- 对比参考源码确认栏目顺序、论文切换和列表结构均已落实。
- 自动检查桌面端论文缩略图为 240×135px、文字间距为 15px。
- 自动检查 Selected 为 3 篇、Full List 为 4 篇，实时 Stars 与回退值均可显示。
- 在 1440px 和 375px 视口截图，检查头像、标题、论文双栏比例、Honors 对齐与导航换行。
- 检查 A 版首页、Blog 首页和 Blog 文章均返回 HTTP 200。

