let timer = 0;

function tick(dt) {
    timer += dt;

    if (timer >= 1.0) {
        timer = 0;
        
        if (LocalPlayer.Material === 1) {
            LocalPlayer.Material = 0;
        } else {
            LocalPlayer.Material = 1;
        }
    }
}