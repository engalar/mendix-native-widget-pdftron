@echo off 
chcp 65001
cls


set EG_MPR_PATH="Fitness Tracker.mpr"
@REM 9.6.0.27784 9.7.0.29648
set EG_MXBUILD_VER=9.7.0.29648

set EG_MXBUILD_PATH="C://Program Files/Mendix/%EG_MXBUILD_VER%/modeler/mxbuild.exe"


if exist native-template (
  echo 克隆native-template[cache]
) else (
  git clone https://github.com/mendix/native-template.git --depth=1 --branch release/6.2.0 ./native-template && rd /s /q .\\tests\\native-template\\.git
  echo 克隆native-template[done]
)

if exist deployment\native\bundle (
  echo build bundle[cache]
  @REM rd /s /q deployment\native\bundle
) else (
  %EG_MXBUILD_PATH% --java-home="%JAVA_HOME%" --java-exe-path="%JAVA_HOME%/bin/java.exe" --target=deploy --native-packager --loose-version-check %EG_MPR_PATH%
  echo build bundle[done]
)

if exist native-template\android\app\src\main\assets\index.android.bundle (
  echo 拷贝bundle[cache]
  @REM del native-template\android\app\src\main\assets\index.android.bundle
) else (
  xcopy deployment\native\bundle\android native-template\android\app\src\main /Y /E /Q
  echo 拷贝bundle[done]
)