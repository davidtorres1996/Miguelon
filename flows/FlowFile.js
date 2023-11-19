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

            await flowDynamic([{
                body: `${Data[0]}`,
                media: 'https://atubot.net.pe/wp-content/uploads/2023/11/miguelon.jpeg'
               }]);
            await flowDynamic(Data[1]);
            await flowDynamic([{
                body: `${Data[2]}`,
                media: 'https://atubot.net.pe/wp-content/uploads/2023/11/captura_miguelon.jpeg'
               }]);
            await flowDynamic(Data[3]);


    }
    

})