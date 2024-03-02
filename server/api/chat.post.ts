/*
 Questa funzione accetta la stringa di input e ritorna la risposta della chat di chatgpt
*/
export default defineEventHandler(async (event) => {
  const body = await readBody<{ text: string }>(event);
  const text = body.text;

  // 2a chiamata post
  const addMessage = await $fetch(
    `https://api.openai.com/v1/threads/thread_hjypMLPlLhV8LGJmCE5y3rjH/messages`,
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
    `https://api.openai.com/v1/threads/thread_hjypMLPlLhV8LGJmCE5y3rjH/runs`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
        "OpenAI-Beta": "assistants=v1",
      },
      body: {
        assistant_id: "asst_TnZhAQ4lBnBODtjVYcKLDg9I",
      },
    }
  );
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("aspetto");
      resolve(null);
    }, 5000);
  });

  const getStatus = await $fetch(
    `https://api.openai.com/v1/threads/thread_hjypMLPlLhV8LGJmCE5y3rjH/runs/${runMessage.id}`,
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
      `https://api.openai.com/v1/threads/thread_hjypMLPlLhV8LGJmCE5y3rjH/messages`,
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
