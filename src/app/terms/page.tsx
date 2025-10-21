'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FileText, AlertCircle, Shield, Users, Scale, Clock, CheckCircle, XCircle } from 'lucide-react'

export default function TermsOfServicePage() {
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
          background: 'linear-gradient(135deg, var(--nyt-red) 0%, var(--nyt-black) 100%)',
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
            ⚖️
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Terms of Service
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            Please read these terms carefully. By using Medicare Reviews, you agree to be bound by 
            these terms and our commitment to privacy-preserving healthcare feedback.
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

            {/* Acceptance of Terms */}
            <motion.article 
              className="nyt-article featured"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="nyt-headline large">Acceptance of Terms</h2>
              <div className="nyt-content">
                <p>
                  Welcome to Medicare Reviews ("we," "our," or "us"). These Terms of Service ("Terms") 
                  govern your use of our privacy-preserving healthcare review platform. By accessing 
                  or using our services, you agree to be bound by these Terms and our Privacy Policy.
                </p>
                <p>
                  Our platform uses revolutionary zero-knowledge proof technology to ensure complete 
                  anonymity while maintaining platform integrity. These terms reflect our commitment 
                  to privacy-first design and authentic healthcare feedback.
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
                    ⚠️ Important Notice
                  </h3>
                  <p style={{color: 'var(--nyt-black)', lineHeight: '1.6'}}>
                    If you do not agree to these Terms, please do not use our platform. We reserve 
                    the right to modify these Terms at any time, and continued use constitutes 
                    acceptance of any changes.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* Platform Description */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Platform Description</h2>
              <div className="nyt-content">
                <p>
                  Medicare Reviews is a privacy-preserving platform that enables anonymous healthcare 
                  feedback through zero-knowledge proof technology. Our platform allows users to share 
                  authentic reviews and experiences while maintaining complete anonymity.
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
                    border: '2px solid var(--nyt-border)',
                    textAlign: 'center'
                  }}>
                    <Shield style={{
                      width: '32px',
                      height: '32px',
                      color: 'var(--nyt-accent)',
                      margin: '0 auto 15px'
                    }} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      Zero-Knowledge Authentication
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Verify authenticity without revealing identity through cryptographic proofs
                    </p>
                  </div>

                  <div style={{
                    padding: '20px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    textAlign: 'center'
                  }}>
                    <Users style={{
                      width: '32px',
                      height: '32px',
                      color: 'var(--nyt-red)',
                      margin: '0 auto 15px'
                    }} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      Anonymous Reviews
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Share authentic healthcare experiences without compromising privacy
                    </p>
                  </div>

                  <div style={{
                    padding: '20px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    textAlign: 'center'
                  }}>
                    <FileText style={{
                      width: '32px',
                      height: '32px',
                      color: 'var(--nyt-gray)',
                      margin: '0 auto 15px'
                    }} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      HIPAA Compliance
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Built to meet federal healthcare data protection standards
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* User Responsibilities */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">User Responsibilities</h2>
              <div className="nyt-content">
                <p>
                  As a user of our platform, you agree to use our services responsibly and in 
                  accordance with these Terms. Your privacy is protected by design, but you 
                  still have important responsibilities:
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '25px',
                  marginTop: '30px'
                }}>
                  <div style={{
                    padding: '25px',
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      marginBottom: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <CheckCircle style={{width: '20px', height: '20px', color: 'var(--nyt-accent)'}} />
                      Authentic Content
                    </h3>
                    <p style={{color: 'var(--nyt-black)', lineHeight: '1.6', fontSize: '0.9rem'}}>
                      Provide honest, genuine reviews based on your actual healthcare experiences. 
                      Do not submit false, misleading, or fabricated information.
                    </p>
                  </div>

                  <div style={{
                    padding: '25px',
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      marginBottom: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <Shield style={{width: '20px', height: '20px', color: 'var(--nyt-accent)'}} />
                      Respectful Communication
                    </h3>
                    <p style={{color: 'var(--nyt-black)', lineHeight: '1.6', fontSize: '0.9rem'}}>
                      Maintain respectful, constructive dialogue. Do not use our platform for 
                      harassment, discrimination, or inappropriate content.
                    </p>
                  </div>

                  <div style={{
                    padding: '25px',
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      marginBottom: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <AlertCircle style={{width: '20px', height: '20px', color: 'var(--nyt-red)'}} />
                      No Personal Information
                    </h3>
                    <p style={{color: 'var(--nyt-black)', lineHeight: '1.6', fontSize: '0.9rem'}}>
                      Do not attempt to include personal identifying information in your reviews. 
                      Our platform is designed to protect anonymity.
                    </p>
                  </div>

                  <div style={{
                    padding: '25px',
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)'
                  }}>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      marginBottom: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <XCircle style={{width: '20px', height: '20px', color: 'var(--nyt-red)'}} />
                      Prohibited Activities
                    </h3>
                    <p style={{color: 'var(--nyt-black)', lineHeight: '1.6', fontSize: '0.9rem'}}>
                      Do not use our platform for spam, fraud, illegal activities, or to violate 
                      any laws or regulations.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Privacy and Data Protection */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Privacy and Data Protection</h2>
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
                    Zero-Knowledge Privacy Architecture
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
                        No Personal Data Collection
                      </h4>
                      <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                        We do not collect, store, or process any personally identifiable information
                      </p>
                    </div>
                    <div>
                      <h4 style={{
                        fontWeight: '600',
                        color: 'var(--nyt-black)',
                        marginBottom: '8px'
                      }}>
                        Cryptographic Verification
                      </h4>
                      <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                        User authenticity is verified through zero-knowledge proofs without identity exposure
                      </p>
                    </div>
                    <div>
                      <h4 style={{
                        fontWeight: '600',
                        color: 'var(--nyt-black)',
                        marginBottom: '8px'
                      }}>
                        HIPAA Compliance
                      </h4>
                      <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                        Our platform meets federal healthcare data protection standards
                      </p>
                    </div>
                    <div>
                      <h4 style={{
                        fontWeight: '600',
                        color: 'var(--nyt-black)',
                        marginBottom: '8px'
                      }}>
                        No Data Selling
                      </h4>
                      <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                        We never sell, rent, or share personal data because we don't collect any
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Platform Availability */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Platform Availability</h2>
              <div className="nyt-content">
                <p>
                  While we strive to provide continuous access to our platform, we cannot guarantee 
                  uninterrupted service. Our platform may be temporarily unavailable due to:
                </p>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px',
                  marginTop: '25px'
                }}>
                  <div style={{
                    padding: '20px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <AlertCircle style={{
                      width: '24px',
                      height: '24px',
                      color: 'var(--nyt-red)',
                      marginBottom: '10px'
                    }} />
                    <h4 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      Maintenance
                    </h4>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Scheduled maintenance to improve platform security and performance
                    </p>
                  </div>

                  <div style={{
                    padding: '20px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <AlertCircle style={{
                      width: '24px',
                      height: '24px',
                      color: 'var(--nyt-red)',
                      marginBottom: '10px'
                    }} />
                    <h4 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      Security Updates
                    </h4>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Critical security updates to protect user privacy and platform integrity
                    </p>
                  </div>

                  <div style={{
                    padding: '20px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <AlertCircle style={{
                      width: '24px',
                      height: '24px',
                      color: 'var(--nyt-red)',
                      marginBottom: '10px'
                    }} />
                    <h4 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      Technical Issues
                    </h4>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Unforeseen technical issues that require immediate attention
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Limitation of Liability */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Limitation of Liability</h2>
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
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: 'var(--nyt-black)',
                    marginBottom: '20px'
                  }}>
                    Disclaimer of Warranties
                  </h3>
                  <p style={{color: 'var(--nyt-black)', lineHeight: '1.6', marginBottom: '20px'}}>
                    Our platform is provided "as is" without warranties of any kind. While we use 
                    industry-leading security measures, we cannot guarantee absolute security or 
                    uninterrupted service.
                  </p>
                  <p style={{color: 'var(--nyt-black)', lineHeight: '1.6'}}>
                    We are not responsible for the accuracy, completeness, or reliability of user-generated 
                    content. Users are responsible for their own healthcare decisions and should consult 
                    with qualified healthcare professionals.
                  </p>
                </div>
              </div>
            </article>

            {/* Governing Law */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Governing Law</h2>
              <div className="nyt-content">
                <p>
                  These Terms are governed by and construed in accordance with the laws of the State 
                  of California, without regard to conflict of law principles. Any disputes arising 
                  from these Terms or your use of our platform will be resolved in the courts of 
                  California.
                </p>
                <p>
                  If any provision of these Terms is found to be unenforceable, the remaining 
                  provisions will remain in full force and effect.
                </p>
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
              <h3 className="nyt-sidebar-title">Key Points</h3>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Privacy Level</div>
                <div className="nyt-sidebar-item-content">Zero-Knowledge Proofs</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Data Collection</div>
                <div className="nyt-sidebar-item-content">No Personal Information</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">User Responsibility</div>
                <div className="nyt-sidebar-item-content">Authentic Content Only</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Governing Law</div>
                <div className="nyt-sidebar-item-content">California State Law</div>
              </div>
            </div>

            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">Related Documents</h3>
              <div style={{marginTop: '20px'}}>
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
              <h3 className="nyt-sidebar-title">Legal Questions?</h3>
              <p style={{
                color: 'var(--nyt-gray)',
                fontSize: '0.9rem',
                lineHeight: '1.5',
                marginBottom: '20px'
              }}>
                Have questions about these terms? Our legal team is here to help.
              </p>
              <Link href="/contact" className="nyt-button" style={{
                backgroundColor: 'var(--nyt-accent)',
                width: '100%',
                textAlign: 'center',
                display: 'block'
              }}>
                Contact Legal Team
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="nyt-container" style={{marginTop: '60px', marginBottom: '60px'}}>
        <div style={{
          background: 'linear-gradient(135deg, var(--nyt-black) 0%, var(--nyt-accent) 100%)',
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
            Ready to Get Started?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 30px',
            opacity: '0.9'
          }}>
            Join our community of users who value privacy, authenticity, and meaningful healthcare feedback. 
            Your anonymity is protected by cryptographic certainty.
          </p>
          <Link href="/" className="nyt-button" style={{
            backgroundColor: 'var(--nyt-red)',
            padding: '15px 30px',
            fontSize: '1rem'
          }}>
            Start Using the Platform
          </Link>
        </div>
      </div>
    </div>
  )
}
