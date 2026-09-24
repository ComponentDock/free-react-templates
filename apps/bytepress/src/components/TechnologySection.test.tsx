import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TechnologySection } from './TechnologySection'

describe('TechnologySection', () => {
  it('renders section heading', () => {
    render(<TechnologySection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Technology')
  })

  it('renders 3 post cards', () => {
    render(<TechnologySection />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
  })

  it('renders post titles', () => {
    render(<TechnologySection />)
    expect(screen.getByText('The New Apple Release Ceremony')).toBeInTheDocument()
    expect(screen.getByText('The Rise of Artificial Intelligence')).toBeInTheDocument()
    expect(screen.getByText('New HTML5 Features Explained')).toBeInTheDocument()
  })

  it('renders post images', () => {
    render(<TechnologySection />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBeGreaterThanOrEqual(3)
  })
})
