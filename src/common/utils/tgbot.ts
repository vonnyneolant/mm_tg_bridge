// console.log("loading tg");
const { Telegraf } = require('telegraf')
import { message } from 'telegraf/filters'
import config from 'common/config';
// console.log("tg imported");

export class TGBot {
    public bot?: typeof Telegraf;
    private token?: string;
    private tg_chat_id?: number;
    private mm_chats_wl?: string[];
    private mm_chats_bl?: string[];

    init = () => {
        this.reload();
    }


    reload = (): void => {
        if (this.bot == undefined && config.data != undefined && config.data.tg_token != undefined && config.data.tg_chat_id) {
            this.mm_chats_wl = config.data.mm_chats_wl;
            this.mm_chats_bl = config.data.mm_chats_bl;
            this.token = config.data.tg_token;
            this.tg_chat_id = config.data.tg_chat_id;
            this.bot = new Telegraf(this.token);
            console.log(this.bot);
            this.bot.on(message('text'), async (ctx) => {
                console.log(ctx.message.text);
                if (config.data?.useTgBot == true) {
                    await ctx.telegram.sendMessage(ctx.message.chat.id, `${ctx.message.chat.id} ${ctx.message.text}`)
                }
            })
            console.log("starting bot");
            this.bot.launch();
            console.log("bot started");
        }
    }

    send = (channelId: string, url: string, message: string): void => {
        if (this.mm_chats_wl != undefined && this.mm_chats_wl.length > 0) {
            if (!(channelId in this.mm_chats_wl))
                return;
        }
        if (this.mm_chats_bl != undefined && this.mm_chats_bl.length > 0) {
            if (channelId in this.mm_chats_bl)
                return;
        }
        // let msg = `${channelId}: ${message}`;
        let msg = `${message}`;
        if (config.data?.useTgBot == true) {
            tgBot.bot.telegram.sendMessage(this.tg_chat_id, msg);
        }
    }

}


const tgBot = new TGBot();
export default tgBot;