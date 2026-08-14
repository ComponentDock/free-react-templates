import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

function visibleHeading() {
  return screen
    .getAllByRole('heading', { level: 1, hidden: true })
    .find((h) => h.closest('div[aria-hidden="false"]'))
}

describe('Hero', () => {
  it('shows a full-viewport background image with a centered white headline and bold accent', () => {
    render(<Hero />)
    const first = visibleHeading()
    expect(first).toBeDefined()
    expect(first).toHaveClass('text-white')
    expect(first).toHaveTextContent('For The Time Is At Hand')
    const bold = first?.querySelector('strong')
    expect(bold).toBeDefined()
    expect(bold).toHaveTextContent('Is At Hand')
    expect(bold).toHaveClass('font-black')
  })

  it('shows left and right arrow controls', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('switches to the other slide when the next or previous arrow is activated', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    expect(visibleHeading()).toHaveTextContent('For The Time Is At Hand')
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(visibleHeading()).toHaveTextContent('The Truth Will Set You Free')
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(visibleHeading()).toHaveTextContent('For The Time Is At Hand')
  })
})
