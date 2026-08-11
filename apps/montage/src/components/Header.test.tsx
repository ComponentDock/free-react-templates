import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from './Header'
import { addBannerLabel, siteName } from '../data'

describe('Header', () => {
  it('renders the logo link and the add-banner placeholder', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: `${siteName} — home` })).toBeInTheDocument()
    expect(screen.getByText(siteName)).toBeInTheDocument()
    expect(screen.getByText(addBannerLabel)).toBeInTheDocument()
  })

  it('uses the brand pink background', () => {
    const { container } = render(<Header />)
    expect(container.firstElementChild).toHaveClass('bg-brand')
  })
})
