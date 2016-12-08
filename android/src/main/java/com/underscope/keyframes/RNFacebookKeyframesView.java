package com.underscope.keyframes;

import android.view.View;
import android.widget.ImageView;

import com.facebook.keyframes.KeyframesDrawable;
import com.facebook.keyframes.KeyframesDrawableBuilder;
import com.facebook.keyframes.deserializers.KFImageDeserializer;
import com.facebook.keyframes.model.KFImage;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableMap;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

public class RNFacebookKeyframesView extends ImageView {
    private boolean mPaused = false;
    private KeyframesDrawable mKeyFramesDrawable;

    public RNFacebookKeyframesView(ReactContext reactContext) {
        super(reactContext);
    }

    public void setSrc(final ReadableMap src) {
        String descriptorString = src.toString()
                .replaceAll("^\\{ NativeMap: ", "")
                .replaceAll("\\}$", "");

        InputStream stream = new ByteArrayInputStream(descriptorString.getBytes());
        KFImage kfImage;

        try {
            kfImage = KFImageDeserializer.deserialize(stream);
        } catch (IOException e) {
            e.printStackTrace();
            return;
        }
        setKFImage(kfImage);
    }

    public void setPausedModifier(final boolean paused) {
        mPaused = paused;

        if (mPaused) {
            this.mKeyFramesDrawable.stopAnimation();
        } else {
            this.mKeyFramesDrawable.startAnimation();
        }
    }

    public void seekTo(float seek) {
        this.mKeyFramesDrawable.setFrameProgress(seek);
    }

    private void setKFImage(KFImage kfImage) {
        this.mKeyFramesDrawable = new KeyframesDrawableBuilder().withImage(kfImage).build();
        this.setLayerType(View.LAYER_TYPE_SOFTWARE, null);
        this.setImageDrawable(this.mKeyFramesDrawable);
        this.mKeyFramesDrawable.startAnimation();
    }
}