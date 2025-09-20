"use client";

import Image from "next/image";
import { useEnsAvatar } from "wagmi";

export default function ClientPage() {
  const address = "0x4eD2b3c68BB4fda084ce1591a210F4aC8b71234A";
  const ensName = "timkot.eth";
  const { data: avatarUrl } = useEnsAvatar({ name: ensName, chainId: 1 });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f1419",
        color: "#FFA500", // primary text now orange
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "3rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Left Column - Profile Card */}
        <div
          style={{
            backgroundColor: "#1a1f2e",
            borderRadius: "16px",
            padding: "1.5rem",
            border: "1px solid #2a3441",
          }}
        >
          {/* Avatar */}
          <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt="ENS Avatar"
                width={120}
                height={120}
                style={{
                  borderRadius: "50%",
                  border: "3px solid #FFA500",
                }}
              />
            ) : (
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: "#FFA500",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "#0f1419",
                }}
              >
                T
              </div>
            )}
          </div>

          {/* Name & Title */}
          <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                margin: "0 0 0.5rem 0",
                color: "#FFA500",
              }}
            >
              Timkot
            </h1>
            <p style={{ color: "#8b949e", fontSize: "1rem", margin: 0 }}>
              Batch #20 — Builder
            </p>
          </div>

          {/* Address */}
          <div
            style={{
              backgroundColor: "#21262d",
              padding: "0.5rem",
              borderRadius: "8px",
              marginBottom: "1.25rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
              }}
            >
              <span style={{ color: "#8b949e" }}>🔗</span>
              <code
                style={{
                  color: "#58a6ff",
                  fontSize: "0.78rem",
                  wordBreak: "break-all",
                }}
              >
                {address}
              </code>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <a
              href={`https://arbiscan.io/address/${address}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1rem",
                backgroundColor: "#21262d",
                borderRadius: "8px",
                color: "#FFA500",
                textDecoration: "none",
                fontSize: "0.85rem",
              }}
            >
              🔍 View on Arbiscan
            </a>
            <a
              href="https://github.com/timkot"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1rem",
                backgroundColor: "#21262d",
                borderRadius: "8px",
                color: "#FFA500",
                textDecoration: "none",
                fontSize: "0.85rem",
              }}
            >
              📱 GitHub
            </a>
            <a
              href="https://twitter.com/timkot_eth"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1rem",
                backgroundColor: "#21262d",
                borderRadius: "8px",
                color: "#FFA500",
                textDecoration: "none",
                fontSize: "0.85rem",
              }}
            >
              🐦 X/Twitter
            </a>
          </div>
        </div>

        {/* Right Column - Content */}
        <div>
          {/* About Me */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "0.75rem",
                color: "#FFA500",
              }}
            >
              About Me
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.6,
                color: "#e6edf3",
                marginBottom: "1.25rem",
              }}
            >
              Web3 Marketing & Community Lead transitioning into Web3 Development. Passionate
              about building decentralized applications and growing Web3 communities.
            </p>
          </section>

          {/* Experience */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "1rem",
                color: "#FFA500",
              }}
            >
              Experience
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                "Ex Community Lead @ Humandone",
                "Ex Solana Collective CIS Representative",
                "Ex Talent Protocol Product Manager",
                "Ex Assisterr Head of Community",
              ].map((role, index) => (
                <div
                  key={index}
                  style={{
                    padding: "0.75rem",
                    backgroundColor: "#1a1f2e",
                    borderRadius: "8px",
                    border: "1px solid #2a3441",
                  }}
                >
                  <p style={{ margin: 0, color: "#e6edf3", fontSize: "0.95rem" }}>
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Focus Areas */}
          <section>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "0.75rem",
                color: "#FFA500",
              }}
            >
              Focus Areas
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {[
                "Web3 Marketing",
                "Community Management",
                "Smart Contracts",
                "DApp Development",
              ].map((skill, index) => (
                <span
                  key={index}
                  style={{
                    padding: "0.4rem 0.8rem",
                    backgroundColor: "#FFA500",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "#0f1419",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
