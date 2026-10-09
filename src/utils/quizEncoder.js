// Quiz state encoder & decoder for zero-backend sharing via URL hash/query string

export function encodeQuizData(quizData) {
  try {
    const jsonString = JSON.stringify(quizData);
    // Base64 encode after URL encoding unicode strings safely
    const utf8Bytes = new TextEncoder().encode(jsonString);
    let binary = '';
    utf8Bytes.forEach(b => binary += String.fromCharCode(b));
    return btoa(binary);
  } catch (err) {
    console.error('Encoding error:', err);
    return null;
  }
}

export function decodeQuizData(encodedStr) {
  try {
    if (!encodedStr) return null;
    const binary = atob(encodedStr);
    const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
    const jsonString = new TextDecoder().decode(bytes);
    return JSON.parse(jsonString);
  } catch (err) {
    console.error('Decoding error:', err);
    return null;
  }
}
