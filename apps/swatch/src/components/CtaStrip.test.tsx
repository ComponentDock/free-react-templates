import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaStrip } from './CtaStrip'
import { ctaStrip } from '../data'

describe('CtaStrip', () => {
  it('renders the heading, subtext and the white outline Contact Me button', () => {
    render(<CtaStrip />)

    expect(screen.getByRole('heading', { name: ctaStrip.heading })).toBeInTheDocument()
    expect(screen.getByText(ctaStrip.subtext)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Me' })).toHaveAttribute('href', '#contactme')
  })
})
