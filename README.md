### react-study

```javascript
npm install -g yarn
npm install -g create-react-app
create-react-app 项目名称
yarn start
yarn install 安装缺失的依赖
yarn add events 添加events依赖
yarn add styled-components 添加CSS-in-JS
yarn add classnames 安装classnames
yarn add antd 安装antd
yarn add @ant-design/icons 安装icons
yarn add moment 安装moment
```

```
添加events 出现 ENOSPC: System limit for number of file watchers reached, watch '/root/godemo/react-study/public'

$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
$ sudo sysctl --system
```

