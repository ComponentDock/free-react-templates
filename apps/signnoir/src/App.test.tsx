import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the dark page with the white centered heading', () => {
    const { container } = render(<App />)
    const wrapper = container.firstElementChild
    expect(wrapper?.className).toContain('bg-page-bg')
    expect(wrapper?.className).toContain('py-28')

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Sign Up #10')
    expect(heading.className).toContain('text-[28px]')
    expect(heading.className).toContain('text-white')
    expect(heading.className).toContain('text-center')
  })

  it('renders the split signup wrap inside a centered card column', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: /welcome to signup form/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /create an account/i }),
    ).toBeInTheDocument()
  })

  it('renders the Component Dock footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
