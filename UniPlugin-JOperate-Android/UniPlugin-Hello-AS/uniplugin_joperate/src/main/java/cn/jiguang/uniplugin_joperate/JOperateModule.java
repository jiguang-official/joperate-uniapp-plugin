package cn.jiguang.uniplugin_joperate;


import android.content.Context;
import android.util.Log;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.json.JSONException;
//import org.json.JSONObject;

import com.taobao.weex.bridge.JSCallback;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import cn.jiguang.joperate.api.JOperateInterface;
import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniDestroyableModule;
import io.dcloud.feature.uniapp.common.UniModule;
import io.dcloud.feature.uniapp.utils.UniLogUtils;
import cn.jiguang.uniplugin_joperate.common.JGLogger;


public class JOperateModule extends UniDestroyableModule {

    public static Context uniContext = null;

    public void updatePluginStatu() {
        uniContext = mWXSDKInstance.getContext();
    }

    // SDK 初始化
    @UniJSMethod(uiThread = true)
    public void initJOperateService() {
        JGLogger.w("initJOperateService-----");
        updatePluginStatu();
        JOperateInterface.getInstance(mWXSDKInstance.getContext()).init();
    }

    /// 设置 Debug 模式
    @UniJSMethod(uiThread = true)
    public void setLoggerEnable(boolean enable) {
        JGLogger.w("setLoggerEnable-----");
        updatePluginStatu();
        JGLogger.setLoggerEnable(enable);
        JOperateInterface.setDebug(enable);
    }

    /// 设置用户标识
    @UniJSMethod(uiThread = true)
    public void identifyAccount(JSONObject object, UniJSCallback callback) {
        JGLogger.w("identifyAccount-----" + object);
        org.json.JSONObject newObj = convertToOrgJson(object);
        updatePluginStatu();
        JOperateInterface.getInstance(uniContext).login(newObj, new JOperateInterface.CallBack() {
            @Override
            public void onCallBack(int code, String msg) {
                JGLogger.w("login code:" + code + ",msg:" + msg);
                JSONObject result = convertResult(code, msg);
                if (callback != null) {
                    callback.invoke(result);
                }
            }
        });
    }

    /// 设置用户联系方式
    @UniJSMethod(uiThread = true)
    public void setUserChannel(JSONObject object, UniJSCallback callback) {
        JGLogger.w("setUserChannel-----" + object);
        updatePluginStatu();
        org.json.JSONObject newObj = convertToOrgJson(object);
        JOperateInterface.getInstance(uniContext).setChannel(newObj, new JOperateInterface.CallBack() {
            @Override
            public void onCallBack(int code, String msg) {
                JGLogger.w("setUserChannel code:" + code + ",msg:" + msg);
                JSONObject result = convertResult(code, msg);
                if (callback != null) {
                    callback.invoke(result);
                }
            }
        });
    }

    /// 上报自定义事件
    @UniJSMethod(uiThread = true)
    public void eventRecord(String eventKey, JSONObject object) {
        JGLogger.w("eventRecord-----" + eventKey + "---" + object);
        updatePluginStatu();
        org.json.JSONObject newObj = convertToOrgJson(object);
        JOperateInterface.getInstance(uniContext).onEvent(eventKey, newObj);
    }


    /// 获取 CUID
    @UniJSMethod(uiThread = false)
    public String CUID() {
        JGLogger.w("getCUID-----");
        updatePluginStatu();
        String cuid = JOperateInterface.getInstance(mWXSDKInstance.getContext()).getCuid();
        JGLogger.w("getCUID-----" + cuid);
        return cuid;
    }

    /// 获取 SDK 版本号
    @UniJSMethod(uiThread = false)
    public String getVersion() {
        JGLogger.w("getVersion-----");
        updatePluginStatu();
        String version = JOperateInterface.getInstance(uniContext).getVersion();
        JGLogger.w("getVersion-----" + version);
        return version;
    }

    /// 注册静态公有属性
    @UniJSMethod(uiThread = true)
    public void setCommonProperties(JSONObject object) {
        JGLogger.w("setCommonProperties-----" + object);
        updatePluginStatu();
        org.json.JSONObject newObj = convertToOrgJson(object);
        JOperateInterface.getInstance(uniContext).registerSuperProperties(newObj);
    }

    /// 清除静态公有属性
    @UniJSMethod(uiThread = true)
    public void clearCommonProperties() {
        JGLogger.w("clearCommonProperties-----");
        updatePluginStatu();
        JOperateInterface.getInstance(uniContext).clearSuperProperties();
    }

    /// 清除某个静态公有属性
    @UniJSMethod(uiThread = true)
    public void unregisterCommonProperty(String superPropertyName) {
        JGLogger.w("unregisterCommonProperty-----" + superPropertyName);
        updatePluginStatu();
        JOperateInterface.getInstance(uniContext).unregisterSuperProperty(superPropertyName);
    }

