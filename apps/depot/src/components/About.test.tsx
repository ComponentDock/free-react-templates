import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { checklist } from '../data'

describe('About', () => {
  it('renders the image, heading, paragraphs, checklist and Learn More CTA', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Depot Real Estate Template' }),
    ).toBeInTheDocument()
    expect(screen.getByAltText('Modern property building')).toBeInTheDocument()
    expect(screen.getByText(/Est qui eos quasi ratione nostrum/)).toBeInTheDocument()
    expect(screen.getByText(/Quo suscipit omnis iste velit maxime/)).toBeInTheDocument()
    for (const item of checklist) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
    const section = screen.getByRole('region', { name: 'About' })
    expect(section.querySelectorAll('svg')).toHaveLength(checklist.length)
    const cta = screen.getByRole('link', { name: 'Learn More' })
    expect(cta.className).toContain('bg-brand')
  })
})
