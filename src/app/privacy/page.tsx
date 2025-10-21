'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle, CheckCircle, Clock } from 'lucide-react'

export default function PrivacyPolicyPage() {
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
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="nyt-container" style={{marginTop: '40px', marginBottom: '60px'}}>
        <div style={{
          background: 'linear-gradient(135deg, var(--nyt-black) 0%, var(--nyt-accent) 100%)',
          padding: '80px 60px',
          borderRadius: '12px',
          color: 'var(--nyt-white)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            opacity: '0.1',
            fontSize: '8rem',
            fontFamily: 'Playfair Display, serif'
          }}>
            🛡️
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Privacy Policy
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            Your privacy is protected by cryptographic certainty. Learn how we use zero-knowledge 
            proofs to ensure complete anonymity while maintaining platform integrity.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="nyt-container">
        <div className="nyt-grid">
          <div className="nyt-main">
            {/* Last Updated */}
            <div style={{
              background: 'var(--nyt-cream)',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '40px',
              border: '1px solid var(--nyt-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <Clock style={{width: '20px', height: '20px', color: 'var(--nyt-accent)'}} />
              <span style={{color: 'var(--nyt-black)', fontWeight: '600'}}>
                Last Updated: January 15, 2025
              </span>
            </div>

            {/* Introduction */}
            <motion.article 
              className="nyt-article featured"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="nyt-headline large">Our Commitment to Your Privacy</h2>
              <div className="nyt-content">
                <p>
                  At Medicare Reviews, we believe privacy is a fundamental human right, not a feature. 
                  Our revolutionary platform uses advanced zero-knowledge proof technology to ensure 
                  that your identity remains completely anonymous while still allowing us to verify 
                  that you are a real, authentic user.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, and protect your information in 
                  accordance with our privacy-first principles. Unlike traditional platforms that 
                  collect and store personal data, we&apos;ve built our system from the ground up to 
                  protect your privacy through cryptographic certainty.
                </p>
                <div style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                  padding: '25px',
                  borderRadius: '8px',
                  border: '1px solid var(--nyt-border)',
                  marginTop: '25px'
                }}>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: 'var(--nyt-red)',
                    marginBottom: '15px'
                  }}>
                    🔒 Zero-Knowledge Privacy Promise
                  </h3>
                  <p style={{color: 'var(--nyt-black)', lineHeight: '1.6', marginBottom: '15px'}}>
                    We can prove you are a real user without knowing who you are, where you are, 
                    or any other personal information about you. This is mathematically guaranteed 
                    through zero-knowledge proof technology.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* Information We Collect */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Information We Collect</h2>
              <div className="nyt-content">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '25px',
                  marginTop: '30px'
                }}>
                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    textAlign: 'center'
                  }}>
                    <UserCheck style={{
                      width: '48px',
                      height: '48px',
                      color: 'var(--nyt-accent)',
                      margin: '0 auto 15px'
                    }} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      Authentication Data
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Zero-knowledge proofs that verify you're real without revealing your identity
                    </p>
                  </div>
                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    textAlign: 'center'
                  }}>
                    <Database style={{
                      width: '48px',
                      height: '48px',
                      color: 'var(--nyt-red)',
                      margin: '0 auto 15px'
                    }} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      Review Content
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Your anonymous reviews and feedback (stored without personal identifiers)
                    </p>
                  </div>
                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    textAlign: 'center'
                  }}>
                    <Eye style={{
                      width: '48px',
                      height: '48px',
                      color: 'var(--nyt-gray)',
                      margin: '0 auto 15px'
                    }} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      Usage Analytics
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Anonymous platform usage data (no personal information collected)
                    </p>
                  </div>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                  padding: '30px',
                  borderRadius: '8px',
                  border: '1px solid var(--nyt-border)',
                  marginTop: '30px'
                }}>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: 'var(--nyt-black)',
                    marginBottom: '20px'
                  }}>
                    What We DON'T Collect
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '15px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: 'var(--nyt-black)',
                      fontSize: '0.9rem'
                    }}>
                      <AlertTriangle style={{width: '16px', height: '16px', color: 'var(--nyt-red)'}} />
                      <span>Names or personal identifiers</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: 'var(--nyt-black)',
                      fontSize: '0.9rem'
                    }}>
                      <AlertTriangle style={{width: '16px', height: '16px', color: 'var(--nyt-red)'}} />
                      <span>Email addresses</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: 'var(--nyt-black)',
                      fontSize: '0.9rem'
                    }}>
                      <AlertTriangle style={{width: '16px', height: '16px', color: 'var(--nyt-red)'}} />
                      <span>Phone numbers</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: 'var(--nyt-black)',
                      fontSize: '0.9rem'
                    }}>
                      <AlertTriangle style={{width: '16px', height: '16px', color: 'var(--nyt-red)'}} />
                      <span>Physical addresses</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: 'var(--nyt-black)',
                      fontSize: '0.9rem'
                    }}>
                      <AlertTriangle style={{width: '16px', height: '16px', color: 'var(--nyt-red)'}} />
                      <span>IP addresses</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: 'var(--nyt-black)',
                      fontSize: '0.9rem'
                    }}>
                      <AlertTriangle style={{width: '16px', height: '16px', color: 'var(--nyt-red)'}} />
                      <span>Location data</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* How We Use Information */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">How We Use Your Information</h2>
              <div className="nyt-content">
                <p>
                  Since we don&apos;t collect personal information, we use the limited data we have access 
                  to solely for the purpose of providing and improving our privacy-preserving platform:
                </p>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px',
                  marginTop: '30px'
                }}>
                  <div style={{
                    padding: '20px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <CheckCircle style={{
                      width: '24px',
                      height: '24px',
                      color: 'var(--nyt-accent)',
                      marginBottom: '10px'
                    }} />
                    <h4 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      Platform Authentication
                    </h4>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Verify user authenticity through zero-knowledge proofs without storing identity data
                    </p>
                  </div>

                  <div style={{
                    padding: '20px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <CheckCircle style={{
                      width: '24px',
                      height: '24px',
                      color: 'var(--nyt-accent)',
                      marginBottom: '10px'
                    }} />
                    <h4 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      Content Moderation
                    </h4>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Ensure platform safety and authenticity while maintaining complete anonymity
                    </p>
                  </div>

                  <div style={{
                    padding: '20px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <CheckCircle style={{
                      width: '24px',
                      height: '24px',
                      color: 'var(--nyt-accent)',
                      marginBottom: '10px'
                    }} />
                    <h4 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      Platform Improvement
                    </h4>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Analyze anonymous usage patterns to improve user experience and platform functionality
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Data Protection */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Data Protection & Security</h2>
              <div className="nyt-content">
                <div style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                  padding: '30px',
                  borderRadius: '8px',
                  border: '1px solid var(--nyt-border)',
                  marginTop: '30px'
                }}>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: 'var(--nyt-black)',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <Shield style={{width: '32px', height: '32px', color: 'var(--nyt-red)'}} />
                    Cryptographic Security Measures
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px'
                  }}>
                    <div>
                      <h4 style={{
                        fontWeight: '600',
                        color: 'var(--nyt-black)',
                        marginBottom: '8px'
                      }}>
                        Zero-Knowledge Proofs
                      </h4>
                      <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                        Mathematical proofs that verify authenticity without revealing identity
                      </p>
                    </div>
                    <div>
                      <h4 style={{
                        fontWeight: '600',
                        color: 'var(--nyt-black)',
                        marginBottom: '8px'
                      }}>
                        End-to-End Encryption
                      </h4>
                      <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                        All data transmission is encrypted using industry-standard protocols
                      </p>
                    </div>
                    <div>
                      <h4 style={{
                        fontWeight: '600',
                        color: 'var(--nyt-black)',
                        marginBottom: '8px'
                      }}>
                        No Data Storage
                      </h4>
                      <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                        Personal information is never stored on our servers
                      </p>
                    </div>
                    <div>
                      <h4 style={{
                        fontWeight: '600',
                        color: 'var(--nyt-black)',
                        marginBottom: '8px'
                      }}>
                        Regular Audits
                      </h4>
                      <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                        Third-party security audits ensure ongoing protection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Your Rights */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Your Privacy Rights</h2>
              <div className="nyt-content">
                <p>
                  Since we don&apos;t collect personal information, traditional data subject rights don&apos;t 
                  apply in the same way. However, you have complete control over your anonymous 
                  participation on our platform:
                </p>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '25px',
                  marginTop: '30px'
                }}>
                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <Lock style={{
                      width: '32px',
                      height: '32px',
                      color: 'var(--nyt-accent)',
                      marginBottom: '15px'
                    }} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      Complete Anonymity
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Your identity is mathematically protected through zero-knowledge proofs. 
                      We cannot identify you even if we wanted to.
                    </p>
                  </div>

                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <Eye style={{
                      width: '32px',
                      height: '32px',
                      color: 'var(--nyt-accent)',
                      marginBottom: '15px'
                    }} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      Content Control
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      You can delete your anonymous reviews at any time. Since we don&apos;t know who 
                      you are, you control your content through your authentication keys.
                    </p>
                  </div>

                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <Shield style={{
                      width: '32px',
                      height: '32px',
                      color: 'var(--nyt-accent)',
                      marginBottom: '15px'
                    }} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      No Data Selling
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      We never sell, rent, or share personal data because we don&apos;t collect any. 
                      Your privacy is protected by design.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <motion.div 
            className="nyt-sidebar"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">Quick Privacy Facts</h3>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Data Collected</div>
                <div className="nyt-sidebar-item-content">Zero Personal Information</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Privacy Level</div>
                <div className="nyt-sidebar-item-content">Cryptographic Certainty</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Data Sharing</div>
                <div className="nyt-sidebar-item-content">Never</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Retention</div>
                <div className="nyt-sidebar-item-content">No Personal Data Stored</div>
              </div>
            </div>

            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">Related Policies</h3>
              <div style={{marginTop: '20px'}}>
                <Link href="/terms" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  display: 'block',
                  marginBottom: '10px',
                  padding: '8px 0',
                  borderBottom: '1px solid var(--nyt-border)'
                }}>
                  Terms of Service
                </Link>
                <Link href="/compliance" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  display: 'block',
                  marginBottom: '10px',
                  padding: '8px 0',
                  borderBottom: '1px solid var(--nyt-border)'
                }}>
                  HIPAA Compliance
                </Link>
                <Link href="/do-not-sell" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  display: 'block',
                  padding: '8px 0'
                }}>
                  Do Not Sell My Data
                </Link>
              </div>
            </div>

            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">Contact Privacy Team</h3>
              <p style={{
                color: 'var(--nyt-gray)',
                fontSize: '0.9rem',
                lineHeight: '1.5',
                marginBottom: '20px'
              }}>
                Questions about our privacy practices? We're here to help.
              </p>
              <Link href="/contact" className="nyt-button" style={{
                backgroundColor: 'var(--nyt-accent)',
                width: '100%',
                textAlign: 'center',
                display: 'block'
              }}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="nyt-container" style={{marginTop: '60px', marginBottom: '60px'}}>
        <div style={{
          background: 'linear-gradient(135deg, var(--nyt-accent) 0%, var(--nyt-red) 100%)',
          padding: '60px 40px',
          borderRadius: '12px',
          color: 'var(--nyt-white)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '20px'
          }}>
            Your Privacy is Our Priority
          </h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 30px',
            opacity: '0.95'
          }}>
            Experience the future of privacy-preserving healthcare reviews. Your anonymity is 
            protected by mathematical certainty, not just promises.
          </p>
          <Link href="/" className="nyt-button" style={{
            backgroundColor: 'var(--nyt-white)',
            color: 'var(--nyt-black)',
            padding: '15px 30px',
            fontSize: '1rem'
          }}>
            Start Your Anonymous Journey
          </Link>
        </div>
      </div>
    </div>
  )
}