    /// 注册动态公有属性
    @UniJSMethod(uiThread = true)
    public void setDynamicCommonProperties(JSONObject object) {
        JGLogger.w("setDynamicCommonProperties-----" + object);
        updatePluginStatu();
        JOperateInterface.getInstance(uniContext).registerDynamicSuperProperties(new JOperateInterface.DynamicSuperProperties() {
            @Override
            public org.json.JSONObject getDynamicSuperProperties() {
                org.json.JSONObject properties = convertToOrgJson(object);
                return properties;
            }
        });
    }

    /// 设置 UTM 属性
    @UniJSMethod(uiThread = true)
    public void setUtmProperties(JSONObject object) {
        JGLogger.w("setUtmProperties-----" + object);
        updatePluginStatu();
        org.json.JSONObject newObj = convertToOrgJson(object);
        JOperateInterface.getInstance(uniContext).setUtmProperties(newObj);
    }

    /// 设置覆盖方式的用户属性
    @UniJSMethod(uiThread = true)
    public void setUserInfo(JSONObject object, UniJSCallback callback) {
        JGLogger.w("setUserInfo-----" + object);
        updatePluginStatu();
        org.json.JSONObject newObj = convertToOrgJson(object);
        JOperateInterface.getInstance(uniContext).profileSet(newObj, new JOperateInterface.CallBack() {
            @Override
            public void onCallBack(int code, String msg) {
                JGLogger.w("setUserInfo code:" + code + ",msg:" + msg);
                JSONObject result = convertResult(code, msg);
                if (callback != null) {
                    callback.invoke(result);
                }
            }
        });
    }

    /// 设置仅首次生效的用户属性
    @UniJSMethod(uiThread = true)
    public void setOnceUserInfo(JSONObject object, UniJSCallback callback) {
        JGLogger.w("setOnceUserInfo-----" + object);
        updatePluginStatu();
        org.json.JSONObject newObj = convertToOrgJson(object);
        JOperateInterface.getInstance(uniContext).profileSetOnce(newObj, new JOperateInterface.CallBack() {
            @Override
            public void onCallBack(int code, String msg) {
                JGLogger.w("setOnceUserInfo code:" + code + ",msg:" + msg);
                JSONObject result = convertResult(code, msg);
                if (callback != null) {
                    callback.invoke(result);
                }
            }
        });
    }

    /// 设置累加方式的用户属性
    @UniJSMethod(uiThread = true)
    public void incrementUserInfo(JSONObject object, UniJSCallback callback) {
        JGLogger.w("incrementUserInfo-----" + object);
        String jsonStr = object.toString();
        Map maps = (Map)JSON.parse(jsonStr);
        updatePluginStatu();
        JOperateInterface.getInstance(uniContext).profileIncrement(maps, new JOperateInterface.CallBack() {
            @Override
            public void onCallBack(int code, String msg) {
                JGLogger.w("increment code:" + code + ",msg:" + msg);
                JSONObject result = convertResult(code, msg);
                if (callback != null) {
                    callback.invoke(result);
                }
            }
        });
    }

    /// 设置追加方式的用户属性
    @UniJSMethod(uiThread = true)
    public void appendUserInfo(String property, Set values, UniJSCallback callback) {
        JGLogger.w("appendUserInfo-----" + property + "--" + values);
        updatePluginStatu();
        JOperateInterface.getInstance(uniContext).profileAppend(property,values, new JOperateInterface.CallBack() {
            @Override
            public void onCallBack(int code, String msg) {
                JGLogger.w("append code:" + code + ",msg:" + msg);
                JSONObject result = convertResult(code, msg);
                if (callback != null) {
                    callback.invoke(result);
                }
            }
        });
    }

    /// 删除用户属性
    @UniJSMethod(uiThread = true)
    public void unsetUserInfo(String property, UniJSCallback callback) {
        JGLogger.w("unset-----" + property);
        updatePluginStatu();
        JOperateInterface.getInstance(uniContext).profileUnset(property, new JOperateInterface.CallBack() {
            @Override
            public void onCallBack(int code, String msg) {
                JGLogger.w("unset code:" + code + ",msg:" + msg);
                JSONObject result = convertResult(code, msg);
                if (callback != null) {
                    callback.invoke(result);
                }
            }
        });
    }


    /// 统计事件时长
    /// 事件开始计时
    @UniJSMethod(uiThread = false)
    public String timeKeepingEventStart(String eventName) {
        JGLogger.w("timeKeepingEventStart-----" + eventName);
        updatePluginStatu();
        JOperateInterface instance = JOperateInterface.getInstance(uniContext);
        String eventNameKey = instance.onEventTimerStart(eventName);
        return eventNameKey;
    }

