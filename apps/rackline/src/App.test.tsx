import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the page title and offers a skip link into the main landmark', () => {
    render(<App />)

    expect(document.title).toBe('Rackline — Web Hosting Template')
    const skip = screen.getByRole('link', { name: 'Skip to content' })
    expect(skip).toHaveAttribute('href', '#main')
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main')
  })

  it('stacks the utility bar over the navigation in a sticky header', () => {
    const { container } = render(<App />)

    const header = container.querySelector('header')
    expect(header).toHaveClass('sticky', 'top-0', 'z-[100]')
    expect(within(header as HTMLElement).getByRole('link', { name: /Rackline home/ })).toBeInTheDocument()
    expect(within(header as HTMLElement).getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
  })

  it('renders every band of the page in the reference order', () => {
    const { container } = render(<App />)

    const sections = Array.from(container.querySelectorAll('main > section')).map(
      (section) => section.id,
    )
    expect(sections).toEqual(['home', 'plans', 'rating', 'why', 'reviews'])

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Domains that load before you blink',
    )
    expect(container.querySelector('footer')).toHaveAttribute('id', 'contact')
  })

  it('anchors every navigation destination to a real section', () => {
    const { container } = render(<App />)

    for (const href of ['#home', '#plans', '#why', '#reviews', '#contact']) {
      expect(container.querySelector(`[id="${href.slice(1)}"]`)).not.toBeNull()
    }
  })

  it('links Component Dock once and keeps every other outbound link local', () => {
    const { container } = render(<App />)

    expect(screen.getAllByRole('link', { name: 'Component Dock' })).toHaveLength(1)

    const outbound = Array.from(container.querySelectorAll('a[href^="http"]')).map((anchor) =>
      anchor.getAttribute('href'),
    )
    expect(outbound).toEqual(['https://www.componentdock.com/'])
    expect(container.querySelectorAll('a[href^="tel:"]').length).toBeGreaterThan(0)
    expect(container.querySelectorAll('a[href^="mailto:"]').length).toBeGreaterThan(0)
  })
})
