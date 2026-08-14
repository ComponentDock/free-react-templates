import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Partners } from './Partners'
import { partnerLogos } from '../data'

describe('Partners', () => {
  it('renders a muted logotype placeholder for each partner', () => {
    const { container } = render(<Partners />)
    expect(screen.getByRole('region', { name: 'Partners' })).toBeInTheDocument()
    for (const name of partnerLogos) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('span').length).toBe(partnerLogos.length)
  })
})
