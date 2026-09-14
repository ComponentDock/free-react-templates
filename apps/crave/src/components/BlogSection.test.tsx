import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders the section heading', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Our Blog')
  })

  it('renders all three blog posts', () => {
    render(<BlogSection />)
    expect(
      screen.getByText('Huge cavity in Antarctic glacier signals rapid ice loss'),
    ).toBeInTheDocument()
    expect(screen.getByText('Researcher unearths ancient recipe in the desert')).toBeInTheDocument()
    expect(
      screen.getByText('High-protein rice brings value and nutrition to the table'),
    ).toBeInTheDocument()
  })

  it('displays author and date for each post', () => {
    render(<BlogSection />)
    const authors = screen.getAllByText('Admin Post')
    expect(authors.length).toBe(3)
    const dates = screen.getAllByText('Jan 10, 2024')
    expect(dates.length).toBe(3)
  })

  it('has the blog section id', () => {
    const { container } = render(<BlogSection />)
    expect(container.querySelector('#blog')).toBeInTheDocument()
  })
})
