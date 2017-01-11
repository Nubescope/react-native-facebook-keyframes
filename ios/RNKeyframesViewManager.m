#import "RNKeyframesViewManager.h"
#import "RNKeyframesView.h"
#import <React/RCTBridge.h>

@implementation RNKeyframesViewManager

RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;

- (UIView *)view
{
  return [[RNKeyframesView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(src, NSDictionary);
RCT_EXPORT_VIEW_PROPERTY(paused, BOOL);
RCT_EXPORT_VIEW_PROPERTY(seek, NSNumber);

@end
