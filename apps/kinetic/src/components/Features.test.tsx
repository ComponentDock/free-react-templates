import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { describe, expect, it } from 'vitest'

describe('Features', () => {
  it('renders section title', () => {
    render(<Features />)
    expect(screen.getByText('Our Exclusive Features')).toBeInTheDocument()
  })

  it('renders three feature cards with Read More links', () => {
    render(<Features />)
    const titles = ['Creative Design', 'Appropriate UX', 'Super Clean Code']
    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(3)
  })

  it('renders feature images', () => {
    const { container } = render(<Features />)
    const imgs = container.querySelectorAll('img')
    expect(imgs.length).toBe(3)
  })
})
