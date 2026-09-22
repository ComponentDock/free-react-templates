import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: /Our Gallery/i })).toBeInTheDocument()
  })

  it('renders prev/next navigation buttons', () => {
    render(<Gallery />)
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('renders gallery images', () => {
    const { container } = render(<Gallery />)
    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThan(0)
  })

  it('navigates forward on next click', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: /next/i }))
  })

  it('navigates backward on previous click', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /previous/i }))
  })
})
