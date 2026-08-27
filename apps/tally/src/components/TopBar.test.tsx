import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone number', () => {
    render(<TopBar />)
    expect(screen.getByText(/01 234 567 89/)).toBeInTheDocument()
  })

  it('renders email address', () => {
    render(<TopBar />)
    expect(screen.getByText(/info@tally\.com/)).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<TopBar />)
    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument()
  })

  it('has dark background styling', () => {
    render(<TopBar />)
    const bar = screen.getByRole('complementary')
    expect(bar).toHaveClass('bg-dark')
  })
})
