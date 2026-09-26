import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Offerings to my clients' })).toBeInTheDocument()
  })

  it('renders section-level subtitle', () => {
    render(<Features />)
    // The subtitle under the heading contains "$.17 each" (note the dot)
    const section = screen
      .getByRole('heading', { name: 'Offerings to my clients' })
      .closest('section')!
    expect(section).toHaveTextContent('$.17 each')
  })

  it('renders all six service cards', () => {
    render(<Features />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(6)
    expect(screen.getAllByText('Architecture')).toHaveLength(2)
    expect(screen.getAllByText('Interior Design')).toHaveLength(2)
    expect(screen.getAllByText('Concept Design')).toHaveLength(2)
  })

  it('cards contain descriptive paragraphs', () => {
    render(<Features />)
    const paragraphs = screen.getAllByText(/blank cassettes on the web.*\$17 each/)
    expect(paragraphs.length).toBe(6)
  })
})
