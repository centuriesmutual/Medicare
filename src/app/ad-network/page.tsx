'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, TrendingUp, Users, CheckCircle, Star } from 'lucide-react'

export default function AdNetworkPage() {
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
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <article className="nyt-article">
            <h1 className="nyt-headline large" style={{textAlign: 'center', marginBottom: '30px'}}>
              HIPAA-Compliant Ad Network
            </h1>
            
            <div className="nyt-content" style={{textAlign: 'center', marginBottom: '40px'}}>
              <p style={{fontSize: '1.2rem', marginBottom: '20px'}}>
                Reach healthcare communities through our secure, privacy-preserving advertising platform.
              </p>
              <p style={{color: 'var(--nyt-gray)'}}>
                Partner with us to deliver targeted healthcare messaging while maintaining complete user anonymity.
              </p>
            </div>

            {/* Key Features Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              marginBottom: '50px'
            }}>
              <div style={{
                padding: '30px',
                border: '2px solid var(--nyt-accent)',
                borderRadius: '8px',
                textAlign: 'center',
                backgroundColor: 'var(--nyt-cream)'
              }}>
                <Shield style={{width: '48px', height: '48px', color: 'var(--nyt-accent)', margin: '0 auto 20px'}} />
                <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginBottom: '15px'}}>HIPAA Compliance</h3>
                <p style={{color: 'var(--nyt-gray)', lineHeight: '1.6'}}>
                  All advertising interactions are processed through certified privacy-preserving protocols 
                  that meet federal healthcare data protection standards.
                </p>
              </div>
              
              <div style={{
                padding: '30px',
                border: '1px solid var(--nyt-border)',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <Lock style={{width: '48px', height: '48px', color: 'var(--nyt-accent)', margin: '0 auto 20px'}} />
                <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginBottom: '15px'}}>Complete Anonymity</h3>
                <p style={{color: 'var(--nyt-gray)', lineHeight: '1.6'}}>
                  User interactions are tracked using cryptographic proofs that prove engagement 
                  occurred without revealing who engaged.
                </p>
              </div>
              
              <div style={{
                padding: '30px',
                border: '1px solid var(--nyt-border)',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <TrendingUp style={{width: '48px', height: '48px', color: 'var(--nyt-accent)', margin: '0 auto 20px'}} />
                <h3 style={{fontSize: '1.3rem', fontWeight: '700', marginBottom: '15px'}}>Verified Analytics</h3>
                <p style={{color: 'var(--nyt-gray)', lineHeight: '1.6'}}>
                  Receive aggregated insights about community interests and feedback patterns 
                  without access to individual user data.
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div style={{marginBottom: '50px'}}>
              <h2 className="nyt-headline medium" style={{textAlign: 'center', marginBottom: '30px'}}>
                How Our Ad Network Works
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
              }}>
                <div style={{
                  padding: '25px',
                  border: '1px solid var(--nyt-border)',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'var(--nyt-accent)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }}>
                    1
                  </div>
                  <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px'}}>Create Campaign</h4>
                  <p style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                    Design your healthcare message with our privacy-compliant tools
                  </p>
                </div>
                
                <div style={{
                  padding: '25px',
                  border: '1px solid var(--nyt-border)',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'var(--nyt-accent)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }}>
                    2
                  </div>
                  <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px'}}>Target Audience</h4>
                  <p style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                    Reach specific healthcare communities while maintaining anonymity
                  </p>
                </div>
                
                <div style={{
                  padding: '25px',
                  border: '1px solid var(--nyt-border)',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'var(--nyt-accent)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }}>
                    3
                  </div>
                  <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px'}}>Track Engagement</h4>
                  <p style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                    Monitor campaign performance through privacy-preserving analytics
                  </p>
                </div>
                
                <div style={{
                  padding: '25px',
                  border: '1px solid var(--nyt-border)',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'var(--nyt-accent)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }}>
                    4
                  </div>
                  <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px'}}>Get Insights</h4>
                  <p style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                    Receive verified, aggregated insights for community health improvement
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div style={{
              backgroundColor: 'var(--nyt-cream)',
              padding: '40px',
              borderRadius: '8px',
              marginBottom: '40px'
            }}>
              <h2 className="nyt-headline medium" style={{textAlign: 'center', marginBottom: '30px'}}>
                Why Choose Our Ad Network?
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px'
              }}>
                <div style={{textAlign: 'center'}}>
                  <CheckCircle style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 12px'}} />
                  <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '8px'}}>HIPAA Compliant</h4>
                  <p style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                    Meets federal healthcare data protection standards
                  </p>
                </div>
                
                <div style={{textAlign: 'center'}}>
                  <Users style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 12px'}} />
                  <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '8px'}}>Healthcare Focus</h4>
                  <p style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                    Reach engaged healthcare communities and providers
                  </p>
                </div>
                
                <div style={{textAlign: 'center'}}>
                  <Star style={{width: '32px', height: '32px', color: 'var(--nyt-accent)', margin: '0 auto 12px'}} />
                  <h4 style={{fontSize: '1rem', fontWeight: '600', marginBottom: '8px'}}>Quality Insights</h4>
                  <p style={{fontSize: '0.9rem', color: 'var(--nyt-gray)'}}>
                    Verified, aggregated data for better decision making
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div style={{textAlign: 'center'}}>
              <h2 className="nyt-headline medium" style={{marginBottom: '20px'}}>
                Ready to Get Started?
              </h2>
              <p style={{fontSize: '1.1rem', marginBottom: '30px', color: 'var(--nyt-gray)'}}>
                Join healthcare organizations already using our HIPAA-compliant ad network.
              </p>
              
              <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <Link href="/partnership" className="nyt-button" style={{
                  backgroundColor: 'var(--nyt-accent)',
                  padding: '15px 30px',
                  fontSize: '1rem'
                }}>
                  Start Earning
                </Link>
                <Link href="/" className="nyt-button" style={{
                  backgroundColor: 'var(--nyt-gray)',
                  padding: '15px 30px',
                  fontSize: '1rem'
                }}>
                  View Platform
                </Link>
              </div>
            </div>
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
