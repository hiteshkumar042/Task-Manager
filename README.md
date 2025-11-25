# Task Manager


## Angular Web App → Android APK (Capacitor)
Prerequisites

Node.js

Angular CLI

Android Studio with Android SDK

Capacitor CLI (npm install @capacitor/cli @capacitor/core)

Java JDK 17

1. Initialize Capacitor
cd <angular-project>
npx cap init


capacitor.config.json

{
  "appId": "com.example.todoapp",
  "appName": "TodoApp",
  "webDir": "dist/todoapp/browser"
}

2. Build Angular App
ng build --configuration production


Output: dist/<project-name>/browser

Verify index.html exists.

3. Add Android Platform
npx cap add android


Creates android/ folder.

4. Copy Angular Build to Android
npx cap copy


Copies files to android/app/src/main/assets/public/.

5. Configure Android SDK

Create or edit android/local.properties:

sdk.dir=C:\\Users\\<username>\\AppData\\Local\\Android\\Sdk

6. Build APK
cd android
.\gradlew.bat assembleDebug


APK location: android/app/build/outputs/apk/debug/app-debug.apk

7. Add Custom App Icon

Prepare a 1024×1024 PNG icon.

Use Android Asset Studio
 → Launcher Icon → Adaptive → Download ZIP.

Replace files in android/app/src/main/res/:

ic_launcher.png
ic_launcher_round.png
ic_launcher_foreground.png
ic_launcher_background.png


Rebuild APK.
