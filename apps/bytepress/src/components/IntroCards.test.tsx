import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IntroCards } from './IntroCards'

describe('IntroCards', () => {
  it('renders 3 category cards', () => {
    render(<IntroCards />)
    expect(screen.getAllByRole('link')).toHaveLength(3)
  })

  it('renders category labels', () => {
    render(<IntroCards />)
    expect(screen.getByText('technology')).toBeInTheDocument()
    expect(screen.getByText('videos')).toBeInTheDocument()
    expect(screen.getByText('featured')).toBeInTheDocument()
  })

  it('renders images with picsum placeholders', () => {
    render(<IntroCards />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBe(3)
    for (const img of imgs) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
