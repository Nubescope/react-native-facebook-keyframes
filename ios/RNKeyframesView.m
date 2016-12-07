#import "RNKeyframesView.h"
#import <RCTConvert.h>
#import <UIKit/UIKit.h>
#import <QuartzCore/QuartzCore.h>

#import <keyframes/KFVector.h>
#import <keyframes/KFVectorLayer.h>
#import <keyframes/KFVectorParsingHelper.h>

@implementation RNKeyframesView {
    KFVectorLayer *_vectorLayer;
}

- (KFVector *)loadVectorFromDictionary
{
  static KFVector *vector;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    vector = KFVectorFromDictionary(_src);
  });
  
  return vector;
}


- (instancetype)init
{
  self = [super init];
  return self;
}

#pragma mark - React View Management


- (void)insertReactSubview:(UIView *)view atIndex:(NSInteger)atIndex
{
    RCTLogError(@"Keyframes cannot have any subviews");
    return;
}
- (void)removeReactSubview:(UIView *)subview
{
    RCTLogError(@"Keyframes cannot have any subviews");
    return;
}

- (void)layoutSubviews
{
  [super layoutSubviews];

  KFVector *vector = [self loadVectorFromDictionary];
  
  _vectorLayer = [KFVectorLayer new];
  const CGFloat shortSide = MIN(CGRectGetWidth(self.bounds), CGRectGetHeight(self.bounds));
  const CGFloat longSide = MAX(CGRectGetWidth(self.bounds), CGRectGetHeight(self.bounds));
  _vectorLayer.frame = CGRectMake(shortSide / 4, longSide / 2 - shortSide / 4, shortSide / 2, shortSide / 2);
  _vectorLayer.faceModel = vector;
  [self.layer addSublayer:_vectorLayer];
  [_vectorLayer startAnimation];
}

- (void)setSrc:(NSString *)src
{
    if (![src isEqual:_src]) {
        _src = [src copy];
    }
}
- (void)setPaused:(BOOL *)paused
{
    if(!(paused == _paused)) {
        _paused = paused;
        if(_paused) {
            [_vectorLayer pauseAnimation];
        } else {
            [_vectorLayer resumeAnimation];
        }
    }
}

- (void)setSeek:(CGFloat *)seek
{
    if(!(seek == _seek)) {
        _seek = seek;        
        [_vectorLayer seekToProgress: *seek];
    }
}

@end
