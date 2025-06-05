import React from "react";

export default function CancellationRefundPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Cancellation & Refund Policy</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              At PULSEIQ, we understand that circumstances may arise where you need to cancel your order. 
              Our cancellation policy is designed to be fair and transparent.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders can be cancelled within 24 hours of placement, provided the item has not been shipped.</li>
              <li>For digital products, cancellation is possible within 2 hours of purchase if the content has not been accessed.</li>
              <li>To cancel an order, please contact our customer support team with your order number.</li>
              <li>Custom or personalized items cannot be cancelled once production has begun.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              We strive to ensure complete satisfaction with your purchase. Our refund policy is as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Physical products can be returned within 14 days of delivery if they are unused and in original packaging.</li>
              <li>Digital products are eligible for refund within 7 days if they are defective or not as described.</li>
              <li>Refunds will be processed within 5-7 business days after receiving the returned item.</li>
              <li>The refund amount will be credited to the original payment method used for the purchase.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
          <div className="space-y-4 text-muted-foreground">
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contact our customer support team to initiate the refund process.</li>
              <li>Provide your order number and reason for refund.</li>
              <li>For physical products, you will receive return shipping instructions.</li>
              <li>Once we receive and verify the returned item, we will process your refund.</li>
              <li>You will receive an email confirmation when the refund is processed.</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Exceptions</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              The following items are not eligible for refund:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Items that have been used or damaged after delivery</li>
              <li>Digital products that have been accessed or downloaded</li>
              <li>Custom or personalized items</li>
              <li>Items purchased during clearance sales</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              If you have any questions about our cancellation and refund policy, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: support@pulseiq.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Hours: Monday to Friday, 9 AM to 6 PM EST</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 