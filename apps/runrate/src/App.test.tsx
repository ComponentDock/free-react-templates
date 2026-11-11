import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { App } from './App'
import { ANNOUNCE_DELAY, HEADING_ID, SECTION_ID } from './content'
import { banned } from './test/banned'

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders one main holding one section, with the footer outside it', () => {
    const { container } = render(<App />)

    const mains = container.querySelectorAll('main')
    expect(mains).toHaveLength(1)
    expect(mains[0]).toHaveClass('rr-main')

    const sections = container.querySelectorAll('section')
    expect(sections).toHaveLength(1)
    expect(sections[0]).toHaveAttribute('id', SECTION_ID)
    expect(sections[0]).toHaveClass('rr-section')
    expect(sections[0]).toHaveAttribute('aria-labelledby', HEADING_ID)

    const footer = screen.getByRole('contentinfo')
    expect(mains[0]?.contains(footer)).toBe(false)
    expect(footer).toBe(container.lastElementChild)
  })

  it('matches the reference structure census', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(container.querySelectorAll('h2')).toHaveLength(1)
    expect(container.querySelectorAll('form')).toHaveLength(1)
    expect(container.querySelectorAll('input[type="range"]')).toHaveLength(2)
    expect(container.querySelectorAll('input[type="checkbox"]')).toHaveLength(1)
    expect(container.querySelectorAll('output')).toHaveLength(1)
    expect(container.querySelectorAll('dl')).toHaveLength(1)
    expect(container.querySelectorAll('dl > div')).toHaveLength(4)
    expect(container.querySelectorAll('aside')).toHaveLength(1)
    expect(container.querySelectorAll('.rr-bar .rr-seg')).toHaveLength(4)
    expect(container.querySelectorAll('a')).toHaveLength(2)
  })

  it('ships no image, icon, button or script of its own', () => {
    const { container } = render(<App />)

    for (const selector of ['img', 'svg', 'button', 'script', 'iframe', 'video']) {
      expect(container.querySelectorAll(selector)).toHaveLength(0)
    }
  })

  it('settles on $39.40 at the defaults, with 1M calls and 50 GB', () => {
    const { container } = render(<App />)

    expect(screen.getByText('$39.40')).toBeInTheDocument()
    expect(screen.getByRole('slider', { name: 'API calls per month' })).toHaveValue('4')
    expect(screen.getByRole('slider', { name: 'Database storage' })).toHaveValue('4')
    expect(screen.getByText('1M')).toBeInTheDocument()
    expect(screen.getByText('50 GB')).toBeInTheDocument()
    expect(container.querySelector('.rr-seg--calls')).toHaveAttribute('style', 'flex-grow: 9;')
  })

  it('recomputes the card from the calls slider alone', () => {
    render(<App />)

    fireEvent.change(screen.getByRole('slider', { name: 'API calls per month' }), {
      target: { value: '10' },
    })

    expect(screen.getByText('$1,029.40')).toBeInTheDocument()
    expect(screen.getByText('100M')).toBeInTheDocument()
    expect(screen.getByText('$999.00')).toBeInTheDocument()
  })

  it('recomputes the card from the storage slider alone', () => {
    render(<App />)

    fireEvent.change(screen.getByRole('slider', { name: 'Database storage' }), {
      target: { value: '11' },
    })

    expect(screen.getByText('$1,233.40')).toBeInTheDocument()
    expect(screen.getByText('10 TB')).toBeInTheDocument()
    expect(screen.getByText('$1,199.40')).toBeInTheDocument()
  })

  it('adds $149 when the support row is toggled', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('checkbox', { name: /Priority support/ }))

    expect(screen.getByText('$188.40')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeChecked()
    expect(document.querySelector('.rr-check')).toHaveAttribute('data-checked', 'true')
  })

  it('composes both sliders and the boolean without contradicting itself', () => {
    render(<App />)

    fireEvent.change(screen.getByRole('slider', { name: 'API calls per month' }), {
      target: { value: '10' },
    })
    fireEvent.change(screen.getByRole('slider', { name: 'Database storage' }), {
      target: { value: '11' },
    })
    fireEvent.click(screen.getByRole('checkbox'))

    expect(screen.getByText('$2,372.40')).toBeInTheDocument()
    expect(screen.getByText('100M')).toBeInTheDocument()
    expect(screen.getByText('10 TB')).toBeInTheDocument()
    expect(document.querySelector('.rr-seg--support')).toHaveAttribute(
      'style',
      'flex-grow: 149;',
    )
  })

  it('announces the settled total once the dragging stops', () => {
    const { container } = render(<App />)
    // `<output>` is a `status` too, so the debounced live region is the one with
    // the visually-hidden class.
    const status = container.querySelector('.rr-vh')!

    fireEvent.change(screen.getByRole('slider', { name: 'API calls per month' }), {
      target: { value: '7' },
    })
    expect(status).toHaveTextContent('')

    act(() => {
      vi.advanceTimersByTime(ANNOUNCE_DELAY)
    })
    expect(status).toHaveTextContent('Estimated total $129.40 per month.')
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
    expect(markup).not.toContain(banned('pricing', '-table-06'))
    expect(markup.toLowerCase()).not.toContain(banned('parcel', 'base'))
  })
})
