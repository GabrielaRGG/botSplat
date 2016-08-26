var TelegramBot=require('node-telegram-bot-api');
var token='249051349:AAHWsZgn45oZmzLw-WIDIEKrkCG-Bk1FVfI';
var bot= new TelegramBot(
    token,{
 polling:true   
});
bot.onText(/^\/start()$/,function (msg,match) {
    var obtener=msg.chat.id;
    bot.sendMessage(obtener,"Elige la categoría que deseas consultar:\n/luz-Electricidad\n/agua-Agua potable");
 
    });

bot.onText(/^\/luz()$/,function (msg,match) {
    var obtener=msg.chat.id;
    bot.sendMessage(obtener,"Elige la Opción a consultar:\n/pagos-Lugares donde puedes pagar\n/requisitos-Especificaciones que necesitas para contratar el servicio\n/medidor-Video de como leer tu medidor\n/recibo-Video de como leer tu recibo");
 
    });

bot.onText(/^\/agua()$/,function (msg,match) {
    var obtener=msg.chat.id;
    bot.sendMessage(obtener,"Elige la Opción a consultar:\n/pago-Lugares donde puedes pagar\n/requisito-Especificaciones que necesitas para contratar el servicio");
 
    });

    bot.onText(/^\/pago()$/,function (msg,match) {
    var obtener=msg.chat.id;
    var photo='assets/images/pago.png';
    bot.sendPhoto(obtener,photo);
       console.log(`Enviando a ${photo}`);
    });

    bot.onText(/^\/requisito()$/,function (msg,match) {
    var obtener=msg.chat.id;
    var document='assets/documentos/requisito.pdf';
     bot.sendDocument(obtener,document);
        console.log(`Enviando a ${document}`);
    });

    
bot.onText(/^\/pagos()$/,function (msg,match) {
    var obtener=msg.chat.id;
    var photo='assets/images/pago.png';
     bot.sendPhoto(obtener,photo);
        console.log(`Enviando a ${photo}`);
    });

    bot.onText(/^\/requisitos()$/,function (msg,match) {
    var obtener=msg.chat.id;
    var document='assets/documentos/requisitos.pdf';
     bot.sendDocument(obtener,document);
        console.log(`Enviando a ${document}`);
    });

bot.onText(/^\/ubicacion()$/,function (msg,match) {
    var obtener=msg.chat.id;
    var direcciones=[
        [obtener,20.0805,-98.3677],
        [obtener,20.0858,-98.3633],
    ];
    for (var i = 0; i < direcciones.length; i++) {
       bot.sendLocation(direcciones[i][0],direcciones[i][1]);
    console.log(`Enviando a ${direcciones}`);  
    }
    });

bot.onText(/^\/medidor()$/,function (msg,match) {
    var obtener=msg.chat.id;
    var video='assets/videos/medidor_luz.mp4';
     bot.sendVideo(obtener,video);
        console.log(`Enviando ${video}`);
    });

    bot.onText(/^\/recibo()$/,function (msg,match) {
    var obtener=msg.chat.id;
    var video='assets/videos/recibo_luz.mp4';
     bot.sendVideo(obtener,video);
        console.log(`Enviando ${video}`);
    });


