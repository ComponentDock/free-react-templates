import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Story } from './Story'

describe('Story', () => {
  it('renders story heading and content', () => {
    render(<Story />)
    expect(screen.getByRole('heading', { name: 'Our Untold Story' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'A Journey of Creativity' })).toBeInTheDocument()
    expect(screen.getByText(/started as a small team/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get Started/i })).toBeInTheDocument()
  })
})
