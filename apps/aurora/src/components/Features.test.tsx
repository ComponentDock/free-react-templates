import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and all six feature tiles', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Why Aurora' })).toBeInTheDocument()
    for (const title of [
      'Parallax Support',
      'HTML5 Video',
      'Retina Ready Graphics',
      'Endless Possibilities',
      'Documentation',
      'Boxed & Wide Layouts',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
