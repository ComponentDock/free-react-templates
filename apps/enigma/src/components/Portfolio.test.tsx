import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders all filter tabs', () => {
    render(<Portfolio />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Web design' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Digital design' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '3D Rendering' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Brand Identity' })).toBeInTheDocument()
  })

  it('shows all items initially', () => {
    render(<Portfolio />)
    const items = screen.getAllByRole('link', { name: /View/ })
    expect(items).toHaveLength(8)
  })

  it('filters to web design items', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole('button', { name: 'Web design' }))

    const items = screen.getAllByRole('link', { name: /View/ })
    expect(items).toHaveLength(2)
  })

  it('filters to 3D items', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole('button', { name: '3D Rendering' }))

    const items = screen.getAllByRole('link', { name: /View/ })
    expect(items).toHaveLength(2)
  })

  it('shows all items when All is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole('button', { name: 'Web design' }))
    await user.click(screen.getByRole('button', { name: 'All' }))

    const items = screen.getAllByRole('link', { name: /View/ })
    expect(items).toHaveLength(8)
  })
})
