import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductInfo } from './ProductInfo'
import { COLOURS, DESCRIPTION, HEADLINE } from '../data/site'

const [MIDNIGHT, STONE, BLUSH] = COLOURS as [
  (typeof COLOURS)[0],
  (typeof COLOURS)[0],
  (typeof COLOURS)[0],
]

describe('ProductInfo', () => {
  it('runs eyebrow, headline, rating, price and description in order', () => {
    render(<ProductInfo colour={MIDNIGHT} onChoose={() => {}} onAdd={() => {}} />)

    expect(screen.getByText('New')).toHaveClass('ot-pill')
    expect(screen.getByText(/Over-ear · Wireless/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HEADLINE)
    expect(screen.getByText('4.7 out of 5', { exact: false })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '2,318 reviews' })).toBeInTheDocument()
    expect(screen.getByText('$249')).toHaveClass('ot-now')
    expect(screen.getByText('$299').tagName).toBe('S')
    expect(screen.getByText('$299').textContent).toBe('Was $299')
    expect(screen.getByText('Save $50')).toHaveClass('ot-save')
    expect(screen.getByText(DESCRIPTION)).toHaveClass('ot-desc')
  })

  it('renders the colour fieldset with the checked finish named in the legend', () => {
    render(<ProductInfo colour={MIDNIGHT} onChoose={() => {}} onAdd={() => {}} />)

    expect(screen.getByText('Colour:', { selector: '.ot-legend' }).textContent).toBe(
      'Colour: Midnight',
    )
    const radios = screen.getAllByRole('radio')
    expect(radios.map((radio) => radio.getAttribute('value'))).toEqual([
      'Midnight',
      'Stone',
      'Blush',
    ])
    expect(screen.getByRole('radio', { name: 'Midnight' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Stone' })).not.toBeChecked()
    expect(document.querySelectorAll('.ot-swatch')).toHaveLength(3)
    expect(document.querySelector('.ot-swatch')?.className).toBe('ot-swatch is-checked')
  })

  it('reports the chosen finish to its parent', async () => {
    const user = userEvent.setup()
    const onChoose = vi.fn()
    render(<ProductInfo colour={MIDNIGHT} onChoose={onChoose} onAdd={() => {}} />)

    await user.click(screen.getByRole('radio', { name: 'Stone' }))

    expect(onChoose).toHaveBeenCalledWith(STONE)
  })

  it('keeps the stock line polite and flags a low count', () => {
    const { rerender } = render(
      <ProductInfo colour={MIDNIGHT} onChoose={() => {}} onAdd={() => {}} />,
    )

    const inStock = screen.getByText('Midnight: In stock, ships tomorrow')
    expect(inStock).toHaveAttribute('aria-live', 'polite')
    expect(inStock.className).toBe('ot-stock')

    rerender(<ProductInfo colour={BLUSH} onChoose={() => {}} onAdd={() => {}} />)

    const low = screen.getByText('Blush: Only 4 left, ships in 3 days')
    expect(low.className).toBe('ot-stock is-low')
    expect(low.querySelector('.ot-stock-dot')).toBeInTheDocument()
  })

  it('closes with the buy row and three perks on a hairline', () => {
    const { container } = render(
      <ProductInfo colour={MIDNIGHT} onChoose={() => {}} onAdd={() => {}} />,
    )

    expect(screen.getByRole('button', { name: 'Add to cart · $249' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Save to wishlist' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )

    const perks = container.querySelector('.ot-perks')
    expect(perks?.querySelectorAll('li')).toHaveLength(3)
    expect(screen.getByText('Free 2-day shipping')).toBeInTheDocument()
    expect(screen.getByText('2-year warranty')).toBeInTheDocument()
  })

  it('passes the buy press through to the page', async () => {
    const user = userEvent.setup()
    const onAdd = vi.fn()
    render(<ProductInfo colour={MIDNIGHT} onChoose={() => {}} onAdd={onAdd} />)

    await user.click(screen.getByRole('button', { name: 'Add to cart · $249' }))

    expect(onAdd).toHaveBeenCalledTimes(1)
  })
})
