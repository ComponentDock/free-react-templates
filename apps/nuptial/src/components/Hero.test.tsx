import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the kicker, the couple name, and the countdown timer', () => {
    render(<Hero />)
    expect(screen.getByText('The Wedding of')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Francisco & Laura/)
    for (const label of ['Days', 'Hours', 'Minutes', 'Seconds']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    expect(image).toHaveAttribute('alt', expect.stringContaining('wedding'))
  })
})
