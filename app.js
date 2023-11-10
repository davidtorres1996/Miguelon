import "dotenv/config";
import bot from "@bot-whatsapp/bot";
import QRPortalWeb from "@bot-whatsapp/portal";
import BaileysProvider from "@bot-whatsapp/provider/baileys";
import MockAdapter from "@bot-whatsapp/database/json";
import linkPreview from 'link-preview-js';


import { FlowFile }  from "./flows/FlowFile.js";
import { LinkPreviewFlow }  from "./flows/LinkPreviewFlow.js";
import { StickerFlow }  from "./flows/StickerFlow.js";


const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = bot.createFlow([
    FlowFile,
    LinkPreviewFlow,
    StickerFlow
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
