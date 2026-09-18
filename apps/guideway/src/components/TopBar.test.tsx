import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the logo', () => {
    render(<TopBar />)
    expect(screen.getByText('Guideway')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<TopBar />)
    expect(screen.getByText('youremail@email.com')).toBeInTheDocument()
    expect(screen.getByText('Call Us: +1 235 2355 98')).toBeInTheDocument()
  })

  it('renders the Free Consulting CTA', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /free consulting/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
