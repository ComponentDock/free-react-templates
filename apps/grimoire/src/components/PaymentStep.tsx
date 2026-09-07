import { CreditCard, Shield, Calendar, User } from 'lucide-react'

export function PaymentStep() {
  return (
    <div className="space-y-4">
      <div className="form-group">
        <label className="block text-sm font-medium text-[#222] mb-1">Payment Type</label>
        <div className="flex items-center gap-4 px-1">
          <label className="flex items-center gap-2 text-sm text-[#222] cursor-pointer border border-[#e0e0e0] rounded-[5px] px-4 py-2 hover:border-[#6DAB3C] transition-colors">
            <input
              type="radio"
              name="payment_type"
              value="visa"
              defaultChecked
              className="accent-[#6DAB3C]"
            />
            <CreditCard className="w-5 h-5 text-[#1a1f71]" />
            Visa
          </label>
          <label className="flex items-center gap-2 text-sm text-[#222] cursor-pointer border border-[#e0e0e0] rounded-[5px] px-4 py-2 hover:border-[#6DAB3C] transition-colors">
            <input
              type="radio"
              name="payment_type"
              value="mastercard"
              className="accent-[#6DAB3C]"
            />
            <CreditCard className="w-5 h-5 text-[#eb001b]" />
            Mastercard
          </label>
          <label className="flex items-center gap-2 text-sm text-[#222] cursor-pointer border border-[#e0e0e0] rounded-[5px] px-4 py-2 hover:border-[#6DAB3C] transition-colors">
            <input type="radio" name="payment_type" value="paypal" className="accent-[#6DAB3C]" />
            <Shield className="w-5 h-5 text-[#003087]" />
            Paypal
          </label>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="form-group">
          <label htmlFor="credit_card" className="block text-sm font-medium text-[#222] mb-1">
            Credit Card
          </label>
          <div className="flex items-center border border-[#e0e0e0] rounded-[5px] px-3 py-2 focus-within:border-[#6DAB3C] transition-colors">
            <CreditCard className="w-4 h-4 text-[#999] mr-2 shrink-0" />
            <input
              type="text"
              id="credit_card"
              name="credit_card"
              placeholder="1234 5678 9012 3456"
              className="w-full outline-none text-sm text-[#222] bg-transparent placeholder:text-[#999]"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="cvc" className="block text-sm font-medium text-[#222] mb-1">
            CVC
          </label>
          <div className="flex items-center border border-[#e0e0e0] rounded-[5px] px-3 py-2 focus-within:border-[#6DAB3C] transition-colors">
            <Shield className="w-4 h-4 text-[#999] mr-2 shrink-0" />
            <input
              type="text"
              id="cvc"
              name="cvc"
              placeholder="123"
              maxLength={4}
              className="w-full outline-none text-sm text-[#222] bg-transparent placeholder:text-[#999]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="form-group">
          <label htmlFor="expiry_month" className="block text-sm font-medium text-[#222] mb-1">
            Expiry Date
          </label>
          <div className="flex items-center border border-[#e0e0e0] rounded-[5px] px-3 py-2 focus-within:border-[#6DAB3C] transition-colors">
            <Calendar className="w-4 h-4 text-[#999] mr-2 shrink-0" />
            <select
              id="expiry_month"
              name="expiry_month"
              className="w-full outline-none text-sm text-[#222] bg-transparent"
            >
              <option value="">Month</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                  {String(i + 1).padStart(2, '0')}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="expiry_year" className="block text-sm font-medium text-[#222] mb-1">
            &nbsp;
          </label>
          <div className="flex items-center border border-[#e0e0e0] rounded-[5px] px-3 py-2 focus-within:border-[#6DAB3C] transition-colors">
            <select
              id="expiry_year"
              name="expiry_year"
              className="w-full outline-none text-sm text-[#222] bg-transparent"
            >
              <option value="">Year</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={2024 + i}>
                  {2024 + i}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="card_name" className="block text-sm font-medium text-[#222] mb-1">
          Name of card
        </label>
        <div className="flex items-center border border-[#e0e0e0] rounded-[5px] px-3 py-2 focus-within:border-[#6DAB3C] transition-colors">
          <User className="w-4 h-4 text-[#999] mr-2 shrink-0" />
          <input
            type="text"
            id="card_name"
            name="card_name"
            placeholder="Cardholder Name"
            className="w-full outline-none text-sm text-[#222] bg-transparent placeholder:text-[#999]"
          />
        </div>
      </div>
    </div>
  )
}
