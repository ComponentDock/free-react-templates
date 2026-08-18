import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

const track = () => {
  const el = document.querySelector('[data-services-track]') as HTMLElement
  return el.style.transform
}

describe('Services', () => {
  it('renders the heading and all six feature cards with icons and links', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()

    const titles = [
      'Trekking',
      'The Map',
      'Suitcase',
      'Island Hoping',
      'World Round',
      'Travel with Plane',
    ]
    titles.forEach((title) => {
      const card = screen.getByLabelText(`Service: ${title}`)
      expect(within(card).getByRole('heading', { name: title })).toBeInTheDocument()
      expect(within(card).getByRole('link', { name: 'Learn More' })).toHaveAttribute(
        'href',
        '#services',
      )
      expect(card.querySelector('svg')).toBeInTheDocument()
      expect(card.className).toContain('shrink-0')
    })
  })

  it('advances three cards with the next button and wraps to the start', () => {
    render(<Services />)
    expect(track()).toBe('translateX(0%)')

    fireEvent.click(screen.getByRole('button', { name: 'Next services' }))
    expect(track()).toBe('translateX(-50%)')

    fireEvent.click(screen.getByRole('button', { name: 'Next services' }))
    expect(track()).toBe('translateX(0%)')
  })

  it('moves back with the previous button and wraps to the last page', () => {
    render(<Services />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous services' }))
    expect(track()).toBe('translateX(-50%)')

    fireEvent.click(screen.getByRole('button', { name: 'Previous services' }))
    expect(track()).toBe('translateX(0%)')
  })

  it('bleeds into the next section with the negative margin wrap', () => {
    const { container } = render(<Services />)
    const wrap = container.querySelector('[data-services-wrap]')!
    expect(wrap.className).toContain('-mb-[250px]')
  })
})
