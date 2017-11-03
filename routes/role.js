var express = require('express');
var router = express.Router();

router.get('/planet/:birth', function(req, res, next) { 
    const planets = ['Alderaan', 'Hoth', 'Tatooine', 'Yavin 4', 'Naboo', 'Bespin', 'Jedah', 'Jakku', 'Felucia',
                    'Cato Neimoidia', 'Corellia', 'Kamino', 'Scarif', 'Mygeeto', 'Mandalor']

    const times = ['The Old Republic', 'The Clone Wars', 'The Reign of the Empire', 'The Days of the First Order', 'The Ancient Times']
    
    const obj = JSON.parse(req.params.birth)
    const day = parseInt(obj.day) % 15
    const month = parseInt(obj.month) % 5


    const ret = planets[day]
    const era = times[month]
    const toSend = {
        planet: ret,
        time: era
    }
    res.send(toSend)
});

const assignRole = (one, two) => {
    if(one === 0 && two === 0) {
        return {
                type: 'Sith',
                des: 'The powerful dark force weilders often pose a major threat to the galaxy, or are already in command of it',
                url: 'https://ih1.redbubble.net/image.83448332.1330/flat,800x800,070,f.u6.jpg'  //good       
              }
    }
    else if(one === 0 && two === 1) {
        return {
            type: 'Imperial Officer',
            des: 'The commanders of the feared Storm Troopers are often not bad people, but believe that the casuse they are fighting for is just and a viable option to bring peace to the galaxy.',
            url: 'https://vignette.wikia.nocookie.net/starwars/images/b/b3/Shann_Childsen.png/revision/latest?cb=20130318060337' //good
        }
    }
    else if(one === 0 && two === 2) {
        return {
                type: 'Storm Trooper',
                des: 'The feared army of the Empire and First Order, feircely loyal and obidient to a fault',
                url: 'https://cdn.thisiswhyimbroke.com/images/stormtrooper-helmet-replica-640x533.jpg' //good
                }
    }
    else if(one === 0 && two === 3) {
        return {
                type: 'Bounty Hunter',
                des: 'Hired guns, often ruthless in their pursuit of their targets and money',
                url: 'https://fsmedia.imgix.net/db/d6/0b/96/58a4/4a7c/9d4e/49ffbc5b8238/boba-fett-boomjpg.jpeg?auto=format%2Ccompress&w=700s'  //good  
            }
    }
    else if(one === 1 && two === 0) {
        return {type: 'Star Fighter',
                des: 'Adrenalin junkies and fearless fighters, Star Fighters often remind people of Tom Cruise in Top Gun',
                url: 'https://vignette.wikia.nocookie.net/starwars/images/a/ab/SullustanPilot-SWGTCGSoC.jpg/revision/latest?cb=20111229034616' // good
        }
    }
    else if(one === 1 && two === 1) {
        return {
                type: 'Jedi', 
                des: 'The self proclaimed protectors of peace, Jedi seek to balance themselves and promote peace in the galaxy',
                url: 'https://qph.ec.quoracdn.net/main-qimg-d6236d8185783befb36e0c6d1823dcf7' // good
            }
    }
    else if(one === 1 && two === 2) {
        return {type: 'Rebel',
                des: 'These people are sick of the Empire and their tyrincal rule, and are more than willing to risk their lives for the cause',
                url: 'https://www.celebsclothing.com/product_images/z/755/Star_Wars_Rogue_One_Jyn_Erso_Scarf__31383.jpg'  //good
            }
    }
    else if(one === 1 && two === 3) {
        return {type: 'Sumggler',
                des: 'Sumgglers could care less who does what, as long as they get their pay. And they always shoot first',
                url: 'https://www.themarysue.com/wp-content/uploads/2017/07/han-solo-return-of-the-jedi_612x380.jpg'}  //good
    }
    else if(one === 2 && two === 0) {
        return {type:'Crime Boss',
                des: 'They might not hold any legal power, but they do rule their respective corners of the galaxy. Not even the Empire dares mess with them',
                url: 'https://i.pinimg.com/736x/bc/84/67/bc8467e20ccb50fdc846f8f9eacd4965--star-wars-characters-freedom-fighters.jpg'} //good
    }
    else if(one === 2 && two === 1) {
        return {type: 'Galatic Senetor',
                des: 'Diplomats that try to bring peace to the galaxy through politics. Often get a bad rap, but are honestly doing their best to change the course of history',
                url: 'http://theforceawakenstoys.com/wp-content/uploads/2017/03/Review_BailOrganaSWS_stillA.jpg'} //good
    }
    else if(one === 2 && two === 2) {
        return {type: 'Pilot',
                des: 'Not as flashy as the fly-boys, but still operate as an essintial part of trad in the galaxy. Calm under pressure and valuable team players',
                url:'http://ksassets.timeincuk.net/wp/uploads/sites/55/2016/12/Riz-Ahmed-Rogue-One.png'} //good
    }
    else if(one === 2 && two === 3) {
        return {type: 'Spy',
                des: 'The most subtle and street smart of people, spies are constantly on the edge of death, but love to walk that line',
                url: 'http://vignette2.wikia.nocookie.net/starwars/images/1/11/ImpIntelAgent-Timeline4.jpg/revision/latest?cb=20090927235412'} //good
    }
    else if(one === 4 && two === 0) {
        return {type: 'Force User', 
                des: 'Not trained in either the ways of the Jedi or path of the sith, force users are often keenly aware of things that others miss. Sometimes they are not even aware of their powers',
                url: 'http://i.imgur.com/Oxw7Got.jpg?1'}  //good
    }
    else if(one === 4 && two === 1) {
        return {type:'Grey Jedi',
                des:'Grey Jedi stive to keep the balance of the force. They are not beholdent to any entity but the force itself and often switch sides in conflicts',
                url: 'https://images-cdn.9gag.com/photo/aGVAWMG_700b.jpg'}  //good
    }
    else if(one === 4 && two === 2) {
        return {type: 'Special Forces', 
                des: 'The people when the Empire calls one with the stuff hits the fan. Ruthless and efficent, these troops are often the most terrifying sight thing outside a Sith',
                url:'https://www.pcgamesn.com/sites/default/files/Battlefront%202%20Beta.jpg'} //good
    }
    else if(one === 4 && two === 3) {
        return {type: 'Scavenger',
                des: 'Often want to be left alone, and finding their next meal. When cornered or in a pinch they can be extremly intuitive and dangerous',
                url: 'https://cdn.flickeringmyth.com/wp-content/uploads/2015/06/Rey.jpg'} //good
    }
}

