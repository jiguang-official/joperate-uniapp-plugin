//
//  JOperateModule.m
//  UniPluginJOperate
//
//  Created by huangshuni on 2021/1/12.
//

#import "JOperateModule.h"
#import "JOPERATEService.h"


#define weakObj(obj) __weak typeof(obj) weak##obj = obj;

#define JOperate_infoConfig_JCore                   @"JCore"
#define JOperate_infoConfig_JCore_APP_KEY           @"APP_KEY"
#define JOperate_infoConfig_JCore_CHANNEL           @"CHANNEL"

#define JOperate_infoConfig_JOperate                @"JOperate"
#define JOperate_infoConfig_JOperat_ADVERTISINGID   @"ADVERTISINGID"
#define JOperate_infoConfig_JOperat_ISPRODUCTION    @"ISPRODUCTION"


@interface JOperateModule () 

@end

@implementation JOperateModule

BOOL joperate_debugMode = NO;


UNI_EXPORT_METHOD(@selector(initJOperateService))
UNI_EXPORT_METHOD(@selector(setLoggerEnable:))
UNI_EXPORT_METHOD(@selector(eventRecord:property:))
UNI_EXPORT_METHOD(@selector(setUserChannel:callBack:))
UNI_EXPORT_METHOD(@selector(identifyAccount:callBack:))
UNI_EXPORT_METHOD_SYNC(@selector(CUID))
UNI_EXPORT_METHOD(@selector(setUtmProperties:))
UNI_EXPORT_METHOD(@selector(setCommonProperties:))
UNI_EXPORT_METHOD(@selector(setDynamicCommonProperties:))
UNI_EXPORT_METHOD(@selector(unregisterCommonProperty:))
UNI_EXPORT_METHOD(@selector(clearCommonProperties))
UNI_EXPORT_METHOD_SYNC(@selector(currentCommonProperties))
UNI_EXPORT_METHOD(@selector(setUserInfo:callBack:))
UNI_EXPORT_METHOD(@selector(setOnceUserInfo:callBack:))
UNI_EXPORT_METHOD(@selector(incrementUserInfo:callBack:))
UNI_EXPORT_METHOD(@selector(appendUserInfo:by:callBack:))
UNI_EXPORT_METHOD(@selector(unsetUserInfo:callBack:))
UNI_EXPORT_METHOD_SYNC(@selector(timeKeepingEventStart:))
UNI_EXPORT_METHOD(@selector(timeKeepingEventEnd:with:))
UNI_EXPORT_METHOD(@selector(timeKeepingEventPause:))
UNI_EXPORT_METHOD(@selector(timeKeepingEventResume:))
UNI_EXPORT_METHOD(@selector(removeTimeKeepingEvent:))
UNI_EXPORT_METHOD(@selector(clearTimeKeepingEvent))
UNI_EXPORT_METHOD(@selector(isValid:))
UNI_EXPORT_METHOD(@selector(userData:))
UNI_EXPORT_METHOD(@selector(appInfo:))

/// 初始化
- (void)initJOperateService {
    [self logger:@"initJOperateService" log:nil];
    NSString *path = [[NSBundle mainBundle]pathForResource:@"Info" ofType:@"plist"];
    NSDictionary *dict = [NSDictionary dictionaryWithContentsOfFile:path];
    JOPERATEConfig *config = [[JOPERATEConfig alloc] init];
    config.appKey = dict[JOperate_infoConfig_JCore][JOperate_infoConfig_JCore_APP_KEY];
    config.channel = dict[JOperate_infoConfig_JCore][JOperate_infoConfig_JCore_CHANNEL];
    config.advertisingId = dict[JOperate_infoConfig_JOperate][JOperate_infoConfig_JOperat_ADVERTISINGID];
    // isProduction
    BOOL isProduction = NO;
    NSString *isProductionStr = dict[JOperate_infoConfig_JOperate][JOperate_infoConfig_JOperat_ISPRODUCTION];
    if (isProductionStr == nil || isProductionStr.length == 0 || [isProductionStr isEqualToString:@"false"]) {
        isProduction = NO;
    }else if ([isProductionStr isEqualToString:@"true"]) {
        isProduction = YES;
    }
    config.isProduction = isProduction;
    [JOPERATEService setupWithConfig:config];
}


/// 设置调试模式，默认关闭状态
- (void)setLoggerEnable:(BOOL)enable {
    [self logger:@"setLoggerEnable:" log:(enable?@"true":@"false")];
    joperate_debugMode = enable;
    if (enable) {
        [JOPERATEService setDebug:YES];
    }else {
        [JOPERATEService setDebug:NO];
    }
}

