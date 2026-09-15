import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('shows email and phone contact info', () => {
    render(<TopBar />)
    expect(screen.getByText(/infogracecraft@gmail.com/)).toBeInTheDocument()
    expect(screen.getByText(/Call Us: \+1234 800 8080/)).toBeInTheDocument()
  })

  it('has social media links', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
  })
})
