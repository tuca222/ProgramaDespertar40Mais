// src/api/proxy.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { nomeCompleto, whatsapp } = req.body;
  
        const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nomeCompleto, whatsapp }),
        });
  
        if (!response.ok) {
          throw new Error(`Erro ao enviar dados para o Google Script: ${response.status} - ${response.statusText}`);
        }
  
        const data = await response.json();
        res.status(200).json({ message: 'Dados enviados com sucesso!', data });
      } catch (error) {
        res.status(500).json({ message: 'Erro ao enviar dados para o Google Script.', error: error.message });
      }
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  }
  