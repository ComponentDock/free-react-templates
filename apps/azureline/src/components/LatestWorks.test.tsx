import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LatestWorks } from './LatestWorks'

describe('LatestWorks', () => {
  it('renders the section heading', () => {
    render(<LatestWorks />)
    expect(screen.getByText(/Some Of Our/)).toBeInTheDocument()
    expect(screen.getByText('Latest Works')).toBeInTheDocument()
  })

  it('renders the initial slide image', () => {
    render(<LatestWorks />)
    expect(screen.getByAltText('Project 1')).toBeInTheDocument()
  })

  it('navigates to the next slide', async () => {
    const user = userEvent.setup()
    render(<LatestWorks />)
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByAltText('Project 2')).toBeInTheDocument()
  })

  it('navigates to the previous slide from the first slide', async () => {
    const user = userEvent.setup()
    render(<LatestWorks />)
    await user.click(screen.getByRole('button', { name: /previous slide/i }))
    expect(screen.getByAltText('Project 3')).toBeInTheDocument()
  })

  it('navigates to previous from a non-first slide', async () => {
    const user = userEvent.setup()
    render(<LatestWorks />)
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    await user.click(screen.getByRole('button', { name: /previous slide/i }))
    expect(screen.getByAltText('Project 1')).toBeInTheDocument()
  })

  it('cycles through all slides', async () => {
    const user = userEvent.setup()
    render(<LatestWorks />)
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByAltText('Project 2')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByAltText('Project 3')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByAltText('Project 1')).toBeInTheDocument()
  })
})
