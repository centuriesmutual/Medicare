'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export default function ReadMorePage() {
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
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <article className="nyt-article">
            <div className="nyt-quote">&ldquo;</div>
            <h1 className="nyt-headline large">
              Anonymous Reviews Revolutionize Community Feedback
            </h1>
            <div className="nyt-byline">
              By Medicare Reviews Editorial Staff • {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
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

              <h2 className="nyt-headline medium" style={{marginTop: '40px', marginBottom: '20px'}}>
                The Technology Behind Privacy
              </h2>
              
              <p>
                Zero-knowledge proofs represent a breakthrough in cryptographic technology, allowing 
                users to prove they are legitimate community members without revealing any personal 
                information. This mathematical approach ensures that even the platform administrators 
                cannot determine the identity of reviewers.
              </p>
              
              <p>
                The system works by generating cryptographic proofs that verify a user's authenticity 
                without exposing their identity. This creates a trustless environment where honesty 
                is incentivized while privacy is mathematically guaranteed.
              </p>

              <h2 className="nyt-headline medium" style={{marginTop: '40px', marginBottom: '20px'}}>
                Impact on Healthcare Transparency
              </h2>
              
              <p>
                Healthcare providers and patients alike have long struggled with the challenge of 
                obtaining honest feedback. Traditional review systems are often compromised by fear 
                of retaliation, leading to sanitized or misleading reviews that don&apos;t reflect 
                real experiences.
              </p>
              
              <p>
                Medicare Reviews changes this dynamic by creating a safe space for authentic 
                feedback. Healthcare providers can receive honest assessments of their services, 
                while patients can share their experiences without fear of consequences.
              </p>

              <h2 className="nyt-headline medium" style={{marginTop: '40px', marginBottom: '20px'}}>
                Future of Anonymous Reviews
              </h2>
              
              <p>
                The success of this platform has implications far beyond healthcare. Educational 
                institutions, service providers, and community organizations are exploring similar 
                implementations to create more transparent and honest feedback systems.
              </p>
              
              <p>
                As zero-knowledge proof technology becomes more accessible, we can expect to see 
                a fundamental shift in how online communities handle feedback and reviews. The 
                future belongs to platforms that prioritize both authenticity and privacy.
              </p>
            </div>

            <div style={{
              marginTop: '50px',
              padding: '30px',
              backgroundColor: 'var(--nyt-cream)',
              borderRadius: '8px',
              border: '1px solid var(--nyt-border)'
            }}>
              <h3 className="nyt-headline" style={{marginBottom: '20px', textAlign: 'center'}}>
                Ready to Share Your Story?
              </h3>
              <p style={{textAlign: 'center', marginBottom: '25px', color: 'var(--nyt-gray)'}}>
                Join thousands of users who are already sharing their experiences anonymously and safely.
              </p>
              <div style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
                <Link href="/zk-auth" className="nyt-button" style={{backgroundColor: 'var(--nyt-accent)'}}>
                  <Shield style={{marginRight: '8px', width: '16px', height: '16px'}} />
                  Start Authentication
                </Link>
                <Link href="/" className="nyt-button" style={{backgroundColor: 'var(--nyt-gray)'}}>
                  View Reviews
                </Link>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          <div style={{marginTop: '60px'}}>
            <h2 className="nyt-headline medium" style={{marginBottom: '30px', textAlign: 'center'}}>
              Related Articles
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px'
            }}>
              <article className="nyt-article" style={{padding: '20px'}}>
                <h3 className="nyt-headline" style={{fontSize: '1.2rem', marginBottom: '15px'}}>
                  The Science of Zero-Knowledge Proofs
                </h3>
                <p className="nyt-content" style={{fontSize: '0.95rem'}}>
                  Understanding the mathematical foundations that make anonymous authentication possible.
                </p>
                <div style={{marginTop: '15px'}}>
                  <Link href="#" className="nyt-button" style={{
                    backgroundColor: 'var(--nyt-accent)',
                    padding: '8px 16px',
                    fontSize: '0.85rem'
                  }}>
                    Read More
                  </Link>
                </div>
              </article>
              
              <article className="nyt-article" style={{padding: '20px'}}>
                <h3 className="nyt-headline" style={{fontSize: '1.2rem', marginBottom: '15px'}}>
                  Healthcare Transparency in the Digital Age
                </h3>
                <p className="nyt-content" style={{fontSize: '0.95rem'}}>
                  How technology is revolutionizing patient feedback and provider accountability.
                </p>
                <div style={{marginTop: '15px'}}>
                  <Link href="#" className="nyt-button" style={{
                    backgroundColor: 'var(--nyt-accent)',
                    padding: '8px 16px',
                    fontSize: '0.85rem'
                  }}>
                    Read More
                  </Link>
                </div>
              </article>
              
              <article className="nyt-article" style={{padding: '20px'}}>
                <h3 className="nyt-headline" style={{fontSize: '1.2rem', marginBottom: '15px'}}>
                  Privacy Rights in Online Communities
                </h3>
                <p className="nyt-content" style={{fontSize: '0.95rem'}}>
                  Exploring the legal and ethical implications of anonymous review systems.
                </p>
                <div style={{marginTop: '15px'}}>
                  <Link href="#" className="nyt-button" style={{
                    backgroundColor: 'var(--nyt-accent)',
                    padding: '8px 16px',
                    fontSize: '0.85rem'
                  }}>
                    Read More
                  </Link>
                </div>
              </article>
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
