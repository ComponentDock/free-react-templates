import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders the heading, description, CTA button, and background image', () => {
    const { container } = render(<CallToAction />)

    expect(screen.getByRole('heading', { name: 'Experience Great Support' })).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText('Reach Our Support Team')).toBeInTheDocument()

    const cta = screen.getByText('Reach Our Support Team')
    expect(cta).toHaveAttribute('href', '#contact')

    const image = container.querySelector('img')
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/fleetly-cta'))
  })
})
