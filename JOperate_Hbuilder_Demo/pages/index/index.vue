<template>
    <div>
		</br>
		<label>---------------------------------</label>
		<button type="primary" @click="initService" class="btn">初始化</button> 
		</br>
		<button type="primary" @click="setLoggerEnable" class="btn">打开日志</button>
		</br>
		<button type="primary" @click="setLoggerUnEnable" class="btn">关闭日志</button>
		</br>
		<button type="primary" @click="eventRecord" class="btn">自定义事件统计</button>
		</br>
		<button type="primary" @click="setUserChannel" class="btn">设置用户联系方式</button>
		</br>
		<button type="primary" @click="identifyAccount" class="btn">设置用户标识</button>
		</br>
		<button type="primary" @click="getCUID" class="btn">获取 CUID</button>
		</br>
		<button type="primary" @click="setUtmProperties" class="btn">设置 UTM 属性</button>
		</br>
		<button type="primary" @click="setCommonProperties" class="btn">设置静态公共属性</button>
		</br>
		<button type="primary" @click="setDynamicCommonProperties" class="btn">设置动态公共属性</button>
		</br>
		<button type="primary" @click="unregisterCommonProperty" class="btn">删除某个静态公共属性</button>
		</br>
		<button type="primary" @click="clearCommonProperties" class="btn">删除所有的静态公共属性</button>
		</br>
		<button type="primary" @click="currentCommonProperties" class="btn">获取静态公共属性</button>
		</br>
		<button type="primary" @click="setUserInfo" class="btn">设置覆盖方式的用户属性</button>
		</br>
		<button type="primary" @click="setOnceUserInfo" class="btn">设置仅首次生效的用户属性</button>
		</br>
		<button type="primary" @click="incrementUserInfo" class="btn">设置累加方式的用户属性</button>
		</br>
		<button type="primary" @click="appendUserInfo" class="btn">设置追加方式的用户属性</button>
		</br>
		<button type="primary" @click="unsetUserInfo" class="btn">删除用户属性</button>
		</br>
		<button type="primary" @click="timeKeepingEventStart" class="btn">开始事件计时</button>
		</br>
		<button type="primary" @click="timeKeepingEventEnd" class="btn">结束事件计时</button>
		</br>
		<button type="primary" @click="timeKeepingEventPause" class="btn">暂停事件计时</button>
		</br>
		<button type="primary" @click="timeKeepingEventResume" class="btn">恢复事件计时</button>
		</br>
		<button type="primary" @click="removeTimeKeepingEvent" class="btn">删除事件计时</button>
		</br>
		<button type="primary" @click="clearTimeKeepingEvent" class="btn">清除所有计时事件</button>
		</br>
		<button type="primary" @click="isValid" class="btn">获取运营增长开通状态</button>
		</br>
		<button type="primary" @click="userData" class="btn">获取用户数据</button>
		</br>
		<button type="primary" @click="appInfo" class="btn">获取项目信息</button>
		
		</br>
		<button type="primary" @click="getVersion" class="btn">获取 SDK 版本号</button>
		</br>
		<button type="primary" @click="getPeripheralProperty" class="btn">查看上报外围字段</button>
		</br>
		<button type="primary" @click="setPermissionsAll" class="btn">设置是否可获取设备信息总开关</button>
		</br>
		<button type="primary" @click="setPermissionsLocation" class="btn">设置是否可获取地理位置信息</button>
		</br>
		<button type="primary" @click="setPermissionsMac" class="btn">设置是否可获取 mac 信息</button>
		
		
    </div>
</template>

<style>
	.btn {
		width: 300px;
		height: 40px;
		font-size: 15px;
	}
</style>

