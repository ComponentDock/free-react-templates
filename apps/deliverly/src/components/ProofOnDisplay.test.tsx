import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { aboutImage, proofLead, proofStats, proofTitle } from '../data'
import { ProofOnDisplay } from './ProofOnDisplay'

describe('ProofOnDisplay', () => {
  it('renders the photo, green underline, heading, lead and three icon stats', () => {
    const { container } = render(<ProofOnDisplay />)

    expect(screen.getByRole('heading', { level: 2, name: proofTitle })).toBeInTheDocument()
    expect(screen.getByText(proofLead)).toBeInTheDocument()

    for (const stat of proofStats) {
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }

    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', aboutImage)
    expect(img).toHaveAttribute('alt', '')
    // 2x50px green underline before the heading + 3 icon circles.
    expect(container.querySelector('div.bg-brand')).toBeInTheDocument()
    expect(container.querySelectorAll('span.rounded-full')).toHaveLength(3)
  })
})
