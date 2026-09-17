import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders contact information on the left', () => {
    render(<TopBar />)
    expect(screen.getByText('info@scholarly.edu')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })

  it('renders utility links and support CTA on the right', () => {
    render(<TopBar />)
    expect(screen.getByText('Alumni')).toBeInTheDocument()
    expect(screen.getByText('Calendar')).toBeInTheDocument()
    expect(screen.getByText('Portal')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Support' })).toBeInTheDocument()
  })

  it('has a dark navy background', () => {
    const { container } = render(<TopBar />)
    const bar = container.firstElementChild
    expect(bar).toHaveClass('bg-navy-900')
  })
})
