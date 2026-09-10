import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Blog } from './Blog'
import { describe, expect, it } from 'vitest'

describe('Blog', () => {
  it('displays the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest Posts from our Blog')).toBeInTheDocument()
  })

  it('renders 3 blog cards', () => {
    render(<Blog />)
    const cards = screen.getAllByText('Portable Fashion for women')
    expect(cards).toHaveLength(3)
  })

  it('displays author names', () => {
    render(<Blog />)
    expect(screen.getByText(/Belle Beck/)).toBeInTheDocument()
    expect(screen.getByText(/Harriet Barrett/)).toBeInTheDocument()
    expect(screen.getByText(/Fannie Simmons/)).toBeInTheDocument()
  })

  it('displays blog descriptions', () => {
    render(<Blog />)
    expect(screen.getByText(/latest trends in cryptocurrency/)).toBeInTheDocument()
    expect(screen.getByText(/Bitcoin is reshaping/)).toBeInTheDocument()
    expect(screen.getByText(/Understanding blockchain/)).toBeInTheDocument()
  })

  it('has clickable titles', async () => {
    const user = userEvent.setup()
    render(<Blog />)
    const links = screen.getAllByRole('link', { name: 'Portable Fashion for women' })
    expect(links.length).toBeGreaterThanOrEqual(1)
    const first = links[0]
    expect(first).toBeDefined()
    await user.click(first!)
  })
})
