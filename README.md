# index.js
- 这个index.js文件是由create-react-app生成的项目的入口点。它负责将您的React应用渲染到DOM中。我会为您逐行解释这个文件的内容。
- 这个index.js文件的主要作用是设置并渲染您的React应用。它还包括了性能报告的工具，这对于性能调优是非常有用的。
# index.css
- 全局样式表，主要定义了应用的基础样式
## :root伪类定义
- 这部分定义了全局可用的CSS变量。这些变量通常是为了保持颜色、尺寸或其他样式的一致性，并以在整个样式表或项目中使用。例如，--color-background-default: #081120; 定义了默认背景色。当你想更改背景颜色时，只需要更改这个变量的值即可，而不需要去查找并修改使用了这个颜色的所有地方。
## html body
这部分为整个页面的html和body元素设置了基础样式。
- 宽度和高度被设置为视口的100%，这意味着页面会完全覆盖整个浏览器窗口。margin和padding被重置为0，通常这样做是为了消除浏览器之间的不一致性。background-color和color使用了之前定义的CSS变量，这样如果需要更改颜色，只需更改:root中的变量值。font-family和font-size为文本设置了基础字体和大小。
## #rrot
- 这是一个特定的ID选择器，它目标是HTML中的一个具有id="root"的元素。在React应用中，这个元素通常是应用程序的主要挂载点。这里的样式将#root元素定位到父元素中，但是离开了2rem的空间，作为边距。
## p
- 设置了段落元素的边距为0。这可能是为了确保在不同上下文中段落有统一的外观，或者为了消除浏览器默认的段落边距。
