let countDownDate = new Date('Nov 8, 2022 18:00:00').getTime()
//let countDownDate = new Date('Oct 19, 2022 16:34:00').getTime()

function start() {
    treatDisplay( 'days' )
    treatDisplay( 'hours' )
    treatDisplay( 'minutes' )
    treatDisplay( 'seconds' )
    time()
}

function time() {
    let x = setInterval( () => {
        let now = new Date().getTime()
        let distance = countDownDate - now

        let days = Math.floor( distance / (1000 * 60 * 60 * 24) )
        let hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) )
        let minutes = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60) )
        let seconds = Math.floor( (distance % (1000 * 60)) / 1000 )

        if ( distance > 0 ) {
            if ( days > 0 ) {
                document.getElementById('days').innerHTML = `${days}d`
            } else {
                document.getElementById('days').classList.add('hidden')
            }

            if ( hours > 0 ) {
                document.getElementById('hours').innerHTML = `${hours}h`
            } else {
                document.getElementById('hours').classList.add('hidden')
            }

            if ( minutes > 0 ) {
                document.getElementById('minutes').innerHTML = `${minutes}m`
            } else {
                document.getElementById('minutes').classList.add('hidden')
            }

            if ( seconds >= 0 ) {
                document.getElementById('seconds').innerHTML = `${seconds}s`
            } else {
                document.getElementById('seconds').classList.add('hidden')
            }
        }

        if ( ( days === 0 && hours === 0 && minutes === 0 ) && (seconds <= 59) ) {
            document.getElementById('seconds').classList.add('secondColor')
        }

        if ( distance < 0 ) {
            finish( x )
        }
    }, 1000)
}

function treatDisplay( key ) {
    let demo = document.getElementById('demo')
    let elementInfo = document.createElement('span')
    let msg = document.getElementsByClassName('class_paragraph')

    if ( !msg ) {
        let paragraph = document.createElement('p')
        paragraph.id = 'id-paragraph'
        paragraph.classList.add('paragraph')
        paragraph.innerText = "Restam"
        demo.appendChild( paragraph )
    }

    elementInfo.id = `${key}`
    if ( key !== 'days') elementInfo.classList.add('spacing')
    demo.appendChild( elementInfo )
}

function finish( x ) {
    clearInterval( x )

    let msg = document.getElementsByClassName('class_paragraph')

    if ( msg.parentNode ) {
        msg.parentNode.removeChild( msg )
    }

    document.getElementById('demo').innerHTML = `EXPIRED!`
}

start()
