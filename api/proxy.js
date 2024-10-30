export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Faz a requisição ao Google Apps Script
            const response = await fetch('https://script.google.com/macros/s/AKfycbxcs4d4B6DHvNPunDDWgoD6SDi5lDmmZgbYY9z8gwRHS-igK0JDkgRpnJjGswzoB6yTUA/exec', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(req.body)
            });

            // Verifique o tipo de resposta
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();
                res.status(200).json(data);
            } else {
                const text = await response.text();
                console.error("Resposta não JSON recebida:", text); // Log para identificar o conteúdo da resposta
                res.status(500).json({ error: 'Resposta do Google Apps Script não é JSON', details: text });
            }
        } catch (error) {
            console.error("Erro ao comunicar com o Google Apps Script:", error);
            res.status(500).json({ error: 'Erro ao comunicar com o Google Apps Script' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} não permitido`);
    }
}
