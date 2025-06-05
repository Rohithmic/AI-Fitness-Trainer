"use client";

import { Card } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using PULSEIQ, you agree to be bound by these &quot;Terms&quot; and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily access PULSEIQ for personal, non-commercial use. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on PULSEIQ</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground mb-4">
              To access certain features of PULSEIQ, you must register for an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account and password</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Fitness and Health Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              PULSEIQ provides fitness and nutrition information for educational purposes only. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>You should consult with a healthcare professional before starting any fitness program</li>
              <li>The information provided is not a substitute for professional medical advice</li>
              <li>You are responsible for your own health and safety while using our services</li>
              <li>We are not liable for any injuries or health issues that may result from using our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              The content, organization, graphics, design, and other matters related to PULSEIQ are protected by applicable copyrights, trademarks, and other proprietary rights. You may not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Copy, reproduce, republish, upload, post, transmit, or distribute our content</li>
              <li>Modify, adapt, or create derivative works from our content</li>
              <li>Use our content for any commercial purpose without our permission</li>
              <li>Remove any copyright or other proprietary notices from our content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. User Content</h2>
            <p className="text-muted-foreground mb-4">
              By submitting content to PULSEIQ, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content. You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>You own or have the necessary rights to the content you submit</li>
              <li>Your content does not violate any third-party rights</li>
              <li>Your content is not defamatory, obscene, or otherwise illegal</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              PULSEIQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service. This includes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Loss of profits, data, or use</li>
              <li>Business interruption</li>
              <li>Personal injury or property damage</li>
              <li>Any other damages arising from your use of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to modify or replace these &quot;Terms&quot; at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These terms shall be governed by and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>By email: ratnam@pulseiq.xyz</li>
              <li>By visiting the contact page on our website</li>
            </ul>
          </section>
        </Card>
      </div>
    </div>
  );
} 