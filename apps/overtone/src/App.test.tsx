import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { COMPONENT_DOCK_URL, NAV_ID, TITLE_ID } from './data/site'

describe('App', () => {
  it('renders one header, one nav, one main and one section', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('header')).toHaveLength(1)
    expect(container.querySelectorAll('main')).toHaveLength(1)
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelectorAll('footer')).toHaveLength(1)
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
  })

  it('carries exactly one h1, no h2 and no h3', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(container.querySelectorAll('h2')).toHaveLength(0)
    expect(container.querySelectorAll('h3')).toHaveLength(0)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Contour ANC Headphones')
  })

  it('ships the reference control set: no form, three radios, three buttons, one image', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('form')).toHaveLength(0)
    expect(container.querySelectorAll('input[type="radio"]')).toHaveLength(3)
    expect(screen.getAllByRole('button')).toHaveLength(3)
    expect(container.querySelectorAll('img')).toHaveLength(1)
    expect(container.querySelectorAll('img')[0]).toHaveAttribute('width', '900')
  })

  it('links every anchor to a real destination and carries two ids', () => {
    const { container } = render(<App />)

    const anchors = Array.from(container.querySelectorAll('a'))
    // the reference's eight (wordmark, four links, search, cart) + the footer's
    expect(anchors).toHaveLength(9)
    for (const anchor of anchors) {
      expect(anchor.getAttribute('href')).not.toBe('#')
      expect(anchor.getAttribute('href')).not.toBeNull()
    }

    const ids = Array.from(container.querySelectorAll('[id]')).map((node) => node.id)
    expect(ids).toHaveLength(2)
    expect(ids).toEqual(expect.arrayContaining([NAV_ID, TITLE_ID]))
  })

  it('labels the section with its own headline', () => {
    render(<App />)

    expect(screen.getByRole('region', { name: 'Contour ANC Headphones' })).toBeInTheDocument()
  })

  it('closes with the Component Dock footer below the full-height shell', () => {
    const { container } = render(<App />)
    const root = container.querySelector('.ot-root')
    const footer = screen.getByRole('contentinfo')

    expect(root?.nextElementSibling).toBe(footer)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      COMPONENT_DOCK_URL,
    )
  })

  it('increments the cart badge when the buy bar is pressed', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByLabelText('Cart, 2 items')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Add to cart · $249' }))

    expect(screen.getByLabelText('Cart, 3 items')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Added · see cart' })).toBeInTheDocument()
  })
})
