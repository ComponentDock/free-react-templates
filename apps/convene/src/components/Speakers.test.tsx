import { render, screen } from '@testing-library/react'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders the heading', () => {
    render(<Speakers />)
    expect(screen.getByText(/Who's Speaking/)).toBeInTheDocument()
  })

  it('renders all speaker names', () => {
    render(<Speakers />)
    expect(screen.getByText('Emma Sandoval')).toBeInTheDocument()
    expect(screen.getByText('Jayden Carter')).toBeInTheDocument()
    expect(screen.getByText('Sara Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Harriet Cole')).toBeInTheDocument()
  })

  it('renders Speaker role labels', () => {
    render(<Speakers />)
    const roles = screen.getAllByText('Speaker')
    expect(roles.length).toBe(4)
  })
})
