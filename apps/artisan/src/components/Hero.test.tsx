import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the speech bubble, name, role line and CTA', () => {
    render(<Hero />)
    expect(screen.getByText("It's me")).toHaveClass('bg-periwinkle')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Kenedy Jackson')
    expect(screen.getByText('Designer')).toHaveClass('text-brand')
    expect(screen.getByText('Developer')).toHaveClass('text-periwinkle')
    expect(screen.getByRole('link', { name: 'Hire Me' })).toHaveAttribute('href', '#contact')
  })

  it('renders the portrait photo over the periwinkle block', () => {
    const { container } = render(<Hero />)
    const img = container.querySelector('img')
    expect(img).toHaveAttribute('alt', 'Kenedy Jackson portrait')
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    expect(container.querySelector('.bg-periwinkle')).toBeInTheDocument()
  })
})
