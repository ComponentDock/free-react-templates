import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone number', () => {
    render(<TopBar />)
    expect(screen.getByText(/Call Us: \+2 392 3929 210/)).toBeInTheDocument()
  })

  it('renders location on sm+ screens', () => {
    render(<TopBar />)
    const location = screen.getByText(/Location: San Francisco/)
    expect(location).toBeInTheDocument()
    expect(location.closest('span')).toHaveClass('hidden')
  })

  it('renders social links with correct aria-labels', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('X')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<TopBar className="extra" />)
    expect(container.firstElementChild).toHaveClass('extra')
  })
})
