'use client';

import { useState } from 'react';
import { Save } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BillingTabProps {
  onSave: () => void;
}

export default function BillingTab({ onSave }: BillingTabProps) {
  const [billing, setBilling] = useState({
    plan: 'professional',
    nameOnCard: 'Emily Johnson',
    cardNumber: '•••• •••• •••• 4242',
    expiryDate: '12/25',
    cvv: '',
    billingAddress: '123 Main St, San Francisco, CA 94105',
    country: 'United States'
  });

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBilling(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-xl font-semibold mb-6">Billing & Subscription</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Current Plan</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="basic"
                name="plan"
                value="basic"
                checked={billing.plan === 'basic'}
                onChange={handleBillingChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="basic" className="text-sm">
                Basic Plan - $9.99/month
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="professional"
                name="plan"
                value="professional"
                checked={billing.plan === 'professional'}
                onChange={handleBillingChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="professional" className="text-sm">
                Professional Plan - $29.99/month
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="enterprise"
                name="plan"
                value="enterprise"
                checked={billing.plan === 'enterprise'}
                onChange={handleBillingChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="enterprise" className="text-sm">
                Enterprise Plan - $99.99/month
              </label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Payment Method</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name on Card</label>
              <input
                type="text"
                name="nameOnCard"
                value={billing.nameOnCard}
                onChange={handleBillingChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={billing.cardNumber}
                onChange={handleBillingChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                readOnly
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Expiration Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={billing.expiryDate}
                  onChange={handleBillingChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  value={billing.cvv}
                  onChange={handleBillingChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  maxLength={4}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Billing Address</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Address</label>
              <input
                type="text"
                name="billingAddress"
                value={billing.billingAddress}
                onChange={handleBillingChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Country</label>
              <input
                type="text"
                name="country"
                value={billing.country}
                onChange={handleBillingChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <Button onClick={onSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
