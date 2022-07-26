//id:870223908471709747
//link:https://discord.com/api/oauth2/authorize?client_id=870223908471709747&scope=bot&permissions=1

//required the discord.js files
const Discord = require("discord.js");

//create a new application
var client = new Discord.Client();

//getting token from token.json file
const{ token }= require("./token.json");

//status ready event
client.on("ready", () =>{
    console.log("I am online: " + client.user.tag);
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "Using !help",  //The message shown
            type: "STREAMING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });

 //Distube
 const distube = require('distube')
client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))

//message event
client.on("message",message => {

    var message_LC = message.content.toLowerCase();
    var decoded_message = message_LC.split(" ")
    
    //hello
    if(message_LC == "=hello")
    {
        message.reply("Hello to you too!");
    }

    //help
    if(message_LC == "=help")
    {
        message.reply("\nHi, My name is Botiful.\nHere is a list of all my commands:\n"+
        "=hello :For greeting you\n" +
        "=calc :For your calculation needs\n" +
        "=flip :Flip a coin\n" +
        "=random :Random number generator\n"+
        "=dice :Roll a die\n"+
        "=date :Current Date and Time\n"+
        "=author :Info about the developer\n");
    }

    //calculator
    if(message_LC.includes("=calc") && message.author.bot == false)
    {
        var first_number = Number(decoded_message[1]);
        var second_number = Number(decoded_message[3]);



        if(message_LC == "=calc")
        message.reply("I support \nadd(+) \nsubtract(-) \nmultiply(*) \ndivide(/)\n"+
        "For example, =calc 5 + 7\n");
        else
        {
            switch(decoded_message[2])
            {
                case "+":
                message.reply(first_number + " + " + second_number + " = " + (first_number + second_number));
                break;
                case "-":
                message.reply(first_number + " - " + second_number + " = " + (first_number - second_number));
                break;
                case "*":
                message.reply(first_number + " * " + second_number + " = " + (first_number * second_number));
                break;
                case "/":
                message.reply(first_number + " / " + second_number + " = " + (first_number / second_number));
                break;
                default:
                message.reply("Wrong Input!");
            }
        }
    }

    //flip a coin
    if(message_LC == "=flip")
    {
        var coin = (Math.floor(Math.random() * 2) );
        if(coin == 0)
        {
            if((Math.floor(Math.random() * 2) ))
            {
                message.reply("I flipped Heads!");
            }
            else
            {
                message.reply("Heads, it is!");
            }
        }
        else
        {
            if((Math.floor(Math.random() * 2) ))
            {
                message.reply("I flipped Tails!");
            }
            else
            {
                message.reply("Tails, it is!");
            }
        }
    }

    //random number generator
    if(message_LC.includes("=random") && message.author.bot == false)
    {
        var first_number = Number(decoded_message[1]);
        var second_number = Number(decoded_message[2]);



        if(message_LC == "=random")
        {
        message.reply("Select two numbers between which you want a random number.\n"+
        "For example, =random 20 30\n");
        }
        else
        {
        var random_number = Math.floor((Math.random() * (second_number - first_number) + first_number))
        message.reply("The random number between "+ first_number + " and " + second_number + " is " +random_number + ".");
        }
    }

    //dice
    if(message_LC == "=dice")
    {
        var dice = (Math.floor(Math.random() * 5)+ 1);
        message.reply("The number on the die is " + dice + ".");
    }

    //date
    if(message_LC == "=date")
    {
        var datetime = new Date();
        message.reply("Date & Time: "+datetime);
    }

    //rps
    if(message_LC.includes("=rps") && message.author.bot == false)
    {
        var rps = decoded_message[1];
        var num = (Math.floor(Math.random() * 2)+ 1);
        var actual;
        if(message_LC == "=rps")
        {
        message.reply("Select rock,paper or scissors.\n"+
        "For example, =random paper\n");
        }
        else
        {
            if(num == 1)
            {
                actual = "rock";
            }
            else if(num == 2)
            {
                actual = "paper";
            }
            else
            {
                actual = "scissors";
            }
            if(rps == "rock"||rps == "paper" || rps == "scissors")
            {
                if(rps == actual)
                {
                    message.reply("I pick "+actual+"!\nIt's a tie!");
                }
                else
                {
                    if(actual == "paper")
                    {
                        message.reply("I pick "+actual+"!\nI win this round!");
                    }
                    else if(actual == "scissors")
                    {
                        message.reply("I pick "+actual+"!\nI win this round!")
                    }
                }
            }
        }
    }

    //author
    if(message_LC == "=author")
    {
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#03FC35')
	.setTitle('MathsFam')
	.setURL('https://www.youtube.com/channel/UCekerpkbwU05MWrpVz73XiA/featured')
	.setAuthor('Akshit Mehrotra', 'https://i.imgur.com/14p66A2.jpg')
	.setDescription('First Bot :-Botiful. Check out my other ventures by clicking the link above.')
	
	message.reply(exampleEmbed);
	
    }
     

    

    
    
});

