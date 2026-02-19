'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center space-y-6 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-100 opacity-40 rounded-full blur-3xl animate-float z-0" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-100 opacity-30 rounded-full blur-3xl animate-float z-0" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 animate-fade-in">
            Financial Data Infrastructure <br />
            <span className="text-indigo-600">
              Built for Modern Fintech Startups
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mt-6 animate-fade-in">
            Launch real-time financial products faster with secure authentication,
            live market intelligence, and Web3-native asset tokenization —
            all delivered through a scalable, production-ready platform.
          </p>

          <div className="flex justify-center gap-6 pt-8 animate-fade-in">
            <Link
              href="/register"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg font-medium hover:bg-indigo-700 transition"
            >
              Create Workspace
            </Link>
            <Link
              href="/signin"
              className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
            >
              Access Platform
            </Link>
          </div>
        </div>
      </section>


      {/* Platform Overview */}
      <AnimatedSection title="Platform Overview" bgFrom="#f5f7ff" bgTo="#e0e7ff">
        <motion.section
          className="flex flex-col justify-center items-center px-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-2xl text-gray-700 max-w-4xl">
            Our platform provides fintech teams with the foundational
            infrastructure required to build and scale data-driven financial
            applications. From high-frequency market data ingestion to secure
            user authentication and blockchain integration, every layer is
            engineered for performance, modularity, and long-term scalability.
          </p>
        </motion.section>
      </AnimatedSection>


      {/* Core Capabilities */}
      <AnimatedSection title="Core Capabilities" bgFrom="#ffffff" bgTo="#1e3a8a">
        <motion.section
          className="flex flex-col justify-center items-center text-white px-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ul className="max-w-3xl md:text-xl mx-auto list-disc text-left text-lg pl-6 space-y-4">
            <li>
              ⚡ Real-time market data search with interactive charting and
              responsive rendering
            </li>
            <li>
              📊 Persistent, customizable asset dashboards designed for
              fintech-grade user experiences
            </li>
            <li>
              🔐 Secure authentication and session management with protected
              routes and role-ready architecture
            </li>
            <li>
              🪙 Tokenization layer enabling NFT minting from verified market
              data snapshots
            </li>
            <li>
              🦊 Seamless wallet integration with MetaMask and WalletConnect
            </li>
            <li>
              🔗 Smart contract deployment support with local and test network
              environments
            </li>
          </ul>
        </motion.section>
      </AnimatedSection>


      {/* Why Fintech Teams Choose This Platform */}
      <AnimatedSection title="Why Fintech Teams Choose This Platform" bgFrom="#eef2ff" bgTo="#c7d2fe">
        <motion.section
          className="flex flex-col justify-center items-center px-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ul className="max-w-3xl mx-auto text-left text-lg md:text-xl pl-6 space-y-4 list-disc text-gray-800">
            <li>
              Modular architecture that accelerates product development
              without compromising system integrity
            </li>
            <li>
              Clear separation between data ingestion, application logic,
              and blockchain layers
            </li>
            <li>
              Optimized rendering and state management for high-performance,
              real-time financial workloads
            </li>
            <li>
              Extensible foundation ready for DeFi, tokenization, or
              institutional fintech expansion
            </li>
          </ul>
        </motion.section>
      </AnimatedSection>


      {/* Infrastructure */}
      <AnimatedSection title="Built on Production-Grade Infrastructure" bgFrom="#ffffff" bgTo="#d1fae5">
        <motion.section
          className="flex flex-col justify-center items-center px-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-lg md:text-xl text-gray-700 max-w-3xl">
            Engineered using modern technologies and deployment practices
            trusted by high-growth startups and fintech innovators.
          </p>

          <ul className="max-w-2xl md:text-lg mx-auto list-disc text-left text-gray-700 pl-6 space-y-2">
            <li><strong>Frontend:</strong> React, TypeScript, Tailwind CSS, Recharts</li>
            <li><strong>Backend:</strong> Next.js App Router, Prisma, PostgreSQL</li>
            <li><strong>Authentication:</strong> NextAuth.js</li>
            <li><strong>State Management:</strong> Redux Toolkit</li>
            <li><strong>Blockchain:</strong> Hardhat, Ethers.js, Solidity, OpenZeppelin</li>
            <li><strong>Wallet Layer:</strong> MetaMask, RainbowKit, WalletConnect</li>
            <li><strong>Market Data API:</strong> Polygon.io</li>
            <li><strong>Deployment:</strong> Vercel</li>
          </ul>

          <div className="flex justify-center gap-6 pt-8">
            <Link
              href="/register"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg font-medium hover:bg-indigo-700 transition"
            >
              Launch Your Workspace
            </Link>
            <Link
              href="/signin"
              className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
            >
              Sign In
            </Link>
          </div>
        </motion.section>
      </AnimatedSection>

    </main>
  );
}
