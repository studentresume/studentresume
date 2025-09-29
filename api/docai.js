import { DocumentProcessorServiceClient } from "@google-cloud/documentai";

export default async function handler(req, res) {
  try {
    const client = new DocumentProcessorServiceClient({
      credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON),
    });
    const name = `projects/${process.env.DOCAI_PROJECT_ID}/locations/${process.env.DOCAI_LOCATION}/processors/${process.env.DOCAI_PROCESSOR_ID}`;
    const request = {
      name,
      rawDocument: {
        content: Buffer.from("Hello Student Resume").toString("base64"),
        mimeType: "text/plain",
      },
    };
    const [result] = await client.processDocument(request);
    res.status(200).json(result.document || { message: "No document returned" });
  } catch (error) {
    console.error("DocAI error:", error);
    res.status(500).json({ error: error.message });
  }
}
