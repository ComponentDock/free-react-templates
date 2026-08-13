import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('shows the split layout with an image, heading, paragraphs and a play link', () => {
    const { container } = render(<Welcome />)
    const section = screen.getByRole('region', { name: 'Welcome' })
    expect(section).toHaveAttribute('id', 'welcome')
    expect(screen.getByRole('img', { name: /traveller/i })).toHaveClass('w-full')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Welcome To Our Website' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
    const video = screen.getByRole('link', { name: /watch the video/i })
    expect(video).toHaveClass('inline-flex')
    expect(container.querySelector('.h-\\[50px\\]')).toHaveClass('border-2', 'rounded-full')
  })
})
