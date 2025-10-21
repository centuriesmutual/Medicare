'use client'

import { useState } from 'react'
import { X, Send, Shield, Loader2, BookOpen } from 'lucide-react'

interface PostReviewProps {
  onPost: (content: string, proof: string) => void
  onCancel: () => void
}

export default function PostReview({ onPost, onCancel }: PostReviewProps) {
  const [content, setContent] = useState('')
  const [isGeneratingProof, setIsGeneratingProof] = useState(false)

  const generateZKProof = async (): Promise<string> => {
    // Simulate ZK proof generation
    // In a real implementation, this would use snarkjs or similar
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Generate a mock proof hash
    const proof = `zkp_${Date.now().toString(36)}_${Math.random().toString(36).substr(2, 9)}`
    return proof
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return

    setIsGeneratingProof(true)
    try {
      const proof = await generateZKProof()
      onPost(content, proof)
    } catch (error) {
      console.error('Error generating proof:', error)
    } finally {
      setIsGeneratingProof(false)
    }
  }

  return (
    <div className="nyt-modal">
      <div className="nyt-modal-content">
        {/* Header */}
        <div className="nyt-modal-header">
          <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <div style={{
              width: '50px',
              height: '50px',
              backgroundColor: 'var(--nyt-accent)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              <Shield style={{width: '24px', height: '24px'}} />
            </div>
            <div>
              <h2 className="nyt-modal-title">
                Submit Anonymous Review
              </h2>
              <p style={{margin: '5px 0 0 0', color: 'var(--nyt-gray)', fontSize: '0.9rem'}}>
                Your identity will be protected with zero-knowledge proofs
              </p>
            </div>
          </div>
          <button
            onClick={onCancel}
            className="nyt-modal-close"
          >
            <X style={{width: '20px', height: '20px'}} />
          </button>
        </div>

        {/* Form */}
        <div className="nyt-modal-body">
          <form onSubmit={handleSubmit}>
            <div className="nyt-form-group">
              <label className="nyt-form-label">
                Your Anonymous Review
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Share your honest review anonymously... Your story matters and will be protected by zero-knowledge proofs."
                className="nyt-form-textarea"
                maxLength={500}
              />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '10px'
              }}>
                <p style={{fontSize: '0.9rem', color: 'var(--nyt-gray)', margin: '0'}}>
                  Your review is protected by zero-knowledge proofs
                </p>
                <span style={{fontSize: '0.9rem', color: 'var(--nyt-light-gray)'}}>
                  {content.length}/500
                </span>
              </div>
            </div>

            {/* ZK Proof Status */}
            <div style={{
              marginBottom: '25px',
              padding: '20px',
              backgroundColor: 'var(--nyt-cream)',
              border: '1px solid var(--nyt-border)',
              borderRadius: '8px'
            }}>
              <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'var(--nyt-accent)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <Shield style={{width: '20px', height: '20px'}} />
                </div>
                <div>
                  <p style={{fontSize: '1rem', fontWeight: '600', margin: '0 0 5px 0', color: 'var(--nyt-black)'}}>
                    Privacy Protection Active
                  </p>
                  <p style={{margin: '0', color: 'var(--nyt-gray)', fontSize: '0.9rem'}}>
                    Your identity will be verified without revealing personal information
                  </p>
                </div>
              </div>
            </div>

            {/* NYT Info */}
            <div style={{
              marginBottom: '25px',
              padding: '20px',
              backgroundColor: 'var(--nyt-bg)',
              border: '1px solid var(--nyt-border)',
              borderRadius: '8px'
            }}>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <BookOpen style={{width: '20px', height: '20px', color: 'var(--nyt-accent)'}} />
                <h4 style={{fontSize: '1rem', fontWeight: '600', margin: '0', color: 'var(--nyt-black)'}}>
                  NYT-Style Publishing
                </h4>
              </div>
              <p style={{margin: '0', color: 'var(--nyt-gray)', fontSize: '0.9rem'}}>
                Your review will be published in our NYT-style layout, ensuring it reaches 
                the community while maintaining complete anonymity through zero-knowledge proofs.
              </p>
            </div>

            {/* Actions */}
            <div style={{display: 'flex', gap: '15px'}}>
              <button
                type="button"
                onClick={onCancel}
                className="nyt-button secondary"
                style={{flex: '1'}}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!content.trim() || isGeneratingProof}
                className="nyt-button"
                style={{
                  flex: '1',
                  opacity: (!content.trim() || isGeneratingProof) ? '0.5' : '1',
                  cursor: (!content.trim() || isGeneratingProof) ? 'not-allowed' : 'pointer'
                }}
              >
                {isGeneratingProof ? (
                  <>
                    <Loader2 style={{marginRight: '8px', width: '16px', height: '16px'}} />
                    Generating Proof...
                  </>
                ) : (
                  <>
                    <Send style={{marginRight: '8px', width: '16px', height: '16px'}} />
                    Publish Review
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
