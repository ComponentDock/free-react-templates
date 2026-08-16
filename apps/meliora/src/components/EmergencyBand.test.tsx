import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EmergencyBand } from './EmergencyBand'
import { emergencyImage } from '../data'

describe('EmergencyBand', () => {
  it('renders the heading and two paragraphs', () => {
    render(<EmergencyBand />)
    expect(screen.getByRole('heading', { name: 'They need your help' })).toBeInTheDocument()
    expect(screen.getAllByText(/donation|volunteer|help/i).length).toBeGreaterThanOrEqual(2)
  })

  it('renders the Donate in a Case and Join with Us buttons', () => {
    render(<EmergencyBand />)
    expect(screen.getByRole('link', { name: 'Donate in a Case' })).toHaveAttribute(
      'href',
      '#donate',
    )
    expect(screen.getByRole('link', { name: 'Join with Us' })).toHaveAttribute('href', '#join')
  })

  it('uses the photo background', () => {
    render(<EmergencyBand />)
    const section = screen.getByLabelText('Emergency care')
    expect(section.style.backgroundImage).toContain(emergencyImage.src)
  })
})
