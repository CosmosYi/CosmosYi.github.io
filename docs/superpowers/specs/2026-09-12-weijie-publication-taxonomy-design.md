# A 版 Publications 分类与信息层级设计

## 范围

本设计增量修改 `design-previews/weijie/` 的 Publications 区域。固定导航、Biography、News、Honors、Academic Service、Blog，以及论文 `240×135px + 15px` 的桌面双栏几何保持不变。

## 默认内容与分类

- `Selected` 为默认视图，并展示当前全部四篇论文。
- 筛选按钮依次为 `Selected`、`AI Safety`、`Agents`、`Cybersecurity`。
- 筛选只控制同一份论文 DOM 的显示状态，不复制论文条目。
- 分类映射如下：
  - AutoControl Arena：AI Safety、Agents
  - ReasoningShield：AI Safety
  - CyberEvolver：Agents、Cybersecurity
  - AI Self-Replication：AI Safety、Agents
- `Selected` 显示 4 篇，`AI Safety` 显示 3 篇，`Agents` 显示 3 篇，`Cybersecurity` 显示 1 篇。
- 每次切换同步更新活动按钮样式与 `aria-pressed`，按钮本身不失去键盘焦点。

## 链接顺序

链接行以项目主页为第一入口，并按以下顺序排列：

- AutoControl Arena：Page、Paper、Code、Machine Heart、PaperWeekly、Stars
- ReasoningShield：Page、Paper、Code、Models、Data、Stars
- CyberEvolver：Page、Paper、Code、Stars
- AI Self-Replication：Page、Paper、LiveScience、Forbes、The Independent

文字链接继续使用紧凑方括号形式。Stars 是独立统计信息，不嵌套在 `[Code]` 内部，也不使用方括号。

## Stars

- AutoControl Arena、ReasoningShield、CyberEvolver 的 GitHub Stars 位于各自链接行末尾。
- 样式为中性灰色紧凑徽章：GitHub 星形图标、等宽数字、小字号、轻边框；不使用醒目的金色。
- 整个 Stars 徽章链接到对应 GitHub 仓库，并提供完整可访问名称，例如 `114 GitHub stars`。
- 继续使用共享 `star-counter.js` 实时读取 GitHub API，并保留静态回退值与本地缓存。
- AI Self-Replication 没有独立代码仓库，不显示 Stars。

## Venue 层级

- 普通 venue 使用 Ma 风格：黑色、半粗体、斜体。
- `Spotlight` 不再使用蓝色渐变胶囊，改为 Ji 风格的暗红色 `#8B0012` 加粗文字，紧跟在 `NeurIPS 2026` 后。
- `Reviews: 5/5/4 (all positive)` 改为深灰 `#555` 小字，不使用红色。
- 其他论文的 venue 内容保持不变。

## 响应式

- 桌面端链接尽量保持单行，自然空间不足时整项换行，不拆开方括号链接或 Stars 徽章。
- 375px 手机端允许链接行自然换行，Stars 必须作为完整徽章出现在最后。
- 四个筛选按钮在窄屏允许横向滚动，页面本身不得产生横向溢出。

## 验收

- 自动点击四个筛选按钮，论文数量依次为 4、3、3、1，且展示论文与分类映射一致。
- 页面中不存在 `Full List` 按钮，也不存在 `data-publication="full"` 的旧逻辑。
- 三篇含代码论文的链接行均以 Page 开始、以独立 Stars 徽章结束；Code 内不包含 Stars。
- GitHub API 成功时三处 Stars 同步显示响应值，失败时显示各自静态回退值。
- Spotlight 的计算颜色为 `rgb(139, 0, 18)`，review note 的计算颜色为 `rgb(85, 85, 85)`。
- 1440px 桌面端论文图片继续为 `240×135px`，图文间距继续为 `15px`。
- 375px 手机端无横向溢出，筛选条和链接行可完整操作。

