import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Showcase } from './Showcase'

describe('Showcase', () => {
  it('renders the heading and all five variant cards with titles and images', () => {
    render(<Showcase />)

    expect(screen.getByRole('heading', { name: /3 home page/i })).toBeInTheDocument()
    for (const title of [
      /#1 Home \(Image\)/,
      /#2 Home \(Slider\)/,
      /#3 Home \(Video\)/,
      /#4 Blog/,
      /#5 Blog Details/,
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('img').length).toBe(5)
  })
})