//login the bot
client.login(token);
//id:870223908471709747
//link:https://discord.com/api/oauth2/authorize?client_id=870223908471709747&scope=bot&permissions=1
const keepAlive = require("./server");

//required the discord.js files
const Discord = require("discord.js");

//create a new application
var client = new Discord.Client();

//getting token from token.json file
const{ token }= require("./token.json");

//status ready event
client.on("ready", () =>{
    console.log("I am online: " + client.user.tag);
    
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "Using =help",  //The message shown
            type: "PLAYING:" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
    client.user.setActivity('=help for help', { type: "PLAYING" }).catch(console.error)
 });

 //status


//message event
client.on("message",message => {

    var message_LC = message.content.toLowerCase();
    var decoded_message = message_LC.split(" ")
    
    //hello
    if(message_LC == "=hello")
    {
        message.reply("Hello to you too!");
    }
    //secret
    if(message_LC == "=mansha")
    {
        message.reply("Mansha is great!");
    }

    if(message_LC == "=kanishk")
    {
        message.reply("Do you mean Kinchu!");
    }

    if(message_LC == "=ansh")
    {
        message.reply("Valo mei Operator mat le, chu!");
    }

    if(message_LC == "=prabhmilan")
    {
        message.reply("Om sweets ka paneer lababdaar");
    }

    if(message_LC == "=karan")
    {
        message.reply("Canadian Deshdrohi!");
    }

    //help
    if(message_LC == "=help")
    {
        message.reply("\nHi, My name is Botiful.\nHere is a list of all my commands:\n"+
        "=hello :For greeting you\n" +
        "=calc :For your calculation needs\n" +
        "=flip :Flip a coin\n" +
        "=random :Random number generator\n"+
        "=dice :Roll a die\n"+
        "=date :Current Date and Time\n"+
        "=rps :Rock, Paper & Scissors\n"+
        "=quote :Inspiring Quotes\n"+
        "=author :Info about the developer\n");
    }

    //calculator
    if(message_LC.includes("=calc") && message.author.bot == false)
    {
        var first_number = Number(decoded_message[1]);
        var second_number = Number(decoded_message[3]);



        if(message_LC == "=calc")
        message.reply("I support \nadd(+) \nsubtract(-) \nmultiply(*) \ndivide(/)\n"+
        "For example, =calc 5 + 7\n");
        else
        {
            switch(decoded_message[2])
            {
                case "+":
                message.reply(first_number + " + " + second_number + " = " + (first_number + second_number));
                break;
                case "-":
                message.reply(first_number + " - " + second_number + " = " + (first_number - second_number));
                break;
                case "*":
                message.reply(first_number + " * " + second_number + " = " + (first_number * second_number));
                break;
                case "/":
                message.reply(first_number + " / " + second_number + " = " + (first_number / second_number));
                break;
                default:
                message.reply("Wrong Input!");
            }
        }
    }

    //flip a coin
    if(message_LC == "=flip")
    {
        var coin = (Math.floor(Math.random() * 2) );
        if(coin == 0)
        {
            if((Math.floor(Math.random() * 2) ))
            {
                message.reply("I flipped Heads!");
            }
            else
            {
                message.reply("Heads, it is!");
            }
        }
        else
        {
            if((Math.floor(Math.random() * 2) ))
            {
                message.reply("I flipped Tails!");
            }
            else
            {
                message.reply("Tails, it is!");
            }
        }
    }

    //random number generator
    if(message_LC.includes("=random") && message.author.bot == false)
    {
        var first_number = Number(decoded_message[1]);
        var second_number = Number(decoded_message[2]);



        if(message_LC == "=random")
        {
        message.reply("Select two numbers between which you want a random number.\n"+
        "For example, =random 20 30\n");
        }
        else
        {
        var random_number = Math.floor((Math.random() * (second_number - first_number) + first_number))
        message.reply("The random number between "+ first_number + " and " + second_number + " is " +random_number + ".");
        }
    }

    //dice
    if(message_LC == "=dice")
    {
        var dice = (Math.floor(Math.random() * 5)+ 1);
        message.reply("The number on the die is " + dice + ".");
    }

    //date
    if(message_LC == "=date")
    {
        var datetime = new Date();
        message.reply("Date & Time: "+datetime);
    }
    
    //rps
    if(message_LC.includes("=rps") && message.author.bot == false)
    {
        var rps = decoded_message[1];
        var num = (Math.floor(Math.random() * 2)+ 1);
        var actual;
        if(message_LC == "=rps")
        {
        message.reply("Select rock,paper or scissors.\n"+
        "For example, =rps paper\n");
        }
        else
        {
            if(num == 1)
            {
                actual = "rock";
            }
            else if(num == 2)
            {
                actual = "paper";
            }
            else
            {
                actual = "scissors";
            }
            if(rps == "rock")
            {
                if(rps == actual)
                {
                    message.reply("I pick "+actual+"!\nIt's a tie!");
                }
                else
                {
                    if(actual == "paper")
                    {
                        message.reply("I pick "+actual+"!\nYou lost this round!");
                    }
                    else if(actual == "scissors")
                    {
                        message.reply("I pick "+actual+"!\nYou won this round!")
                    }
                }
            }
            else if(rps == "paper")
            {
                if(rps == actual)
                {
                    message.reply("I pick "+actual+"!\nIt's a tie!");
                }
                else
                {
                    if(actual == "scissors")
                    {
                        message.reply("I pick "+actual+"!\nYou lost this round!");
                    }
                    else if(actual == "rock")
                    {
                        message.reply("I pick "+actual+"!\nYou won this round!")
                    }
                }
            }
            else if(rps == "scissors")
            {
                if(rps == actual)
                {
                    message.reply("I pick "+actual+"!\nIt's a tie!");
                }
                else
                {
                    if(actual == "rock")
                    {
                        message.reply("I pick "+actual+"!\nYou lost this round!");
                    }
                    else if(actual == "paper")
                    {
                        message.reply("I pick "+actual+"!\nYou won this round!")
                    }
                }
            }
        }
    }
    
    //quote
    if(message_LC == "=quote")
    {
      var num = (Math.floor(Math.random() * 10)+ 1);
      switch(num)
      {
        case 1:message.reply("The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela");
               break;
        case 2:message.reply("The way to get started is to quit talking and begin doing. -Walt Disney");
               break;
        case 3:message.reply("If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt");
               break;
        case 4:message.reply("It is during our darkest moments that we must focus to see the light. -Aristotle");
               break;
        case 5:message.reply("Never let the fear of striking out keep you from playing the game. -Babe Ruth");
               break;
        case 6:message.reply("In three words I can sum up everything I've learned about life: it goes on. -Robert Frost");
               break;
        case 7:message.reply("I find that the harder I work, the more luck I seem to have. -Thomas Jefferson");
               break;
        case 8:message.reply("The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. -Barack Obama");
               break;
        case 9:message.reply("The only place where success comes before work is in the dictionary. -Vidal Sassoon");
               break;
        case 10:message.reply("You miss 100% of the shots you don't take. -Wayne Gretzky");
               break;
        case 11:message.reply("Dreaming, after all, is a form of planning. -Gloria Steinem");
               break;
      }
    }

    //author
    if(message_LC == "=author")
    {
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#55ADAB')
	.setTitle('MathsFam')
	.setURL('https://www.youtube.com/channel/UCekerpkbwU05MWrpVz73XiA/featured')
	.setAuthor('Akshit Mehrotra', 'https://i.imgur.com/14p66A2.jpg')
	.setDescription('First Bot :-Botiful. Check out my other stuff by clicking the link above.')
	.addFields(
		{ name: 'Reviews & Suggestions', value: 'botiful14@gmail.com' }
	)
	message.reply(exampleEmbed);
	
    }
     

    

    
    
});

keepAlive();
//login the bot
client.login(token);
