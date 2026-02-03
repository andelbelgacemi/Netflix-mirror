import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <SignIn
        routing="path"
        path="/login"
        appearance={{
          elements: {
            card: "bg-zinc-900",
            headerTitle: "text-white",
            formButtonPrimary: "bg-red-600 hover:bg-red-700",
          },
        }}
      />
    </main>
  );
}
