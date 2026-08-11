import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSecond } from './AboutSecond'

describe('AboutSecond', () => {
  it('renders the kicker, heading and the two weighted paragraphs', () => {
    render(<AboutSecond />)

    expect(screen.getByText('About Our Restaurant')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'We provide good food for your family' }),
    ).toBeInTheDocument()

    const paragraphs = screen.getAllByRole('paragraph')
    expect(paragraphs).toHaveLength(2)
    expect(paragraphs[0]!.className).toMatch(/font-medium/)
    expect(paragraphs[1]!.className).toMatch(/font-light/)
  })

  it('renders the seeded kitchen photo on the left on desktop', () => {
    const { container } = render(<AboutSecond />)

    const img = container.querySelector('img') as HTMLElement
    expect(img.getAttribute('src')).toBe('https://picsum.photos/seed/bistro-kitchen/700/500')
    expect(img.getAttribute('alt')).toContain('kitchen')
    expect(img.className).toMatch(/order-2/)
    expect(img.className).toMatch(/lg:order-1/)
  })
})
