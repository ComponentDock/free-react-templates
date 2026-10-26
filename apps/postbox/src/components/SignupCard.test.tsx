import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CARDS } from '../data'
import { SignupCard } from './SignupCard'

const INVALID = 'That doesn’t look like an email address. Check for a missing @ or domain.'

function primary() {
  return render(<SignupCard variant="primary" {...CARDS.primary} />)
}

function compact() {
  return render(<SignupCard variant="compact" {...CARDS.compact} />)
}

describe('SignupCard — primary', () => {
  it('renders the reference copy under the page’s only h1', () => {
    primary()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'One useful CSS trick, every Friday.',
    )
    expect(screen.getByText('The Friday Frontend · 21,400 readers')).toBeInTheDocument()
    expect(screen.getByText(/Short, practical notes on layout/)).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toHaveAttribute('type', 'submit')
  })

  it('is a navy slab with its own 0.8 / 1.2 split and the glow-lit art panel', () => {
    const { container } = primary()
    const section = container.querySelector('section') as HTMLElement
    const surface = section.getAttribute('class') ?? ''

    expect(section).toHaveAttribute('data-variant', 'primary')
    expect(surface).toContain('bg-navy')
    expect(surface).toContain('rounded-[28px]')
    expect(surface).toContain('overflow-hidden')
    expect(surface).toContain('grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]')
    expect(surface).toContain('items-center')
    expect(surface).toContain('shadow-[0_30px_60px_-36px_rgba(30,58,138,0.7)]')
    expect(surface).not.toContain('border-line')

    const art = section.firstElementChild as HTMLElement
    const artClass = art.getAttribute('class') ?? ''
    expect(artClass).toContain('self-stretch')
    expect(artClass).toContain('min-h-[220px]')
    expect(artClass).toContain('radial-gradient')

    expect(container.querySelectorAll('img')).toHaveLength(0)
  })

  it('keeps the field and the button in one wrapping row and the hint under it', () => {
    primary()
    const input = screen.getByLabelText('Email address')
    const button = screen.getByRole('button', { name: 'Subscribe' })
    const row = input.parentElement as HTMLElement
    const rowClass = row.getAttribute('class') ?? ''
    const inputClass = input.getAttribute('class') ?? ''
    const buttonClass = button.getAttribute('class') ?? ''

    expect(row).toBe(button.parentElement)
    expect(rowClass).toContain('flex')
    expect(rowClass).toContain('flex-wrap')
    expect(rowClass).toContain('gap-2')

    expect(inputClass).toContain('flex-[1_1_220px]')
    expect(inputClass).toContain('border-transparent')
    expect(inputClass).toContain('rounded-[14px]')
    expect(inputClass).toContain('signup-input')

    expect(buttonClass).toContain('bg-gold')
    expect(buttonClass).toContain('text-ink')
    expect(buttonClass).toContain('font-extrabold')
    expect(buttonClass).toContain('signup-submit')

    expect((row.nextElementSibling as HTMLElement).id).toBe('postbox-primary-hint')
    expect(row.nextElementSibling).toHaveTextContent(
      'Unsubscribe with one click. We never share your address.',
    )
  })

  it('keeps the title on its own 1.1 leading, not the card’s 1.5', () => {
    primary()
    const heading = screen.getByRole('heading', { level: 1 })
    const className = heading.getAttribute('class') ?? ''

    expect(className).toContain('text-[clamp(24px,2.6vw,32px)]')
    expect(className).toContain('leading-[1.1]')
    expect(className).toContain('tracking-[-0.03em]')
    expect(className).toContain('font-extrabold')
  })

  it('submits an empty field with the missing-value message and keeps focus', async () => {
    const user = userEvent.setup()
    primary()
    const input = screen.getByLabelText('Email address')

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    const alert = screen.getByRole('alert')
    expect(alert).toHaveTextContent('Enter your email address to subscribe.')
    expect(alert.id).toBe('postbox-primary-error')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('aria-describedby', 'postbox-primary-error postbox-primary-hint')
    expect(input).toHaveFocus()
    expect(input.getAttribute('class')).toContain('border-invalid')
    expect(alert.querySelector('span')).toHaveTextContent('!')
  })

  it('rejects a malformed address with the type-mismatch message', async () => {
    const user = userEvent.setup()
    primary()

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent(INVALID)
  })

  it('rejects a dotless domain, which type=email alone would accept', async () => {
    const user = userEvent.setup()
    primary()

    await user.type(screen.getByLabelText('Email address'), 'nope@nope')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent(INVALID)
    expect(screen.queryByText('Check your inbox')).not.toBeInTheDocument()
  })

  it('clears the error the moment the value becomes valid and keeps it while it is not', async () => {
    const user = userEvent.setup()
    primary()
    const input = screen.getByLabelText('Email address')

    await user.type(input, 'ada@')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    await user.type(input, 'nope')
    expect(screen.getByRole('alert')).toHaveTextContent(INVALID)

    await user.type(input, '.com')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(input).not.toHaveAttribute('aria-invalid')
    expect(input).toHaveAttribute('aria-describedby', 'postbox-primary-hint')
  })

  it('swaps the form for the done block and moves focus into it', async () => {
    const user = userEvent.setup()
    const { container } = primary()

    await user.type(screen.getByLabelText('Email address'), '  ada@example.com  ')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.queryByRole('form')).not.toBeInTheDocument()
    expect(container.querySelector('form')).toBeNull()

    const done = container.querySelector('.signup-done') as HTMLElement
    const heading = screen.getByRole('heading', { level: 3 })

    expect(heading).toHaveTextContent('Check your inbox')
    expect(heading).toHaveAttribute('tabindex', '-1')
    expect(heading).toHaveFocus()
    expect(heading.id).toBe('postbox-primary-title')
    expect(done).toHaveTextContent('We sent a confirmation link to ada@example.com.')
    expect(screen.getByText('ada@example.com').tagName).toBe('STRONG')

    const tick = done.querySelector('span') as HTMLElement
    expect(tick).toHaveAttribute('aria-hidden', 'true')
    expect(tick.getAttribute('class')).toContain('h-[52px]')
    expect(tick.getAttribute('class')).toContain('bg-tick')
    expect(tick.querySelector('svg')).toHaveAttribute('viewBox', '0 0 24 24')
  })
})

