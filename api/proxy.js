export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Faz a requisição ao Google Apps Script
            const response = await fetch('https://script.google.com/macros/s/AKfycbxcs4d4B6DHvNPunDDWgoD6SDi5lDmmZgbYY9z8gwRHS-igK0JDkgRpnJjGswzoB6yTUA/exec', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(req.body)
            });

            const data = await response.json(); // Verifica a resposta do Google Apps Script
            res.status(200).json(data); // Retorna a resposta para o cliente
        } catch (error) {
            console.error("Erro ao comunicar com o Google Apps Script:", error);
            res.status(500).json({ error: 'Erro ao comunicar com o Google Apps Script' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} não permitido`);
    }
}
