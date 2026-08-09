import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and three service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    for (const name of ['Smooth Shave', 'Beard Triming', 'Haircut Styles']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
  })

  it('shows an icon for every service card', () => {
    const { container } = render(<Services />)
    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(3)
  })
})
