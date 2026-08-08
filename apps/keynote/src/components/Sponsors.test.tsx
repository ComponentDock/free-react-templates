import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sponsors } from './Sponsors'

describe('Sponsors', () => {
  it('renders the heading and all partner tiers', () => {
    render(<Sponsors />)
    expect(screen.getByRole('heading', { name: /Backed by Leaders/i })).toBeInTheDocument()
    for (const tier of ['Diamond', 'Platinum', 'Gold', 'Silver']) {
      expect(screen.getByRole('heading', { name: tier })).toBeInTheDocument()
    }
    for (const name of [
      'Anthropic',
      'OpenAI',
      'Google DeepMind',
      'Cohere',
      'Mistral AI',
      'Hugging Face',
      'LangChain',
      'Pinecone',
      'Weaviate',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders the sponsor CTA', () => {
    render(<Sponsors />)
    expect(screen.getByRole('heading', { name: 'Become a Sponsor' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View Sponsorship Packages/i })).toBeInTheDocument()
  })
})
