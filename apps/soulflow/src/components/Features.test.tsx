import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the features section', () => {
    render(<Features />)
    expect(screen.getByText('Yoga Features')).toBeInTheDocument()
  })

  it('renders all 4 feature items', () => {
    render(<Features />)
    expect(screen.getByText('Peace of Mind')).toBeInTheDocument()
    expect(screen.getByText('Mindfulness')).toBeInTheDocument()
    expect(screen.getByText('Meditation')).toBeInTheDocument()
    expect(screen.getByText('Yoga Carpet')).toBeInTheDocument()
  })

  it('has descriptions for each feature', () => {
    render(<Features />)
    expect(screen.getByText(/Find inner calm/)).toBeInTheDocument()
    expect(screen.getByText(/Develop awareness/)).toBeInTheDocument()
    expect(screen.getByText(/Deep meditation sessions/)).toBeInTheDocument()
    expect(screen.getByText(/Premium yoga mats/)).toBeInTheDocument()
  })
})
