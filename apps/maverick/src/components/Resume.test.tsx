import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Resume } from './Resume'

describe('Resume', () => {
  it('renders the heading with the watermark and the six cards', () => {
    render(<Resume />)
    expect(screen.getByRole('heading', { level: 2, name: 'Resume' })).toBeInTheDocument()
    for (const title of [
      'Master Degree of Design',
      "Bachelor's Degree of C.A",
      'Diploma in Computer',
      'Art & Creative Director',
      'Wordpress Developer',
      'UI/UX Designer',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('shows the amber dates and institutions', () => {
    render(<Resume />)
    expect(screen.getAllByText('2014-2015')).toHaveLength(4)
    expect(screen.getAllByText('2008-2009')).toHaveLength(2)
    expect(screen.getAllByText('Cambridge University')).toHaveLength(6)
  })

  it('renders the centered Download CV button', () => {
    render(<Resume />)
    expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute(
      'href',
      '#contact-section',
    )
  })
})
