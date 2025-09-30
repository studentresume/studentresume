export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ ok: true, message: "Send a POST with a PDF." });
    return;
  }
  if (req.method === "POST") {
    res.status(200).json({ ok: true, message: "PDF received (stub only)." });
    return;
  }
  res.status(405).json({ error: "Method not allowed" });
}
