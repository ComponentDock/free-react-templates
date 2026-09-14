import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Instagram } from './Instagram'

describe('Instagram', () => {
  it('shows the heading and Instagram links', () => {
    render(<Instagram />)
    expect(screen.getByRole('heading', { name: /Follow us on Instagram/i })).toBeInTheDocument()
    const links = screen.getAllByRole('link', { name: /Follow on Instagram/i })
    expect(links).toHaveLength(2)
  })
})
