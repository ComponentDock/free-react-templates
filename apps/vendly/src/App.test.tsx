import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Vendly — Fashion Store')
  })

  it('renders every section in the original order', () => {
    const { container } = render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Finding Your Perfect Shoes' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Free Shipping' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Women/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Featured Products' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Big Sale!' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Navigations' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )

    /* Section order: hero → perks → collections → featured → sale → footer. */
    const main = container.querySelector('main')
    const text = main?.textContent ?? ''
    expect(text).toMatch(
      /Finding Your Perfect Shoes[\s\S]*Free Shipping[\s\S]*Children[\s\S]*Featured Products[\s\S]*Big Sale![\s\S]*Navigations/,
    )
  })
})
