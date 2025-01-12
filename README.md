# socion# Socion: Social Media Engagement Analytics

## Project Overview

Socion is a social media engagement analytics module that uses **Langflow workflows**, **Google Generative AI**, and **DataStax Astra DB** to provide actionable insights. It stores and analyzes engagement data, offering detailed comparisons of post performance across platforms like Twitter and Instagram.

### Features:

1. **Data Input**: Upload social media data and process it using Langflow workflows.
2. **Data Storage**: Store vectorized data in Astra DB for efficient retrieval.
3. **Post Performance Analysis**: Compare engagement across different post types (carousel, reels, static images, etc.).
4. **AI-Powered Insights**: Generate natural language insights using Google Generative AI.

## Folder Structure

- `vite-project/` - Frontend (React + Vite)
- `server/` - Backend (Node.js + Express)

## Prerequisites

Ensure the following tools are installed:

1. **Node.js** (v14 or above)
2. **npm** (v6 or above) or **yarn** (optional)
3. **Git**
4. **DataStax Astra DB** account (AWS-hosted DB)
5. **Langflow Instance** for workflows

## Installation

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### Step 2: Install Dependencies

#### Frontend (Vite-React)

```bash
cd vite-project
npm install
```

#### Backend (Node.js Server)

```bash
cd ../server
npm install
```

## Running the Application

### Step 1: Start the Backend Server

1. Navigate to the `server/` folder:
   ```bash
   cd server
   ```
2. Start the server:
   ```bash
   node index.js
   ```
   Or for development:
   ```bash
   nodemon index.js
   ```
   The server will run on `http://localhost:3000`.

### Step 2: Start the Frontend Application

1. Navigate to the `vite-project/` folder:
   ```bash
   cd ../vite-project
   ```
2. Start the Vite development server:
   ```bash
   npm run dev
   ```
3. Open the application in your browser:
   ```bash
   http://localhost:5173
   ```

## Environment Variables

### Backend (`server/.env`)

Create a `.env` file in the `server/` folder with the following content:

```
PORT=3000
INSTAGRAM_FLOW_ID=<your-instagram-flow-id>
TWITTER_FLOW_ID=<your-twitter-flow-id>
LANGFLOW_ID=<your-langflow-instance-id>
INSTAGRAM_APPLICATION_TOKEN=<your-instagram-langflow-app-token>
TWITTER_APPLICATION_TOKEN=<your-twitter-langflow-app-token>
```

### Frontend (`vite-project/.env`)

Create a `.env` file in the `vite-project/` folder:

```
VITE_API_URL=http://localhost:3000
```

## Langflow + Astra DB Workflow Explanation

### Overview

Langflow acts as a workflow engine to process social media data and query DataStax Astra DB for insights. The workflows are powered by **1536-dimensional vector embeddings** and use **dot product similarity** for comparing data.

### Workflow Steps (Based on Images):

#### **1. Data Input and Preprocessing**

- A **File Node** is used to upload raw engagement data (e.g., Twitter or Instagram).
- The data is **split into manageable chunks** using the **Split Text Node**:
  - Chunk size: 256 characters
  - Overlap: 32 characters
- Chunks are vectorized using **Google Generative AI embeddings** (`models/text-embedding-004`).

#### **2. Storing Vectorized Data**

- The vectorized chunks are ingested into a **1536-dimensional vector collection** in Astra DB, hosted on AWS.
- **Astra DB Node** stores this data in the `social_media_analytics` database and `x_data` collection.

#### **3. Querying the Data**

- The workflow takes a natural language query (e.g., "Compare tagged posts and collaborative posts in terms of engagement") through the **Chat Input Node**.
- The query is processed and sent to Astra DB to retrieve relevant data using vector similarity (dot product).

#### **4. Generating Insights**

- Data from Astra DB is parsed using the **Parse Data Node** into plain text.
- A **Prompt Node** dynamically structures the query and context for the AI.
- **Google Generative AI Node** (e.g., `gemini-1.5-pro`) processes the parsed data and generates insights in natural language.

#### **5. Displaying Results**

- The final insights are displayed using the **Chat Output Node**.

### Example Insight:

If collaborative posts drive 15% higher engagement than tagged posts, the system generates and outputs:

```
Collaborative posts outperform tagged posts by 15% in engagement metrics.
```

## Tech Stack

- **Frontend**: React, Vite, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: DataStax Astra DB (AWS-hosted)
- **Workflow Engine**: Langflow
- **AI Integration**: Google Generative AI

## Submission

1. **GitHub Repository**: Ensure it includes:
   - Complete codebase (`vite-project/` and `server/` folders).
   - A detailed `README.md` file.
2. **Demo Video**: Record and upload a video to YouTube:
   - Show Langflow workflows and data queries.
   - Explain Astra DB integration and vector similarity search.
   - Showcase GPT-generated insights.
   - Ensure the video is public or unlisted.
3. **Submit**:
   - GitHub repository link.
   - YouTube video link.

## License

This project is licensed under the [MIT License](./LICENSE).
