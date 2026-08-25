import { render, screen } from '@testing-library/react'
import { FeaturedProjects } from './FeaturedProjects'

describe('FeaturedProjects', () => {
  it('renders the section heading', () => {
    render(<FeaturedProjects />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Handpicked by Crest/ }),
    ).toBeInTheDocument()
  })

  it('renders project cards', () => {
    render(<FeaturedProjects />)
    expect(
      screen.getByText('Essentials helped us to increase our revenue by more.'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Digital transformation for a growing consultancy.'),
    ).toBeInTheDocument()
  })

  it('renders View Project links', () => {
    render(<FeaturedProjects />)
    const viewLinks = screen.getAllByText('View Project')
    expect(viewLinks.length).toBe(2)
  })

  it('renders project images', () => {
    const { container } = render(<FeaturedProjects />)
    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
