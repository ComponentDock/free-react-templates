import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { UtilityBar } from './UtilityBar'

describe('UtilityBar', () => {
  it('renders the wordmark link and the three contact blocks', () => {
    render(<UtilityBar />)

    expect(screen.getByRole('link', { name: /Rackline home/ })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: /24\/7 Support/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Email/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Live Chat/ })).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('wires the phone and e-mail blocks to real tel: and mailto: targets', () => {
    render(<UtilityBar />)

    expect(screen.getByRole('link', { name: /24\/7 Support/ })).toHaveAttribute(
      'href',
      'tel:+18004412200',
    )
    expect(screen.getByRole('link', { name: /Email/ })).toHaveAttribute(
      'href',
      'mailto:hello@rackline.example',
    )
    expect(screen.getByRole('link', { name: /Live Chat/ })).toHaveAttribute('href', '#contact')
  })

  it('keeps the label and value inside each block, hidden below the desktop breakpoint', () => {
    render(<UtilityBar />)

    const phone = screen.getByRole('link', { name: /24\/7 Support/ })
    expect(phone).toHaveTextContent('+1 (800) 441-2200')
    const valueColumn = screen.getByText('24/7 Support').parentElement
    expect(valueColumn).toHaveClass('hidden', 'min-[992px]:block')
  })
})
