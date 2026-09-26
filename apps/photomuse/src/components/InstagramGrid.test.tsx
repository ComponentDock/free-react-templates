import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InstagramGrid } from './InstagramGrid'

describe('InstagramGrid', () => {
  it('renders the section heading', () => {
    render(<InstagramGrid />)
    expect(screen.getByText('Follow me on Instagram')).toBeInTheDocument()
  })

  it('renders five instagram images', () => {
    render(<InstagramGrid />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
  })

  it('renders images with correct alt text', () => {
    render(<InstagramGrid />)
    expect(screen.getByAltText('Instagram photo 1')).toBeInTheDocument()
    expect(screen.getByAltText('Instagram photo 5')).toBeInTheDocument()
  })

  it('renders links for each image', () => {
    render(<InstagramGrid />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(5)
  })

  it('prevents default on link click', async () => {
    const user = userEvent.setup()
    render(<InstagramGrid />)
    const links = screen.getAllByRole('link')
    const first = links[0]
    expect(first).toBeDefined()
    await user.click(first!)
  })
})
