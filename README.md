## About 

A web app utilizing a RAG (Retrieval-Augmented Generation) API for boardgame rules that extract relevant information, and generate responses based on the uploaded documents. 

The app does the following:

-  **Chunking & Indexing** – The extracted text is divided into smaller chunks and stored in a vector database.
-  **Query Processing** – Users input queries, and the app retrieves the most relevant document chunks using semantic search.
-  **Response Generation** – The RAG API combines the retrieved text with an LLM (Large Language Model) to generate accurate responses.
-  **User Interaction** – The app displays responses and may provide citations from the uploaded documents.

This system enhances response accuracy by grounding LLM outputs in user-provided content, making it useful for legal, academic, and business applications.

For more information about the API go [here](https://github.com/achaturv-hub/game-rules-api).


## Getting Started

1. Go to the root directory and install dependencies.

`$ npm install`

2. Start development server

`$ npm run dev`

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Demo

See [Demo](https://game-rules.anushchat.dev/)


## Built With 

- [ReactJS v18](https://react.dev/) - Frontend Javascript web framework
- [NextJS v14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Open-source language which builds on JavaScript
- [Axios](https://www.npmjs.com/package/axios) - For making requests to the API

## Author

Anush Chaturvedi 

https://portfolio.anushchat.dev