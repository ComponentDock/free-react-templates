import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactCta } from './ContactCta'

describe('ContactCta', () => {
  it('renders the white serif heading and sub on the rose gradient band', () => {
    render(<ContactCta />)

    const section = screen.getByText(/Let's Create/).closest('section')!
    expect(section).toHaveClass('from-primary-600', 'to-primary-800')

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain('Let')
    expect(heading.textContent).toContain('Create Your Perfect Day')
    expect(heading).toHaveClass('text-white')

    expect(screen.getByText(/Schedule your complimentary consultation/)).toBeInTheDocument()
  })

  it('renders the white and outline CTA buttons', () => {
    render(<ContactCta />)

    const schedule = screen.getByRole('link', { name: 'Schedule Consultation' })
    expect(schedule).toHaveClass('rounded-full', 'bg-white')

    const call = screen.getByRole('link', { name: 'Call Us' })
    expect(call).toHaveClass('rounded-full', 'border', 'border-white/60')
  })
})
