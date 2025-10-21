'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { motion } from 'framer-motion'
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
            <motion.article 
              className="nyt-article featured" 
              style={{position: 'relative', paddingBottom: '50px'}}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="nyt-quote">&ldquo;</div>
              <motion.h1 
                className="nyt-headline large"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Anonymous Reviews Revolutionize Community Feedback
              </motion.h1>
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
            </motion.article>

            <div className="nyt-divider"></div>

            {/* Ad Network Call-to-Action Section */}
            <div style={{width: '100%', marginTop: '40px'}}>
              <article className="nyt-article" style={{maxWidth: 'none', width: '100%'}}>
                <h2 className="nyt-headline medium" style={{marginBottom: '20px', textAlign: 'center'}}>
                  Join Our HIPAA-Compliant Ad Network
                </h2>
                
                <div className="nyt-content" style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
                  <p style={{fontSize: '1.1rem', marginBottom: '30px'}}>
                    Partner with us to reach healthcare communities through our secure, 
                    privacy-preserving advertising platform.
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginTop: '30px'
                  }}>
                    <Link href="/ad-network" className="nyt-button" style={{
                      backgroundColor: 'var(--nyt-accent)',
                      padding: '15px 30px',
                      fontSize: '1rem'
                    }}>
                      Learn More About Ad Network
                    </Link>
                    <Link href="/earning" className="nyt-button" style={{
                      backgroundColor: 'var(--nyt-gray)',
                      padding: '15px 30px',
                      fontSize: '1rem'
                    }}>
                      Start Earning
                    </Link>
                  </div>
                </div>
              </article>
            </div>

          </div>

          {/* Sidebar */}
          <motion.div 
            className="nyt-sidebar"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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

            {/* HIPAA Ad Network Information */}
            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">HIPAA-Compliant Ad Network</h3>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Federal Standards</div>
                <div className="nyt-sidebar-item-content">
                  All healthcare-related interactions are processed through certified 
                  privacy-preserving protocols that meet federal healthcare data protection standards.
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Professional Footer */}
      <motion.footer 
        style={{
          backgroundColor: 'var(--nyt-black)',
          color: 'var(--nyt-cream)',
          padding: '40px 0',
          marginTop: '60px',
          borderTop: '3px solid var(--nyt-accent)'
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="nyt-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
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
                Platform
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/zk-proofs" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Zero-Knowledge Proofs
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/cryptographic-auth" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Cryptographic Authentication
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/anonymous-reviews" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Anonymous Reviews
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/privacy-first" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Privacy-First Design
                  </Link>
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
                Company
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/about" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    About Us
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/careers" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Careers
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/press" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Press
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/contact" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Contact
                  </Link>
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
                Legal
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/privacy" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Privacy Policy
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/terms" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Terms of Service
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/do-not-sell" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Do Not Sell My Data
                  </Link>
                </li>
                <li style={{marginBottom: '6px'}}>
                  <Link href="/compliance" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    HIPAA Compliance
                  </Link>
                </li>
              </ul>
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
              <Link href="/sitemap" style={{
                color: 'var(--nyt-light-gray)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                Sitemap
              </Link>
              <Link href="/accessibility" style={{
                color: 'var(--nyt-light-gray)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </motion.footer>

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