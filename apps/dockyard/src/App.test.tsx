import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { attribution, siteName } from './data'

describe('App', () => {
  it('composes the fifteen bands in order', () => {
    const { container } = render(<App />)

    const order = [
      '#home',
      '#services',
      '#about',
      '#staff',
      '#pricing',
      '#faq',
      '#why-us',
      '#testimonials',
      '#blog',
      '#contact',
    ]

    const positions = order.map((selector) => {
      const node = container.querySelector(selector) as HTMLElement
      expect(node).not.toBeNull()
      return Array.from(container.querySelectorAll('*')).indexOf(node)
    })

    expect(positions).toEqual([...positions].sort((a, b) => a - b))
  })

  it('renders one h1, the utility bar, the navbar and the footer credit', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: attribution.label })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getAllByText(new RegExp(siteName)).length).toBeGreaterThan(0)
  })

  it('offers a skip link to the main content', () => {
    render(<App />)

    const skip = screen.getByRole('link', { name: 'Skip to main content' })
    expect(skip).toHaveAttribute('href', '#main-content')
    expect(document.getElementById('main-content')?.tagName).toBe('MAIN')
  })

  it('keeps every in-page anchor pointing at an element that exists', () => {
    const { container } = render(<App />)

    for (const anchor of Array.from(container.querySelectorAll('a[href^="#"]'))) {
      const id = anchor.getAttribute('href')?.slice(1)
      expect(id).toBeTruthy()
      expect(container.querySelector(`#${id}`)).not.toBeNull()
    }
  })
})
