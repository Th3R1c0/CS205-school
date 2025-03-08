# PuppyDocs
This template scaffolds a LangChain.js + Next.js starter app. It showcases how to use and combine LangChain modules for several
use cases. Specifically:

- [Simple chat](/app/api/chat/route.ts)
- [Retrieval augmented generation (RAG) with a chain and a vector store](/app/api/chat/retrieval/route.ts)


## 🚀 Getting Started with local setup

First, clone this repo and download it locally.

Next, you'll need to set up environment variables in your repo's `.env.local` file. Copy the `.env.example` file to `.env.local`.
To start with the basic examples, you'll just need to add your OpenAI API key.

Next, install the required packages using your preferred package manager (e.g. `yarn`).

Now you're ready to run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result! Ask  something and you'll see a response:

## 🐶 Setting up Running Locally to chat with your company docs

The retrieval examples both use Supabase as a vector store. However, you can swap in
[another supported vector store](https://js.langchain.com/docs/integrations/vectorstores) if preferred by changing
the code under `app/api/retrieval/ingest/route.ts`, `app/api/chat/retrieval/route.ts`, and `app/api/chat/retrieval_agents/route.ts`.

For Supabase, follow [these instructions](https://js.langchain.com/docs/integrations/vectorstores/supabase) to set up your
database, then get your database URL and private key and paste them into `.env.local`.

You can then switch to the `Retrieval` to query your own documents!

For a given text, you'll only need to press `Upload` once. Pressing it again will re-ingest the docs, resulting in duplicates.
You can clear your Supabase vector store by navigating to the console and running `DELETE FROM documents;`.

After splitting, embedding, and uploading some text, you're ready to ask questions!

For more info on retrieval chains, [see this page](https://js.langchain.com/docs/tutorials/rag).
The specific variant of the conversational retrieval chain used here is composed using LangChain Expression Language, which you can
[read more about here](https://js.langchain.com/docs/how_to/qa_sources/). This chain example will also return cited sources
via header in addition to the streaming response.

For more info on retrieval agents, [see this page](https://langchain-ai.github.io/langgraphjs/tutorials/rag/langgraph_agentic_rag/).


## 📚 Learn More

The example chains in the `app/api/chat/route.ts` and `app/api/chat/retrieval/route.ts` files use
[LangChain Expression Language](https://js.langchain.com/docs/concepts#langchain-expression-language) to
compose different LangChain.js modules together. You can integrate other retrievers, agents, preconfigured chains, and more too, though keep in mind
`HttpResponseOutputParser` is meant to be used directly with model output.

To learn more about what you can do with LangChain.js, check out the docs here:

- https://js.langchain.com/docs/

## ▲ Deploy on Vercel

When ready, you can deploy your app on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


