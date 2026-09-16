import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FooterBottom } from './FooterBottom'

describe('FooterBottom', () => {
  it('renders copyright with Component Dock link', () => {
    render(<FooterBottom />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
