import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialSignup } from './SocialSignup'

describe('SocialSignup', () => {
  it('renders the "or" divider with a white gap at its center', () => {
    const { container } = render(<SocialSignup />)
    expect(screen.getByText(/^or$/)).toBeInTheDocument()
    const line = container.querySelector('span[aria-hidden="true"]')
    expect(line?.className).toContain('bg-divider')
    expect(line?.className).toContain('h-px')
    expect(line?.className).toContain('w-full')
  })

  it('renders the services caption', () => {
    render(<SocialSignup />)
    expect(screen.getByText(/signup with this services/i)).toBeInTheDocument()
  })

  it('renders three circular social links with accessible names', () => {
    render(<SocialSignup />)
    const google = screen.getByRole('link', { name: /sign up with google/i })
    const facebook = screen.getByRole('link', { name: /sign up with facebook/i })
    const twitter = screen.getByRole('link', { name: /sign up with twitter/i })
    for (const link of [google, facebook, twitter]) {
      expect(link.className).toContain('rounded-full')
      expect(link.className).toContain('h-10')
      expect(link.className).toContain('w-10')
      expect(link.className).toContain('border-black/5')
      expect(link.className).toContain('hover:bg-accent')
      expect(link.className).toContain('hover:text-white')
    }
  })

  it('renders the brand marks as inline SVG (no icon font)', () => {
    const { container } = render(<SocialSignup />)
    const svgs = container.querySelectorAll('svg')
    expect(svgs).toHaveLength(3)
    for (const svg of svgs) {
      expect(svg.getAttribute('viewBox')).toBe('0 0 24 24')
      expect(svg.querySelector('path')).not.toBeNull()
    }
  })
})
