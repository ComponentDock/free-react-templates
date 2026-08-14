import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { volunteerCta } from '../data'
import { VolunteerCta } from './VolunteerCta'

describe('VolunteerCta', () => {
  it('renders the solid red block with heading, paragraph, and two outline buttons', () => {
    const { container } = render(<VolunteerCta />)

    expect(screen.getByRole('heading', { name: volunteerCta.title })).toBeInTheDocument()
    expect(screen.getByText(volunteerCta.paragraph)).toBeInTheDocument()

    for (const label of volunteerCta.buttons) {
      const button = screen.getByRole('link', { name: label })
      expect(button).toHaveClass('border-white')
      expect(button).toHaveClass('text-white')
    }

    const section = container.querySelector('section')
    expect(section?.getAttribute('style')).toContain('picsum.photos/id/453')
    expect(container.querySelector('.bg-brand')).not.toBeNull()
  })

  it('does not navigate when a CTA button is clicked', () => {
    render(<VolunteerCta />)
    fireEvent.click(screen.getByRole('link', { name: 'Join With Us' }))
    expect(window.location.hash).toBe('')
  })
})
