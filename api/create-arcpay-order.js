const ARCPAY_ARC_KEY = "YOUR_ARC_KEY_HERE";

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    
    const { amount, taskId, title } = req.body;
    
    try {
        const response = await fetch('https://arcpay.online/api/v1/arcpay/order', {
            method: 'POST',
            headers: {
                'ArcKey': ARCPAY_ARC_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title || "Add Social Task",
                orderId: taskId,
                currency: "TON",
                items: [
                    {
                        title: "Social Task Creation",
                        price: parseFloat(amount),
                        count: 1,
                    },
                ],
                meta: {
                    taskId: taskId,
                },
                captured: true,
            }),
        });
        
        const data = await response.json();
        
        if (data.paymentUrl) {
            return res.status(200).json({ success: true, paymentUrl: data.paymentUrl, uuid: data.uuid });
        } else {
            return res.status(500).json({ success: false, error: data });
        }
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}
