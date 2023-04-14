controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fire = sprites.create(assets.image`explosion1`, SpriteKind.Projectile)
    fire.setPosition(gun.x, gun.y)
    fire.setVelocity(0, -50)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    gun.x = gun.x - 10
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    fire = sprites.create(assets.image`explosion1`, SpriteKind.Projectile)
    fire.setPosition(gun.x, gun.y)
    fire.setVelocity(0, -50)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    gun.x = gun.x + 10
})
// info.setScore(info.score() + 1)
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 200)
    sprites.destroy(sprite, effects.fire, 100)
    info.changeScoreBy(1)
})
let fly: Sprite = null
let fire: Sprite = null
let gun: Sprite = null
gun = sprites.create(assets.image`spaceBlueShip`, SpriteKind.Player)
gun.setPosition(73, 105)
gun.x = gun.x - 10
info.setScore(0)
game.onUpdateInterval(1000, function () {
    fly = sprites.create(assets.image`plane4`, SpriteKind.Enemy)
    fly.setPosition(randint(140, 130), randint(15, 30))
    fly.setVelocity(randint(-50, -80), randint(-10, 10))
})
