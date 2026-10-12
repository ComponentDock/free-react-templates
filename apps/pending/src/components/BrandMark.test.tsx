import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandMark } from './BrandMark'

describe('BrandMark', () => {
  it('grows to eat the top bar slack and never ships an image asset', () => {
    render(<BrandMark />)

    const wrap = screen.getByTestId('brand-mark-wrap')

    expect(wrap).toHaveClass('grow', 'my-[10px]', 'mr-[30px]')
    expect(wrap.querySelector('img')).toBeNull()
  })

  it('renders its own bold white wordmark, sized like the mark box', () => {
    render(<BrandMark />)

    const mark = screen.getByTestId('brand-mark')
    const link = screen.getByRole('link', { name: 'Pending' })

    expect(mark).toHaveTextContent('Pending.')
    expect(mark).toHaveClass('text-[24px]', 'leading-[24px]', 'font-bold')
    expect(link).toHaveClass('max-w-full', 'text-white')
    expect(link.querySelector('svg')).toBeNull()
  })

  it('accepts a className override on the wrapper', () => {
    render(<BrandMark className="mr-0" />)

    expect(screen.getByTestId('brand-mark-wrap')).toHaveClass('mr-0')
  })
})