/// 自定义事件统计
- (void)eventRecord:(NSString *)eventName property:(NSDictionary *)property {
    [self logger:@"eventRecord:" log:[NSString stringWithFormat:@"%@ - %@", eventName, property]];
    JOPERATEEventObject *e = [[JOPERATEEventObject alloc] init];
    e.eventName = eventName;
    e.property = property;
    [JOPERATEService eventRecord:e];
}

/// 设置用户联系方式
- (void)setUserChannel:(NSDictionary *)channels callBack:(UniModuleKeepAliveCallback)callback{
    [self logger:@"setUserChannel:" log:channels];
    weakObj(self)
    JOPERATEUserChannel *channel = [[JOPERATEUserChannel alloc] init];
    channel.channels = channels;
    channel.completion = ^(NSInteger errcode, NSString * _Nonnull msg) {
        if (callback) {
            NSDictionary *result = [weakself convertResultWithCode:errcode content:msg];
            callback(result,YES);
        }
    };
    [JOPERATEService setUserChannel:channel];
}

/// 设置用户标识
- (void)identifyAccount:(NSDictionary *)userIDs callBack:(UniModuleKeepAliveCallback)callback{
    [self logger:@"identifyAccount:" log:userIDs];
    weakObj(self)
    JOPERATEUserID *userID = [[JOPERATEUserID alloc] init];
    userID.userIDs = userIDs;
    userID.completion = ^(NSInteger errcode, NSString * _Nonnull msg) {
        if (callback) {
            NSDictionary *result = [weakself convertResultWithCode:errcode content:msg];
            callback(result,YES);
        }
    };
    [JOPERATEService identifyAccount:userID];
}

/// 获取 CUID
- (NSString *)CUID {
    [self logger:@"getCUID:" log:@""];
    NSString *cuid = [JOPERATEService CUID];
    return cuid;
}

/// 设置 UTM 属性
- (void)setUtmProperties:(NSDictionary *)property {
    [self logger:@"setUtmProperties:" log:property];
    [JOPERATEService setUtmProperties:property];
}

/// 设置静态公共属性
- (void)setCommonProperties:(NSDictionary * )property {
    [self logger:@"setCommonProperties:" log:property];
    [JOPERATEService setCommonProperties:property];
}

/// 设置动态公共属性
- (void)setDynamicCommonProperties:(NSDictionary *)property {
    [self logger:@"setDynamicCommonProperties:" log:property];
    [JOPERATEService setDynamicCommonProperties:^NSDictionary<NSString *,id> * _Nonnull{
        return property;
    }];
}

/// 删除某个静态公共属性
- (void)unregisterCommonProperty:(NSString * )key {
    [self logger:@"unregisterCommonProperty:" log:key];
    [JOPERATEService unregisterCommonProperty:key];
}

/// 删除所有的静态公共属性
- (void)clearCommonProperties {
    [self logger:@"clearCommonProperties" log:@""];
    [JOPERATEService clearCommonProperties];
}

/// 获取静态公共属性
- (NSDictionary *)currentCommonProperties {
    [self logger:@"currentCommonProperties" log:@""];
    NSDictionary* properties = [JOPERATEService currentCommonProperties];
    return properties;
}

/// 设置用户属性
- (void)setUserInfo:(NSDictionary *)userinfo callBack:(UniModuleKeepAliveCallback)callback {
    [self logger:@"setUserInfo:" log:userinfo];
    weakObj(self);
    [JOPERATEService set:userinfo completion:^(NSInteger errcode, NSString * _Nonnull msg) {
        if (callback) {
            NSDictionary *result = [weakself convertResultWithCode:errcode content:msg];
            callback(result,YES);
        }
    }];
}

/// 设置仅首次生效的用户属性
- (void)setOnceUserInfo:(NSDictionary *)userinfo callBack:(UniModuleKeepAliveCallback)callback {
    [self logger:@"setOnceUserInfo:" log:userinfo];
    weakObj(self);
    [JOPERATEService setOnce:userinfo completion:^(NSInteger errcode, NSString * _Nonnull msg) {
        if (callback) {
            NSDictionary *result = [weakself convertResultWithCode:errcode content:msg];
            callback(result,YES);
        }
    }];
}

