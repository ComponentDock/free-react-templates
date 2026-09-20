import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Classes } from './Classes'

describe('Classes', () => {
  it('renders Our Classes heading and course cards', () => {
    render(<Classes />)

    expect(screen.getByRole('heading', { name: /our classes/i })).toBeInTheDocument()

    const courseNames = [
      'Developing Mobile Apps',
      'Convert PSD to HTML',
      'Convert HTML to WordPress',
      'Advanced JavaScript',
      'Learned Smoke Effects',
      'Digital Marketing 101',
    ]
    for (const name of courseNames) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders prices and enroll links', () => {
    render(<Classes />)

    expect(screen.getAllByText('Free').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByText(/enroll now/i).length).toBe(6)
  })

  it('renders course images with alt text', () => {
    render(<Classes />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
    for (const img of images) {
      expect(img).toHaveAttribute('alt')
    }
  })
})
