"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ThumbsUp, Bookmark, Share2 } from "lucide-react"

export function FloatingActions() {
  const [likes, setLikes] = useState(89)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showTooltip, setShowTooltip] = useState("")

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Hari Tech - Enterprise Software Solutions",
text: "Check out Hari Tech for amazing software solutions!",
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="fixed right-6 bottom-24 z-40 flex flex-col space-y-3">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleLike}
        onMouseEnter={() => setShowTooltip("like")}
        onMouseLeave={() => setShowTooltip("")}
        className={`relative w-12 h-12 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center ${
          isLiked ? "bg-red-500 text-white" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300"
        }`}
      >
        <ThumbsUp className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
        {showTooltip === "like" && (
          <div className="absolute right-14 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {likes} likes
          </div>
        )}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleBookmark}
        onMouseEnter={() => setShowTooltip("bookmark")}
        onMouseLeave={() => setShowTooltip("")}
        className={`relative w-12 h-12 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center ${
          isBookmarked ? "bg-blue-500 text-white" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300"
        }`}
      >
        <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`} />
        {showTooltip === "bookmark" && (
          <div className="absolute right-14 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Bookmark
          </div>
        )}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleShare}
        onMouseEnter={() => setShowTooltip("share")}
        onMouseLeave={() => setShowTooltip("")}
        className="relative w-12 h-12 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
      >
        <Share2 className="w-5 h-5" />
        {showTooltip === "share" && (
          <div className="absolute right-14 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">Share</div>
        )}
      </motion.button>
    </div>
  )
}
