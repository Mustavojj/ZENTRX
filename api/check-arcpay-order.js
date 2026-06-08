const ARCPAY_ARC_KEY = "YOUR_ARC_KEY_HERE";

export default async function handler(req, res) {
    const { uuid } = req.query;
    
    try {
        const response = await fetch(`https://arcpay.online/api/v1/arcpay/order/${uuid}`, {
            method: 'GET',
            headers: {
                'ArcKey': ARCPAY_ARC_KEY,
                'Content-Type': 'application/json',
            },
        });
        
        const data = await response.json();
        
        if (data.status === 'captured' || data.status === 'received') {
            return res.status(200).json({ paid: true, order: data });
        } else {
            return res.status(200).json({ paid: false, status: data.status });
        }
    } catch (error) {
        return res.status(500).json({ paid: false, error: error.message });
    }
}
