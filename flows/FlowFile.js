import bot from "@bot-whatsapp/bot";
import GoogleSheetService from "../services/sheets/index.js";
import { typing, delay, sendReaction } from '../utils/utils.js';

const googleSheet = new GoogleSheetService(
    "1WOgUHCSOkiKsHgvVAwnQOdktxaTjjmM9OwY_2qDMzPg"
  );


export const FlowParticipar = bot .addKeyword("Hola, quiero participar en el Torneo dúo x 30 😎. ¿Cuáles son los pasos?")
.addAction(async (ctx, {flowDynamic, provider, endFlow}) =>{  

    const id = ctx.key.remoteJid;
    const Data = await googleSheet.searchAndReturnFirstRow();

    if (Data !== null) {

            await typing(provider, ctx, 2000);
            await flowDynamic([{
                body: `${Data[0]}`,
                media: 'https://atubot.net.pe/wp-content/uploads/2023/11/miguelon.jpeg'
               }]);
            await typing(provider, ctx, 2000);
            await provider.vendor.sendMessage(id, {
                text: `${Data[1]}`,
                contextInfo: {
                  externalAdReply: {
                    title: 'BIGO LIVE-Live Stream, Go Live',
                    body: 'Click Aquí ☝️',
                    mediaType: 'IMAGE', //VIDEO - IMAGE - NONE
                    showAdAttribution: false, //Mensaje a partir de un anuncio
                    //renderLargerThumbnail: true, 
                    mediaUrl: 'https://bigolive.onelink.me/sG8X?af_web_dp=&af_dp=&is_retargeting=true&pid=region_kol&c=PE_miguelon',
                    thumbnailUrl: 'https://atubot.net.pe/wp-content/uploads/2023/11/839.webp', //url imagen
                    sourceUrl: 'https://bigolive.onelink.me/sG8X?af_web_dp=&af_dp=&is_retargeting=true&pid=region_kol&c=PE_miguelon',
                  },
                },
              }); 
            await typing(provider, ctx, 2000);
            await flowDynamic([{
                body: `${Data[2]}`,
                media: 'https://atubot.net.pe/wp-content/uploads/2023/11/captura_miguelon.jpeg'
               }]);
            await typing(provider, ctx, 2000);
            await flowDynamic(Data[3]);


    }
    

})