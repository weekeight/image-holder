# image-holder

图片占位服务

## 部署

### 第一种方式：docker 部署

1. 安装好docker
2. 拷贝此项目后，进入项目根目录，执行命令
	
	```
	// 生成镜像
	docker build -t image-holder . 
	// 创建容器并运行服务镜像 
	docker run --name imageHolderContainer -d -p 3000:8888 image-holder  
	```

### 第二种方式：在拥有 `node@5.0.0` 环境的机器上直接部署

```
cd image-holder
npm start
```



## Usage

域名/长x宽/背景色/文字颜色?text=显示的文字内容

例子：

```
http://xx.com/200x300

http://xx.com/300x300/000/fff

http://xx.com/300x300/000/fff?text=我是文字内容

```