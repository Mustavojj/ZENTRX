import { APP_CONFIG } from '../js/data.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    
    const { amount, taskId } = req.body;
    const CRYPTO_BOT_TOKEN = APP_CONFIG.CRYPTO_BOT_TOKEN;
    
    if (!CRYPTO_BOT_TOKEN) {
        return res.status(500).json({ error: 'CRYPTO_BOT_TOKEN not configured' });
    }
    
    try {
        const response = await fetch('https://api.crypt.bot/v1/createInvoice', {
            method: 'POST',
            headers: { 
                'Crypto-Pay-API-Token': CRYPTO_BOT_TOKEN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                asset: 'TON',
                amount: amount,
                description: `Add Social Task: ${taskId}`
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            return res.status(200).json({ success: true, invoiceId: data.result.invoice_id });
        } else {
            return res.status(500).json({ success: false, error: data.error });
        }
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}
