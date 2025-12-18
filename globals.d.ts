declare function log(message: any): void;
declare function tick(dt: number): void;

declare class Vector3 {
    x: number;
    y: number;
    z: number;
}

declare class Vector2 {
    x: number;
    y: number;
}

declare const LocalPlayer: PlayerBindings;

declare class PlayerBindings {
    readonly CurrentVelocityAverage: Vector3;
    readonly Position: Vector3;
    readonly Name: string;
    Material: number;
}

declare const PlayerSettings: Settings;

declare class Settings {
    VibrateIntensity: number;
    MaxJumpSpeed: number;
    JumpMultiplier: number;
}

declare const LeftController: LControllerBindings;
declare const RightController: RControllerBindings;

declare class RControllerBindings {
    readonly AButtonPressed: boolean;
    readonly BButtonPressed: boolean;
    readonly Thumbstick2DAxis: Vector2;
    readonly ThumbstickPressed: boolean;
    readonly TriggerValue: number;
    readonly GripValue: number;
}

declare class LControllerBindings {
    readonly XButtonPressed: boolean;
    readonly YButtonPressed: boolean;
    readonly Thumbstick2DAxis: Vector2;
    readonly ThumbstickPressed: boolean;
    readonly TriggerValue: number;
    readonly GripValue: number;
}