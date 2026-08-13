import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the HIGHLIGHTS eyebrow and the heading', () => {
    render(<Features />)

    expect(screen.getByText('Highlights')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Features you love')
  })

  it('renders the three feature cards with titles and text', () => {
    render(<Features />)

    for (const title of ['Simple', 'Customize', 'Secure']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })
})
