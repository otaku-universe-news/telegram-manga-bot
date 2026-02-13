export default {
  async fetch(request) {
    const TOKEN = "8519239319:AAF8bhNW29_OroNqudQSmXJYaEN8JjKnv2k";

    if (request.method === "POST") {
      const update = await request.json();

      const chatId = update.message.chat.id;
      const text = update.message.text;

      let reply = "👋 مرحبا! كتب /latest باش نجيب آخر فصل.";

      if (text.startsWith("/latest")) {
        reply = "📖 كنقلب على آخر فصل...";
      }

      await fetch(
        `https://api.telegram.org/bot${TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: reply,
          }),
        }
      );

      return new Response("OK");
    }

    return new Response("Bot is running!");
  },
};
