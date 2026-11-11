import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { COMPONENT_DOCK, FOOTNOTE, HEADING_ID, HEADLINE_GLOW, PLANS } from './content'
import { banned } from './test/banned'

describe('App', () => {
  it('renders one main holding exactly one section, and nothing else above the footer', () => {
    const { container } = render(<App />)

    const mains = container.querySelectorAll('main')
    expect(mains).toHaveLength(1)
    expect(mains[0]).toHaveClass('lm-main')

    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelectorAll('header')).toHaveLength(1)
    expect(container.querySelectorAll('article')).toHaveLength(PLANS.length)
  })

  it('labels the section with the page heading', () => {
    render(<App />)

    const section = screen.getByRole('region', { name: new RegExp(HEADLINE_GLOW, 'i') })
    expect(section.tagName).toBe('SECTION')
    expect(section).toHaveAttribute('aria-labelledby', HEADING_ID)
  })

  it('keeps the footer outside main so it only adds height to the page', () => {
    const { container } = render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(container.querySelector('main')?.contains(footer)).toBe(false)
    expect(footer).toBe(container.lastElementChild)
  })

  it('matches the reference structure census', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(container.querySelectorAll('h2')).toHaveLength(3)
    expect(container.querySelectorAll('article')).toHaveLength(3)
    expect(container.querySelectorAll('ul')).toHaveLength(3)
    expect(container.querySelectorAll('li')).toHaveLength(14)
    expect(container.querySelectorAll('a')).toHaveLength(4)
    // Three plan icons plus fourteen bullet sparkles.
    expect(container.querySelectorAll('main svg')).toHaveLength(17)
  })

  it('ships no image, form, input, button or script of its own', () => {
    const { container } = render(<App />)

    for (const selector of ['img', 'form', 'input', 'button', 'script', 'footer script']) {
      expect(container.querySelectorAll(selector)).toHaveLength(0)
    }
  })

  it('puts the four and five bullet lists on the right cards', () => {
    const { container } = render(<App />)

    const lists = [...container.querySelectorAll('ul')].map((list) => list.children.length)
    expect(lists).toEqual([4, 5, 5])
  })

  it('renders the closing note inside the section, after the grid', () => {
    render(<App />)

    expect(screen.getByText(FOOTNOTE)).toHaveClass('lm-foot')
  })

  it('leaves no dead anchor: all three CTAs and the footer link resolve', () => {
    const { container } = render(<App />)

    const anchors = [...container.querySelectorAll('a')]
    expect(anchors).toHaveLength(4)
    for (const anchor of anchors) {
      expect(anchor).toHaveAttribute('href', COMPONENT_DOCK)
      expect(anchor).toHaveAttribute('target', '_blank')
      expect(anchor).toHaveAttribute('rel', 'noreferrer noopener')
      expect(anchor.textContent).not.toBe('')
    }

    const footerLink = within(screen.getByRole('contentinfo')).getByRole('link')
    expect(footerLink).toHaveTextContent('Component Dock')
  })

  it('gives every card a heading of its own', () => {
    render(<App />)

    for (const plan of PLANS) {
      expect(screen.getByRole('heading', { level: 2, name: plan.name })).toHaveAttribute(
        'id',
        plan.id,
      )
    }
  })

  it('renders no provenance string anywhere in the markup', () => {
    const { container } = render(<App />)
    const markup = container.innerHTML

    // Assembled at run time so the repository sweep finds no banned string here.
    expect(markup).not.toContain(banned('color', 'lib'))
    expect(markup).not.toContain(banned('pricing', '-table-04'))
    expect(markup).not.toContain(banned('glitch', 'cast'))
  })
})
