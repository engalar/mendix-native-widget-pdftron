# mendix 前端组件开发模板库

重命名
[diff](https://github.com/engalar/mendix-native-widget-upload/compare/aec86ca62b5beba65e5cc20cee54bffde98a668c...98d0e4ba09399c7276b90179001f6b129bce27a5)

# 创建脚手架

```cmd
curl https://gitee.com/engalar/mendix-pluggable-widget-template/raw/master/script/new_pw.bat -o temp && type temp | more /p > new_pw.bat && del /f temp && call new_pw.bat
```

# 试用

```cmd
curl https://gitee.com/engalar/mendix-pluggable-widget-template/raw/master/script/try_pw.bat -o temp2 && type temp2 | more /p > try_pw.bat && del /f temp2 && call try_pw.bat
```

# FAQ

-   file name too long

```cmd
git config --global core.longpaths true
set JAVA_HOME=C:\Program Files\AdoptOpenJDK\jdk-8.0.292.10-hotspot
"C:\Android\android-sdk\tools\bin\sdkmanager.bat" --licenses
%LocalAppData%/Android/Sdk/platform-tools/adb devices
```

# 准备mendix测试项目
```cmd
npm run testProject
npm run openTestProject
```

# 准备移动开发环境
```cmd
npm run nativeTemplate
npm run bundle
npm run copyBundle

cd tests\native-template
npm i react-native-amap3d@^3.0.7
npx react-native link react-native-amap3d
npx react-native run-android --variant=DevDebug
```

# 编译mendix app
```cmd
 C://\"Program Files\"/Mendix/9.6.12.46216/modeler/mxbuild.exe --java-home="%JAVA_HOME%"" --java-exe-path="%JAVA_HOME%/bin/java.exe" --target=deploy --native-packager --loose-version-check ./ReactNativeClassDemo.mpr
```

# 虚拟机
- android热启动
```cmd
start %LocalAppData%/Android/Sdk/emulator/emulator.exe -netdelay none -netspeed full -studio-params tests/emu.tmp -avd Pixel_2_API_30
```
- android冷启动
```cmd
start %LocalAppData%/Android/Sdk/emulator/emulator.exe -netdelay none -netspeed full -no-snapshot-load -studio-params tests/emu.tmp -avd Pixel_2_API_30
```
