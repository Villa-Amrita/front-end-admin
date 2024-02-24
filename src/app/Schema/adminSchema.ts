import { z } from "zod";

export const adminSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(50, { message: "First name is too long" }),
  familyName: z
    .string()
    .min(1, { message: "Family name is required" })
    .max(100, { message: "Family name is too long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32, { message: "Password must be at most 32 characters long" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/\d/, { message: "Password must contain at least one number" }),
  confirmPassword: z.string().min(1, {
    message: "Confirm password is required",
  }),
});

export type Admin = z.infer<typeof adminSchema>;

export const validateUser = (admin: Admin) => {
  const validation = adminSchema.safeParse(admin);
  if (validation.success === false) {
    console.error("Validation error: ", validation.error);
    const errors = validation.error.issues;
    // Identify the first error
    const firstError = errors[0];
    if (firstError) {
      alert(firstError.message);
    } else {
      alert("An unknown error occurred");
    }
    return false;
  }

  if (admin.password !== admin.confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  return true;
};
