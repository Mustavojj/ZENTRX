export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    
    const { userId, title, message } = req.body;
    const BOT_TOKEN = process.env.BOT_TOKEN;
    
    if (!BOT_TOKEN) {
        return res.status(500).json({ error: 'BOT_TOKEN not configured' });
    }
    
    if (!userId || !title || !message) {
        return res.status(400).json({ error: 'Missing required fields: userId, title, message' });
    }
    
    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: userId,
                text: `*${title}*\n\n${message}`,
                parse_mode: 'Markdown'
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            return res.status(200).json({ success: true, message: 'Notification sent' });
        } else {
            return res.status(500).json({ success: false, error: data.description });
        }
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
          }
