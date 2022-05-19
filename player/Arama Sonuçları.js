module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `İşte sizin için arama sonuçlarını${query}` },
            footer: { text: 'This bot uses a Github project made by Zerio (ZerioDev/Music-bot)' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};