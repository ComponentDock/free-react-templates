import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WorldSection } from './WorldSection'

describe('WorldSection', () => {
  it('renders section heading', () => {
    render(<WorldSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('From the World')
  })

  it('renders 2 post cards', () => {
    render(<WorldSection />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(2)
  })

  it('renders post titles', () => {
    render(<WorldSection />)
    expect(screen.getByText('Keep Up with the Tech')).toBeInTheDocument()
    expect(screen.getByText('Robotics and Automation')).toBeInTheDocument()
  })
})
