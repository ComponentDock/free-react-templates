import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone number', () => {
    render(<TopBar />)
    expect(screen.getByText(/\+880166 253 232/)).toBeInTheDocument()
  })

  it('renders email address', () => {
    render(<TopBar />)
    expect(screen.getByText(/info@domain.com/)).toBeInTheDocument()
  })

  it('renders business hours', () => {
    render(<TopBar />)
    expect(screen.getByText(/Mon - Fri/)).toBeInTheDocument()
  })

  it('has dark navy background', () => {
    render(<TopBar />)
    const bar = screen.getByRole('complementary')
    expect(bar.className).toContain('bg-navy')
  })
})
