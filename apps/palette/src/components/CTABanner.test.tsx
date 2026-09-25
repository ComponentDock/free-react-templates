import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTABanner } from './CTABanner'

describe('CTABanner', () => {
  it('renders the CTA heading and contact button', () => {
    render(<CTABanner />)
    expect(
      screen.getByRole('heading', { name: 'Have a project on your mind?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact me' })).toBeInTheDocument()
  })

  it('links Contact me to the contact section', () => {
    render(<CTABanner />)
    expect(screen.getByRole('link', { name: 'Contact me' })).toHaveAttribute('href', '#contact')
  })
})
