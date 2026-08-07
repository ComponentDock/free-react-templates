import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Demos } from './Demos'

describe('Demos', () => {
  it('renders a heading for the demo showcase', () => {
    render(<Demos />)

    expect(screen.getByRole('heading', { name: /Choose your favorite demo/i })).toBeInTheDocument()
  })

  it('lists all six home variants', () => {
    render(<Demos />)

    for (const title of [
      'Home One / background Slider',
      'Home Two / Paralax Slider',
      'Home Three / Gradiant Paralax',
      'Home Four / Gradiant Color',
      'Home Five / Gradiant Warm Canvas',
      'Home Six / background video',
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('lists the four blog layouts', () => {
    render(<Demos />)

    for (const title of [
      'blog standard',
      'blog with sidebar',
      'blog left sidebar',
      'blog details',
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('links every demo card to its preview', () => {
    render(<Demos />)

    expect(screen.getAllByRole('link', { name: /view demo/i })).toHaveLength(10)
  })
})
