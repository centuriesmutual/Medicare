'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, CheckCircle, Loader2, User, Settings } from 'lucide-react'

export default function LoginPage() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authStep, setAuthStep] = useState(0)

  const handleZKAuth = async () => {
    setIsAuthenticating(true)
    setAuthStep(1)
    
    // Simulate ZK proof generation
    await new Promise(resolve => setTimeout(resolve, 2000))
    setAuthStep(2)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    setAuthStep(3)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsAuthenticated(true)
    setIsAuthenticating(false)
  }

  const authSteps = [
    'Initializing cryptographic parameters...',
    'Generating zero-knowledge proof...',
    'Verifying proof without revealing identity...',
    'Authentication complete!'
  ]

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
            <Link href="/" style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--nyt-gray)', textDecoration: 'none'}}>
              <ArrowLeft style={{width: '16px', height: '16px'}} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="nyt-container" style={{paddingTop: '40px', paddingBottom: '40px'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <article className="nyt-article">
            <h1 className="nyt-headline large" style={{textAlign: 'center', marginBottom: '30px'}}>
              User Dashboard
            </h1>
            
            <div className="nyt-content" style={{textAlign: 'center', marginBottom: '40px'}}>
              <p style={{fontSize: '1.1rem', marginBottom: '20px'}}>
                Access your anonymous review dashboard and manage your privacy settings.
              </p>
              <p style={{color: 'var(--nyt-gray)'}}>
                Your identity remains protected through zero-knowledge authentication.
              </p>
            </div>

            {!isAuthenticated ? (
              <div style={{textAlign: 'center'}}>
                {!isAuthenticating ? (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                    marginTop: '40px'
                  }}>
                    <div style={{
                      padding: '30px',
                      border: '2px solid var(--nyt-accent)',
                      borderRadius: '8px',
                      textAlign: 'center',
                      backgroundColor: 'var(--nyt-cream)'
                    }}>
                      <Shield style={{width: '48px', height: '48px', color: 'var(--nyt-accent)', margin: '0 auto 20px'}} />
                      <h3 style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px'}}>Zero-Knowledge Authentication</h3>
                      <p style={{fontSize: '0.95rem', color: 'var(--nyt-gray)', marginBottom: '20px'}}>
                        Prove your identity without revealing personal information using advanced cryptographic technology.
                      </p>
                      <button 
                        onClick={handleZKAuth}
                        className="nyt-button"
                        style={{backgroundColor: 'var(--nyt-accent)', padding: '12px 24px'}}
                      >
                        Start ZK Authentication
                      </button>
                    </div>
                    
                    <div style={{
                      padding: '30px',
                      border: '1px solid var(--nyt-border)',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      <Eye style={{width: '48px', height: '48px', color: 'var(--nyt-gray)', margin: '0 auto 20px'}} />
                      <h3 style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px'}}>Anonymous Access</h3>
                      <p style={{fontSize: '0.95rem', color: 'var(--nyt-gray)', marginBottom: '20px'}}>
                        Browse reviews and read community stories without authentication.
                      </p>
                      <Link href="/" className="nyt-button" style={{backgroundColor: 'var(--nyt-gray)', padding: '12px 24px'}}>
                        Browse Reviews
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div style={{marginBottom: '40px'}}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '12px',
                      marginBottom: '20px'
                    }}>
                      <Loader2 style={{width: '24px', height: '24px', animation: 'spin 1s linear infinite'}} />
                      <span style={{fontSize: '1.1rem', fontWeight: '600'}}>
                        {authSteps[authStep]}
                      </span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '4px',
                      backgroundColor: 'var(--nyt-border)',
                      borderRadius: '2px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${((authStep + 1) / authSteps.length) * 100}%`,
                        height: '100%',
                        backgroundColor: 'var(--nyt-accent)',
                        transition: 'width 0.5s ease'
                      }} />
                    </div>
                  </div>
                )}

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '20px',
                  marginTop: '40px'
                }}>
                  <div style={{
                    padding: '20px',
                    border: '1px solid var(--nyt-border)',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <Lock style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 12px'}} />
                    <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '8px'}}>Complete Privacy</h4>
                    <p style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                      No personal information is ever revealed
                    </p>
                  </div>
                  
                  <div style={{
                    padding: '20px',
                    border: '1px solid var(--nyt-border)',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <Shield style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 12px'}} />
                    <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '8px'}}>Cryptographic Security</h4>
                    <p style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                      Your identity is verified using mathematical proofs
                    </p>
                  </div>
                  
                  <div style={{
                    padding: '20px',
                    border: '1px solid var(--nyt-border)',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <Eye style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 12px'}} />
                    <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '8px'}}>Anonymous Reviews</h4>
                    <p style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                      Share honest feedback without fear
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '40px',
                backgroundColor: 'var(--nyt-cream)',
                borderRadius: '8px',
                border: '2px solid var(--nyt-accent)'
              }}>
                <CheckCircle style={{width: '48px', height: '48px', color: 'var(--nyt-accent)', margin: '0 auto 20px'}} />
                <h2 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px', color: 'var(--nyt-black)'}}>
                  Welcome to Your Dashboard!
                </h2>
                <p style={{fontSize: '1.1rem', marginBottom: '30px', color: 'var(--nyt-gray)'}}>
                  You are now authenticated with zero-knowledge proofs. Your identity is verified while maintaining complete privacy.
                </p>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '20px',
                  marginTop: '30px'
                }}>
                  <div style={{
                    padding: '20px',
                    border: '1px solid var(--nyt-border)',
                    borderRadius: '8px',
                    backgroundColor: 'white'
                  }}>
                    <User style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 12px'}} />
                    <h3 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '8px'}}>My Reviews</h3>
                    <p style={{fontSize: '0.9rem', color: 'var(--nyt-gray)', marginBottom: '15px'}}>
                      View and manage your anonymous reviews
                    </p>
                    <Link href="/" className="nyt-button" style={{
                      backgroundColor: 'var(--nyt-accent)',
                      padding: '8px 16px',
                      fontSize: '0.85rem'
                    }}>
                      View Reviews
                    </Link>
                  </div>
                  
                  <div style={{
                    padding: '20px',
                    border: '1px solid var(--nyt-border)',
                    borderRadius: '8px',
                    backgroundColor: 'white'
                  }}>
                    <Settings style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 12px'}} />
                    <h3 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '8px'}}>Privacy Settings</h3>
                    <p style={{fontSize: '0.9rem', color: 'var(--nyt-gray)', marginBottom: '15px'}}>
                      Manage your privacy and security preferences
                    </p>
                    <button className="nyt-button" style={{
                      backgroundColor: 'var(--nyt-gray)',
                      padding: '8px 16px',
                      fontSize: '0.85rem'
                    }}>
                      Settings
                    </button>
                  </div>
                </div>
              </div>
            )}
          </article>
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
              <Link href="/privacy" style={{
                color: 'var(--nyt-light-gray)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                Privacy Policy
              </Link>
              <Link href="/terms" style={{
                color: 'var(--nyt-light-gray)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                Terms of Service
              </Link>
              <Link href="/about" style={{
                color: 'var(--nyt-light-gray)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}>
                About
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}