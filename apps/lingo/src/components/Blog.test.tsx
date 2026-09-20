import { render, screen } from '@testing-library/react'
import Blog from './Blog'

describe('Blog', () => {
  it('renders the categories heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: /from our blog/i })).toBeInTheDocument()
  })

  it('renders the featured heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: /featured/i })).toBeInTheDocument()
  })

  it('renders 6 category cards', () => {
    render(<Blog />)
    expect(screen.getByText('Travel Tips')).toBeInTheDocument()
    expect(screen.getByText('Language Hacks')).toBeInTheDocument()
    expect(screen.getByText('Cultures')).toBeInTheDocument()
    expect(screen.getByText('Fashion')).toBeInTheDocument()
    expect(screen.getByText('Cooking')).toBeInTheDocument()
    expect(screen.getByText('Hobbies')).toBeInTheDocument()
  })

  it('renders the featured post', () => {
    render(<Blog />)
    expect(screen.getByText(/why learning a second language/i)).toBeInTheDocument()
    expect(screen.getByText(/research shows bilingual/i)).toBeInTheDocument()
  })

  it('displays the featured post language tag', () => {
    render(<Blog />)
    expect(screen.getByText('Languages')).toBeInTheDocument()
  })
})