<script>
    // 首先需要通过 uni.requireNativePlugin("ModuleName") 获取 module 
    var operateModule = uni.requireNativePlugin("JG-JOperate")
    export default {
		
		onLoad() {
			
		},
		
		onUnload() {  
			
		},
		
        methods: {
			
			// SDK 初始化
			initService() {
				operateModule.initJOperateService()
			},
			
			// 设置 Debug 模式
			setLoggerEnable() {
				operateModule.setLoggerEnable(true)
			},
			
			setLoggerUnEnable() {
				operateModule.setLoggerEnable(false)
			},
			
			// 自定义事件统计
			eventRecord() {
				operateModule.eventRecord("eventID1", {"key":"key", "user":"user","add":1})
			},
			
			// 设置用户联系方式
			setUserChannel() {
				operateModule.setUserChannel({
					"channelid":{
						"工作手机":"13*********"
					}
				},result=>{
					let code = result.code
					let msg =  result.msg
					console.log(result)
					this.showToast(result)
				})
			},
			
			//设置用户标识
			identifyAccount() {
				operateModule.identifyAccount({
					"loginID":"value"
				},result=>{
					let code = result.code
					let msg =  result.msg
					console.log(result)
					this.showToast(result)
				})
			},
			
			// 获取 CUID
			getCUID() {
				let result = operateModule.CUID()
				console.log("getCUID:",result)
				uni.showToast({
					icon:'none',
					title: result,
					duration: 3000
				})
			},
			
			// 设置 UTM 属性
			setUtmProperties() {
				operateModule.setUtmProperties({
					"utm_source": "value"
				})
			},
			
			// 设置静态公共属性
			setCommonProperties() {
				operateModule.setCommonProperties({
					"key": "value"
				})
			},
			
			// 设置动态公共属性
			setDynamicCommonProperties() {
				operateModule.setDynamicCommonProperties({
					"key": "value"
				})
			},
			
			// 删除某个静态公共属性
			unregisterCommonProperty() {
				operateModule.unregisterCommonProperty("key")
			},
			
			// 删除所有的静态公共属性
			clearCommonProperties() {
				operateModule.clearCommonProperties()
			},
			
			// 获取静态公共属性
			currentCommonProperties() {
				if(uni.getSystemInfoSync().platform == "ios"){
					let result = operateModule.currentCommonProperties()
					console.log(result)
					this.showToast(result)
				}else {
					this.showTextToast("不支持安卓")
				}
			},
			
			// 设置用户属性
			// 设置覆盖方式的用户属性
			setUserInfo(){
				operateModule.setUserInfo({
					"key": "value"
				},result=>{
					let code = result.code
					let msg =  result.msg
					console.log(result)
					this.showToast(result)
				})
			},
			
			// 设置仅首次生效的用户属性
			setOnceUserInfo() {
				operateModule.setOnceUserInfo({
					"key": "value"
				},result=>{
					let code = result.code
					let msg =  result.msg
					console.log(result)
					this.showToast(result)
				})
			},
			
			// 设置累加方式的用户属性
			incrementUserInfo() {
				operateModule.incrementUserInfo({
					"key": 1
				},result=>{
					let code = result.code
					let msg =  result.msg
					console.log(result)
					this.showToast(result)
				})
			},

            // 设置追加方式的用户属性
			appendUserInfo(){
				operateModule.appendUserInfo("key",["value1","value2"],result=>{
					let code = result.code
					let msg =  result.msg
					console.log(result)
					this.showToast(result)
				})
			},
			
			// 删除用户属性
			unsetUserInfo() {
				operateModule.unsetUserInfo("key",result=>{
					let code = result.code
					let msg =  result.msg
					console.log(result)
					this.showToast(result)
				})
			},
			
			// 计时事件部分
            // 开始事件计时
			timeKeepingEventStart() {
				let eventId = operateModule.timeKeepingEventStart("key")
				console.log("timeKeepingEventStart:",eventId)
				uni.showToast({
					icon:'none',
					title: eventId,
					duration: 3000
				})
			},
			
			// 结束事件计时
			timeKeepingEventEnd() {
				operateModule.timeKeepingEventEnd("eventid",{"key":"value"})
			},
			
			// 暂停事件计时
			timeKeepingEventPause() {
				operateModule.timeKeepingEventPause("eventid")
			},
			
			// 恢复事件计时
			timeKeepingEventResume(){
				operateModule.timeKeepingEventResume("eventid")
			},
			
			// 删除事件计时
			removeTimeKeepingEvent(){
				operateModule.removeTimeKeepingEvent("eventid")
			},
			
			// 清除所有计时事件
			clearTimeKeepingEvent(){
				operateModule.clearTimeKeepingEvent()
			},
			
			// 获取运营增长开通状态
			isValid() {
				if(uni.getSystemInfoSync().platform == "ios"){
					operateModule.isValid(result=>{
						let code = result.code
						let msg =  result.msg
						console.log(result)
						this.showToast(result)
					})
				}else {
					this.showTextToast("不支持安卓")
				}
				
			},
			
			// 获取用户数据
			userData() {
				if(uni.getSystemInfoSync().platform == "ios"){
					operateModule.userData(result=>{
						let code = result.code
						let data = result.data
						console.log(result)
						this.showToast(result)
					})
				}else {
					this.showTextToast("不支持安卓")
				}
			},
			
			// 获取项目信息
			appInfo() {
				if(uni.getSystemInfoSync().platform == "ios"){
					operateModule.appInfo(result=>{
						let code = result.code
						let data = result.data
						console.log(result)
						this.showToast(result)
					})
				}else {
					this.showTextToast("不支持安卓")
				}
			},
			
			// 查看上报外围字段
			getPeripheralProperty() {
				if(uni.getSystemInfoSync().platform == "ios"){
					this.showTextToast("不支持iOS")
				}else {
					let result = operateModule.getPeripheralProperty()
					this.showToast(result)
				}
			},
			
			// 获取 SDK 版本号
			getVersion() {
				if(uni.getSystemInfoSync().platform == "ios"){
					this.showTextToast("不支持iOS")
				}else {
					let version = operateModule.getVersion()
					this.showTextToast(version)
				}
			},
			
			// 设置是否可获取设备信息总开关，默认开
			setPermissionsAll() {
				if(uni.getSystemInfoSync().platform == "ios"){
					this.showTextToast("不支持iOS")
				}else {
					operateModule.setPermissionsAll(true)
				}
			},
			
			// 设置是否可获取地理位置信息，gps，wifi 名，默认使用 setPermissionsAll 的值
			setPermissionsLocation() {
				if(uni.getSystemInfoSync().platform == "ios"){
					this.showTextToast("不支持iOS")
				}else {
					operateModule.setPermissionsLocation(true)
				}
			},
			
			// 设置是否可获取 mac 信息，默认使用 setPermissionsAll 的值
			setPermissionsMac() {
				if(uni.getSystemInfoSync().platform == "ios"){
					this.showTextToast("不支持iOS")
				}else {
					operateModule.setPermissionsMac(true)
				}
			},
			
			
			showToast(result){
				uni.showToast({
					icon:'none',
					title: JSON.stringify(result),
					duration: 3000
				})
			},
			
			showTextToast(result) {
				uni.showToast({
					icon:'none',
					title: result,
					duration: 3000
				})
			}

        }
    }
</script>
