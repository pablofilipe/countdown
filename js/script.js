let countDownDate = new Date('Nov 8, 2022 18:00:00').getTime()
let msg = document.getElementById('msg')

let x = setInterval( () => {
    let now = new Date().getTime()
    let distance = countDownDate - now

    let days = Math.floor( distance / (1000 * 60 * 60 * 24) )
    let hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) )
    let minutes = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60) )
    let seconds = Math.floor( (distance % (1000 * 60)) / 1000 )

    if ( distance > 0) {
        if ( days > 0 ) {
            document.getElementById('days').innerHTML = `${days}d`
        }

        if ( hours > 0 ) {
            document.getElementById('hours').innerHTML = `${hours}h`
        }

        if ( minutes > 0 ) {
            document.getElementById('minutes').innerHTML = `${minutes}m`
        }

        if ( seconds >= 0 ) {
            document.getElementById('seconds').innerHTML = `${seconds}s`
        }
    }

    if ( distance < 0 ) {
        clearInterval( x )

        if ( msg.parentNode ) {
            msg.parentNode.removeChild(msg)
        }

        document.getElementById('demo').innerHTML = `EXPIRED!`
    }
}, 1000)