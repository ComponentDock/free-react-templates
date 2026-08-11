import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { ABOUT_CAPTIONS } from '../data'

describe('About', () => {
  it('renders the kicker, heading and two paragraphs', () => {
    render(<About />)

    expect(screen.getByText('About Our Restaurant')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'We provide good food for your family' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('paragraph')).toHaveLength(2)
  })

  it('renders the icon + caption list', () => {
    render(<About />)

    for (const { caption } of ABOUT_CAPTIONS) {
      const item = screen.getByText(caption).closest('li') as HTMLElement
      expect(item.querySelector('svg')).not.toBeNull()
      expect(item.className).toMatch(/flex/)
    }
  })

  it('renders the seeded chef photo beside the text', () => {
    const { container } = render(<About />)

    const img = container.querySelector('img')
    expect(img?.getAttribute('src')).toBe('https://picsum.photos/seed/bistro-chef/600/700')
    expect(img?.getAttribute('alt')).toContain('chef')
  })
})
