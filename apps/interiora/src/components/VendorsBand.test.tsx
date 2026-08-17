import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { VendorsBand } from './VendorsBand'
import { VENDORS_BAND } from '../data'

describe('VendorsBand', () => {
  it("renders the heading, paragraph, and Let's Discuss CTA", () => {
    render(<VendorsBand />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toContain('more than 200 vendors')
    expect(screen.getByText(VENDORS_BAND.text)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: "Let's Discuss" })).toHaveAttribute('href', '#contact')
  })

  it('renders an accessible video play button linking to the film', () => {
    render(<VendorsBand />)
    const play = screen.getByRole('link', { name: VENDORS_BAND.videoLabel })
    expect(play).toHaveAttribute('href', VENDORS_BAND.videoUrl)
  })
})
