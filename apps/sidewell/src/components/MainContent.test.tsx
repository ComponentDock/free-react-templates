import { render, screen } from '@testing-library/react'
import { MainContent } from './MainContent'

describe('MainContent', () => {
  it('renders the heading', () => {
    render(<MainContent />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Sidebar #07')
  })

  it('renders body text paragraphs', () => {
    render(<MainContent />)
    const paragraphs = screen.getAllByText(/lorem ipsum/i)
    expect(paragraphs.length).toBeGreaterThanOrEqual(2)
  })
})
