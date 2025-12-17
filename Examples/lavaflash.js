let time = Date.now()

function tick(dt)
{
    if (Date.now() - time >= 1000)
    {
        time = Date.now()
        if (LocalPlayer.Material == 1)
        {
            LocalPlayer.Material = 0
        }
        else
        {
            LocalPlayer.Material = 1
        }
    }
}