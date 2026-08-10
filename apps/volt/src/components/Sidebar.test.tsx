import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sidebar } from './Sidebar'
import { brandName, sidebarImg } from '../data'

describe('Sidebar', () => {
  it('renders a fixed 25%-wide desktop sidebar with the photo and blue overlay', () => {
    const { container } = render(<Sidebar />)

    const aside = screen.getByRole('complementary', { name: 'Sidebar' })
    expect(aside).toHaveClass('fixed', 'inset-y-0', 'hidden', 'lg:block', 'w-1/4')
    expect(screen.getByRole('heading', { level: 1, name: brandName })).toBeInTheDocument()

    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', sidebarImg)
    expect(aside.querySelector('.bg-brand\\/60')).toBeInTheDocument()
  })
})
