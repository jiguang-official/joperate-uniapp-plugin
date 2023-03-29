# joperate-hbuilder-plugin

[JOperate](https://www.jiguang.cn) 极光官方支持的 Hbuilder 插件（Android & iOS）。是基于 HBuilder 提供的 [uni-app 原生插件扩展](https://nativesupport.dcloud.net.cn/NativePlugin/README) 进而开发出的推送插件。

支持 iOS 和 Android。


## 接入

请配合 JG-JCore 插件一起使用。

- 1.将 nativeplugins/JG-JOperate、JG-JCore 导入项目对应位置。
- 2.项目 manifest.json 中接入 JG-JOperate、JG-JCore 插件，并配置插件配置。
- 3.在项目中引用插件
```
const operateMofule = uni.requireNativePlugin('JG-JOperate');
```


## DEMO 体验
按照以下步骤快速体验 JOperate_Hbuilder_Demo：
- 1.在[Jiguang Portal](https://www.jiguang.cn)注册应用并开通智能运营功能。
- 2.在项目 manifest.json 中配置您的appkey等信息
- 3.HbuilderX 中制作打包自定义基座，包名，签名，bundleID 需要与对应 appkey 配置的应用信息保持一致
- 4.HbuilderX 使用自定义基座运行即可

### 1.2 配置插件

打开 manifest.xml，选中App原生插件配置，选择本地插件，导入 JG-JOperate、JG-JCore

然后配置各个属性，注意在HBuilderX中可能会出现乱序现象，请仔细认真填写

JG-JCore 中请配置

| 属性               | 描述                                            | 示例                               |
| :----------------- | ----------------------------------------------- | ---------------------------------- |
| JPUSH_APPKEY_IOS | appkey (必填) | [iOS]极光portal配置应用信息时分配的AppKey"  |
| JPUSH_CHANNEL_IOS | channel (选填) | [iOS]用于统计分发渠道，不需要可填默认值developer-default |
| JPUSH_APPKEY_ANDROID | appkey (必填) | [Android]极光portal配置应用信息时分配的AppKey  |
| JPUSH_CHANNEL_ANDROID | channel (选填) | [Android]用于统计分发渠道，不需要可填默认值developer-default |


JG-JOperate 中请配置

| 属性               | 描述                                            | 示例                               |
| :----------------- | ----------------------------------------------- | ---------------------------------- |
| JOPERATE_ISPRODUCTION_IOS |  (选填) | [iOS]是否是生产环境，是填true，不是填false或者不填  |
| JOPERATE_ADVERTISINGID_IOS |  (选填) | [iOS]广告标识符（IDFA）如果不需要使用IDFA，可不填  |



## API

## 参考资料

[官方文档](https://docs.jiguang.cn/public_service/client)

## Licensejoperate

MIT © [JIGUANG](/license)


