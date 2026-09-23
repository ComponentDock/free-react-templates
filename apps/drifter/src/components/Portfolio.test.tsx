import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders heading and all project items', () => {
    render(<Portfolio />)
    expect(screen.getByText('Our Recent Completed Projects')).toBeInTheDocument()
    const images = screen.getAllByAltText('3D Helmet Design')
    expect(images).toHaveLength(6)
  })

  it('renders filter tabs', () => {
    render(<Portfolio />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Branding' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Creative' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Web Design' })).toBeInTheDocument()
  })

  it('filters projects by category', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole('button', { name: 'Branding' }))
    const images = screen.getAllByAltText('3D Helmet Design')
    expect(images).toHaveLength(2)
  })

  it('shows all projects when All is selected', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole('button', { name: 'Creative' }))
    let images = screen.getAllByAltText('3D Helmet Design')
    expect(images).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: 'All' }))
    images = screen.getAllByAltText('3D Helmet Design')
    expect(images).toHaveLength(6)
  })
})
