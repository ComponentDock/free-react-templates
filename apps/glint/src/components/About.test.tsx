import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and description', () => {
    render(<About />)

    expect(screen.getByText('We Care About Your Teeth')).toBeInTheDocument()
    expect(screen.getByText(/Our team of experienced dental professionals/)).toBeInTheDocument()
    expect(screen.getByText(/From routine cleanings/)).toBeInTheDocument()
  })

  it('renders placeholder images', () => {
    render(<About />)

    const images = screen.getAllByRole('img')
    expect(images.some((img) => (img as HTMLImageElement).src.includes('picsum'))).toBe(true)
  })
})
