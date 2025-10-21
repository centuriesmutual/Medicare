'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Key, Fingerprint, Cpu, Database, CheckCircle, Zap, Brain, Users } from 'lucide-react'

export default function CryptographicAuthPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f8f9fa'}}>
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

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: 'var(--nyt-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="nyt-container">
          <div style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto'}}>
            <div style={{
              width: '120px',
              height: '120px',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 40px',
              color: 'var(--nyt-accent)'
            }}>
              <Fingerprint style={{width: '60px', height: '60px'}} />
            </div>
            
            <h1 className="nyt-headline large" style={{
              fontSize: '4.5rem',
              marginBottom: '30px',
              color: 'white'
            }}>
              Cryptographic Authentication
            </h1>
            
            <div className="nyt-content" style={{marginBottom: '50px'}}>
              <p style={{fontSize: '1.8rem', marginBottom: '30px', fontWeight: '500'}}>
                Secure identity verification without compromising privacy
              </p>
              <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '1.3rem', lineHeight: '1.6'}}>
                Advanced cryptographic protocols that authenticate your identity and credentials 
                while maintaining complete anonymity and privacy protection.
              </p>
            </div>

            <div style={{
              display: 'flex',
              gap: '30px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '50px'
            }}>
              <Link href="/earning" className="nyt-button" style={{
                backgroundColor: 'white',
                color: 'var(--nyt-accent)',
                padding: '20px 40px',
                fontSize: '1.2rem',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease'
              }}>
                Start Authentication
              </Link>
              <Link href="/zk-proofs" className="nyt-button" style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '20px 40px',
                fontSize: '1.2rem',
                border: '2px solid white'
              }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: 'var(--nyt-white)',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0'
      }}>
        <div className="nyt-container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <h2 className="nyt-headline large" style={{
              fontSize: '3.5rem',
              marginBottom: '30px',
              color: 'var(--nyt-black)'
            }}>
              How Cryptographic Authentication Works
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'var(--nyt-gray)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Multi-layered security protocols that verify identity without exposing personal data
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            marginBottom: '60px'
          }}>
            <div style={{
              padding: '40px',
              backgroundColor: 'var(--nyt-cream)',
              textAlign: 'center',
              border: '2px solid var(--nyt-accent)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: 'white'
              }}>
                <Key style={{width: '40px', height: '40px'}} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Key Generation
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6'
              }}>
                Generate unique cryptographic keys that serve as your digital identity 
                without revealing any personal information.
              </p>
            </div>
            
            <div style={{
              padding: '40px',
              backgroundColor: 'var(--nyt-cream)',
              textAlign: 'center',
              border: '2px solid var(--nyt-accent)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: 'white'
              }}>
                <Shield style={{width: '40px', height: '40px'}} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Secure Verification
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6'
              }}>
                Advanced algorithms verify your credentials and identity while maintaining 
                complete anonymity and privacy protection.
              </p>
            </div>
            
            <div style={{
              padding: '40px',
              backgroundColor: 'var(--nyt-cream)',
              textAlign: 'center',
              border: '2px solid var(--nyt-accent)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: 'white'
              }}>
                <Lock style={{width: '40px', height: '40px'}} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Privacy Protection
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6'
              }}>
                Your personal information remains encrypted and anonymous while still 
                proving your identity and credentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: 'var(--nyt-black)',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        color: 'white'
      }}>
        <div className="nyt-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}>
            <div>
              <h2 className="nyt-headline large" style={{
                fontSize: '3.5rem',
                marginBottom: '30px',
                color: 'white'
              }}>
                Advanced Security Features
              </h2>
              
              <div className="nyt-content" style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
                <p style={{marginBottom: '25px'}}>
                  Our cryptographic authentication system employs cutting-edge security protocols 
                  to ensure your identity is verified without compromising your privacy.
                </p>
                <p style={{color: 'var(--nyt-light-gray)', fontSize: '1.1rem'}}>
                  Multi-factor authentication, biometric verification, and zero-knowledge proofs 
                  work together to create an unbreakable security framework.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginTop: '40px'
              }}>
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  textAlign: 'center'
                }}>
                  <Cpu style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 15px'}} />
                  <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px'}}>
                    Multi-Factor Auth
                  </h4>
                  <p style={{fontSize: '0.9rem', opacity: 0.9}}>
                    Multiple verification layers for maximum security
                  </p>
                </div>
                <div style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  textAlign: 'center'
                }}>
                  <Brain style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 15px'}} />
                  <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px'}}>
                    AI-Powered
                  </h4>
                  <p style={{fontSize: '0.9rem', opacity: 0.9}}>
                    Machine learning enhances security detection
                  </p>
                </div>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'var(--nyt-accent)',
              padding: '60px'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '30px',
                color: 'white'
              }}>
                Security Protocols
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <div style={{
                  padding: '20px',
                  backgroundColor: 'rgba(255,255,255,0.2)'
                }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px'
                  }}>
                    End-to-End Encryption
                  </h4>
                  <p style={{fontSize: '0.95rem', opacity: 0.9}}>
                    All data is encrypted from source to destination using military-grade algorithms
                  </p>
                </div>
                
                <div style={{
                  padding: '20px',
                  backgroundColor: 'rgba(255,255,255,0.2)'
                }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px'
                  }}>
                    Biometric Verification
                  </h4>
                  <p style={{fontSize: '0.95rem', opacity: 0.9}}>
                    Advanced biometric authentication ensures only you can access your account
                  </p>
                </div>
                
                <div style={{
                  padding: '20px',
                  backgroundColor: 'rgba(255,255,255,0.2)'
                }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px'
                  }}>
                    Zero-Knowledge Architecture
                  </h4>
                  <p style={{fontSize: '0.95rem', opacity: 0.9}}>
                    System never stores or accesses your personal information
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Applications */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0'
      }}>
        <div className="nyt-container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <h2 className="nyt-headline large" style={{
              fontSize: '3.5rem',
              marginBottom: '30px',
              color: 'var(--nyt-black)'
            }}>
              Healthcare Applications
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'var(--nyt-gray)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Secure authentication for healthcare providers, patients, and insurance systems
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '40px'
          }}>
            <div style={{
              padding: '40px',
              backgroundColor: 'white',
              border: '2px solid var(--nyt-accent)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: 'white'
              }}>
                <Users style={{width: '40px', height: '40px'}} />
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Patient Authentication
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6'
              }}>
                Secure patient identity verification for medical appointments, 
                prescription access, and healthcare services without compromising privacy.
              </p>
            </div>
            
            <div style={{
              padding: '40px',
              backgroundColor: 'white',
              border: '2px solid var(--nyt-accent)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--nyt-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: 'white'
              }}>
                <Database style={{width: '40px', height: '40px'}} />
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--nyt-black)'
              }}>
                Provider Verification
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--nyt-gray)',
                lineHeight: '1.6'
              }}>
                Verify healthcare provider credentials and qualifications while 
                maintaining complete anonymity and protecting sensitive information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: 'var(--nyt-accent)',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        color: 'white'
      }}>
        <div className="nyt-container">
          <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            <h2 className="nyt-headline large" style={{
              fontSize: '4rem',
              marginBottom: '30px',
              color: 'white'
            }}>
              Secure Your Healthcare Identity
            </h2>
            
            <p style={{
              fontSize: '1.5rem',
              marginBottom: '50px',
              opacity: 0.9,
              lineHeight: '1.6'
            }}>
              Experience the future of secure, private healthcare authentication.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '30px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '60px'
            }}>
              <Link href="/earning" className="nyt-button" style={{
                backgroundColor: 'white',
                color: 'var(--nyt-accent)',
                padding: '20px 40px',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                Start Authentication
              </Link>
              <Link href="/zk-proofs" className="nyt-button" style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '20px 40px',
                fontSize: '1.2rem',
                border: '2px solid white'
              }}>
                Learn More
              </Link>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '40px',
              marginTop: '60px'
            }}>
              <div style={{
                padding: '30px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}>
                <Shield style={{width: '40px', height: '40px', color: 'white', margin: '0 auto 20px'}} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  HIPAA Compliant
                </h3>
                <p style={{
                  fontSize: '1rem',
                  opacity: 0.9,
                  lineHeight: '1.5'
                }}>
                  Meets all federal healthcare privacy requirements
                </p>
              </div>
              
              <div style={{
                padding: '30px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}>
                <Lock style={{width: '40px', height: '40px', color: 'white', margin: '0 auto 20px'}} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  Military-Grade Security
                </h3>
                <p style={{
                  fontSize: '1rem',
                  opacity: 0.9,
                  lineHeight: '1.5'
                }}>
                  Advanced encryption protects your identity and data
                </p>
              </div>
              
              <div style={{
                padding: '30px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}>
                <Zap style={{width: '40px', height: '40px', color: 'white', margin: '0 auto 20px'}} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  Instant Verification
                </h3>
                <p style={{
                  fontSize: '1rem',
                  opacity: 0.9,
                  lineHeight: '1.5'
                }}>
                  Real-time authentication without compromising privacy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                Earning
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
                  <Link href="/cookies" style={{
                    color: 'var(--nyt-light-gray)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Cookie Policy
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
      </footer>
    </div>
  )
}
