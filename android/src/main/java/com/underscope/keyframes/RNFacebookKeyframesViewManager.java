package com.underscope.keyframes;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class RNFacebookKeyframesViewManager extends SimpleViewManager<RNFacebookKeyframesView> {

    public static final String REACT_CLASS = "RNKeyframesView";

    public static final String PROP_SRC = "src";
    public static final String PROP_PAUSED = "paused";
    public static final String PROP_SEEK = "seek";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected RNFacebookKeyframesView createViewInstance(ThemedReactContext themedReactContext) {
        return new RNFacebookKeyframesView(themedReactContext);
    }

    @ReactProp(name = PROP_SRC)
    public void setSrc(final RNFacebookKeyframesView keyframeView, ReadableMap src) {
        keyframeView.setSrc(src);
    }

    @ReactProp(name = PROP_PAUSED, defaultBoolean = false)
    public void setPaused(final RNFacebookKeyframesView keyframeView, final boolean paused) {
        keyframeView.setPausedModifier(paused);
    }

    @ReactProp(name = PROP_SEEK)
    public void setSeek(final RNFacebookKeyframesView keyframeView, final float seek) {
        keyframeView.seekTo(seek);
    }
}