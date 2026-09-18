import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PromoCover } from './PromoCover'

describe('PromoCover', () => {
  it('renders heading and subtext', () => {
    render(<PromoCover />)

    expect(screen.getByText('Get 10% off On Your Next Travel')).toBeInTheDocument()
    expect(screen.getByText(/Sign up for our newsletter/)).toBeInTheDocument()
  })

  it('renders Get Started button', () => {
    render(<PromoCover />)

    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('Get Started button is a link', () => {
    render(<PromoCover />)

    const btn = screen.getByText('Get Started')
    expect(btn.tagName).toBe('A')
  })
})
