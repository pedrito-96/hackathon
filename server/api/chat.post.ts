/*
 Questa funzione accetta la stringa di input e ritorna la risposta della chat di chatgpt
*/
export default defineEventHandler(async (event) => {
  const body = await readBody<{ text: string }>(event);
  const text = body.text;

  // 2a chiamata post
  const addMessage = await $fetch(
    `https://api.openai.com/v1/threads/thread_DGyOrs6Vl1GMGruJpLBxQR6M/messages`,
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
    `https://api.openai.com/v1/threads/thread_DGyOrs6Vl1GMGruJpLBxQR6M/runs`,
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
    `https://api.openai.com/v1/threads/thread_DGyOrs6Vl1GMGruJpLBxQR6M/runs/${runMessage.id}`,
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
      `https://api.openai.com/v1/threads/thread_DGyOrs6Vl1GMGruJpLBxQR6M/messages`,
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
