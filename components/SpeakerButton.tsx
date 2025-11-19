"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function SpeakerButton() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Auto-play audio once page loads (allowed after first interaction)
  useEffect(() => {
    if (audioRef.current && !isMuted) {
      audioRef.current.volume = 0.7;
      audioRef.current.play().catch(() => {});
    }
  }, [isMuted]);

  const toggleMute = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.muted = false;
      audioRef.current.play();
    } else {
      audioRef.current.muted = true;
    }

    setIsMuted(!isMuted);
  };

  return (
    <div className="relative flex items-center">
      {/* Actual Audio Element */}
      <audio ref={audioRef} src="/audio/bg-audio.mp3" loop />

      {/* Button */}
      <button
        onClick={toggleMute}
        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition flex items-center justify-center"
      >
        {isMuted ? (
          <VolumeX size={24} className="text-[#DF562C]" />
        ) : (
          <Volume2 size={24} className="text-[#0C55A0]" />
        )}
      </button>

      {/* Sound Wave Animation (shows only when not muted) */}
      {!isMuted && (
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
      )}
    </div>
  );
}
