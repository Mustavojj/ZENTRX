import { APP_CONFIG } from '../js/data.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    
    const { invoiceId } = req.body;
    const CRYPTO_BOT_TOKEN = APP_CONFIG.CRYPTO_BOT_TOKEN;
    
    try {
        const response = await fetch('https://api.crypt.bot/v1/getInvoices', {
            method: 'POST',
            headers: { 
                'Crypto-Pay-API-Token': CRYPTO_BOT_TOKEN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ invoice_ids: [invoiceId] })
        });
        
        const data = await response.json();
        
        if (data.ok && data.result.items[0]?.status === 'paid') {
            return res.status(200).json({ paid: true });
        } else {
            return res.status(200).json({ paid: false });
        }
    } catch (error) {
        return res.status(500).json({ paid: false, error: error.message });
    }
}
