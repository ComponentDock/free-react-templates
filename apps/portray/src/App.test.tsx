import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes the reference bands in order', () => {
    const { container } = render(<App />)
    const headings = screen.getAllByRole('heading', { level: 2 }).map((node) => node.textContent)
    expect(headings).toEqual([
      expect.stringContaining("I'm a creative director"),
      'My expertise',
      'Experience',
      'Education',
      expect.stringContaining("I'm a designer"),
    ])
    expect(container.querySelector('#main-content')).not.toBeNull()
    expect(container.querySelector('#top')).not.toBeNull()
    expect(container.querySelector('#about')).not.toBeNull()
    expect(container.querySelector('#expertise')).not.toBeNull()
    expect(container.querySelector('#portfolio')).not.toBeNull()
    expect(container.querySelector('#contact')).not.toBeNull()
  })

  it('offers a skip link that targets the main landmark', () => {
    render(<App />)
    const skip = screen.getByRole('link', { name: 'Skip to main content' })
    expect(skip).toHaveAttribute('href', '#main-content')
  })

  it('renders exactly one h1 and never skips a heading level', () => {
    const { container } = render(<App />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    const levels = Array.from(container.querySelectorAll('h1,h2,h3,h4,h5,h6')).map((node) =>
      Number(node.tagName.slice(1)),
    )
    for (let index = 1; index < levels.length; index += 1) {
      expect(levels[index]!).toBeLessThanOrEqual(levels[index - 1]! + 1)
    }
  })

  it('only pulls imagery from the placeholder host and credits Component Dock', () => {
    const { container } = render(<App />)
    const sources = Array.from(container.querySelectorAll('img')).map(
      (img) => img.getAttribute('src') ?? '',
    )
    expect(sources.length).toBeGreaterThan(0)
    expect(sources.every((src) => src.startsWith('https://picsum.photos/seed/portray-'))).toBe(true)
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('never mentions the source design system in app copy', () => {
    const { container } = render(<App />)
    expect(container.innerHTML.toLowerCase()).not.toContain('colorlib')
  })

  it('keeps the four experience rows and two education rows', () => {
    render(<App />)
    const experience = screen.getByRole('region', { name: 'Experience' })
    expect(within(experience).getAllByRole('heading', { level: 3 })).toHaveLength(4)
    const education = screen.getByRole('region', { name: 'Education' })
    expect(within(education).getAllByRole('heading', { level: 3 })).toHaveLength(2)
  })

  it('lets a visitor switch to the lightbox and back', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Open Nordlys identity system' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
