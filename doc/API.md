# JOperate Hbuilder API

## 引用方式
```javascript
var operateModule = uni.requireNativePlugin("JG-JOperate");
```

## 初始化函数

### API - initJOperateService()

初始化SDK

#### 示例
```javascript
operateModule.initJOperateService()
```


## 设置 debug 模式

### API - setLoggerEnable(Boolean)
开启 debug 模式，默认是关闭

#### 参数说明
- true - 开启，false - 关闭

#### 示例

```javascript
operateModule.setLoggerEnable(true);
```

## 自定义事件统计

### API - eventRecord(String, Dictionary)
自定义事件统计
调用该接口前，需要先在控制台创建元事件，详情参考 [创建元事件](https://docs.jiguang.cn/public_service/dataCenter/metadata/metaEvent#%E5%88%9B%E5%BB%BA%E5%85%83%E4%BA%8B%E4%BB%B6)

#### 参数说明
- String: 事件ID，必填，非空，不能使用jg前缀
- Dictionary: 自定义属性（<=500个）key为String，只能包含数字小写字母下划线，以及以字母开头

#### 示例

```javascript
operateModule.eventRecord("eventID1", {"key":"key", "user":"user","add":1})
```

## 设置用户联系方式

### API - setUserChannel(Dictionary, CALLBACK)
为指定「通道ID」下的「联系标签」设置用户的「联系方式」。
支持同时设置多个「联系标签」的值。

#### 参数说明
- Dictionary: 字典， 结构为 {通道 id:{ 联系标签: 联系方式的值}}
- CALLBACK

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|code|string|返回 code 码, code:0 为成功|
|msg|string|返回code码解释|


#### 示例

```javascript
operateModule.setUserChannel({
					"channelid":{
						"工作手机":"13*********"
					}
				},result=>{
					let code = result.code
					let msg =  result.msg
					console.log(result)
				})
```

## 设置用户标识

### API - identifyAccount(Dictionary, CALLBACK)
设置用户标识

#### 参数说明
- Dictionary 用户标识, 结构为 {标识id: 标识值} 
- CALLBACK

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|code|string|返回 code 码, code:0 为成功|
|msg|string|返回code码解释|


#### 示例

```javascript
operateModule.identifyAccount({
					"loginID":"value"
				},result=>{
					let code = result.code
					let msg =  result.msg
					console.log(result)
				})
```

## 获取 CUID

### API - CUID()
获取运营增长 CUID

#### 参数说明
- 返回值 运营增长 CUID String类型

#### 示例

```javascript
let result = operateModule.CUID()
```

## 设置 UTM 属性

### API - setUtmProperties(Dictionary)
* UTM 属性为预置属性，目前能够设置 UTM 属性为：
* utm_source 广告系列来源
* utm_medium 广告系列媒介
* utm_term 广告系列字词
* utm_content 广告系列内容
* utm_campaign 广告系列名称

#### 参数说明
- Dictionary 预置属性 
key: String
value: String

#### 示例

```javascript
operateModule.setUtmProperties({
					"utm_source": "value"
				})
```

## 设置静态公共属性

### API - setCommonProperties(Dictionary)
设置静态公有属性，后面所有上报事件数据都会包含该属性，该属性保存在本地，设置长期有效。
当事件属性和公共属性重复时，事件属性会覆盖公共属性。

#### 参数说明
- Dictionary 
key 为 String，只能包含数字小写字母下划线，以及以字母开头。
value 可以是 String/Number/Set、Array。
Set、Array 中的所有元素必须为 String。

#### 示例

```javascript
operateModule.setCommonProperties({
					"key": "value"
				})
```

## 设置动态公共属性

### API - setDynamicCommonProperties(Dictionary)
* 设置动态公有属性，后面所有上报事件数据都会包含该接口返回的属性，该属性仅当次设置有效。
* 当事件属性和公共属性和动态公共属性三者重复时会按如下优先级进行覆盖，事件属性 > 动态公共属性 > 静态公共属性。

#### 参数说明
- Dictionary 属性字典
- key 为 String，只能包含数字小写字母下划线，以及以字母开头。
  value 可以是 String/Number/Set、Array。Set、Array 中的所有元素必须为 String。

#### 示例

```javascript
operateModule.setDynamicCommonProperties({
					"key": "value"
				})
```


## 删除某个静态公共属性

### API - unregisterCommonProperty(String)
删除某个静态公共属性

#### 参数说明
- String 某个静态公共属性 String类型

#### 示例

```javascript
operateModule.unregisterCommonProperty("key")
```


## 删除所有的静态公共属性

### API - clearCommonProperties()
删除当前所有的静态公共属性

#### 参数说明
- 

#### 示例

```javascript
operateModule.clearCommonProperties()
```


## 获取静态公共属性 (仅iOS)

### API - currentCommonProperties()
返回当前的静态公共属性

#### 参数说明
- 返回值为当前的静态公共属性  类型为 Dictionary

#### 示例

```javascript
if(uni.getSystemInfoSync().platform == "ios"){
    let result = operateModule.currentCommonProperties()
}
```


## 设置覆盖方式的用户属性

### API - setUserInfo(Dictionary, CALLBACK)
调用该接口前，需要先在控制台创建用户属性，详情参考 [创建用户属性](https://docs.jiguang.cn/public_service/dataCenter/metadata/metaAttri#%E5%88%9B%E5%BB%BA%E7%94%A8%E6%88%B7%E5%B1%9E%E6%80%A7)。

如果某个用户属性之前已经存在了，则这次会被覆盖掉；不存在，则会创建。如：用户会员等级。

#### 参数说明
- Dictionary
  key 是用户属性的名称，必须是 String，
  Value 则是用户属性的内容，只支持 String、Number，Set、Array 这些类型。
  Set 或者 Array 类型的 value 中目前只支持其中的元素是 String。
  
- CALLBACK

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|code|string|返回 code 码, code:0 为成功|
|msg|string|返回code码解释|


#### 示例

```javascript
operateModule.setUserInfo({
					"key": "value"
				},result=>{
					let code = result.code
					let msg =  result.msg
				})

```


## 设置仅首次生效的用户属性

### API - setOnceUserInfo(Dictionary, CALLBACK)
与 setUserInfo 接口不同的是，如果该用户的某个用户属性之前已经存在了，会被忽略；不存在，则会创建。如：首次付费时间。

#### 参数说明
- Dictionary 
  key 是用户属性的名称，必须是 String，
  Value 则是用户属性的内容，只支持 String、Number，Set、Array 这些类型。
  Set 或者 Array 类型的 value 中目前只支持其中的元素是 String。
  
- CALLBACK

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|code|string|返回 code 码, code:0 为成功|
|msg|string|返回code码解释|


#### 示例

```javascript
operateModule.setOnceUserInfo({
					"key": "value"
				},result=>{
					let code = result.code
					let msg =  result.msg
				})
```


## 设置累加方式的用户属性

### API - incrementUserInfo(Dictionary, CALLBACK)
给一个数值类型的用户属性增加一个数值，累加所有上报的数据，如累计消费金额。
只能对 Number 类型的用户属性调用这个接口，否则会被忽略, 如果这个用户属性之前不存在，则初始值当做 0 来处理。

#### 参数说明
- Dictionary
Key为属性key, NSString类型
Value 只能是 Number类型

- CALLBACK

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|code|string|返回 code 码, code:0 为成功|
|msg|string|返回code码解释|


#### 示例

```javascript
operateModule.incrementUserInfo({
					"key": 1
				},result=>{
					let code = result.code
					let msg =  result.msg
				})
```


## 设置追加方式的用户属性

### API - appendUserInfo(Dictionary, CALLBACK)
向一个 Set 或者 Array 类型的属性添加一些值。
如前面所述，这个 Set 或者 Array 的元素必须是 String，否则，会忽略, 同时，如果要 append 的用户属性之前不存在，会初始化一个空的 Set 或者 Array。
可持续增加该集合元素，元素入库去重处理，若已存在ABC，追加CD，最终为ABCD，如用户点赞的新闻。

#### 参数说明
- Dictionary
Key: 属性值， 必须是 String 类型
Value: 必须是 Set 或者 Array 类型的, 且其中目前只支持其中的元素是 String。
- CALLBACK

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|code|string|返回 code 码, code:0 为成功|
|msg|string|返回code码解释|


#### 示例

```javascript
operateModule.appendUserInfo("key",["value1","value2"],result=>{
					let code = result.code
					let msg =  result.msg
				})
```


## 删除用户属性

### API - unsetUserInfo(NSString, CALLBACK)
删除某个用户属性的全部内容，如果这个用户属性之前不存在，则直接忽略

#### 参数说明
- NSString: 属性key
- CALLBACK

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|code|string|返回 code 码, code:0 为成功|
|msg|string|返回code码解释|


#### 示例

```javascript
operateModule.unsetUserInfo("key",result=>{
					let code = result.code
					let msg =  result.msg
				})
```


## 开始事件计时

### API - timeKeepingEventStart(String)
若需要统计某个事件的持续时间，先在事件开始时调用 timeKeepingEventStart:"事件名" 记录事件开始时间，该方法并不会真正发送事件。
随后在事件结束时，调用 timeKeepingEventEnd。
#### 参数说明
- String: 事件名

返回值： 事件ID,类型为String

#### 示例

```javascript
let eventId = operateModule.timeKeepingEventStart("key")
```


## 结束事件计时

### API - timeKeepingEventEnd(String, Dictionary)
结束事件计时，多次调用时，以首次调用为准

#### 参数说明
- String: 事件ID
- Dictionary: 属性

#### 示例

```javascript
operateModule.timeKeepingEventEnd("eventid",{"key":"value"})
```


## 暂停事件计时

### API - timeKeepingEventPause(String)
多次调用时，以首次调用为准

#### 参数说明
- String 事件ID

#### 示例

```javascript
operateModule.timeKeepingEventPause("eventid")
```


## 恢复事件计时

### API - timeKeepingEventResume(String)
多次调用时，以首次调用为准

#### 参数说明
- String 事件ID

#### 示例

```javascript
operateModule.timeKeepingEventResume("eventid")
```

## 删除事件计时

### API - removeTimeKeepingEvent(String)
多次调用时，只有首次调用有效

#### 参数说明
- String 事件ID

#### 示例

```javascript
operateModule.removeTimeKeepingEvent("eventid")
```


## 清除所有计时事件

### API - clearTimeKeepingEvent()
清除所有计时事件

#### 参数说明
- 

#### 示例

```javascript
operateModule.clearTimeKeepingEvent()
```


## 获取运营增长开通状态 (仅iOS)

### API - isValid(CALLBACK)
您的项目是否已经开通了运营增长，callback 中 code 为 0 位开通。

#### 参数说明
- CALLBACK

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|code|string|返回 code 码, code:0 为成功|
|msg|string|返回code码解释|


#### 示例

```javascript
if(uni.getSystemInfoSync().platform == "ios"){
					operateModule.isValid(result=>{
						let code = result.code
						let msg =  result.msg
					})
				}
```


## 获取用户数据 (仅iOS)

### API - userData(CALLBACK)
返回值为用户数据，例如后台注册的用户事件，当前用户的渠道信息，用户标识等等

#### 参数说明
- CALLBACK 回调，为 Dictionary 类型 

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|code|string|返回 code 码, code:0 为成功|
|data|Dictionary|项目信息数据|

#### 示例

```javascript
if(uni.getSystemInfoSync().platform == "ios"){
					operateModule.userData(result=>{
						let code = result.code
						let data = result.data
					})
				}
```


## 获取项目信息 (仅iOS)

### API - appInfo(CALLBACK)
返回项目信息

#### 参数说明
- CALLBACK：回调，为 Dictionary 类型 

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|code|string|返回 code 码, code:0 为成功|
|data|Dictionary|项目信息|

#### 示例

```javascript
if(uni.getSystemInfoSync().platform == "ios"){
					operateModule.appInfo(result=>{
						let code = result.code
						let data = result.data
					})
				}
```


## 查看上报外围字段 (仅 Android)

### API - getPeripheralProperty()
返回项目信息

#### 参数说明
- 返回值为外围字段 Dictionary 类型 

#### 示例

```javascript
if(uni.getSystemInfoSync().platform == "android"){
	 let result = operateModule.getPeripheralProperty()
}
```


## 设置是否可获取设备信息总开关 (仅 Android)

### API - setPermissionsAll(boolean)
设置是否可获取设备信息总开关，默认开
setPermissionsAll 接口优先级高于 setPermissionsLocation 和 setPermissionsMac。

#### 参数说明
- boolean true 为开，false 为关

#### 示例

```javascript
if(uni.getSystemInfoSync().platform == "android"){
	 operateModule.setPermissionsAll(true)
}
```

## 设置是否可获取地理位置信息 (仅 Android)

### API - setPermissionsLocation(boolean)
设置是否可获取设备信息总开关，默认开

#### 参数说明
- boolean true 为开，false 为关

#### 示例

```javascript
if(uni.getSystemInfoSync().platform == "android"){
	operateModule.setPermissionsLocation(true)
}
```

## 设置是否可获取 mac 信息 (仅 Android)

### API - setPermissionsMac(boolean)
设置是否可获取设备信息总开关，默认开

#### 参数说明
- boolean true 为开，false 为关

#### 示例

```javascript
if(uni.getSystemInfoSync().platform == "android"){
	operateModule.setPermissionsMac(true)
}
```

## 获取 SDK 版本号 (仅 Android)

### API - getVersion()
获取当前 sdk 版本号

#### 参数说明
返回值：版本号 String类型

#### 示例

```javascript
if(uni.getSystemInfoSync().platform == "android"){
	let version = operateModule.getVersion()
}
```


