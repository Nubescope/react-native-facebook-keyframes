
![Keyframes](https://github.com/facebookincubator/Keyframes/raw/master/docs/images/doc-logo.png)

# react-native-facebook-keyframes

A React Native wrapper for the [Facebook Keyframes library](https://github.com/facebookincubator/Keyframes). 

Just for *iOS* for now, *Android* is still WIP.

## Getting started

`$ npm install react-native-facebook-keyframes --save`

### Mostly automatic installation

`$ react-native link react-native-facebook-keyframes`

(*) you must follow the ***Keyframes dependency configuration*** section below!

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-facebook-keyframes` and add `RNFacebookKeyframes.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNFacebookKeyframes.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

### Keyframes dependency configuration

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-facebook-keyframes/deps/Keyframes/ios/keyframes/` and add `keyframes.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `keyframes.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

## Usage
```JSX
import RNFacebookKeyframes from 'react-native-facebook-keyframes'

<KeyframesView 
  styles={{ width: 100, height: 100 }} // View styles
  seek={1.0}                           // Seek to a given progress in range [0, 1]  
  src={require('./keyframe.json')}     // Animation file
/>
```

## Running the sample

1. Go to the `demo/KeyframesDemo` folder
    - run `npm install`
    - run `react-native run-ios`

If it doesn't work, open and run the project in xCode.  

## TODOS
  
- [ ] Add support for Android
  
---

**MIT Licensed**