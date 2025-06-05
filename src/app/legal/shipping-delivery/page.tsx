import React from "react";

export default function ShippingDeliveryPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Shipping & Delivery Policy</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              At PULSEIQ, we strive to deliver your orders as quickly and efficiently as possible. 
              Here&apos;s everything you need to know about our shipping process.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are typically processed within 1-2 business days.</li>
              <li>We ship to all major locations within India.</li>
              <li>International shipping is available to select countries.</li>
              <li>Shipping costs are calculated based on the weight and destination of your order.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Delivery Timeframes</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Estimated delivery times for different shipping methods:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Standard Shipping: 3-5 business days</li>
              <li>Express Shipping: 1-2 business days</li>
              <li>International Shipping: 7-14 business days</li>
              <li>Digital Products: Instant delivery via email</li>
            </ul>
            <p className="mt-4">
              Note: Delivery times may vary based on location, weather conditions, and other factors beyond our control.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Order Tracking</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Track your order status:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You will receive a tracking number via email once your order is shipped.</li>
              <li>Track your order status through our website using your order number.</li>
              <li>Receive SMS updates about your order status (if opted in).</li>
              <li>Contact our customer support for any tracking-related queries.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Shipping Charges</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Our shipping charges are calculated based on:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Order weight and dimensions</li>
              <li>Delivery location</li>
              <li>Selected shipping method</li>
              <li>Free shipping on orders above ₹2000</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Digital Products</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              For digital products:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Instant delivery via email after successful payment</li>
              <li>Access to digital content through your account dashboard</li>
              <li>Download links valid for 30 days</li>
              <li>24/7 access to purchased digital content</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              For any shipping or delivery related queries, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: shipping@pulseiq.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Hours: Monday to Friday, 9 AM to 6 PM EST</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 