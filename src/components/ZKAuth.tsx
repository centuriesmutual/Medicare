'use client'

import { useState } from 'react'
import { Shield, Loader2, CheckCircle, Lock, Eye } from 'lucide-react'

interface ZKAuthProps {
  onAuthenticated: () => void
}

export default function ZKAuth({ onAuthenticated }: ZKAuthProps) {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleZKAuth = async () => {
    setIsAuthenticating(true)
    
    try {
      // Simulate ZK authentication process
      // In a real implementation, this would:
      // 1. Generate a ZK proof of identity without revealing personal info
      // 2. Verify the proof on-chain or with a trusted verifier
      // 3. Issue an anonymous credential
      
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Mock successful authentication
      setIsAuthenticated(true)
      setTimeout(() => {
        onAuthenticated()
      }, 1000)
      
    } catch (error) {
      console.error('ZK Authentication failed:', error)
    } finally {
      setIsAuthenticating(false)
    }
  }

  if (isAuthenticated) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '15px',
        backgroundColor: 'var(--nyt-cream)',
        border: '2px solid var(--nyt-accent)',
        borderRadius: '8px',
        color: 'var(--nyt-accent)'
      }}>
        <CheckCircle style={{width: '20px', height: '20px'}} />
        <span style={{fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase'}}>
          Authenticated
        </span>
      </div>
    )
  }

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{marginBottom: '20px'}}>
        <div style={{
          width: '60px',
          height: '60px',
          backgroundColor: 'var(--nyt-accent)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 15px',
          color: 'white',
          boxShadow: '0 4px 12px rgba(26, 77, 26, 0.3)'
        }}>
          <Shield style={{width: '32px', height: '32px'}} />
        </div>
        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.4rem',
          fontWeight: '700',
          margin: '0 0 8px 0',
          color: 'var(--nyt-black)'
        }}>
          Zero-Knowledge Authentication
        </h3>
        <p style={{
          margin: '0',
          color: 'var(--nyt-gray)',
          fontSize: '0.9rem',
          fontFamily: 'Georgia, serif'
        }}>
          Prove your identity without revealing personal information
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '25px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 12px',
          backgroundColor: 'var(--nyt-bg)',
          borderRadius: '20px',
          border: '1px solid var(--nyt-border)'
        }}>
          <Lock style={{width: '16px', height: '16px', color: 'var(--nyt-accent)'}} />
          <span style={{fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--nyt-black)'}}>
            Privacy First
          </span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 12px',
          backgroundColor: 'var(--nyt-bg)',
          borderRadius: '20px',
          border: '1px solid var(--nyt-border)'
        }}>
          <Eye style={{width: '16px', height: '16px', color: 'var(--nyt-accent)'}} />
          <span style={{fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--nyt-black)'}}>
            Anonymous
          </span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 12px',
          backgroundColor: 'var(--nyt-bg)',
          borderRadius: '20px',
          border: '1px solid var(--nyt-border)'
        }}>
          <Shield style={{width: '16px', height: '16px', color: 'var(--nyt-accent)'}} />
          <span style={{fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--nyt-black)'}}>
            ZK Protected
          </span>
        </div>
      </div>

      <button
        onClick={handleZKAuth}
        disabled={isAuthenticating}
        className="nyt-button"
        style={{
          width: '100%',
          opacity: isAuthenticating ? '0.7' : '1',
          cursor: isAuthenticating ? 'not-allowed' : 'pointer'
        }}
      >
        {isAuthenticating ? (
          <>
            <Loader2 style={{marginRight: '8px', width: '16px', height: '16px'}} />
            Authenticating...
          </>
        ) : (
          <>
            <Shield style={{marginRight: '8px', width: '16px', height: '16px'}} />
            Start ZK Authentication
          </>
        )}
      </button>

      <p style={{
        fontSize: '0.85rem',
        margin: '15px 0 0 0',
        color: 'var(--nyt-light-gray)',
        fontFamily: 'Georgia, serif'
      }}>
        Your identity will be verified using zero-knowledge proofs
      </p>
    </div>
  )
}
