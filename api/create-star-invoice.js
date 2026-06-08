export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    
    const { amount, description, payload } = req.body;
    const BOT_TOKEN = process.env.BOT_TOKEN;
    
    if (!BOT_TOKEN) {
        return res.status(500).json({ error: 'BOT_TOKEN not configured' });
    }
    
    const starAmount = parseInt(amount);
    if (isNaN(starAmount) || starAmount < 1 || starAmount > 2500) {
        return res.status(400).json({ error: 'Invalid amount' });
    }
    
    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/createInvoiceLink`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: 'Add Social Task',
                description: description || 'Create a new social task',
                payload: payload || 'task_payment',
                currency: 'XTR',
                prices: [{ label: 'Task Creation', amount: starAmount }]
            })
        });
        
        const data = await response.json();
        
        if (data.ok && data.result) {
            return res.status(200).json({ success: true, invoiceLink: data.result });
        } else {
            return res.status(500).json({ success: false, error: data.description || 'Telegram API error' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}
