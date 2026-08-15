import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { heroIcons } from '../data'

describe('Hero', () => {
  it('renders the headline and uppercase sub-line', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { name: 'Dental Care, Done Right.' })).toBeInTheDocument()
    expect(screen.getByText('Modern care for your whole smile')).toBeInTheDocument()
  })

  it('renders the three circular mint icon marks', () => {
    render(<Hero />)

    for (const item of heroIcons) {
      expect(screen.getByLabelText(item.label)).toBeInTheDocument()
    }
  })

  it('renders the portrait image with a descriptive alt', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: /smiling dental professional/i })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
