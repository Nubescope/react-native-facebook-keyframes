#import <UIKit/UIKit.h>
#import <React/RCTView.h>
#import <keyframes/KFVector.h>

@interface RNKeyframesView : RCTView
@property (nonatomic, copy) NSDictionary *src;
@property (nonatomic, assign) BOOL *paused;
@property (nonatomic, readonly) NSNumber *seek;
@end
