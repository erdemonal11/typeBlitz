import React from "react";

const ShareButton: React.FC<{ score: number }> = ({ score }) => {
  const shareText = `I scored ${score} in the typing game! Check it out here: ${window.location.href}`;

  const shareScore = () => {
    if (navigator.share) {
      navigator.share({
        title: "Typing Game Score",
        text: shareText,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback for browsers that do not support the Web Share API
      navigator.clipboard.writeText(shareText).then(() => {
        alert("Score and link copied to clipboard!");
      }).catch(console.error);
    }
  };

  return (
    <button
      onClick={shareScore}
      className="mx-auto mt-5 text-slate-500"
    >
      Share your score
    </button>
  );
};

export default ShareButton;
