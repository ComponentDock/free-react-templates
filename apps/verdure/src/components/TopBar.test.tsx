import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders email and social links', () => {
    render(<TopBar />)
    expect(screen.getByText(/youremail@email.com/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
  })

  it('renders phone and location info', () => {
    render(<TopBar />)
    expect(screen.getByText(/\+1 \(555\) 123-4567/)).toBeInTheDocument()
    expect(screen.getByText(/123 Garden Street/)).toBeInTheDocument()
  })

  it('renders Request A Quote CTA', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /Request A Quote/i })).toBeInTheDocument()
  })
})
