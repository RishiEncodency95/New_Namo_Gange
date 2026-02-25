"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

// Global singleton to prevent multiple audio instances
let globalAudio: HTMLAudioElement | null = null;
let isGlobalMuted = false; // Default state
const listeners = new Set<(muted: boolean) => void>();

export default function SpeakerButton() {
  const [isMuted, setIsMuted] = useState(isGlobalMuted);

  useEffect(() => {
    // Initialize audio only once on client side
    if (!globalAudio && typeof window !== "undefined") {
      globalAudio = new Audio("/audio/bg-audio.mp3");
      globalAudio.loop = true;
      globalAudio.volume = 0.7;
      globalAudio.muted = isGlobalMuted;

      // Try to autoplay
      if (!isGlobalMuted) {
        const playPromise = globalAudio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay prevented. Add listener to play on first interaction.
            const enableAudio = () => {
              if (globalAudio && !isGlobalMuted) {
                globalAudio
                  .play()
                  .catch((e) => console.error("Play failed:", e));
              }
              document.removeEventListener("click", enableAudio);
              document.removeEventListener("keydown", enableAudio);
            };
            document.addEventListener("click", enableAudio);
            document.addEventListener("keydown", enableAudio);
          });
        }
      }
    }

    // Sync local state with global state
    setIsMuted(isGlobalMuted);

    const handleStateChange = (muted: boolean) => {
      setIsMuted(muted);
    };

    listeners.add(handleStateChange);
    return () => {
      listeners.delete(handleStateChange);
    };
  }, []);

  const toggleMute = () => {
    if (!globalAudio) return;

    const newMutedState = !isGlobalMuted;
    isGlobalMuted = newMutedState;
    globalAudio.muted = newMutedState;

    if (!newMutedState) {
      globalAudio.play().catch((e) => console.error("Play failed:", e));
    }

    // Notify all instances
    listeners.forEach((listener) => listener(newMutedState));
  };

  return (
    <div className="relative flex items-center">
      {/* Button */}
      <button
        onClick={toggleMute}
        className="
    w-7 h-7 rounded-full
    bg-white backdrop-blur-md
    shadow-md shadow-black/10
    hover:bg-white/40 hover:shadow-lg
    active:scale-95
    transition-all duration-300
    flex items-center justify-center
  "
      >
        {isMuted ? (
          <VolumeX size={18} className="text-red-600" />
        ) : (
          <Volume2 size={18} className="text-[#0C55A0]" />
        )}
      </button>

      {/* Sound Wave Animation (shows only when not muted) */}
      {/* {!isMuted && (
        <motion.span
          className="absolute right-[-5px] h-3 w-3 rounded-full border-2 border-[#0C55A0]"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.8, 0.2, 0.8],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )} */}
    </div>
  );
}
