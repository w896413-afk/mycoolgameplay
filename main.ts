controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 8 8 8 8 8 8 8 . . . . . . . 
        . 8 8 8 8 8 8 9 9 8 . . . . . . 
        . 8 8 8 8 8 8 9 9 9 8 . . . . . 
        . 8 8 8 8 8 8 9 9 9 9 8 . . . . 
        . 8 8 8 8 8 8 9 9 9 8 . . . . . 
        . 8 8 8 8 8 8 9 9 8 . . . . . . 
        . . 8 8 8 8 8 8 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 . . . . . . . 
        . 2 2 2 2 2 2 9 9 2 . . . . . . 
        . 2 2 2 2 2 2 9 9 9 2 . . . . . 
        . 2 2 2 2 2 2 9 9 9 9 2 . . . . 
        . 2 2 2 2 2 2 9 9 9 2 . . . . . 
        . 2 2 2 2 2 2 9 9 2 . . . . . . 
        . . 2 2 2 2 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
})
