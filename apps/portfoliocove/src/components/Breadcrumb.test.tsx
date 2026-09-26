import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Breadcrumb } from './Breadcrumb'

describe('Breadcrumb', () => {
  it('shows current location', () => {
    render(<Breadcrumb />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
  })

  it('Home is a clickable link', () => {
    render(<Breadcrumb />)
    const homeLink = screen.getByRole('link', { name: /home/i })
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('Portfolio is plain text (current page)', () => {
    render(<Breadcrumb />)
    const portfolio = screen.getByText('Portfolio')
    expect(portfolio.tagName).not.toBe('A')
  })

  it('displays separator between items', () => {
    render(<Breadcrumb />)
    expect(screen.getByText('/')).toBeInTheDocument()
  })
})
