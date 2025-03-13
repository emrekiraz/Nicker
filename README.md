# Nicker - Brand Name Generator

Nicker is a web application that helps users generate brand name ideas for their products or product concepts. Users can input product ideas and keywords, and Nicker will generate name variations using the Gemini AI API. Users can then search for available domains using Namecheap's API and proceed to purchase them.

## Features

- Generate brand name suggestions for your product ideas using Google's Gemini AI
- Check domain availability across multiple extensions
- Purchase available domains directly through Namecheap
- Clean, modern user interface inspired by Vercel

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn UI
- **Form Handling**: react-hook-form with zod validation
- **APIs**: 
  - Google Gemini AI for brand name generation
  - Namecheap API for domain availability checks

## Getting Started

### Prerequisites

- Node.js 18 or later
- A Gemini API key from Google AI Studio
- Namecheap API credentials (for production use)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nicker.git
   cd nicker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file based on the `.env.local.example` file:
   ```bash
   cp .env.local.example .env.local
   ```

4. Add your API keys to the `.env.local` file.

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The app is set up for easy deployment to Vercel:

1. Push your code to GitHub.
2. Import the project into Vercel.
3. Add the environment variables in the Vercel dashboard.
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn UI](https://ui.shadcn.com/)
- [Google Gemini AI](https://ai.google.dev/)
- [Namecheap API](https://www.namecheap.com/support/api/intro/)
