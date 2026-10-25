import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Work } from './Work'

describe('Work', () => {
  it('renders the counted eyebrow, the split heading and the lede', () => {
    render(<Work />)

    expect(screen.getByText('01 / SELECTED PROJECTS')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'A few thingsI’ve worked on.',
    )
    expect(screen.getByText('worked on.')).toHaveClass('italic')
    expect(screen.getByText(/Small projects, real questions./)).toBeInTheDocument()
  })

  it('starts with every card visible, the first pill pressed and no status text', () => {
    render(<Work />)

    expect(screen.getByRole('button', { name: 'All work' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Coursework' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
    expect(screen.getByRole('button', { name: 'Personal project' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
    expect(screen.getByText('Finding your way, minus the guesswork')).toBeInTheDocument()
    expect(screen.getByText('Making everyday waste visible')).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('')
  })

  it('filters to the personal project and announces a single result', async () => {
    const user = userEvent.setup()
    render(<Work />)

    await user.click(screen.getByRole('button', { name: 'Personal project' }))

    expect(screen.getByRole('button', { name: 'Personal project' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: 'All work' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
    expect(screen.queryByText('Finding your way, minus the guesswork')).not.toBeInTheDocument()
    expect(screen.getByText('Making everyday waste visible')).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('1 project shown')
  })

  it('filters to the coursework project', async () => {
    const user = userEvent.setup()
    render(<Work />)

    await user.click(screen.getByRole('button', { name: 'Coursework' }))

    expect(screen.getByText('Finding your way, minus the guesswork')).toBeInTheDocument()
    expect(screen.queryByText('Making everyday waste visible')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('1 project shown')
  })

  it('restores both cards and reports the plural count', async () => {
    const user = userEvent.setup()
    render(<Work />)

    await user.click(screen.getByRole('button', { name: 'Coursework' }))
    await user.click(screen.getByRole('button', { name: 'All work' }))

    expect(screen.getByText('Finding your way, minus the guesswork')).toBeInTheDocument()
    expect(screen.getByText('Making everyday waste visible')).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('2 projects shown')
  })

  it('exposes the pill row as a labelled filter group', () => {
    render(<Work />)

    expect(screen.getByRole('group', { name: 'Filter projects' })).toBeInTheDocument()
  })
})
