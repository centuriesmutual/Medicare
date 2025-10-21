'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Users, Award, Heart, Lock } from 'lucide-react'

export default function AboutPage() {
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
          background: 'linear-gradient(135deg, var(--nyt-red) 0%, var(--nyt-accent) 100%)',
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
            &ldquo;
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            About Medicare Reviews
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            Pioneering the future of anonymous healthcare feedback through zero-knowledge proof technology, 
            ensuring complete privacy while fostering authentic community dialogue.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="nyt-container">
        <div className="nyt-grid">
          <div className="nyt-main">
            {/* Our Story */}
            <motion.article 
              className="nyt-article featured"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="nyt-headline large">Our Story</h2>
              <div className="nyt-content">
                <p>
                  Medicare Reviews was born from a simple yet profound realization: healthcare experiences 
                  deserve to be shared honestly and anonymously, without fear of retribution or privacy 
                  breaches. Founded in 2024 by a team of privacy advocates, cryptographers, and healthcare 
                  professionals, we set out to revolutionize how communities share feedback about their 
                  healthcare experiences.
                </p>
                <p>
                  Our platform combines the familiar, trustworthy design of traditional newspapers with 
                  cutting-edge zero-knowledge proof technology. This innovative approach ensures that every 
                  review is cryptographically verified while maintaining complete anonymity for our users. 
                  We believe that authentic feedback drives improvement, and privacy protection enables 
                  honest communication.
                </p>
                <p>
                  Today, Medicare Reviews serves as the premier destination for anonymous healthcare 
                  feedback, trusted by thousands of users who value both authenticity and privacy. Our 
                  commitment to zero-knowledge architecture means we can verify user authenticity without 
                  ever storing personal information.
                </p>
              </div>
            </motion.article>

            {/* Mission & Vision */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Mission & Vision</h2>
              <div className="nyt-content">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '30px',
                  marginTop: '30px'
                }}>
                  <div style={{
                    padding: '30px',
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: 'var(--nyt-red)',
                      marginBottom: '15px'
                    }}>
                      Our Mission
                    </h3>
                    <p style={{color: 'var(--nyt-black)', lineHeight: '1.6'}}>
                      To empower healthcare communities with anonymous, authentic feedback tools that 
                      preserve privacy through cryptographic certainty, fostering transparency and 
                      improvement in healthcare services.
                    </p>
                  </div>
                  <div style={{
                    padding: '30px',
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: 'var(--nyt-accent)',
                      marginBottom: '15px'
                    }}>
                      Our Vision
                    </h3>
                    <p style={{color: 'var(--nyt-black)', lineHeight: '1.6'}}>
                      A world where healthcare feedback is honest, anonymous, and privacy-preserving, 
                      creating a global community that drives healthcare excellence through authentic 
                      dialogue and cryptographic privacy protection.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Core Values */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Our Core Values</h2>
              <div className="nyt-content">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '25px',
                  marginTop: '30px'
                }}>
                  <div style={{
                    textAlign: 'center',
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <Shield style={{
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
                      Privacy First
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Cryptographic privacy protection ensures user anonymity through zero-knowledge proofs.
                    </p>
                  </div>
                  <div style={{
                    textAlign: 'center',
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <Heart style={{
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
                      Authenticity
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      We promote honest, genuine feedback that drives real improvement in healthcare services.
                    </p>
                  </div>
                  <div style={{
                    textAlign: 'center',
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <Users style={{
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
                      Community
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Building supportive communities where healthcare experiences can be shared safely.
                    </p>
                  </div>
                  <div style={{
                    textAlign: 'center',
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <Award style={{
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
                      Excellence
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Commitment to the highest standards in privacy technology and user experience.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Technology */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Revolutionary Technology</h2>
              <div className="nyt-content">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '40px',
                  marginTop: '30px',
                  padding: '30px',
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                  borderRadius: '8px',
                  border: '1px solid var(--nyt-border)'
                }}>
                  <div style={{flex: '1'}}>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      marginBottom: '15px'
                    }}>
                      Zero-Knowledge Proofs
                    </h3>
                    <p style={{color: 'var(--nyt-black)', lineHeight: '1.6', marginBottom: '15px'}}>
                      Our platform uses advanced cryptographic zero-knowledge proof technology to verify 
                      user authenticity without storing any personal information. This means we can ensure 
                      the legitimacy of reviews while maintaining complete anonymity.
                    </p>
                    <p style={{color: 'var(--nyt-gray)', lineHeight: '1.6'}}>
                      This breakthrough technology allows users to prove they are real, verified individuals 
                      without revealing their identity, location, or any other personal data.
                    </p>
                  </div>
                  <div style={{
                    fontSize: '4rem',
                    color: 'var(--nyt-accent)',
                    opacity: '0.7'
                  }}>
                    <Lock />
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
              <h3 className="nyt-sidebar-title">Quick Facts</h3>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Founded</div>
                <div className="nyt-sidebar-item-content">2024</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Technology</div>
                <div className="nyt-sidebar-item-content">Zero-Knowledge Proofs</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Compliance</div>
                <div className="nyt-sidebar-item-content">HIPAA Ready</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Privacy Level</div>
                <div className="nyt-sidebar-item-content">Cryptographic Certainty</div>
              </div>
            </div>

            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">Get Involved</h3>
              <div style={{marginTop: '20px'}}>
                <Link href="/careers" className="nyt-button" style={{
                  width: '100%',
                  textAlign: 'center',
                  display: 'block',
                  marginBottom: '15px'
                }}>
                  Join Our Team
                </Link>
                <Link href="/contact" className="nyt-button" style={{
                  backgroundColor: 'var(--nyt-accent)',
                  width: '100%',
                  textAlign: 'center',
                  display: 'block'
                }}>
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">Learn More</h3>
              <div style={{marginTop: '20px'}}>
                <Link href="/zk-proofs" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  display: 'block',
                  marginBottom: '10px',
                  padding: '8px 0',
                  borderBottom: '1px solid var(--nyt-border)'
                }}>
                  How Zero-Knowledge Proofs Work
                </Link>
                <Link href="/privacy" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  display: 'block',
                  marginBottom: '10px',
                  padding: '8px 0',
                  borderBottom: '1px solid var(--nyt-border)'
                }}>
                  Privacy Policy
                </Link>
                <Link href="/compliance" style={{
                  color: 'var(--nyt-accent)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  display: 'block',
                  padding: '8px 0'
                }}>
                  HIPAA Compliance
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="nyt-container" style={{marginTop: '60px', marginBottom: '60px'}}>
        <div style={{
          background: 'linear-gradient(135deg, var(--nyt-black) 0%, var(--nyt-gray) 100%)',
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
            Ready to Join Our Mission?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 30px',
            opacity: '0.9'
          }}>
            Be part of the revolution in anonymous healthcare feedback. Your privacy is protected 
            by cryptographic certainty.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/" className="nyt-button" style={{
              backgroundColor: 'var(--nyt-red)',
              padding: '15px 30px',
              fontSize: '1rem'
            }}>
              Start Reviewing
            </Link>
            <Link href="/careers" className="nyt-button" style={{
              backgroundColor: 'var(--nyt-accent)',
              padding: '15px 30px',
              fontSize: '1rem'
            }}>
              Work With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
