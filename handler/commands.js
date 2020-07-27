const fs = require("fs");

module.exports = async (bot) => {

    fs.readdir("./commands/", (err, files) => {
        if (err) console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() === "js");
            if (jsfile.length <= 0){
                return;
            }
        
        jsfile.forEach((f, i) => {
            let props = require(`../commands/${f}`);

            console.log(`${f} loaded!`);

            bot.commands.set(props.help.name, props);
                props.help.aliases.forEach(alias => { 
                    bot.aliases.set(alias, props.help.name);
                });
        });
    });

}