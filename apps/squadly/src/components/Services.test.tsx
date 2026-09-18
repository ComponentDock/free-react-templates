import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and all 4 service cards', () => {
    render(<Services />)

    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Rental Services' })).toBeInTheDocument()

    for (const title of ['Bulldozer', 'Forklift', 'Crane', 'Excavator']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders background images for each service card', () => {
    const { container } = render(<Services />)

    const bgDivs = container.querySelectorAll('[style*="picsum.photos"]')
    expect(bgDivs.length).toBe(4)
  })
})
