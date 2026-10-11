import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Mail } from 'lucide-react'
import { IconField } from './IconField'

describe('IconField', () => {
  it('renders the flat icon group with the icon leading', () => {
    render(<IconField icon={<Mail data-testid="leading" />} placeholder="Email" />)

    const input = screen.getByPlaceholderText('Email')

    expect(input).toHaveClass('border-l-0')
    expect(screen.getByTestId('leading').parentElement?.className).toContain('rounded-l')
  })

  it('renders the flat icon group with the icon trailing', () => {
    render(
      <IconField icon={<Mail data-testid="trailing" />} iconPosition="end" placeholder="Email" />,
    )

    const input = screen.getByPlaceholderText('Email')

    expect(input).toHaveClass('border-r-0')
    expect(input).not.toHaveClass('border-l-0')
    expect(screen.getByTestId('trailing').parentElement?.className).toContain('rounded-r')
  })

  it('renders the 30px pill shape on either side', () => {
    render(
      <>
        <IconField icon={<Mail />} shape="pill" placeholder="Pill start" />
        <IconField
          icon={<Mail data-testid="pill-end" />}
          iconPosition="end"
          shape="pill"
          placeholder="Pill end"
        />
      </>,
    )

    expect(screen.getByPlaceholderText('Pill start')).toHaveClass('rounded-[30px]')
    expect(screen.getByTestId('pill-end').parentElement?.className).toContain('rounded-r-[30px]')
  })

  it('renders the underline shape with the shared bottom rule', () => {
    render(
      <>
        <IconField
          icon={<Mail data-testid="underline-start" />}
          shape="underline"
          placeholder="U1"
        />
        <IconField
          icon={<Mail data-testid="underline-end" />}
          shape="underline"
          iconPosition="end"
          placeholder="U2"
        />
      </>,
    )

    expect(screen.getByPlaceholderText('U1')).toHaveClass('border-b')
    expect(screen.getByTestId('underline-start').parentElement?.className).toContain('border-b')
    expect(screen.getByTestId('underline-end').parentElement?.className).toContain('border-b')
    expect(screen.getByPlaceholderText('U2').className).not.toContain('rounded-[30px]')
  })

  it('forwards input props and extra classes', () => {
    render(
      <IconField
        icon={<Mail />}
        type="email"
        id="field-id"
        className="w-1/2"
        inputClassName="uppercase"
        placeholder="Forwarded"
      />,
    )

    const input = screen.getByPlaceholderText('Forwarded')

    expect(input).toHaveAttribute('type', 'email')
    expect(input).toHaveAttribute('id', 'field-id')
    expect(input.className).toContain('uppercase')
    expect(input.parentElement?.className).toContain('w-1/2')
  })
})
