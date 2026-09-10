import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section with correct id', () => {
    render(<Projects />)
    expect(document.querySelector('#project-section')).toBeInTheDocument()
  })

  it('renders the section title', () => {
    render(<Projects />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Our Awesome Projects/i)
  })

  it('renders all filter tabs', () => {
    render(<Projects />)
    const categories = [
      'All',
      'Web Design',
      'Photography',
      'Web Dev',
      'Online Marketing',
      'Digital Media',
      'Support',
    ]
    for (const cat of categories) {
      expect(screen.getByRole('button', { name: cat })).toBeInTheDocument()
    }
  })

  it('shows all 9 projects when "All" is selected', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(9)
  })

  it('filters projects when a category tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    await user.click(screen.getByRole('button', { name: 'Photography' }))

    // Should show only 2 photography projects
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
    expect(screen.getByAltText('Product Photography')).toBeInTheDocument()
    expect(screen.getByAltText('Event Coverage')).toBeInTheDocument()
  })

  it('shows correct projects for "Web Design" filter', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    await user.click(screen.getByRole('button', { name: 'Web Design' }))
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
    expect(screen.getByAltText('Creative Branding')).toBeInTheDocument()
    expect(screen.getByAltText('Landing Page')).toBeInTheDocument()
  })

  it('shows correct projects for "Web Dev" filter', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    await user.click(screen.getByRole('button', { name: 'Web Dev' }))
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(1)
    expect(screen.getByAltText('E-Commerce Platform')).toBeInTheDocument()
  })

  it('shows correct projects for "Online Marketing" filter', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    await user.click(screen.getByRole('button', { name: 'Online Marketing' }))
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
    expect(screen.getByAltText('Social Campaign')).toBeInTheDocument()
    expect(screen.getByAltText('SEO Strategy')).toBeInTheDocument()
  })

  it('shows correct projects for "Digital Media" filter', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    await user.click(screen.getByRole('button', { name: 'Digital Media' }))
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(1)
    expect(screen.getByAltText('Motion Graphics')).toBeInTheDocument()
  })

  it('shows correct projects for "Support" filter', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    await user.click(screen.getByRole('button', { name: 'Support' }))
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(1)
    expect(screen.getByAltText('Help Desk Portal')).toBeInTheDocument()
  })

  it('returns to all projects when "All" is clicked after filtering', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    await user.click(screen.getByRole('button', { name: 'Photography' }))
    expect(screen.getAllByRole('img')).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getAllByRole('img')).toHaveLength(9)
  })

  it('each project card has an image with correct seed URL', () => {
    render(<Projects />)
    const img = screen.getByAltText('Creative Branding')
    expect(img).toHaveAttribute('src', expect.stringContaining('bizplanner-proj-1'))
  })

  it('active filter button has primary background class', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    const allBtn = screen.getByRole('button', { name: 'All' })
    expect(allBtn).toHaveClass('bg-primary-500')
    expect(allBtn).toHaveClass('text-white')

    await user.click(screen.getByRole('button', { name: 'Photography' }))
    expect(allBtn).not.toHaveClass('bg-primary-500')
    expect(screen.getByRole('button', { name: 'Photography' })).toHaveClass('bg-primary-500')
  })

  it('accepts custom className', () => {
    render(<Projects className="my-projects" />)
    expect(document.querySelector('#project-section')).toHaveClass('my-projects')
  })
})
