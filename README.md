
![Keyframes](https://github.com/facebookincubator/Keyframes/raw/master/docs/images/doc-logo.png)

# react-native-facebook-keyframes

A React Native wrapper for the [Facebook Keyframes library](https://github.com/facebookincubator/Keyframes). 

## Getting started

```bash
npm install react-native-facebook-keyframes --save

react-native link react-native-facebook-keyframes
```
### Steps for iOS only 

You must install `Facebook Keyframes` dependency using CocoaPods:

1. Install `cocoapods` in case you don't have already installed: 

    ```bash
    sudo gem install cocoapods
    ```
2. Go to `[your project's name]` ios folder (in this case `MyProject`):

    ```bash
    cd MyProject/ios  
    ```
3. Create a new `Podfile` file with the following contents:

    ```ruby
    target '{MyProject}' do
      pod 'keyframes', :git => 'https://github.com/EddyVerbruggen/Keyframes.git', :commit => 'cb645d8722c2e9327c15dd973a2121644288b1c0'
    end
    ``` 
3. Instal cocoapods dependencies and return to the project folder:

    ```bash
    pod install
    cd ../
    ```

## Usage

1. Create a new keyframes json file (you can find a sample [here](https://github.com/underscopeio/react-native-facebook-keyframes/blob/master/demo/KeyframesDemo/src/keyframes-logo.json)) 
2. Include the library in your js file:

    ```JSX
    import KeyframesView from 'react-native-facebook-keyframes'
    ```

3. Use the component:

    ```JSX
    <KeyframesView 
      style={{ width: 100, height: 100 }}    // View styles
      seek={1.0}                             // Seek to a given progress in range [0, 1]  
      src={require('./keyframes-logo.json')} // Animation file
    />
    ```

## Running the demo project included in this project

1. Go to the `demo/KeyframesDemo` folder:

    ```bash
    cd demo/KeyframesDemo
    ```
    
2. Install pod dependencies if running for iOS:

    ```bash
    cd ios
    pod install
    cd ../
    ```
    
3. Run the project:

    ```bash 
    npm install
    react-native run-ios
    ```
## Demo

![](http://i.giphy.com/3o7TKHhhyQo2w2Naw0.gif) ![](http://i.giphy.com/l0MYJJ0Cy6OMMnXCo.gif)

---
**MIT Licensed**
