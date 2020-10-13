/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <React/RCTUIKit.h> // TODO(macOS ISS#2323203)

NS_ASSUME_NONNULL_BEGIN

@class RCTSurface;

/**
 * UIView instance which represents the Surface
 */
@interface RCTSurfaceView : RCTUIView

- (instancetype)initWithSurface:(RCTSurface *)surface NS_DESIGNATED_INITIALIZER;

@property (nonatomic, weak, readonly, nullable) RCTSurface *surface;

@end

NS_ASSUME_NONNULL_END
