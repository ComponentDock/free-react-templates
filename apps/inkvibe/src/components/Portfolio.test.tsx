import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading and filter buttons', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /our latest work/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /tattooing/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /design/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /removal/i })).toBeInTheDocument()
  })

  it('shows all items when All is selected', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(8)
  })

  it('filters items when a category is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole('button', { name: /design/i }))
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3) // 3 design items
  })

  it('shows removal items when Removal is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole('button', { name: /removal/i }))
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(1) // 1 removal item
  })

  it('shows tattooing items when Tattooing is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole('button', { name: /tattooing/i }))
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4) // 4 tattooing items
  })
})
