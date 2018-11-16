# Vue多页面入口webpack打包轻量级模板配置

------

# 前言

  > 在网上搜索了一圈，发现vue多页面配置，大部分都是基于vue-cli配置的，很少是从基础开始配置，如是小编我通过webpack4.x,构建了一个提供多页面入口，打包，调试的**轻量级**的构建工具，不依赖过多配置，只加载常用的配置


# 项目结构
```
.
├── build                                       // webpack配置目录
│   ├── webpack.common.config.js                // webpack公共配置文件
│   ├── webpak.dev.config.js                    // webpack开发模式配置文件
│   ├── webpak.prod.config.js                   // webpack打包模式配置文件
│   ├── webpack.pages.config.js                 // webpack配置入口文件
├── dist                                        // 项目打包路径
│   ├── css                                     // 打包后的css目录
│   ├── js                                      // 打包后的js目录
│   ├── test1.html                              // 页面入口1
│   ├── test2.html                              // 页面入口2
│   ├── test3.html                              // 页面入口3
│   ├── ....html                                // 页面入口....
├── images                                      // 图片路径
├── src                                         // 源码目录
│   ├── components                              // 公共文件目录
│   │   ├── css                                 // 公共css目录
│   │   ├── js                                  // 公共js目录
│   │   ├── vue.vue                             // 公共vue组件目录
│   ├── css                                     // 公共css目录
│   ├── libs                                    // 公共js扩展目录
│   ├── pages                                   // 入口页面目录
│   ├── index.html                              // 公共模板文件html
├── package-lock.json                           // 依赖文件
├── package.json                                // 依赖文件
├── postcss. .js                                // 配置样式文件
.

```


# 项目运行

  **注意：由于涉及到的 ES6 等新属性，node 需要 6.0 以上版本**
    
```
    git clone https://github.com/hangjob/vue-multiple-webpack-template.git

    cd vue-multiple-webpack-template

    npm install  或 yarn(推荐)

    npm run dev

    测试入口1: http://localhost:9001/test1.html 

    测试入口2: http://localhost:9001/test2.html
    
    测试入口3: http://localhost:9001/test3.html

```

 * [在线测试入口1](https://hangjob.github.io/vue-multiple-webpack-template/dist/test1.html)

 * [在线测试入口2](https://hangjob.github.io/vue-multiple-webpack-template/dist/test2.html)

 * [在线测试入口3](https://hangjob.github.io/vue-multiple-webpack-template/dist/test3.html)

### &nbsp;&nbsp;&nbsp;网络下载太慢,请使用淘宝镜像

* 1.临时使用

    ```
    npm --registry https://registry.npm.taobao.org install express
    ```

* 2.持久使用

    ```
    npm config set registry https://registry.npm.taobao.org
    ```
    #### 配置后可通过下面方式来验证是否成功 

    ```
    npm config get registry 或者 npm info express
    ```

* 3.通过cnpm使用

    ```
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    ```

# 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^
>  如要在编译过程中遇到错误，点击[联系作者](https://www.vipbic.com/ourselves.html)

 