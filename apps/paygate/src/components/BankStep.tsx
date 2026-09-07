import type { BankData } from '../App'

interface BankStepProps {
  data: BankData
  onChange: (data: BankData) => void
}

export function BankStep({ data, onChange }: BankStepProps) {
  return (
    <section aria-labelledby="step2-heading">
      <h2 id="step2-heading" className="mb-4 text-lg font-semibold" style={{ color: '#26282b' }}>
        Bank Information
      </h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="cardNumber"
            className="mb-1 block text-sm font-medium"
            style={{ color: '#26282b' }}
          >
            Card Number *
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            required
            placeholder="Enter card number"
            value={data.cardNumber}
            onChange={(e) => onChange({ ...data, cardNumber: e.target.value })}
            className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-[#1a73e8]"
            style={{ borderColor: '#eee', color: '#26282b' }}
          />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label
              htmlFor="expiryDate"
              className="mb-1 block text-sm font-medium"
              style={{ color: '#26282b' }}
            >
              Expiry Date *
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              required
              placeholder="MM/YY"
              value={data.expiryDate}
              onChange={(e) => onChange({ ...data, expiryDate: e.target.value })}
              className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-[#1a73e8]"
              style={{ borderColor: '#eee', color: '#26282b' }}
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="cvv"
              className="mb-1 block text-sm font-medium"
              style={{ color: '#26282b' }}
            >
              CVV *
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              required
              placeholder="CVV"
              value={data.cvv}
              onChange={(e) => onChange({ ...data, cvv: e.target.value })}
              className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-[#1a73e8]"
              style={{ borderColor: '#eee', color: '#26282b' }}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="cardholderName"
            className="mb-1 block text-sm font-medium"
            style={{ color: '#26282b' }}
          >
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardholderName"
            name="cardholderName"
            placeholder="Name on card"
            value={data.cardholderName}
            onChange={(e) => onChange({ ...data, cardholderName: e.target.value })}
            className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-[#1a73e8]"
            style={{ borderColor: '#eee', color: '#26282b' }}
          />
        </div>
      </div>
    </section>
  )
}
