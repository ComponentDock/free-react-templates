import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Wordmark } from '../components/Wordmark'
import { LicenceBar } from '../components/LicenceBar'

describe('Wordmark', () => {
  it('draws the dark tile and the two label lines', () => {
    render(<Wordmark />)
    const mark = screen.getByRole('img', { name: 'Plantroom Mechanical' })

    expect(mark.tagName.toLowerCase()).toBe('svg')
    expect(screen.getByText('Plantroom')).toBeInTheDocument()
    expect(screen.getByText('MECHANICAL')).toBeInTheDocument()
  })

  it('inverts for the dark footer ground', () => {
    render(<Wordmark light />)
    const mark = screen.getByRole('img', { name: 'Plantroom Mechanical' })
    const label = screen.getByText('Plantroom')

    expect(label).toHaveAttribute('fill', '#ffffff')
    expect(mark.querySelector('rect')).toHaveAttribute('fill', '#ffffff')
  })
})

describe('LicenceBar', () => {
  it('carries the licence, insurance, county and the sample rating', () => {
    render(<LicenceBar />)

    expect(screen.getByText('Licence')).toBeInTheDocument()
    expect(screen.getByText('TX TACLA #00000C')).toBeInTheDocument()
    expect(screen.getByText('$5M general liability')).toBeInTheDocument()
    expect(screen.getByText('Tarrant County')).toBeInTheDocument()
    expect(screen.getByText('4.8')).toBeInTheDocument()
    expect(screen.getByText('70+ reviews on Google (sample)')).toBeInTheDocument()
  })

  it('hides the two middle facts below sm and keeps the pair that must not wrap', () => {
    render(<LicenceBar />)

    expect(screen.getByText('$5M general liability').closest('li')).toHaveClass('hidden', 'sm:flex')
    expect(screen.getByText('Tarrant County').closest('li')).toHaveClass('hidden', 'sm:flex')
    expect(screen.getByTestId('licence-bar')).toHaveClass('bg-ink-800')
  })

  it('is a normal-flow strip, not a sticky one', () => {
    const { container } = render(<LicenceBar />)

    expect(container.firstElementChild).not.toHaveClass('sticky')
    expect(container.querySelector('.h-9')).not.toBeNull()
  })
})

describe('LicenceBar interactions', () => {
  it('does not swallow clicks on the rating claim', async () => {
    render(<LicenceBar />)
    await userEvent.click(screen.getByText('70+ reviews on Google (sample)'))

    expect(screen.getByText('4.8')).toBeVisible()
  })
})
