export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    const { action, userId, channel, taskUrl } = req.body;
    const BOT_TOKEN = process.env.BOT_TOKEN;
    if (!BOT_TOKEN) return res.status(500).json({ error: 'BOT_TOKEN not configured' });
    
    try {
        if (action === 'check_channel') {
            const botId = (await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getMe`).then(r => r.json())).result.id;
            
            const botMember = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getChatMember?chat_id=${channel}&user_id=${botId}`);
            const botData = await botMember.json();
            
            const isBotAdmin = ['administrator', 'creator'].includes(botData.result?.status);
            
            if (!isBotAdmin) {
                return res.json({ isMember: false, error: 'bot_not_admin' });
            }
            
            const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getChatMember?chat_id=${channel}&user_id=${userId}`);
            const data = await response.json();
            
            const isMember = ['member', 'administrator', 'creator'].includes(data.result?.status);
            return res.json({ isMember });
        }
        
        if (action === 'check_bot_admin') {
            const botId = (await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getMe`).then(r => r.json())).result.id;
            
            const botMember = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getChatMember?chat_id=${channel}&user_id=${botId}`);
            const botData = await botMember.json();
            
            const isBotAdmin = ['administrator', 'creator'].includes(botData.result?.status);
            return res.json({ isAdmin: isBotAdmin });
        }

        if (action === 'check_bot_admin_by_url') {
            const chatId = extractChatIdFromUrl(taskUrl);
            if (!chatId) {
                return res.json({ isAdmin: false, error: 'Invalid channel URL' });
            }
            
            const botId = (await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getMe`).then(r => r.json())).result.id;
            
            const botMember = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getChatMember?chat_id=@${chatId}&user_id=${botId}`);
            const botData = await botMember.json();
            
            const isBotAdmin = ['administrator', 'creator'].includes(botData.result?.status);
            return res.json({ isAdmin: isBotAdmin, chatId: chatId });
        }
        
        return res.status(400).json({ error: 'Invalid action' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

function extractChatIdFromUrl(url) {
    const match = url.match(/t\.me\/([^\/\?]+)/);
    return match ? match[1] : null;
}
