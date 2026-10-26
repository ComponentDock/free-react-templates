import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LISTINGS } from '../data/listings'
import { ListingCard } from './ListingCard'

const first = LISTINGS[0]!
const second = LISTINGS[1]!

describe('ListingCard', () => {
  it('reads top to bottom as an estate-agent listing', () => {
    render(<ListingCard listing={first} saved={false} eager onToggle={() => {}} />)

    const card = screen.getByRole('article')
    expect(card).toHaveAttribute('id', 'listing-14-seaview-terrace')
    expect(card.className).toContain('relative')
    expect(card.className).toContain('overflow-hidden')
    expect(card.className).toContain('rounded-[20px]')
    expect(card.className).toContain('bg-white')
    expect(card.className).toContain('text-[15px]')
    expect(card.className).toContain('leading-[1.45]')
    expect(card.className).toContain('hover:-translate-y-1')
    expect(card.className).toContain('motion-reduce:hover:translate-y-0')
    expect(card.className).not.toContain('border')

    expect(screen.getByText('$1,290,000').className).toContain('text-[26px]')
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('14 Seaview Terrace')
    expect(screen.getByText('Coral Bay North · 5 min to the beach').className).toContain(
      'text-muted',
    )
  })

  it('clips a three-by-two photograph inside the card', () => {
    render(<ListingCard listing={first} saved={false} eager onToggle={() => {}} />)

    const media = screen.getByRole('article').children[0]!
    expect(media.className).toContain('relative')
    expect(media.className).toContain('aspect-[3/2]')
    expect(media.className).toContain('bg-media-ground')
    expect(media.className).not.toContain('rounded')

    const image = screen.getByRole('img') as HTMLImageElement
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/baylist-1/800/540')
    expect(image).toHaveAttribute('alt', first.image.alt)
    expect(image).toHaveAttribute('width', '800')
    expect(image).toHaveAttribute('height', '540')
    expect(image.className).toContain('h-full')
    expect(image.className).toContain('w-full')
    expect(image.className).toContain('object-cover')
    expect(image.className).toContain('block')
  })

  it('loads the first two photographs eagerly and the third lazily', () => {
    const { rerender } = render(
      <ListingCard listing={first} saved={false} eager onToggle={() => {}} />,
    )
    expect(screen.getByRole('img')).toHaveAttribute('fetchpriority', 'high')
    expect(screen.getByRole('img')).toHaveAttribute('decoding', 'sync')

    rerender(<ListingCard listing={first} saved={false} eager={false} onToggle={() => {}} />)
    expect(screen.getByRole('img')).toHaveAttribute('loading', 'lazy')
    expect(screen.getByRole('img')).toHaveAttribute('decoding', 'async')
  })

  it('paints the status badge in the variant colour of the listing', () => {
    const { rerender } = render(
      <ListingCard listing={first} saved={false} eager onToggle={() => {}} />,
    )

    const onDark = screen.getByText('For sale')
    expect(onDark.className).toContain('absolute')
    expect(onDark.className).toContain('top-3.5')
    expect(onDark.className).toContain('left-3.5')
    expect(onDark.className).toContain('rounded-lg')
    expect(onDark.className).toContain('px-3')
    expect(onDark.className).toContain('py-1.5')
    expect(onDark.className).toContain('text-[13px]')
    expect(onDark.className).toContain('bg-ink')
    expect(onDark.className).toContain('text-white')

    rerender(<ListingCard listing={second} saved eager onToggle={() => {}} />)
    const onGold = screen.getByText('New listing')
    expect(onGold.className).toContain('bg-gold-soft')
    expect(onGold.className).toContain('text-gold-ink')

    rerender(<ListingCard listing={LISTINGS[2]!} saved={false} eager onToggle={() => {}} />)
    const onWhite = screen.getByText('Open house Sat')
    expect(onWhite.className).toContain('bg-white')
    expect(onWhite.className).toContain('text-ink')
  })

  it('counts the photographs in a translucent pill', () => {
    render(<ListingCard listing={first} saved={false} eager onToggle={() => {}} />)
    expect(screen.getByText('24 photos').className).toContain('bg-[rgba(15,28,46,.72)]')
  })

  it('hangs the save heart at the top right, above the badge', async () => {
    const onToggle = vi.fn()
    const user = userEvent.setup()
    render(<ListingCard listing={first} saved={false} eager onToggle={onToggle} />)

    const button = screen.getByRole('button', { name: 'Save 14 Seaview Terrace to favourites' })
    expect(button.className).toContain('z-[2]')

    await user.click(button)
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('makes the address the card-wide hit area without a dead hash', () => {
    render(<ListingCard listing={first} saved={false} eager onToggle={() => {}} />)

    const link = screen.getByRole('link', { name: '14 Seaview Terrace' })
    expect(link).toHaveAttribute('href', '#listing-14-seaview-terrace')
    expect(link.className).toContain('baylist-card-link')
    expect(link.className).toContain('after:absolute')
    expect(link.className).toContain('after:inset-0')
    expect(link.className).toContain('after:z-[1]')
    expect(link.className).toContain('after:rounded-[20px]')
    expect(document.querySelectorAll('a[href="#"]')).toHaveLength(0)
  })

  it('renders the specs row under the area line', () => {
    render(<ListingCard listing={second} saved={false} eager onToggle={() => {}} />)

    const cells = [...screen.getByRole('article').querySelectorAll('li')]
    expect(cells.map((cell) => cell.textContent)).toEqual(['3 beds', '2 baths', '1,720 sq ft'])
  })
})
