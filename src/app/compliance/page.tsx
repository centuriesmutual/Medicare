'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, AlertTriangle, FileCheck, Lock, Users, Database, Award, Scale, Clock } from 'lucide-react'

export default function HIPAACompliancePage() {
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
          background: 'linear-gradient(135deg, var(--nyt-accent) 0%, var(--nyt-red) 100%)',
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
            🏥
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            HIPAA Compliance
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            Medicare Reviews is designed from the ground up to meet and exceed federal healthcare 
            data protection standards through revolutionary zero-knowledge proof technology.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="nyt-container">
        <div className="nyt-grid">
          <div className="nyt-main">
            {/* Compliance Status */}
            <div style={{
              background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
              padding: '30px',
              borderRadius: '8px',
              marginBottom: '40px',
              border: '2px solid var(--nyt-accent)',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              <CheckCircle style={{width: '32px', height: '32px', color: 'var(--nyt-accent)'}} />
              <div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  color: 'var(--nyt-black)',
                  marginBottom: '5px'
                }}>
                  HIPAA Ready Platform
                </h3>
                <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem'}}>
                  Our platform meets federal healthcare data protection standards through zero-knowledge architecture
                </p>
              </div>
            </div>

            {/* What is HIPAA */}
            <motion.article 
              className="nyt-article featured"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="nyt-headline large">Understanding HIPAA Compliance</h2>
              <div className="nyt-content">
                <p>
                  The Health Insurance Portability and Accountability Act (HIPAA) sets the standard 
                  for protecting sensitive patient data. Any company that deals with protected health 
                  information (PHI) must ensure that all required physical, network, and process 
                  security measures are in place and followed.
                </p>
                <p>
                  Medicare Reviews goes beyond traditional HIPAA compliance by using zero-knowledge 
                  proof technology that eliminates the need to store or process PHI in the first place. 
                  Our revolutionary approach provides mathematical certainty that user privacy is 
                  protected while maintaining platform integrity.
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
                    🔒 Zero-Knowledge Advantage
                  </h3>
                  <p style={{color: 'var(--nyt-black)', lineHeight: '1.6'}}>
                    Unlike traditional platforms that must carefully manage PHI storage and access, 
                    our zero-knowledge architecture ensures that no personally identifiable health 
                    information is ever collected or stored on our systems.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* HIPAA Safeguards */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">HIPAA Safeguards Implementation</h2>
              <div className="nyt-content">
                <p>
                  HIPAA requires three types of safeguards: Administrative, Physical, and Technical. 
                  Our zero-knowledge proof technology provides superior protection across all three categories:
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
                    border: '2px solid var(--nyt-border)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      marginBottom: '15px'
                    }}>
                      <Users style={{width: '32px', height: '32px', color: 'var(--nyt-accent)'}} />
                      <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: 'var(--nyt-black)'
                      }}>
                        Administrative Safeguards
                      </h3>
                    </div>
                    <ul style={{
                      color: 'var(--nyt-gray)',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      paddingLeft: '20px'
                    }}>
                      <li>Privacy officer designation</li>
                      <li>Workforce training programs</li>
                      <li>Access management procedures</li>
                      <li>Incident response protocols</li>
                      <li>Regular compliance audits</li>
                    </ul>
                  </div>

                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      marginBottom: '15px'
                    }}>
                      <Shield style={{width: '32px', height: '32px', color: 'var(--nyt-red)'}} />
                      <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: 'var(--nyt-black)'
                      }}>
                        Physical Safeguards
                      </h3>
                    </div>
                    <ul style={{
                      color: 'var(--nyt-gray)',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      paddingLeft: '20px'
                    }}>
                      <li>Secure data center facilities</li>
                      <li>Access control systems</li>
                      <li>Environmental monitoring</li>
                      <li>Device and media controls</li>
                      <li>Workstation security</li>
                    </ul>
                  </div>

                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      marginBottom: '15px'
                    }}>
                      <Lock style={{width: '32px', height: '32px', color: 'var(--nyt-gray)'}} />
                      <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: 'var(--nyt-black)'
                      }}>
                        Technical Safeguards
                      </h3>
                    </div>
                    <ul style={{
                      color: 'var(--nyt-gray)',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      paddingLeft: '20px'
                    }}>
                      <li>Zero-knowledge proof authentication</li>
                      <li>End-to-end encryption</li>
                      <li>Access control mechanisms</li>
                      <li>Audit controls and logging</li>
                      <li>Data integrity protections</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>

            {/* Zero-Knowledge Benefits */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Zero-Knowledge Proof Benefits for Healthcare</h2>
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
                    <Award style={{width: '32px', height: '32px', color: 'var(--nyt-accent)'}} />
                    Revolutionary Privacy Protection
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px'
                  }}>
                    <div>
                      <AlertTriangle style={{width: '20px', height: '20px', color: 'var(--nyt-red)', marginBottom: '8px'}} />
                      <h4 style={{
                        fontWeight: '600',
                        color: 'var(--nyt-black)',
                        marginBottom: '8px'
                      }}>
                        No PHI Storage
                      </h4>
                      <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                        Protected health information is never collected or stored on our systems
                      </p>
                    </div>
                    <div>
                      <CheckCircle style={{width: '20px', height: '20px', color: 'var(--nyt-accent)', marginBottom: '8px'}} />
                      <h4 style={{
                        fontWeight: '600',
                        color: 'var(--nyt-black)',
                        marginBottom: '8px'
                      }}>
                        Mathematical Privacy
                      </h4>
                      <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                        Privacy protection is guaranteed by cryptographic proofs, not just policies
                      </p>
                    </div>
                    <div>
                      <Shield style={{width: '20px', height: '20px', color: 'var(--nyt-accent)', marginBottom: '8px'}} />
                      <h4 style={{
                        fontWeight: '600',
                        color: 'var(--nyt-black)',
                        marginBottom: '8px'
                      }}>
                        Reduced Risk
                      </h4>
                      <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                        Eliminates the risk of PHI breaches since no PHI is stored
                      </p>
                    </div>
                    <div>
                      <Database style={{width: '20px', height: '20px', color: 'var(--nyt-accent)', marginBottom: '8px'}} />
                      <h4 style={{
                        fontWeight: '600',
                        color: 'var(--nyt-black)',
                        marginBottom: '8px'
                      }}>
                        Simplified Compliance
                      </h4>
                      <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                        Reduces compliance complexity by eliminating PHI handling requirements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Compliance Certification */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Compliance Certification & Audits</h2>
              <div className="nyt-content">
                <p>
                  Medicare Reviews undergoes regular third-party security audits and compliance 
                  assessments to ensure our platform meets and exceeds federal healthcare data 
                  protection standards.
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
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                  }}>
                    <FileCheck style={{
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
                      Annual Security Audits
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Regular third-party security assessments by certified healthcare compliance experts
                    </p>
                  </div>

                  <div style={{
                    padding: '20px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                  }}>
                    <Scale style={{
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
                      Legal Compliance Review
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Ongoing legal review to ensure compliance with evolving healthcare regulations
                    </p>
                  </div>

                  <div style={{
                    padding: '20px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                  }}>
                    <Award style={{
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
                      Privacy Certification
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Certified by leading privacy and security organizations
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* User Rights */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Your Healthcare Privacy Rights</h2>
              <div className="nyt-content">
                <p>
                  Under HIPAA and our zero-knowledge architecture, you have enhanced privacy rights 
                  that go beyond compliance requirements:
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
                      We cannot identify you even if required by law.
                    </p>
                  </div>

                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <CheckCircle style={{
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
                      No Data Breach Risk
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Since we don't store personal health information, there's no risk of 
                      PHI data breaches affecting your privacy.
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
                      Enhanced Protection
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Our privacy protection exceeds HIPAA requirements through cryptographic 
                      certainty rather than just regulatory compliance.
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
              <h3 className="nyt-sidebar-title">Compliance Status</h3>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">HIPAA Ready</div>
                <div className="nyt-sidebar-item-content">✓ Fully Compliant</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">PHI Storage</div>
                <div className="nyt-sidebar-item-content">None (Zero-Knowledge)</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Privacy Level</div>
                <div className="nyt-sidebar-item-content">Mathematical Certainty</div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Last Audit</div>
                <div className="nyt-sidebar-item-content">January 2025</div>
              </div>
            </div>

            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">Related Policies</h3>
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
              <h3 className="nyt-sidebar-title">Compliance Questions?</h3>
              <p style={{
                color: 'var(--nyt-gray)',
                fontSize: '0.9rem',
                lineHeight: '1.5',
                marginBottom: '20px'
              }}>
                Have questions about our HIPAA compliance or privacy protections?
              </p>
              <Link href="/contact" className="nyt-button" style={{
                backgroundColor: 'var(--nyt-accent)',
                width: '100%',
                textAlign: 'center',
                display: 'block'
              }}>
                Contact Compliance Team
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
            Experience HIPAA-Compliant Privacy
          </h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 30px',
            opacity: '0.9'
          }}>
            Join healthcare professionals and patients who trust our platform for anonymous, 
            compliant healthcare feedback protected by zero-knowledge proofs.
          </p>
          <Link href="/" className="nyt-button" style={{
            backgroundColor: 'var(--nyt-red)',
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
