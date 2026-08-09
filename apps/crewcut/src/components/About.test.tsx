import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, paragraphs, See Details button, and play photo', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'We Believe that Interior beautifies the Total Architecture',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'See Details' })).toHaveAttribute('href', '#service')
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /barber shop interior/i })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/crewcut-about/600/500',
    )
  })
})
