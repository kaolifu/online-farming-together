import Header from "@/app/ui/Header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{children}</div>
    </div>
  )
}
