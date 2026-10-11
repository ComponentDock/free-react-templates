import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders the split about block with a gradient heading, copy, and dark pill button', () => {
    render(<Welcome />)
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/voyara-about/900/700',
    )

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('A very Lovely Welcome')
    expect(heading).toHaveTextContent('to our Hotel')
    expect(screen.getByText('A very Lovely Welcome')).toHaveClass(
      'bg-gradient-to-t',
      'bg-clip-text',
    )

    const cta = screen.getByRole('link', { name: 'Make Package of your own' })
    expect(cta).toHaveAttribute('href', '#book')
    expect(cta).toHaveClass('bg-ink')
  })
})
