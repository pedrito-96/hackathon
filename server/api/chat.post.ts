/*
 Questa funzione accetta la stringa di input e ritorna la risposta della chat di chatgpt
*/
export default defineEventHandler(async (event) => {
  const body = await readBody<{ text: string }>(event);
  const text = body.text;

  // 2a chiamata post
  const addMessage = await $fetch(
    `https://api.openai.com/v1/threads/thread_REQcP42bEdd1HAWUenj2StYI/messages`,
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
    `https://api.openai.com/v1/threads/thread_REQcP42bEdd1HAWUenj2StYI/runs`,
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
    `https://api.openai.com/v1/threads/thread_REQcP42bEdd1HAWUenj2StYI/runs/${runMessage.id}`,
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
      `https://api.openai.com/v1/threads/thread_REQcP42bEdd1HAWUenj2StYI/messages`,
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
