import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { BULLETS, CALC_TITLE_ID, CARD_TITLE, HEADING_ID, SECTION_ID } from './content'
import { banned } from './test/banned'

describe('App', () => {
  it('renders one main holding one section, and nothing else above the footer', () => {
    const { container } = render(<App />)

    const mains = container.querySelectorAll('main')
    expect(mains).toHaveLength(1)
    expect(mains[0]).toHaveClass('pr-main')

    const sections = container.querySelectorAll('section')
    expect(sections).toHaveLength(1)
    expect(sections[0]).toHaveAttribute('id', SECTION_ID)
    expect(sections[0]).toHaveClass('pr-section')
  })

  it('labels the section with the page heading and the card with its own', () => {
    render(<App />)

    const section = screen.getByRole('region', { name: /Seats scale/i })
    expect(section).toHaveAttribute('aria-labelledby', HEADING_ID)

    const group = screen.getByRole('group', { name: CARD_TITLE })
    expect(group).toHaveAttribute('aria-labelledby', CALC_TITLE_ID)
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
    expect(container.querySelectorAll('h2')).toHaveLength(1)
    expect(container.querySelectorAll('ul')).toHaveLength(1)
    expect(container.querySelectorAll('ul li')).toHaveLength(BULLETS.length)
    expect(container.querySelectorAll('ol')).toHaveLength(1)
    expect(container.querySelectorAll('ol li')).toHaveLength(3)
    expect(container.querySelectorAll('input')).toHaveLength(2)
    expect(container.querySelectorAll('output')).toHaveLength(1)
    expect(container.querySelectorAll('a')).toHaveLength(3)
  })

  it('ships no image, form, button, icon or script of its own', () => {
    const { container } = render(<App />)

    for (const selector of ['img', 'svg', 'form', 'button', 'script', 'iframe', 'video']) {
      expect(container.querySelectorAll(selector)).toHaveLength(0)
    }
  })

  it('settles on $140 and twelve seats on first paint', () => {
    const { container } = render(<App />)

    expect(screen.getByText('$140')).toBeInTheDocument()
    expect(container.querySelector('.pr-field')).toHaveValue(12)
    expect(container.querySelector('.pr-range')).toHaveValue('12')
  })

  it('leaves no dead anchor anywhere on the page', () => {
    const { container } = render(<App />)

    for (const anchor of container.querySelectorAll('a')) {
      expect(anchor.getAttribute('href')).toMatch(/^https:\/\//)
      expect(anchor.textContent).not.toBe('')
    }
  })

  it('renders no provenance string anywhere in the markup', () => {
    const { container } = render(<App />)
    const markup = container.innerHTML

    // Assembled at run time so the repository sweep finds no banned string here.
    expect(markup).not.toContain(banned('color', 'lib'))
    expect(markup).not.toContain(banned('pricing', '-table-05'))
    expect(markup).not.toContain(banned('ink', 'post'))
  })
})
