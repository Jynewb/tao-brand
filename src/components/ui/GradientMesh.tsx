"use client";

export function GradientMesh({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Primary aurora blob */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)",
          top: "-20%",
          left: "-10%",
          animation: "aurora 20s ease-in-out infinite",
        }}
      />
      {/* Secondary aurora blob */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-25 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
          bottom: "-10%",
          right: "-10%",
          animation: "aurora2 25s ease-in-out infinite",
        }}
      />
      {/* Cyan accent */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, transparent 70%)",
          top: "30%",
          right: "20%",
          animation: "aurora 18s ease-in-out infinite reverse",
        }}
      />
    </div>
  );
}