    /// 事件暂停计时
    @UniJSMethod(uiThread = true)
    public void timeKeepingEventPause(String eventNameKey) {
        JGLogger.w("timeKeepingEventPause-----" + eventNameKey);
        updatePluginStatu();
        JOperateInterface instance = JOperateInterface.getInstance(uniContext);
        instance.onEventTimerPause(eventNameKey);
    }

    /// 事件继续开始计时
    @UniJSMethod(uiThread = true)
    public void timeKeepingEventResume(String eventNameKey) {
        JGLogger.w("timeKeepingEventResume-----" + eventNameKey);
        updatePluginStatu();
        JOperateInterface instance = JOperateInterface.getInstance(uniContext);
        instance.onEventTimerResume(eventNameKey);
    }

    /// 事件结束计时，并上报
    @UniJSMethod(uiThread = true)
    public void timeKeepingEventEnd(String eventNameKey) {
        JGLogger.w("timeKeepingEventEnd-----" + eventNameKey);
        updatePluginStatu();
        JOperateInterface instance = JOperateInterface.getInstance(uniContext);
        instance.onEventTimerEnd(eventNameKey);
    }

    /// 清除关闭该事件，比如统计到一半时不再需要统计了
    @UniJSMethod(uiThread = true)
    public void removeTimeKeepingEvent(String eventNameKey) {
        JGLogger.w("removeTimeKeepingEvent-----" + eventNameKey);
        updatePluginStatu();
        JOperateInterface instance = JOperateInterface.getInstance(uniContext);
        instance.removeTimer(eventNameKey);
    }

    /// 清除关闭所有事件，比如统计到一半时不再需要统计了
    @UniJSMethod(uiThread = true)
    public void clearTimeKeepingEvent() {
        JGLogger.w("clearTimeKeepingEvent-----");
        updatePluginStatu();
        JOperateInterface instance = JOperateInterface.getInstance(uniContext);
        instance.clearTrackTimer();
    }


    /// 查看上报外围字段
    @UniJSMethod(uiThread = false)
    public JSONObject getPeripheralProperty() {
        JGLogger.w("getPeripheralProperty-----");
        updatePluginStatu();
        org.json.JSONObject peripheralProperty =  JOperateInterface.getInstance(uniContext).getPeripheralProperty();
        JGLogger.w("getPeripheralProperty-----" + peripheralProperty);
        JSONObject obj = convertToFastJson(peripheralProperty);
        return obj;
    }

    /// 获取外围字段权限设置（获取当前设备信息）
    /// 设置是否可获取设备信息总开关，默认开
    @UniJSMethod(uiThread = true)
    public void setPermissionsAll(boolean b) {
        JGLogger.w("setPermissionsAll-----" + b);
        updatePluginStatu();
        JOperateInterface.getInstance(uniContext).setPermissionsAll(b);
    }

    /// 设置是否可获取地理位置信息，gps，wifi 名，默认使用 setPermissionsAll 的值
    @UniJSMethod(uiThread = true)
    public void setPermissionsLocation(boolean b) {
        JGLogger.w("setPermissionsLocation-----" + b);
        updatePluginStatu();
        JOperateInterface.getInstance(uniContext).setPermissionsLocation(b);
    }

    /// 设置是否可获取 mac 信息，默认使用 setPermissionsAll 的值
    @UniJSMethod(uiThread = true)
    public void setPermissionsMac(boolean b) {
        JGLogger.w("setPermissionsMac-----" + b);
        updatePluginStatu();
        JOperateInterface.getInstance(uniContext).setPermissionsMac(b);
    }

public  org.json.JSONObject convertToOrgJson(JSONObject object) {
    org.json.JSONObject obj = new org.json.JSONObject();
    for (Map.Entry<String, Object> entry : object.entrySet()) {
//        System.out.println(entry.getKey() + " : " + entry.getValue());
        String key = entry.getKey();
        Object value = entry.getValue();
        if (value instanceof JSONObject) {
            value = convertToOrgJson((JSONObject) value);
        }
        try {
            obj.putOpt(key, value);
        }catch (JSONException exception) {}
    }
    return obj;
}

public JSONObject convertToFastJson(org.json.JSONObject object) {
    JSONObject newObj = new JSONObject();
    try {
        Iterator it = object.keys();
        while (it.hasNext()) {
            String key = (String) it.next();
            Object value = object.get(key);
            newObj.put(key, value);
        }
    }catch (JSONException e){
        JGLogger.w("convertToFastJson error-----" + e);
    }
    return newObj;
}

    public JSONObject convertResult(int code, String msg){
        JSONObject jsonObject = new JSONObject();
            jsonObject.put("code", code);
            if (msg == null) {
                jsonObject.put("msg", "");
            }else {
                jsonObject.put("msg", msg);
            }
        return jsonObject;
    }


    @Override
    public void destroy() {

    }

}
