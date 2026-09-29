import { render, screen } from '@testing-library/react'
import { MainContent } from './MainContent'

describe('MainContent', () => {
  it('renders the main heading', () => {
    render(<MainContent />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Sidebar #02')
  })

  it('renders body text paragraphs', () => {
    render(<MainContent />)
    expect(screen.getByText(/clean sidebar navigation template/)).toBeInTheDocument()
    expect(screen.getByText(/vibrant purple sidebar/)).toBeInTheDocument()
    expect(screen.getByText(/Built with React and Tailwind CSS/)).toBeInTheDocument()
  })

  it('renders as a main element', () => {
    render(<MainContent />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
