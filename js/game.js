// NOTE - You must have a level with the name "start".  This is used as the first level in the game.
var game = {
    music: "opening.mp3",
    background_image: "loading.gif",
    levels: {
        start: {
            choices: [
                {
                    text:"Start",
                    nextLevel:"crossroads"
                },
            ]
        },
         crossroads: {
            background_image: "intro-bg.jpg",
            music: "ambient.mp3",
            message: "You are leaving your house to scavenge for food",
            choices: [
                {
                    text:"Go back inside",
                    nextLevel:"home"
                },

                {
                    text: "Go forward",
                    nextLevel: "Bodaga",
                },
                {
                       text: "Turn the Corner",
                    nextLevel: "Encounter",
                }
            ]
        },

        home: {
            background_image: "lightning.gif",
            music: "storm.mp3",
            message: "You died of starvation",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "crossroads",
                },
            ]
        },
        
        Encounter: {
            background_image: "zombie.gif",
            music: "intense.mp3",
            message: "You encounter a zombie!",
            choices: [
                {
                    message:"Fight it",
                    text: "Fight",
                    nextLevel: "Fight"
                },
                {
                    text: "Run",
                    nextLevel: "Bodaga",
                }
                
            ]
        },
          Bodaga:{
            background_image: "bodega.jpg",
            music: "ambient.mp3",
            message: "You've found a bodega",
            choices: [
                {
                    text: "Explore",
                    nextLevel: "Store",
                },
                {
                    text: "Return Home",
                    nextLevel: "home",
                }
             ]
        },
           Fight:{
            background_image: "gameover.gif",
            music: "A_Fallen_Cowboy.mp3",
            message: "You were brutalized then killed",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "crossroads",
                },
             ]
        },
        Store:{
            background_image: "shopkeeper.jpg",
            music: "intense.mp3",
            message: "You wander inside the store and encounter an angry shop owner. He tells you to leave!",
            choices: [
                {
                    text: "Fight Him",
                    nextLevel: "Fight",
                },
                {
                    text:"Leave",
                    nextLevel:"home",
                },
                {
                    text:"Beg Him to Spare You",
                    nextLevel:"win"
                }
             ]
        },
        win:{
            background_image: "theend.gif",
            music: "A_Quiet_Thought.mp3",
            message: "He took pity on you and gave you some bread. You return home, unscathed",
            choices: [
                {
                    text: "Next Day",
                    nextLevel: "crossroads",
                },
             ]
        },

    }
};
