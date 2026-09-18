import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopInfoBar } from './TopInfoBar'

describe('TopInfoBar', () => {
  it('renders address, email, and phone', () => {
    render(<TopInfoBar />)
    expect(screen.getByText('123 Sunshine Lane, Brookside, NY 10001')).toBeInTheDocument()
    expect(screen.getByText('hello@tinybrights.com')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 234-5678')).toBeInTheDocument()
  })

  it('has a complementary landmark', () => {
    render(<TopInfoBar />)
    expect(screen.getByRole('complementary')).toBeInTheDocument()
  })
})