describe('SignupCard — compact', () => {
  it('renders a white h2 card with the button stacked under the field', () => {
    const { container } = compact()
    const section = container.querySelector('section') as HTMLElement
    const surface = section.getAttribute('class') ?? ''
    const input = screen.getByLabelText('Work email')
    const button = screen.getByRole('button', { name: 'Notify me' })
    const buttonClass = button.getAttribute('class') ?? ''

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Get release notes by email',
    )
    expect(surface).toContain('bg-white')
    expect(surface).toContain('border-line')
    expect(surface).toContain('grid-cols-1')
    expect(surface).toContain('shadow-[0_20px_40px_-32px_rgba(30,58,138,0.5)]')
    expect(surface).not.toContain('bg-navy')
    expect(section.children).toHaveLength(1)

    expect(input.parentElement).toBe(button.parentElement)
    expect(input.getAttribute('class')).toContain('border-line-input')
    expect(input.getAttribute('class')).not.toContain('flex-wrap')
    expect(buttonClass).toContain('w-full')
    expect(buttonClass).toContain('mt-2.5')
    expect(buttonClass).toContain('bg-navy')

    expect(screen.queryByText(/Unsubscribe with one click/)).not.toBeInTheDocument()
  })

  it('describes its field by the error alone and paints the badge on a dark disc', async () => {
    const user = userEvent.setup()
    compact()
    const input = screen.getByLabelText('Work email')

    await user.click(screen.getByRole('button', { name: 'Notify me' }))

    const alert = screen.getByRole('alert')
    expect(alert.id).toBe('postbox-compact-error')
    expect(alert.getAttribute('class')).toContain('text-error')
    expect(alert.querySelector('span')?.getAttribute('class')).toContain('bg-error')
    expect(input).toHaveAttribute('aria-describedby', 'postbox-compact-error')
    expect(input).toHaveFocus()
  })

  it('goes from no description at rest to the error description and back', async () => {
    const user = userEvent.setup()
    compact()
    const input = screen.getByLabelText('Work email')

    expect(input).not.toHaveAttribute('aria-describedby')
    expect(input).not.toHaveAttribute('aria-invalid')

    await user.type(input, 'team@')
    await user.click(screen.getByRole('button', { name: 'Notify me' }))
    expect(input).toHaveAttribute('aria-describedby', 'postbox-compact-error')

    await user.type(input, 'example.com')
    expect(input).not.toHaveAttribute('aria-describedby')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('swaps in the list confirmation with the address inline', async () => {
    const user = userEvent.setup()
    compact()

    await user.type(screen.getByLabelText('Work email'), 'grace@company.com')
    await user.click(screen.getByRole('button', { name: 'Notify me' }))

    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveTextContent("You're on the list")
    expect(heading).toHaveFocus()

    const copy = screen.getByText('grace@company.com').closest('p')
    expect(copy).toHaveTextContent('Release notes will go to grace@company.com.')
  })
})
