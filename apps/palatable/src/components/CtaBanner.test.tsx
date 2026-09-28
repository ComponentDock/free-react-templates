import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders heading', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Gluten Free Recipes')
  })

  it('renders description text', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Fusce nec ante vitae/)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('link', { name: 'Discover All The Recipes' })).toBeInTheDocument()
  })
})
