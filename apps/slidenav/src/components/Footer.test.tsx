import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('closes the shell with the wordmark, the computed year and one Component Dock credit', () => {
    const { container } = render(<Footer />)
    const year = new Date().getFullYear()
    const dock = screen.getByRole('link', { name: 'Component Dock' })

    expect(screen.getByRole('link', { name: 'Slidenav' })).toHaveAttribute('href', '#home')
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dock).toHaveAttribute('target', '_blank')
    expect(dock).toHaveAttribute('rel', 'noreferrer')
    expect(screen.getAllByRole('link', { name: 'Component Dock' })).toHaveLength(1)

    const strip = container.querySelector('footer') as HTMLElement
    expect(strip).toHaveClass('bg-ink', 'border-t', 'border-white/10')
    expect(strip).toHaveTextContent(`© ${year} Slidenav — One flat band`)
  })
})
