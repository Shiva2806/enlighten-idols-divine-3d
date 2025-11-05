import React from "react";

const PHONE = "917780391225"; // no "+"
const MSG = "Hi TheEnlightHub, I have a question.";
const TEXT = encodeURIComponent(MSG);

function isMobile() {
  return /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export default function WhatsAppButton({
  label = "Chat Now",
  className = "",
}: { label?: string; className?: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const deep = `whatsapp://send?phone=${PHONE}&text=${TEXT}`;
    const web  = `https://wa.me/${PHONE}?text=${TEXT}`;
    if (isMobile()) {
      window.location.href = deep;
      setTimeout(() => window.open(web, "_blank", "noopener,noreferrer"), 700);
    } else {
      const w = window.open(web, "_blank", "noopener,noreferrer");
      if (!w) window.location.href = web;
    }
  };

  return (
    <a
      href={`https://wa.me/${PHONE}?text=${TEXT}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 font-medium hover:underline ${className}`}
    >
      {label}
    </a>
  );
}
