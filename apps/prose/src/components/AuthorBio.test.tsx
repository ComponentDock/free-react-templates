import { render, screen } from '@testing-library/react'
import { AuthorBio } from './AuthorBio'

describe('AuthorBio', () => {
  it('renders author name and bio', () => {
    render(<AuthorBio />)
    expect(screen.getByRole('heading', { name: 'Eleanor Quinn' })).toBeInTheDocument()
    expect(screen.getByText(/award-winning author/)).toBeInTheDocument()
    expect(screen.getByText('Portland, Oregon')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 234-5678')).toBeInTheDocument()
    expect(screen.getByText('eleanor@prosebooks.com')).toBeInTheDocument()
  })

  it('renders the author image', () => {
    render(<AuthorBio />)
    expect(screen.getByRole('img', { name: 'Author portrait' })).toBeInTheDocument()
  })

  it('has proper aria-label', () => {
    render(<AuthorBio />)
    expect(screen.getByRole('region', { name: 'Author biography' })).toBeInTheDocument()
  })
})
