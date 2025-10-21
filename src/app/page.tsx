'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MessageSquare, Shield, Eye, Plus, Heart, MessageCircle, BookOpen, Users, Star, TrendingUp, Calendar } from 'lucide-react'
import PostReview from '@/components/PostReview'
import ZKAuth from '@/components/ZKAuth'

interface Review {
  id: string
  content: string
  timestamp: number
  likes: number
  replies: number
  proof: string
}

export default function Home() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showPostForm, setShowPostForm] = useState(false)

  useEffect(() => {
    // Load reviews from localStorage or API
    const savedReviews = localStorage.getItem('medithreads-reviews')
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews))
    }
  }, [])

  const handleNewReview = (content: string, proof: string) => {
    const newReview: Review = {
      id: Date.now().toString(),
      content,
      timestamp: Date.now(),
      likes: 0,
      replies: 0,
      proof
    }
    
    const updatedReviews = [newReview, ...reviews]
    setReviews(updatedReviews)
    localStorage.setItem('medithreads-reviews', JSON.stringify(updatedReviews))
    setShowPostForm(false)
  }


  const getCurrentDate = () => {
    const now = new Date()
    return now.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen">
      {/* NYT-Style Header */}
      <header className="nyt-header">
        <div className="nyt-container">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div>
              <Link href="/" className="nyt-logo">Medicare Reviews</Link>
              <div className="nyt-tagline">Anonymous Reviews & Community Stories</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <Link href="/login" className="nyt-button" style={{padding: '8px 16px', fontSize: '0.85rem'}}>
                Login
              </Link>
              <div className="nyt-date">{getCurrentDate()}</div>
            </div>
          </div>
        </div>
      </header>

      {/* NYT-Style Grid Layout */}
      <div className="nyt-container">
        <div className="nyt-grid">
          {/* Main Content */}
          <div className="nyt-main">
            {/* Lead Story */}
            <article className="nyt-article featured" style={{position: 'relative', paddingBottom: '50px'}}>
              <div className="nyt-quote">&ldquo;</div>
              <h1 className="nyt-headline large">
                Anonymous Reviews Revolutionize Community Feedback
              </h1>
              <div className="nyt-byline">
                By Medicare Reviews Editorial Staff • {getCurrentDate()}
              </div>
              <div className="nyt-content">
                <p>
                  In a groundbreaking development for online communities, Medicare Reviews has introduced 
                  a revolutionary platform that allows users to share honest, anonymous reviews while 
                  maintaining complete privacy through zero-knowledge proof technology. This innovative 
                  approach addresses the growing need for authentic feedback in healthcare and other 
                  sensitive sectors.
                </p>
                <p>
                  The platform combines the familiar layout of traditional newspapers with cutting-edge 
                  cryptographic technology, creating an environment where users can share their experiences 
                  without fear of retribution or privacy breaches. Each review is cryptographically 
                  verified while maintaining complete anonymity.
                </p>
                <p>
                  &ldquo;This represents a paradigm shift in how we think about online privacy and community 
                  feedback,&rdquo; said a spokesperson for the platform. &ldquo;Users can now share their stories 
                  with confidence, knowing their identity is protected by mathematical certainty.&rdquo;
                </p>
              </div>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '20px'
              }}>
                <Link 
                  href="/read-more"
                  className="nyt-button"
                  style={{
                    backgroundColor: 'var(--nyt-red)',
                    padding: '14px 24px',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                >
                  Read More
                </Link>
              </div>
            </article>

          </div>

          {/* Sidebar */}
          <div className="nyt-sidebar">
            {/* Authentication Section */}
            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">Authentication</h3>
              {!isAuthenticated ? (
                <ZKAuth onAuthenticated={() => setIsAuthenticated(true)} />
              ) : (
                <div>
                  <div className="nyt-sidebar-item">
                    <div className="nyt-sidebar-item-title">Status</div>
                    <div className="nyt-sidebar-item-content" style={{color: 'var(--nyt-accent)'}}>
                      ✓ Authenticated with ZK Proofs
                    </div>
                  </div>
                  <button
                    onClick={() => setShowPostForm(true)}
                    className="nyt-button"
                    style={{width: '100%', marginTop: '20px'}}
                  >
                    <Plus style={{marginRight: '8px', width: '16px', height: '16px'}} />
                    Post Review
                  </button>
                </div>
              )}
            </div>



          </div>
        </div>
      </div>

      {/* Professional Footer */}
      <footer style={{
        backgroundColor: 'var(--nyt-black)',
        color: 'var(--nyt-cream)',
        padding: '40px 0',
        marginTop: '60px',
        borderTop: '3px solid var(--nyt-accent)'
      }}>
        <div className="nyt-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            marginBottom: '25px'
          }}>
            <div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'var(--nyt-cream)',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Medicare Reviews
              </h3>
              <p style={{
                color: 'var(--nyt-light-gray)',
                lineHeight: '1.5',
                marginBottom: '10px',
                fontSize: '0.9rem'
              }}>
                The premier platform for anonymous healthcare reviews powered by zero-knowledge proof technology.
              </p>
              <p style={{
                color: 'var(--nyt-light-gray)',
                fontSize: '0.85rem',
                lineHeight: '1.4'
              }}>
                Your privacy is protected by cryptographic certainty.
              </p>
            </div>
            
            <div>
              <h4 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--nyt-cream)',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Technology
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{marginBottom: '6px'}}>
                  <span style={{color: 'var(--nyt-light-gray)', fontSize: '0.85rem'}}>
                    Zero-Knowledge Proofs
                  </span>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <span style={{color: 'var(--nyt-light-gray)', fontSize: '0.85rem'}}>
                    Cryptographic Authentication
                  </span>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <span style={{color: 'var(--nyt-light-gray)', fontSize: '0.85rem'}}>
                    Anonymous Reviews
                  </span>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <span style={{color: 'var(--nyt-light-gray)', fontSize: '0.85rem'}}>
                    Privacy-First Design
                  </span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--nyt-cream)',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Contact
              </h4>
              <div style={{color: 'var(--nyt-light-gray)', fontSize: '0.85rem', lineHeight: '1.5'}}>
                <p style={{marginBottom: '6px'}}>
                  <a href="mailto:editor@medicarereviews.com" style={{
                    color: 'var(--nyt-light-gray)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Editorial: editor@medicarereviews.com
                  </a>
                </p>
                <p style={{marginBottom: '6px'}}>
                  <a href="mailto:support@medicarereviews.com" style={{
                    color: 'var(--nyt-light-gray)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Technical Support: support@medicarereviews.com
                  </a>
                </p>
                <p style={{marginBottom: '6px'}}>
                  <a href="mailto:privacy@medicarereviews.com" style={{
                    color: 'var(--nyt-light-gray)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Privacy Inquiries: privacy@medicarereviews.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid var(--nyt-border)',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{
              color: 'var(--nyt-light-gray)',
              fontSize: '0.85rem'
            }}>
              © 2025 Medicare Reviews. All rights reserved.
            </div>
            <div style={{
              display: 'flex',
              gap: '20px',
              fontSize: '0.85rem'
            }}>
              <a href="#" style={{
                color: 'var(--nyt-light-gray)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                Privacy Policy
              </a>
              <a href="#" style={{
                color: 'var(--nyt-light-gray)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                Terms of Service
              </a>
              <a href="#" style={{
                color: 'var(--nyt-light-gray)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                About
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Post Review Modal */}
      {showPostForm && (
        <PostReview 
          onPost={handleNewReview}
          onCancel={() => setShowPostForm(false)}
        />
      )}
    </div>
  )
}