router.get('/class/:array', function(req, res, next) {
    const array = JSON.parse(req.params.array)
    const power = parseInt(array[0]) + parseInt(array[4])
    const bold = parseInt(array[1]) + parseInt(array[5])
    const smart = parseInt(array[2]) + parseInt(array[6])
    const balance = parseInt(array[3]) + parseInt(array[7])
    const emo = parseInt(array[8]) + parseInt(array[12])
    const peace = parseInt(array[9]) + parseInt(array[13])
    const team = parseInt(array[10]) + parseInt(array[14])
    const furtive = parseInt(array[11]) + parseInt(array[15])

    let one
    let two
    
    if(power >= bold && power >= smart && power >= balance) {
        one = 0
    }
    else if (bold >= power && bold >= smart && bold >= balance) {
        one = 1
    }
    else if (smart >= power && smart >= bold && smart >= balance) {
        one = 2
    }
    else {
        one = 3
    }
    if(emo >= peace && emo >= team && emo >= furtive) {
        two = 0
    }
    else if(peace >= emo && peace >= team && peace >= furtive) {
        two = 1
    }
    else if (team >= emo && team >= peace && team >= furtive )
    {
        two = 2
    }
    else {
        two = 3
    }
    const toSend = assignRole(one, two)
    res.send(toSend)
})

module.exports = router;