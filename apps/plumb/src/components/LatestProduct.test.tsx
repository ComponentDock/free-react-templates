import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestProduct } from './LatestProduct'

describe('LatestProduct', () => {
  it('renders the section heading, caption, and image', () => {
    render(<LatestProduct />)

    expect(screen.getByText('Latest Product')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Poisson Blanc' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Latest product showcase' })).toBeInTheDocument()
  })

  it('has the correct section landmark', () => {
    render(<LatestProduct />)

    expect(screen.getByRole('region', { name: 'Latest product' })).toBeInTheDocument()
  })
})
