import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Lock, Mail, SendHorizonal } from "lucide-react";
import Container from "@/components/app-ui/Container";

// Zod validation schema
const resetPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

const PasswordResetPage: React.FC = () => {
  const [isPending, setIsPending] = React.useState(false);

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    setIsPending(true);
    try {
      // Simulate password reset request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Password reset link sent", data);
      // Add actual password reset logic here
    } catch (error) {
      console.error("Password reset failed", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Container className="bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-gray-600 p-6 text-center">
          <Lock
            className="mx-auto mb-4 text-white"
            size={48}
            strokeWidth={1.5}
          />
          <h2 className="text-2xl font-bold text-white">Reset Your Password</h2>
          <p className="text-gray-100 mt-2">
            Enter your email to receive a password reset link
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 mb-2 flex items-center"
            >
              <Mail className="mr-2 text-gray-600" size={20} />
              Email Address
            </label>
            <input
              {...form.register("email")}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition duration-300 ease-in-out"
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className={`
              w-full flex items-center justify-center 
              py-3 px-4 
              bg-gray-600 text-white 
              rounded-lg 
              hover:bg-gray-700 
              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
              transition duration-300 ease-in-out
              ${isPending ? "opacity-50 cursor-not-allowed" : ""}
            `}
          >
            {isPending ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending Link...
              </>
            ) : (
              <>
                <SendHorizonal className="mr-2" size={20} />
                Send Reset Link
              </>
            )}
          </button>
        </form>
      </div>
    </Container>
  );
};

export default PasswordResetPage;
