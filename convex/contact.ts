import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submitContactForm = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const { name, email, subject, message } = args;
    
    // Insert the contact submission into the database
    const contactId = await ctx.db.insert("contactSubmissions", {
      name,
      email,
      subject,
      message,
      createdAt: Date.now(), // Using timestamp as number
      status: "new", // You can use this to track the status of the submission
    });

    return contactId;
  },
}); 