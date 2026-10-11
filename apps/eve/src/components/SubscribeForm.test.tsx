import { describe, expect, it } from 'vitest'
import { createRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SubscribeForm } from './SubscribeForm'

describe('SubscribeForm', () => {
  it('renders the dialog copy, both pill fields and the action pill 1:1', () => {
    render(<SubscribeForm />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Subscribe')
    expect(heading).toHaveClass('text-[24px]', 'font-black', 'text-ink', 'uppercase', 'pb-[36px]')
    expect(heading.firstElementChild).toHaveClass('border-b-[3px]', 'border-action', 'pb-[6px]')

    expect(screen.getByText('Follow our launch updates')).toHaveClass('text-[18px]', 'text-sub')
    expect(screen.getByText('No spam, ever. You can unsubscribe at any time.')).toHaveClass(
      'max-w-[285px]',
      'pt-[20px]',
      'text-muted',
    )

    const name = screen.getByLabelText('Name')
    expect(name).toHaveAttribute('placeholder', 'Name')
    expect(name.parentElement).toHaveClass('h-[50px]', 'rounded-pill', 'border-2', 'mb-[10px]')
    expect(screen.getByLabelText('Email').parentElement).toHaveClass('mb-[20px]')

    expect(screen.getByRole('button', { name: 'Get Updates' })).toHaveClass(
      'h-[50px]',
      'w-full',
      'rounded-pill',
      'bg-action',
    )
  })

  it('hands the first field to the given ref', () => {
    const firstFieldRef = createRef<HTMLInputElement>()
    render(<SubscribeForm firstFieldRef={firstFieldRef} />)

    expect(firstFieldRef.current).toBe(screen.getByLabelText('Name'))
  })

  it('accepts a className override', () => {
    const { container } = render(<SubscribeForm className="px-[15px]" />)

    expect(container.firstElementChild).toHaveClass('px-[15px]')
  })

  it('warns on both fields when the form is submitted empty', () => {
    render(<SubscribeForm />)

    fireEvent.click(screen.getByRole('button', { name: 'Get Updates' }))

    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(2)
    expect(alerts[0]).toHaveTextContent('Name is required')
    expect(alerts[1]).toHaveTextContent('Email is required')
    expect(alerts[0]).toHaveClass(
      'rounded-bubble',
      'border-error',
      'text-error',
      'invisible',
      'group-hover:visible',
      'max-[992px]:visible',
    )

    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-describedby', 'eve-name-error')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('reports an empty email separately from a malformed one', () => {
    render(<SubscribeForm />)

    fireEvent.click(screen.getByRole('button', { name: 'Get Updates' }))
    expect(screen.getAllByRole('alert')[1]).toHaveTextContent('Email is required')

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'ada@example' } })
    fireEvent.click(screen.getByRole('button', { name: 'Get Updates' }))
    expect(screen.getAllByRole('alert')[1]).toHaveTextContent('Valid email is required: ex@abc.xyz')
  })

  it('clears a field warning when that field takes focus', () => {
    render(<SubscribeForm />)

    fireEvent.click(screen.getByRole('button', { name: 'Get Updates' }))
    expect(screen.getAllByRole('alert')).toHaveLength(2)

    fireEvent.focus(screen.getByLabelText('Email'))

    expect(screen.getAllByRole('alert')).toHaveLength(1)
    expect(screen.getByRole('alert')).toHaveTextContent('Name is required')
    expect(screen.getByLabelText('Email')).not.toHaveAttribute('aria-invalid')
  })

  it('reveals the focus ring while a field is focused and hides it again', () => {
    render(<SubscribeForm />)
    const input = screen.getByLabelText('Name')
    const ring = input.nextElementSibling

    expect(ring).toHaveClass('invisible', 'scale-x-110', 'scale-y-120', 'opacity-0')

    fireEvent.focus(input)
    expect(ring).toHaveClass('visible', 'scale-100', 'opacity-100')

    fireEvent.blur(input)
    expect(ring).toHaveClass('invisible', 'opacity-0')
  })

  it('accepts a valid submit without navigating', async () => {
    const user = userEvent.setup()
    render(<SubscribeForm />)

    await user.type(screen.getByLabelText('Name'), 'Ada')
    await user.type(screen.getByLabelText('Email'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Get Updates' }))

    expect(screen.queryAllByRole('alert')).toHaveLength(0)
    expect(screen.getByRole('status')).toHaveTextContent('Thanks! We’ll email you when we launch.')
    expect(screen.getByLabelText('Name')).toHaveValue('Ada')
  })
})