/// 设置累加方式的用户属性
- (void)incrementUserInfo:(NSDictionary *)userinfo callBack:(UniModuleKeepAliveCallback)callback {
    [self logger:@"incrementUserInfo:" log:userinfo];
    weakObj(self);
    [JOPERATEService increment:userinfo completion:^(NSInteger errcode, NSString * _Nonnull msg) {
        if (callback) {
            NSDictionary *result = [weakself convertResultWithCode:errcode content:msg];
            callback(result,YES);
        }
    }];
}

/// 设置追加方式的用户属性
- (void)appendUserInfo:(NSString * )key by:(NSArray * )content callBack:(UniModuleKeepAliveCallback)callback {
    [self logger:@"appendUserInfo:" log:[NSString stringWithFormat:@"%@,%@",key,content]];
    weakObj(self);
    [JOPERATEService append:key by:content completion:^(NSInteger errcode, NSString * _Nonnull msg) {
        if (callback) {
            NSDictionary *result = [weakself convertResultWithCode:errcode content:msg];
            callback(result,YES);
        }
    }];
}

/// 删除用户属性
- (void)unsetUserInfo:(NSString * )key callBack:(UniModuleKeepAliveCallback)callback {
    [self logger:@"unsetUserInfo:" log:key];
    weakObj(self);
    [JOPERATEService unset:key completion:^(NSInteger errcode, NSString * _Nonnull msg) {
        if (callback) {
            NSDictionary *result = [weakself convertResultWithCode:errcode content:msg];
            callback(result,YES);
        }
    }];
}


#pragma mark - 计时事件部分
/// 开始事件计时
- (NSString * )timeKeepingEventStart:(NSString * )event {
    [self logger:@"timeKeepingEventStart:" log:event];
    NSString *eventID = [JOPERATEService timeKeepingEventStart:event];
    return eventID;
}

/// 结束事件计时
- (void)timeKeepingEventEnd:(NSString * )eventId with:(nullable NSDictionary * )properties {
    [self logger:@"timeKeepingEventEnd:" log:[NSString stringWithFormat:@"%@,%@",eventId,properties]];
    [JOPERATEService timeKeepingEventEnd:eventId with:properties];
}

/// 暂停事件计时
- (void)timeKeepingEventPause:(NSString * )eventId {
    [self logger:@"timeKeepingEventPause:" log:eventId];
    [JOPERATEService timeKeepingEventPause:eventId];
}

/// 恢复事件计时
- (void)timeKeepingEventResume:(NSString * )eventId {
    [self logger:@"timeKeepingEventResume:" log:eventId];
    [JOPERATEService timeKeepingEventResume:eventId];
}

/// 删除事件计时
- (void)removeTimeKeepingEvent:(NSString * )eventId {
    [self logger:@"removeTimeKeepingEvent:" log:eventId];
    [JOPERATEService removeTimeKeepingEvent:eventId];
}

/// 清除所有计时事件
- (void)clearTimeKeepingEvent {
    [self logger:@"clearTimeKeepingEvent" log:@""];
    [JOPERATEService clearTimeKeepingEvent];
}

#pragma mark - Demo接口
- (void)isValid:(UniModuleKeepAliveCallback)callback {
    [self logger:@"isValid:" log:@""];
    weakObj(self);
    [JOPERATEService isValid:^(NSInteger code, NSString * _Nonnull msg) {
        if (callback) {
            NSDictionary *result = [weakself convertResultWithCode:code content:msg];
            callback(result,YES);
        }
    }];
}

- (void)userData:(UniModuleKeepAliveCallback)callback {
    [self logger:@"userData:" log:@""];
    [JOPERATEService userData:^(NSInteger code, NSDictionary<NSString *,id> * _Nonnull data) {
        if (callback) {
            NSDictionary *result = @{
                @"code": @(code),
                @"data": data?:@{}
            };
            callback(result,YES);
        }
    }];
}

- (void)appInfo:(UniModuleKeepAliveCallback)callback {
    [self logger:@"appInfo:" log:@""];
    [JOPERATEService appInfo:^(NSInteger code, NSDictionary<NSString *,id> * _Nonnull data) {
        if (callback) {
            NSDictionary *result = @{
                @"code": @(code),
                @"data": data?:@{}
            };
            callback(result,YES);
        }
    }];
}


#pragma mark - other
- (NSDictionary *)convertResultWithCode:(NSInteger)code content:(NSString *)content {
    NSDictionary *result = @{
        @"code":@(code),
        @"msg":content?:@""
    };
    return result;
}

// debug 打印控制
- (void)logger:(NSObject *)tag log:(NSObject *)log
{
    if(joperate_debugMode){
          NSLog(@"JOperateModule--->%@ %@", tag,log);
    }
}

@end
