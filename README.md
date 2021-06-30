# Server Tags - Deprecated [30/6/2021]
The team at NTM Development would like to thank all servers and users who have used and contributed to Server Tags. Due to hosting costs to keep it up, it will remain open source on the GitHub page and you can contribute to it however you like. However the team will not be offering ANY support for Server Tags after 30/6/2021. Instead we recommend that you use our much more advanced Discord Bot called [Nate Bot](https://natebot.xyz/). Once again, thank you!

<hr>
<img src="https://i.imgur.com/5qnd7Mb.png">

# Server Tags Bot by [NTM Development](https://dev.ntmnathan.com/)
**[Invite the Bot](https://discordapp.com/oauth2/authorize?client_id=649805592059183134&scope=bot&permissions=117760)** | **[Support Server](https://discordapp.com/invite/G2rb53z)**
<hr>

Server Tags is a Discord Bot that focuses on the creation of tags, recalling them and viewing a list of them. The tags all have a unique name on your guild, well for example: when you create the tag "Nate" on "NTM Nathantominecraft", that tag can only be retrieved on that server and not on other servers. It doesn't conflict on other servers.

As this was a quick project of mine... I am making this open source for people to use and enjoy. I fully appreciate a star on the Repo and if you find any issues. Feel free to open up an issue and i'll look into it.

If you need any help on hosting, feel free to message me on Discord:<br>NTM Nathan#0001 or join my [Support Server](https://discord.gg/G2rb53z)

<h3>Commands</h3>
Prefix: t+ (Changeable if self hosting this bot)

- `t+tag <name>` **»** This will get the Tag on the Server
- `t+addtag <name> <content>` `Aliases: add` **»** This will create a tag on the Server, Please note that Single Tag Names ("Nate, OwO etc.") can only be used.
- `t+edittag <name> <content>` `Aliases: edit` **»** This will edit the **Content** of the Tag on the Server
- `t+deletetag <name>` `Aliases: delete` **»** This will delete the Tag from the Server (Yes/No Confirmation System)
- `t+taginfo <name>` **»** This will get the Tag Information on the Server
- `t+taglist` **»** This will list all the Tags that were created on the Server.
- `t+help` `Aliases: servertags, tags` **»** Shows all Commands and information
- `t+about` `Aliases: info` **»** About Information regarding the Bot
- `t+botstats` `Aliases: stats, bot` **»** Shows Bot Statistics
- `t+avatar` `Aliases: icon` **»** Gets User Avatar
- `t+ping` `Aliases: latency` **»** Returns the Ping (Latency) of the Bot
- `t+say` **»** Make the Bot Say Something.

<h3>
  How to Host
</h3>

**On Glitch:**

`1.` Its really easy to host this bot on Glitch (ideal for small bots), just clone this repo onto your Glitch Project.

`2.` Go to [Discord Developer Portal](https://discordapp.com/developers/applications/), create a **New Application** and Make a Bot. And then Copy the **Bot Token** on the Bot Page

`3.` This project is provided with an .env file so with that copied Bot Token, paste the Token into the .env file.

`4.` Run the Bot with watch.json

`5.` You can also view the API Json List of Every Tag from Every Server here: https://"projectname".glitch.me/api/tags

*Please Note: I advise that you only use Glitch if you are going to just host it for your own server or a few servers. Get yourself a VPS (From Digital Ocean, GalaxyGate, OVH etc.) if you're going to use this as a main bot or plan to have it in over a lot of servers.*

**Hosting on your Computer:**

`1.` Downloading
In a new Command Prompt/Terminal window in your project's folder, you'll need to run the following:

**`git clone https://github.com/NTMNathan/servertagsbot.git`**

`2.` Finishing the Git Cloning

- In the folder where you ran the git command, run `cd servertagsbot` and then run `npm install`, this will install all required packages from the package.json, then it will run the installer.

- You will be prompted to supply a number of access tokens and keys for various platforms, that means you will need to follow the on screen instructions to complete the installation.

`3.` Starting the Bot

To start the bot, in the Command Prompt/Terminal window, run the following command:

**`node server.js`**

This will make the bot online! Don't ever share any tokens/secrets with anybody!

<hr>

<h3>
  Packages Used
</h3>

- express.js: 4.17.1
- discord.js: 12.2.0 
- quick.db: 7.1.1
- parse-ms: 2.0.0
- moment: 2.26.0
- moment-duration-format: 2.2.2

<h3>
  Special Thanks!
</h3>

- Jazz#0682 for helping test this!
