module.exports = (req, res) => {
  try {
    const sa = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
    const processorId = process.env.GOOGLE_PROCESSOR_ID || null;
    const location = process.env.GOOGLE_LOCATION || 'us';

    if (!sa) return res.status(500).json({ ok: false, msg: 'GOOGLE_APPLICATION_CREDENTIALS_JSON missing' });
    return res.status(200).json({
      ok: true,
      hasServiceAccount: !!sa,
      processorId,
      location
    });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e) });
  }
};
