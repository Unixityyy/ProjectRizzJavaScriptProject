# Project Rizz JavaScript Runtime
## Getting Started
Download this repository as a zip, and open it in something like [Visual Studio Code](https://vscode.dev).<br>Create a file called main.js, and write your JavaScript code in there.
## Custom Functions
- **(The globals.d.ts is required for Visual Studio Code to provide IntelliSense for these functions.)**
---
### `log()`

Since the JavaScript Engine runs on [Jint](https://www.nuget.org/packages/Jint), objects like `console`, `document`, `window`, etc, don't exist.<br>
Instead for logging, you will use a function called `log()`, that calls Unity's `Debug.Log()`.<br>
#### Example Code:
```js
log("This is an example.");
```
And it will show up in Android Logcat as:
```
JS: This is an example.
```
---
### `tick(dt: number)`

This is inspired by the [Gorilla Tag Luau Engine](https://github.com/Another-Axiom/GT_CustomMapExample/tree/main/Luau), but unlike the Luau engine, it isn't required.<br>
It is run every game tick, and passes dt (deltaTime) as a paramater.

#### Example Code:
```js
function tick(dt)
{
    log(`game has ticked. deltaTime ${dt}`)
}
```

---
The next ones aren't really functions, but are still as useful.
### `PlayerBindings`
The player class has 6 properties:<br>
#### `VibrateIntensity: number`<br>The vibration intensity when the player touches the ground.<br>

#### `MaxJumpSpeed: number`<br>The `maxJumpSpeed` of the player. See [`GorillaLocomotion`](https://github.com/Another-Axiom/GorillaLocomotion) for more details.

#### `JumpMultiplier: number`<br>The `jumpMultiplier` of the player. See [`GorillaLocomotion`](https://github.com/Another-Axiom/GorillaLocomotion) for more details.

#### `readonly CurrentVelocityAverage: Vector3`<br>The current average velocity of the player.

#### `Position: Vector3`<br>The current position of the player.

#### `Material: number`<br>The current material of the player.
See the bottom for a list of materials.

---
### Please use the `LocalPlayer` class instead of the `PlayerBindings` class, as `LocalPlayer` is your own player.
---
###  `Vector3`
The Vector3 class has 3 properties, and represents a Unity Vector3 object:
#### `x: number`
#### `y: number`
#### `z: number`

---

## Putting the script in-game
By default, Project Rizz will automatically load the file at `Android/data/JS/main.js`, so use SideQuest or `adb push` to upload your file to your quest.

---
Material list:
```
0: Default
1: Lava
```
<s>Good thing to note, the material will be tinted based on the user's color, I will try to make it so that if it isn't default, the material isn't tinted.</s> I have solved this problem before even releasing the update, so it's now normal.
