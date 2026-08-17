import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBand } from './CtaBand'
import { CTA_BAND } from '../data'

describe('CtaBand', () => {
  it('renders on the near-black band with heading, text, and Contact Us CTA', () => {
    render(<CtaBand />)
    const section = screen.getByRole('region', { name: 'Call to action' })
    expect(section.className).toContain('bg-night')
    expect(screen.getByRole('heading', { level: 2 }).textContent).toContain('Any help needed?')
    expect(screen.getByText(CTA_BAND.text)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute('href', '#contact')
  })
})
