# Medicare Reviews - Anonymous Review Platform

A professional threads clone for writing anonymous reviews powered by zero-knowledge proofs. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🔒 **Zero-Knowledge Privacy**: Anonymous reviews with cryptographic proof of identity
- 🎨 **Professional Design**: Beautiful green and tan color scheme
- 📱 **Responsive UI**: Modern, mobile-friendly interface
- ⚡ **Real-time Updates**: Instant review posting and interaction
- 🛡️ **ZK Authentication**: Secure anonymous login without revealing identity

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **ZK Proofs**: snarkjs, circomlibjs for zero-knowledge cryptography
- **Icons**: Lucide React
- **Crypto**: ethers.js, crypto-js

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3011](http://localhost:3011)

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with custom design system
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main application page
├── components/
│   ├── ReviewCard.tsx      # Individual review display component
│   ├── PostReview.tsx      # Review creation modal
│   └── ZKAuth.tsx          # Zero-knowledge authentication
```

## Design System

The application uses a professional green and tan color palette:

- **Primary Green**: #2d5016 (dark green for headers and accents)
- **Secondary Green**: #4a7c59 (medium green for buttons)
- **Light Green**: #6b8e6b (subtle green for backgrounds)
- **Tan**: #d2b48c (warm tan for complementary elements)
- **Light Tan**: #f5f5dc (background gradients)

## Zero-Knowledge Features

- **Anonymous Authentication**: Users can prove their identity without revealing personal information
- **Proof Generation**: Each review is accompanied by a cryptographic proof
- **Privacy Protection**: All user data is protected by zero-knowledge proofs
- **Verification**: Reviews are cryptographically verified without compromising anonymity

## Development

The application runs on port 3011 by default. All components are built with TypeScript for type safety and include proper error handling.

### Key Components

- **ZKAuth**: Handles zero-knowledge authentication flow
- **PostReview**: Modal for creating new anonymous reviews
- **ReviewCard**: Displays individual reviews with proof verification
- **Main Page**: Orchestrates the entire application flow

## Future Enhancements

- Real ZK proof circuits using circom
- On-chain verification
- Advanced privacy features
- Mobile app version
- Integration with blockchain networks

## License

MIT License - Feel free to use this project for your own anonymous review platform.
