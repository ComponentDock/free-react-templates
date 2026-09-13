import { render, screen } from '@testing-library/react'
import { ServiceDetail } from './ServiceDetail'

describe('ServiceDetail', () => {
  it('renders the heading', () => {
    render(<ServiceDetail />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings.some((h) => h.textContent?.includes('Get to Know Project Estimate'))).toBe(true)
  })

  it('renders the description', () => {
    render(<ServiceDetail />)
    const texts = screen.getAllByText(/Lorem ipsum dolor sit amet/)
    expect(texts.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the author attribution', () => {
    render(<ServiceDetail />)
    expect(screen.getByText('Marvel Maison')).toBeInTheDocument()
  })

  it('renders four service images', () => {
    render(<ServiceDetail />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
