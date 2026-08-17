import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { ABOUT } from '../data'

describe('About', () => {
  it('renders the kicker, name heading, white box paragraph, and photo', () => {
    render(<About />)

    expect(screen.getByRole('region', { name: 'About me' })).toHaveClass('bg-surface')
    expect(screen.getByText(ABOUT.kicker)).toHaveClass('text-brand')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(ABOUT.heading)
    expect(screen.getByText(ABOUT.paragraph)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: ABOUT.heading })).toHaveAttribute('src', ABOUT.photo)
  })
})