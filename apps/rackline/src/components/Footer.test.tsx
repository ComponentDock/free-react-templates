import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders three distinct link columns of six entries each', () => {
    render(<Footer />)

    for (const title of ['Company', 'Platform', 'Resources']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toHaveClass(
        'text-[18px]',
        'text-white',
      )
    }
    // 18 column links + 2 phone + 2 e-mail links from the office blocks + the credit link.
    expect(screen.getAllByRole('link')).toHaveLength(23)
    expect(screen.getByRole('link', { name: 'Migration guides' })).toHaveAttribute('href', '#why')
    expect(screen.getByRole('link', { name: 'Domains' })).toHaveAttribute('href', '#plans')
  })

  it('lists both offices with a street address and a telephone / e-mail pair', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Europe' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'USA' })).toBeInTheDocument()
    expect(screen.getByText('Amsterdam — 118 Prinsengracht')).toBeInTheDocument()
    expect(screen.getByText('Austin — 412 Congress Avenue')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+31 20 555 0118' })).toHaveAttribute(
      'href',
      'tel:+31205550118',
    )
    expect(screen.getByRole('link', { name: 'austin@rackline.example' })).toHaveAttribute(
      'href',
      'mailto:austin@rackline.example',
    )
  })

  it('sits on the slate band with the measured padding and list rhythm', () => {
    const { container } = render(<Footer />)

    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('bg-footer', 'text-white/40', 'py-[48px]', 'min-[768px]:py-[112px]')
    expect(container.querySelector('li')).toHaveClass('mb-[10px]')
    const columns = screen.getByRole('link', { name: 'Careers' })
    expect(columns).toHaveClass('text-white/70', 'hover:text-white')
  })

  it('closes with the running year and a single Component Dock attribution', () => {
    render(<Footer />)

    const credit = screen.getByText(/More templates at/)
    expect(credit).toHaveTextContent(`© ${new Date().getFullYear()} Rackline.`)
    const attribution = screen.getAllByRole('link', { name: 'Component Dock' })
    expect(attribution).toHaveLength(1)
    expect(attribution[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
