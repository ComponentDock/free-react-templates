import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeaderInfoBar } from './HeaderInfoBar'

describe('HeaderInfoBar', () => {
  it('renders four info columns with icons and text', () => {
    render(<HeaderInfoBar />)

    expect(screen.getByText('Find us:')).toBeInTheDocument()
    expect(screen.getByText('123 Dental Ave, Suite 100')).toBeInTheDocument()

    expect(screen.getByText('Working hours:')).toBeInTheDocument()
    expect(screen.getByText('Mon–Fri: 8am–6pm')).toBeInTheDocument()

    expect(screen.getByText('Call us:')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()

    expect(screen.getByText('Appointment:')).toBeInTheDocument()
    expect(screen.getByText('Book online now')).toBeInTheDocument()
  })

  it('has the correct background color class', () => {
    const { container } = render(<HeaderInfoBar />)
    expect(container.firstElementChild).toHaveClass('bg-card')
  })
})
