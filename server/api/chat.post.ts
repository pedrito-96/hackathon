/*
 Questa funzione accetta la stringa di input e ritorna la risposta della chat di chatgpt
*/
export default defineEventHandler(async (event) => {
  const body = await readBody<{ text: string }>(event);
  const text = body.text;

  // 2a chiamata post
  const addMessage = await $fetch(
    `https://api.openai.com/v1/threads/thread_VbsjzzAenzn1urpk9w4RlYoN/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
        "OpenAI-Beta": "assistants=v1",
      },
      body: {
        role: "user",
        content: text,
      },
    }
  );
  const runMessage = await $fetch(
    `https://api.openai.com/v1/threads/thread_VbsjzzAenzn1urpk9w4RlYoN/runs`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
        "OpenAI-Beta": "assistants=v1",
      },
      body: {
        assistant_id: "asst_Uqa92AhXwpR0HydrOqOUmQap",
      },
    }
  );
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("aspetto");
      resolve(null);
    }, 3000);
  });

  const getStatus = await $fetch(
    `https://api.openai.com/v1/threads/thread_VbsjzzAenzn1urpk9w4RlYoN/runs/${runMessage.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
        "OpenAI-Beta": "assistants=v1",
      },
    }
  );

  if (getStatus.status === "completed") {
    console.log("complete");
    const response = await $fetch(
      `https://api.openai.com/v1/threads/thread_VbsjzzAenzn1urpk9w4RlYoN/messages`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
          "OpenAI-Beta": "assistants=v1",
        },
      }
    );
    return { response };
  }
});
