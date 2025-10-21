'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, Users, Zap, Shield, Heart, Globe, Code, Database, Lock } from 'lucide-react'

export default function CareersPage() {
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
            ⚡
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Join Our Mission
          </h1>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.95'
          }}>
            Build the future of privacy-preserving healthcare feedback. Work with cutting-edge 
            zero-knowledge proof technology while making a real difference in healthcare communities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="nyt-container">
        <div className="nyt-grid">
          <div className="nyt-main">
            {/* Why Work With Us */}
            <motion.article 
              className="nyt-article featured"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="nyt-headline large">Why Work With Medicare Reviews?</h2>
              <div className="nyt-content">
                <p>
                  At Medicare Reviews, we're not just building software – we're pioneering the future of 
                  privacy-preserving technology in healthcare. Our team combines the best of cryptography, 
                  healthcare expertise, and user experience design to create tools that genuinely protect 
                  user privacy while fostering authentic community dialogue.
                </p>
                <p>
                  We offer a unique opportunity to work with cutting-edge zero-knowledge proof technology 
                  while making a tangible impact on healthcare communities. Our team is passionate about 
                  privacy, authenticity, and using technology to solve real-world problems.
                </p>
              </div>
            </motion.article>

            {/* Company Culture */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Our Culture</h2>
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
                    border: '1px solid var(--nyt-border)',
                    textAlign: 'center'
                  }}>
                    <Shield style={{
                      width: '48px',
                      height: '48px',
                      color: 'var(--nyt-red)',
                      margin: '0 auto 15px'
                    }} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      marginBottom: '15px'
                    }}>
                      Privacy-First Mindset
                    </h3>
                    <p style={{color: 'var(--nyt-black)', lineHeight: '1.6'}}>
                      Every decision we make prioritizes user privacy and data protection. We believe 
                      privacy is a fundamental right, not a feature.
                    </p>
                  </div>
                  <div style={{
                    padding: '30px',
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)',
                    textAlign: 'center'
                  }}>
                    <Heart style={{
                      width: '48px',
                      height: '48px',
                      color: 'var(--nyt-red)',
                      margin: '0 auto 15px'
                    }} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      marginBottom: '15px'
                    }}>
                      Impact-Driven
                    </h3>
                    <p style={{color: 'var(--nyt-black)', lineHeight: '1.6'}}>
                      We measure success by the positive impact we have on healthcare communities 
                      and the trust our users place in our platform.
                    </p>
                  </div>
                  <div style={{
                    padding: '30px',
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    borderRadius: '8px',
                    border: '1px solid var(--nyt-border)',
                    textAlign: 'center'
                  }}>
                    <Zap style={{
                      width: '48px',
                      height: '48px',
                      color: 'var(--nyt-accent)',
                      margin: '0 auto 15px'
                    }} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: 'var(--nyt-black)',
                      marginBottom: '15px'
                    }}>
                      Innovation Focused
                    </h3>
                    <p style={{color: 'var(--nyt-black)', lineHeight: '1.6'}}>
                      We embrace cutting-edge technology and encourage experimentation with 
                      zero-knowledge proofs and cryptographic privacy solutions.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Open Positions */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Open Positions</h2>
              <div className="nyt-content">
                <div style={{marginTop: '30px'}}>
                  {/* Senior Cryptography Engineer */}
                  <div style={{
                    padding: '30px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    marginBottom: '25px',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '20px'
                    }}>
                      <div>
                        <h3 style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: '1.5rem',
                          fontWeight: '600',
                          color: 'var(--nyt-black)',
                          marginBottom: '8px'
                        }}>
                          Senior Cryptography Engineer
                        </h3>
                        <div style={{
                          display: 'flex',
                          gap: '20px',
                          alignItems: 'center',
                          color: 'var(--nyt-gray)',
                          fontSize: '0.9rem'
                        }}>
                          <span style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                            <MapPin style={{width: '16px', height: '16px'}} />
                            Remote
                          </span>
                          <span style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                            <Clock style={{width: '16px', height: '16px'}} />
                            Full-time
                          </span>
                        </div>
                      </div>
                      <span style={{
                        background: 'var(--nyt-red)',
                        color: 'var(--nyt-white)',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>
                        Senior
                      </span>
                    </div>
                    <p style={{color: 'var(--nyt-black)', lineHeight: '1.6', marginBottom: '20px'}}>
                      Lead the development of our zero-knowledge proof infrastructure and cryptographic 
                      privacy protocols. You'll work on cutting-edge technology that ensures user 
                      anonymity while maintaining platform integrity.
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '15px',
                      flexWrap: 'wrap',
                      marginBottom: '20px'
                    }}>
                      <span style={{
                        background: '#f0f0f0',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: 'var(--nyt-black)'
                      }}>
                        Zero-Knowledge Proofs
                      </span>
                      <span style={{
                        background: '#f0f0f0',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: 'var(--nyt-black)'
                      }}>
                        Circom
                      </span>
                      <span style={{
                        background: '#f0f0f0',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: 'var(--nyt-black)'
                      }}>
                        TypeScript
                      </span>
                      <span style={{
                        background: '#f0f0f0',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: 'var(--nyt-black)'
                      }}>
                        Privacy Engineering
                      </span>
                    </div>
                    <button className="nyt-button" style={{
                      background: 'var(--nyt-accent)',
                      padding: '12px 24px',
                      fontSize: '0.9rem'
                    }}>
                      Apply Now
                    </button>
                  </div>

                  {/* Frontend Developer */}
                  <div style={{
                    padding: '30px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    marginBottom: '25px'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '20px'
                    }}>
                      <div>
                        <h3 style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: '1.5rem',
                          fontWeight: '600',
                          color: 'var(--nyt-black)',
                          marginBottom: '8px'
                        }}>
                          Frontend Developer
                        </h3>
                        <div style={{
                          display: 'flex',
                          gap: '20px',
                          alignItems: 'center',
                          color: 'var(--nyt-gray)',
                          fontSize: '0.9rem'
                        }}>
                          <span style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                            <MapPin style={{width: '16px', height: '16px'}} />
                            Remote
                          </span>
                          <span style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                            <Clock style={{width: '16px', height: '16px'}} />
                            Full-time
                          </span>
                        </div>
                      </div>
                      <span style={{
                        background: 'var(--nyt-accent)',
                        color: 'var(--nyt-white)',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>
                        Mid-level
                      </span>
                    </div>
                    <p style={{color: 'var(--nyt-black)', lineHeight: '1.6', marginBottom: '20px'}}>
                      Build beautiful, intuitive interfaces that make zero-knowledge authentication 
                      seamless for users. Create the next generation of privacy-preserving web applications.
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '15px',
                      flexWrap: 'wrap',
                      marginBottom: '20px'
                    }}>
                      <span style={{
                        background: '#f0f0f0',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: 'var(--nyt-black)'
                      }}>
                        React
                      </span>
                      <span style={{
                        background: '#f0f0f0',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: 'var(--nyt-black)'
                      }}>
                        Next.js
                      </span>
                      <span style={{
                        background: '#f0f0f0',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: 'var(--nyt-black)'
                      }}>
                        TypeScript
                      </span>
                      <span style={{
                        background: '#f0f0f0',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: 'var(--nyt-black)'
                      }}>
                        Tailwind CSS
                      </span>
                    </div>
                    <button className="nyt-button" style={{
                      background: 'var(--nyt-accent)',
                      padding: '12px 24px',
                      fontSize: '0.9rem'
                    }}>
                      Apply Now
                    </button>
                  </div>

                  {/* Product Designer */}
                  <div style={{
                    padding: '30px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    border: '2px solid var(--nyt-border)',
                    marginBottom: '25px'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '20px'
                    }}>
                      <div>
                        <h3 style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: '1.5rem',
                          fontWeight: '600',
                          color: 'var(--nyt-black)',
                          marginBottom: '8px'
                        }}>
                          Product Designer
                        </h3>
                        <div style={{
                          display: 'flex',
                          gap: '20px',
                          alignItems: 'center',
                          color: 'var(--nyt-gray)',
                          fontSize: '0.9rem'
                        }}>
                          <span style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                            <MapPin style={{width: '16px', height: '16px'}} />
                            Remote
                          </span>
                          <span style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                            <Clock style={{width: '16px', height: '16px'}} />
                            Full-time
                          </span>
                        </div>
                      </div>
                      <span style={{
                        background: 'var(--nyt-gray)',
                        color: 'var(--nyt-white)',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>
                        Mid-level
                      </span>
                    </div>
                    <p style={{color: 'var(--nyt-black)', lineHeight: '1.6', marginBottom: '20px'}}>
                      Design intuitive user experiences for privacy-preserving technologies. Make 
                      complex cryptographic concepts accessible and trustworthy for healthcare communities.
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '15px',
                      flexWrap: 'wrap',
                      marginBottom: '20px'
                    }}>
                      <span style={{
                        background: '#f0f0f0',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: 'var(--nyt-black)'
                      }}>
                        UX Design
                      </span>
                      <span style={{
                        background: '#f0f0f0',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: 'var(--nyt-black)'
                      }}>
                        Figma
                      </span>
                      <span style={{
                        background: '#f0f0f0',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: 'var(--nyt-black)'
                      }}>
                        User Research
                      </span>
                      <span style={{
                        background: '#f0f0f0',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: 'var(--nyt-black)'
                      }}>
                        Accessibility
                      </span>
                    </div>
                    <button className="nyt-button" style={{
                      background: 'var(--nyt-accent)',
                      padding: '12px 24px',
                      fontSize: '0.9rem'
                    }}>
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Benefits */}
            <article className="nyt-article">
              <h2 className="nyt-headline medium">Benefits & Perks</h2>
              <div className="nyt-content">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '25px',
                  marginTop: '30px'
                }}>
                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid var(--nyt-border)',
                    textAlign: 'center'
                  }}>
                    <Users style={{
                      width: '40px',
                      height: '40px',
                      color: 'var(--nyt-accent)',
                      margin: '0 auto 15px'
                    }} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      Remote-First
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Work from anywhere in the world with flexible hours and async collaboration.
                    </p>
                  </div>
                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid var(--nyt-border)',
                    textAlign: 'center'
                  }}>
                    <Zap style={{
                      width: '40px',
                      height: '40px',
                      color: 'var(--nyt-red)',
                      margin: '0 auto 15px'
                    }} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      Learning Budget
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      $3,000 annual budget for courses, conferences, and professional development.
                    </p>
                  </div>
                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid var(--nyt-border)',
                    textAlign: 'center'
                  }}>
                    <Shield style={{
                      width: '40px',
                      height: '40px',
                      color: 'var(--nyt-accent)',
                      margin: '0 auto 15px'
                    }} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      Health Coverage
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Comprehensive health, dental, and vision coverage for you and your family.
                    </p>
                  </div>
                  <div style={{
                    padding: '25px',
                    background: 'var(--nyt-white)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid var(--nyt-border)',
                    textAlign: 'center'
                  }}>
                    <Globe style={{
                      width: 'status',
                      height: '40px',
                      color: 'var(--nyt-red)',
                      margin: '0 auto 15px'
                    }} />
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      Equity Package
                    </h3>
                    <p style={{color: 'var(--nyt-gray)', fontSize: '0.9rem', lineHeight: '1.5'}}>
                      Meaningful equity in a company that's revolutionizing healthcare privacy.
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
              <h3 className="nyt-sidebar-title">Apply Today</h3>
              <p style={{
                color: 'var(--nyt-gray)',
                fontSize: '0.9rem',
                lineHeight: '1.5',
                marginBottom: '20px'
              }}>
                Ready to join our mission? We're always looking for talented individuals who share 
                our passion for privacy and healthcare innovation.
              </p>
              <button className="nyt-button" style={{
                width: '100%',
                textAlign: 'center',
                display: 'block',
                marginBottom: '15px'
              }}>
                View All Positions
              </button>
              <Link href="/contact" className="nyt-button" style={{
                backgroundColor: 'var(--nyt-accent)',
                width: '100%',
                textAlign: 'center',
                display: 'block'
              }}>
                General Inquiries
              </Link>
            </div>

            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">Our Values</h3>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Privacy First</div>
                <div className="nyt-sidebar-item-content">
                  Every decision prioritizes user privacy and data protection.
                </div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Innovation</div>
                <div className="nyt-sidebar-item-content">
                  We embrace cutting-edge technology and creative solutions.
                </div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Impact</div>
                <div className="nyt-sidebar-item-content">
                  Success is measured by positive impact on healthcare communities.
                </div>
              </div>
              <div className="nyt-sidebar-item">
                <div className="nyt-sidebar-item-title">Collaboration</div>
                <div className="nyt-sidebar-item-content">
                  We work together to solve complex problems and build trust.
                </div>
              </div>
            </div>

            <div className="nyt-sidebar-section">
              <h3 className="nyt-sidebar-title">Tech Stack</h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: '15px'
              }}>
                <span style={{
                  background: '#f0f0f0',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  color: 'var(--nyt-black)'
                }}>
                  React
                </span>
                <span style={{
                  background: '#f0f0f0',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  color: 'var(--nyt-black)'
                }}>
                  TypeScript
                </span>
                <span style={{
                  background: '#f0f0f0',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  color: 'var(--nyt-black)'
                }}>
                  Circom
                </span>
                <span style={{
                  background: '#f0f0f0',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  color: 'var(--nyt-black)'
                }}>
                  Zero-Knowledge
                </span>
                <span style={{
                  background: '#f0f0f0',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  color: 'var(--nyt-black)'
                }}>
                  Next.js
                </span>
                <span style={{
                  background: '#f0f0f0',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  color: 'var(--nyt-black)'
                }}>
                  Tailwind
                </span>
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
            Don't See Your Role?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 30px',
            opacity: '0.9'
          }}>
            We're always looking for exceptional talent. If you're passionate about privacy, 
            healthcare, and cutting-edge technology, we'd love to hear from you.
          </p>
          <Link href="/contact" className="nyt-button" style={{
            backgroundColor: 'var(--nyt-red)',
            padding: '15px 30px',
            fontSize: '1rem'
          }}>
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
