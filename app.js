import "dotenv/config";
import bot from "@bot-whatsapp/bot";
import QRPortalWeb from "@bot-whatsapp/portal";
import BaileysProvider from "@bot-whatsapp/provider/baileys";
import MockAdapter from "@bot-whatsapp/database/json";
import linkPreview from 'link-preview-js';


import { FlowParticipar }  from "./flows/FlowFile.js";



const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = bot.createFlow([
    FlowParticipar
  ]);
  const adapterProvider = bot.createProvider(BaileysProvider);

  bot.createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};

main();
