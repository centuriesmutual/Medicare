'use client'

import { useState } from 'react'
import { Heart, MessageCircle, Clock, Shield, Star, Quote } from 'lucide-react'

interface Review {
  id: string
  content: string
  timestamp: number
  likes: number
  replies: number
  proof: string
}

interface ReviewCardProps {
  review: Review
  onLike: () => void
  featured?: boolean
}

export default function ReviewCard({ review, onLike, featured = false }: ReviewCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [showReplies, setShowReplies] = useState(false)

  const formatTime = (timestamp: number) => {
    const now = Date.now()
    const diff = now - timestamp
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    return `${days}d ago`
  }

  const handleLike = () => {
    if (!isLiked) {
      setIsLiked(true)
      onLike()
    }
  }

  return (
    <article className={`nyt-review ${featured ? 'featured' : ''}`}>
      {/* Review Content */}
      <div className="nyt-review-content">
        {review.content}
      </div>

      {/* Review Meta */}
      <div className="nyt-review-meta">
        <div className="nyt-review-badge">ZK VERIFIED</div>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <Shield style={{width: '14px', height: '14px', color: 'var(--nyt-accent)'}} />
          <span style={{fontSize: '0.8rem', color: 'var(--nyt-gray)'}}>
            Proof: {review.proof.slice(0, 8)}...
          </span>
        </div>
      </div>

      {/* Review Actions */}
      <div className="nyt-review-actions">
        <div className="nyt-review-stats">
          <button
            onClick={handleLike}
            className="nyt-review-stat"
            style={{
              backgroundColor: isLiked ? 'var(--nyt-cream)' : 'transparent',
              color: isLiked ? 'var(--nyt-accent)' : 'var(--nyt-gray)',
              border: '1px solid var(--nyt-border)',
              padding: '8px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Heart style={{width: '16px', height: '16px'}} className={isLiked ? 'fill-current' : ''} />
            <span>{review.likes}</span>
          </button>

          <button
            onClick={() => setShowReplies(!showReplies)}
            className="nyt-review-stat"
            style={{
              backgroundColor: showReplies ? 'var(--nyt-cream)' : 'transparent',
              color: showReplies ? 'var(--nyt-accent)' : 'var(--nyt-gray)',
              border: '1px solid var(--nyt-border)',
              padding: '8px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <MessageCircle style={{width: '16px', height: '16px'}} />
            <span>{review.replies}</span>
          </button>
        </div>

        <div className="nyt-review-time">
          <Clock style={{width: '12px', height: '12px', marginRight: '4px'}} />
          {formatTime(review.timestamp)}
        </div>
      </div>

      {/* Replies Section */}
      {showReplies && (
        <div style={{
          marginTop: '25px',
          paddingTop: '25px',
          borderTop: '1px solid var(--nyt-border)'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '30px',
            color: 'var(--nyt-light-gray)'
          }}>
            <MessageCircle style={{width: '32px', height: '32px', margin: '0 auto 15px', opacity: '0.5'}} />
            <p style={{fontSize: '0.9rem', margin: '0'}}>No replies yet</p>
          </div>
        </div>
      )}
    </article>
  )
}
